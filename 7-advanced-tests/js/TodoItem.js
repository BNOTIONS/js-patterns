var TodoItem = (function($,_){
    
    var TodoItem = function(target_list, text){
        this.text = text;
        this.completed = false;
        return this; // Chainable constructor
    };

    TodoItem.prototype =  {
        
    };

    return TodoItem;
})($,_);