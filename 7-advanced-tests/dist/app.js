var TodoList = (function($,_){
    
    var TodoList = function(target_el){
        this.$el = $(target_el);
        return this; // Chainable constructor
    };

    TodoList.prototype =  {
            
    };

    return TodoList;
})($,_);
var TodoItem = (function($,_){
    
    var TodoItem = function(target_el){
        this.$el = $(target_el);
        return this; // Chainable constructor
    };

    TodoItem.prototype =  {
            
    };

    return TodoItem;
})($,_);