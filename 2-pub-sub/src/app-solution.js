// Safe logging
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
        items: [],
        start: function() {
            var self = this;
            this.$el.find(".add_todo").on("click", function(){
                _.l('click');
                self.clickAdd();
            });
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
            var item = new TodoItem(itemText, this.$el.find('.todo_items'));
            this.items.push(item);
        }
    };
    
    return TodoList;
})($, _);

var TodoItem = (function($, _){
    // Private Members
    var template = $("#template_todo_item").html();

    // Constructor
    var TodoItem = function(text, list_el) {
        _.l('New Item');
        this.text = text;
        this.$list_el = list_el;
        _.l(this.$list_el);
        this.complete = false;
        el = _.template(template, {text: this.text}); // Render Template into HTML
        this.$el = $(el); // Create jQuery object and cache it in private variables
        
        // Bind Events
        this.$el.on("click", "span, .icon-check", _.bind(this.clickComplete, this));
        this.$el.on("click", ".icon-remove", _.bind(this.clickRemove, this));
        
        // Add item to list
        this.$list_el.append(this.$el);
        $.publish("toast:new", [this.text]);
        $.publish("progress:total", [1]);
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
            if(this.complete) {
                $.publish("progress:completed", [1]);
            } else {
                $.publish("progress:completed", [-1]);
            }
        },

        clickRemove: function(e) {
            $.publish("progress:total", [-1]);
            if(this.complete) {
                $.publish("progress:completed", [-1]);
            }
            $.publish("toast:remove", [this.text]);
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
            $.subscribe(event_name, _.bind(this.toast_event, this));
        },

        toast_event: function(e, text) {
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
            $.subscribe("progress:completed", _.bind(function(e, amount){
                _.l('progress complete');
                this.modify_completed(amount);
            }, this));

            $.subscribe("progress:total", _.bind(function(e, amount){
                _.l('progress total');
                this.modify_total(amount);
            }, this));
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
            this.$el.find('.completed').html(this.completed);
            this.$el.find('.total').html(this.total);
        }
    };

    return Progress;
})($,_);

$(function(){
    window.todo_list = new TodoList('#his_todo_list').start();
    window.toast_new = new Toast("#toast_new", "New Item Added: ").bind("toast:new");
    window.toast_remove = new Toast("#toast_remove", "Item Removed: ").bind("toast:remove");
    window.progress = new Progress("#progress").bind();
});