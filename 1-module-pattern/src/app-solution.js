// Safe logging
_.mixin({
    l: function(log) {
        if(window.console) {
            console.log(log);
        }
    }
});

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
        this.$list_el = $(list_el);
        _.l(this.$list_el);
        this.complete = false;
        el = _.template(template, {text: this.text}); // Render Template into HTML
        this.$el = $(el); // Create jQuery object and cache it in private variables
        
        // Bind Events
        this.$el.on("click", "span, .icon-check", _.bind(this.clickComplete, this));
        this.$el.on("click", ".icon-remove", _.bind(this.clickRemove, this));
        
        // Add item to list
        this.$list_el.append(this.$el);
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
            this.$el.remove();
        }
    };

    return TodoItem;
})($, _);

$(function(){
    window.todo_list = new TodoList('#his_todo_list').start();
});