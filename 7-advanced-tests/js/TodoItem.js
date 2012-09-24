var TodoItem = (function($,_){
    
    var TodoItem = function(target_el){
        this.$el = $(target_el);
        return this; // Chainable constructor
    };

    TodoItem.prototype =  {
            
    };

    return TodoItem;
})($,_);