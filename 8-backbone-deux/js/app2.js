var View = Backbone.View.extend({

    events: {
        'change input': 'doesItChange',
        'click button': 'deleteCock'
    },

    initialize: function(){
        this.model.on('change',this.logstuff,this);
    },

    doesItChange: function(e){
        //console.log(e);
        this.model.set('accomplished', e.target.checked);
    },

    logstuff: function(){
        console.log('yes');
    },

    deleteCock: function(e){
        console.log('vasectomy');
        this.$el.remove();
    }



});




var Task = Backbone.Model.extend({

    defaults: {
        accomplished: false,
        text: 'New Task'
    }

});

var myTask = new Task({});

var taskItem = new View({
    model: myTask,
    el: '#tkas-container .task'
});