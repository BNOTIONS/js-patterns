var View = Backbone.View.extend({

    updateQoute: function(text) {
        this.$el.find('p').html(text);
    }

});


var QView = new View({el:"#qoute-container"});