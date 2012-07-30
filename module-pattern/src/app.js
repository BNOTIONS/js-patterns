// Safe logging
_.mixin({
    l: function(log) {
        if(window.console) {
            console.log(log);
        }
    }
});

var TodoList = (function($, _){
    // Private Members
    var el = false;
    var $el = false;

    // Constructor
    var TodoList = function(target_el) {
        el = target_el;
        $el = $(el);
        return this;
    };

    // Public API
    TodoList.prototype = {
        start: function() {
            var self = this;
            $el.find("button").on("click", function(){
                _.l('click');
                self.clickAdd();
            });
            return this;
        },

        clickAdd: function() {
            var todo_text = $el.find('input').val();
            if(todo_text) {
                $el.find('input').val('');
                this.addItem(todo_text);
            }
        },

        addItem: function(itemText) {
            var item = new TodoItem(itemText, this, "#items");
        },

        updateComplete: function(mod) {
            this.completed += mod;
        }
    };
    
    return TodoList;
})($, _);

var TodoItem = (function($, _){
    // Private Members
    var el = false;
    var $el = false;
    var template = $("#template_todo_item").html();

    var todo_list = false;
    var list_el = false;
    var text = '';
    var complete = false;

    // Constructor
    var TodoItem = function(item_text, list, target_list) {
        text = item_text;
        todo_list = list;
        list_el = target_list;
        el = _.template(template, {text: item_text}); // Render Template into HTML
        $el = $(el); // Create jQuery object and cache it in private variables
        
        // Bind Events
        $el.on("click", "span, .icon-check", this.clickComplete);
        $el.on("click", ".icon-remove", this.clickRemove);
        
        // Add item to list
        $(list_el).append($el);
        return this; // Make constructor chainable
    };

    // Public API
    TodoItem.prototype = {

        clickComplete: function(e) {
            _.l('Item Clicked!' + text);
            complete = (complete) ? false : true;
            $el.find('span').toggleClass('done');
        },

        clickRemove: function(e) {
            $el.remove();
        }
    };

    return TodoItem;
})($, _);

$(function(){
    window.todo_list = new TodoList('#new_todo').start();
});