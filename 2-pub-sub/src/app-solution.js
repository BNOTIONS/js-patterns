// Safe logging
// *** Always Wrap Your Logs!
_.mixin({
    l: function(log) {
        if(window.console) {
            console.log(log);
        }
    }
});

/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */

(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

var TodoList = (function($, _){

    // Constructor
    var TodoList = function(target_el) {
        this.el = target_el;
        this.$el = $(this.el);
        return this;
    };

    // Public API
    TodoList.prototype = {
        items: [], // Initialize empty array for safety
        
        start: function() {
            var self = this;
            // Use _.bind to ensure functions context
            // Without it, context will switch the jQuery event function
            // and "this" will not reference the module anymore
            this.$el.find(".add_todo").on("click", _.bind(self.clickAdd, this));
            return this;
        },

        clickAdd: function() {
            var todo_text = this.$el.find('.new_todo_text').val();
            if(todo_text) {
                this.$el.find('input').val('');
                this.addItem(todo_text);
            }
        },

        addItem: function(itemText) {
            // Make new TodoItem object, it knows how to render itself
            var item = new TodoItem(itemText, this.$el.find('.todo_items'));
            this.items.push(item);
        }
    };
    
    return TodoList;
})($, _);

var TodoItem = (function($, _){
    // Private Members

    // The template is a script tag in the HTML file
    // We will use underscore to render each item's
    // HTML using Underscore later
    var template = $("#template_todo_item").html();

    // Constructor
    var TodoItem = function(text, list_el) {
        this.text = text;
        this.$list_el = list_el;
        this.complete = false;
        el = _.template(template, {text: this.text}); // Render Template into HTML
        this.$el = $(el); // Create jQuery object and cache it in private variables
        
        // Bind Events
        this.$el.on("click", "span, .icon-check", _.bind(this.clickComplete, this));
        this.$el.on("click", ".icon-remove", _.bind(this.clickRemove, this));
        
        // Add item to list
        this.$list_el.append(this.$el);

        // Publish Toast and Progress Events
        Events.trigger("toast:new", this.text);
        Events.trigger("progress:total", 1);

        _.l("New Item Create:" + this.text);
        return this; // Make constructor chainable
    };

    // Public API
    TodoItem.prototype = {
        clickComplete: function(e) {
            _.l('Item Clicked!' + this.text);
            this.complete = (this.complete) ? false : true;
            this.$el.find('span').toggleClass('done');
            this.reportComplete();
        },

        reportComplete: function() {
            // Fire the appropriate Event
            if(this.complete) {
                Events.trigger("progress:completed", 1);
            } else {
                Events.trigger("progress:completed", -1);
            }
        },

        clickRemove: function(e) {
            Events.trigger("progress:total", -1);
            if(this.complete) {
                Events.trigger("progress:completed", -1);
            }
            Events.trigger("toast:remove", this.text);
            
            // Remove from the DOM
            this.$el.remove();
        }
    };

    return TodoItem;
})($, _);

var Toast = (function($,_){
    var prepend = "New Item Added: ";
    var Toast = function(target, prepend_text) {
        this.prepend = prepend_text;
        this.$el = $(target);
        return this; // Makes constructor chainable
    };

    Toast.prototype = {
        bind: function(event_name) {
            // Event/Function Binding Variation #1
            // Bind event specific member function to event, keeps
            // real member function unaware of the event system
            // *** ProTip:
            // Use _.bind to ensure that function keeps context when
            // called by the event
            Events.on(event_name, this.toast_event, this);
            // Event Name --^            |            |
            // Callback Function ---------            |
            // Context for callback function (option)--
        },

        toast_event: function(text) {
            this.toast(text);
        },

        toast: function(text) {
            this.$el.find('.toast_text').html(this.prepend + text);
            this.$el.slideDown('fast').delay(2000).slideUp('fast');
        }
    };

    return Toast;
})($,_);

var Progress = (function($,_){

    var Progress = function(target_el) {
        this.$el = $(target_el);
        this.completed = 0;
        this.total = 0;
        return this;
    };

    Progress.prototype = {
        bind: function() {
            // Event/Function Binding Variation #2
            // Use an anonymous function to call the member function
            // *** ProTip:
            // _.bind can be used to ensure the context of anonymous
            // functions aswell.
            Events.on("progress:completed", function(amount){
                this.modify_completed(amount);
            }, this);

            Events.on("progress:total", function(amount){
                this.modify_total(amount);
            }, this);
        },

        modify_completed: function(amount) {
            this.completed += amount;
            this.render();
        },

        modify_total: function(amount) {
            this.total += amount;
            this.render();
        },

        render: function() {
            // Update the UI with the content of the module
            // using the cached selector from the constructor
            this.$el.find('.completed').html(this.completed);
            this.$el.find('.total').html(this.total);
        }
    };

    return Progress;
})($,_);

// ***
// Start The Application
// ***
$(function(){
    window.todo_list = new TodoList('#his_todo_list').start();
    window.progress = new Progress("#progress").bind();

    // Two Seperate Types Of Toasts, so two objects bound to their own event names
    window.toast_new = new Toast("#toast_new", "New Item Added: ").bind("toast:new");
    window.toast_remove = new Toast("#toast_remove", "Item Removed: ").bind("toast:remove");
});
