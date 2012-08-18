// Safe logging
// *** Always Wrap Your Logs!
_.mixin({
    l: function(log) {
        if(window.console) {
            console.log(log);
        }
    }
});

var TodoList = (function($, _){

    // Constructor
    var TodoList = function(target_el, toast) {
        this.el = target_el;
        this.$el = $(this.el);
        this.toast = toast;
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

            // Call the toast
            this.toast.toast(itemText);
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

        _.l("New Item Create:" + this.text);
        return this; // Make constructor chainable
    };

    // Public API
    TodoItem.prototype = {
        clickComplete: function(e) {
            _.l('Item Clicked!' + this.text);
            this.complete = (this.complete) ? false : true;
            this.$el.find('span').toggleClass('done');
        },

        clickRemove: function(e) {
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
        toast: function(text) {
            this.$el.find('.toast_text').html(this.prepend + text);
            this.$el.slideDown('fast').delay(2000).slideUp('fast');
        }
    };

    return Toast;
})($,_);

// ***
// Start The Application
// ***
$(function(){
    window.toast_new = new Toast("#toast_new", "New Item Added: ");

    // Inject Toast dependency into Todolist
    // Dependency Inversion Principle (DIP)
    // http://en.wikipedia.org/wiki/Dependency_inversion_principle
    window.todo_list = new TodoList('#todo_list', toast_new).start();
    window.progress = new Progress("#progress").bind();
});
