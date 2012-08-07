// Safe Logging
_.mixin({
    l: function(log) {
        if(window.console) {
            console.log(log);
        }
    }
});

// **
// Current Features
// + Add Todo Item
// + Toggle Item Completion
// + Remove Item

$(function(){

    // Add Item
    $('#new_todo button').click(function(){
        var item_text = $('#new_todo input').val();
        if(item_text) {
            _.l('Adding Item');
            var item_template = $("#template_todo_item").html();
            var item = _.template(item_template, {text: item_text});
            $('#items').append(item);
            $('#new_todo input').val('');
        }
    });

    // Remove Item
    $('body').on('click', '.icon-remove', function(){
        _.l('Removing Item');
        $(this).parent().remove();
    });

    // Toggle Completion
    $('body').on('click', '.icon-check', function(){
        _.l('Finishing Item');
        $(this).parent().find('span').toggleClass('done');
    });

});