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
    var TodoList = function() {
        return this; // Make constructor chainable
    };

    // Public API
    TodoList.prototype = {

    };
    
    return TodoList;
})($, _);

var TodoItem = (function($, _){
    // Private Members
    var el = false;
    var $el = false;
    var template = $("#template_todo_item").html();

    // Constructor
    var TodoItem = function(item_text, target_list) {
        return this; // Make constructor chainable
    };

    // Public API
    TodoItem.prototype = {

    };

    return TodoItem;
})($, _);


$(function(){
    // Start App
    window.todo_list = new TodoList('#new_todo').start();
});