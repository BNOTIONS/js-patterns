var TodoList = (function($,_){
    
    var TodoList = function(target_el){
        this.$el = $(target_el);
        console.log(this.$el);
        this.$el.on("click", ".add_item", _.bind(this.clickAddItem, this));
        return this; // Chainable constructor
    };

    TodoList.prototype = { 
        clickAddItem: function() {
            this.addItem("Foobar");
        },

        addItem: function(item_text) {
            console.log('Add Item Called');
        }
    };

    return TodoList;
})($,_);