var TodoList = (function($,_){
    
    var TodoList = function(target_el){
        this.$el = $(target_el);
        return this; // Chainable constructor
    };

    TodoList.prototype =  {
            
    };

    return TodoList;
})($,_);