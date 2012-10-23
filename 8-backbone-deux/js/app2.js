var User = Backbone.Model.extend({});

var UserView = Backbone.View.extend({

    template: _.template($("#template_user").html()),

    events: {
        "click img" : "clickMe"
    },

    initialize: function() {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.remove, this);
        return this;
    },

    clickMe: function() {
        console.log('Clicked Img');
    },

    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    remove: function() {
        this.$el.remove();
    }

});

var Collection = Backbone.Collection.extend({
    model: User,
    page: 1,
    url: "http://lcboapi.com/products",
    parse: function(resp) {
        console.log(resp);
        return resp.result;
    },
    loadMore: function() {
        this.page = this.page + 1;
        var params = {data: {page: this.page, order:"price_in_cents.asc", where:"is_kosher"}, add: true, dataType:'jsonp'};
    
        
        this.fetch(params);
    }
});

var col = new Collection();

var $container = $('#user-container');

col.on("add", function(model){
    console.log(model.get('name'));
    var view = new UserView({model:model}).render();
    $container.append(view.$el);
});

col.fetch({add:true, dataType: 'jsonp', data: {order:"price_in_cents.asc", where:"is_kosher"}});
