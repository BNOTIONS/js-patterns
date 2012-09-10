var AddModal = (function($, _){

    var AddModal = function(target){
        this.$el = $(target);
        this.$el.find('#modal_add').click(_.bind(this.addButton, this));
    };

    AddModal.prototype = {

        showModal: function() {
            this.$el.modal('show');
        },

        addButton: function() {
            var cat_image = new CatImage(this.$el.find('input').val());
            this.$el.modal('hide');
        }

    };

    return AddModal;
})($, _);

var ToggleModal = (function($, _){

    var ToggleModal = function(target, add_modal){
        this.$el = $(target);
        this.add_modal = add_modal;

        this.$el.click(_.bind(this.showModal, this));
    };

    ToggleModal.prototype = {
        showModal: function() {
            console.log(this);
            this.add_modal.showModal();
        }
    };

    return ToggleModal;

})($, _);

var CatImage = (function($, _){

    var CatImage = function(url){
        this.template = $('#template_item').html();
        this.url = url;
        this.el = _.template(this.template, {'url':this.url});
        this.$el = $(this.el);
        $('.image_list').append(this.$el);
    };

    return CatImage;

})($,_);

var add_modal = new AddModal('#add_new_modal');
var toggle_modal = new ToggleModal('.show_modal', add_modal);
