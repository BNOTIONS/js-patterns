var User = Backbone.Model.extend({});

var View = Backbone.View.extend({

    tagName: "section",
    className: "well",

    template: $("#template_user").html(),

    initialize: function(options) {
        this.model.on("change", this.render, this);
    },

    render: function() {
        var html = _.template(this.template, this.model.toJSON());
        this.$el.html(html);
    }

});

var model = new User({
    name: "Alex",
    age: "19.5",
    horse_size: "Largey",
    tag: "hamster"
});

var view = new View({model: model});

view.render();

$('#user-container').html(view.$el);