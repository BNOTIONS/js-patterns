Exploring The Module Pattern
============================

Preface
-------

For many, JavaScript is just a quick way of dealing with forms or adding some fancy looking animations. Typically code looks like this: a jQuery Selector, and an anonymous function.

```javascript

$('.some_selector').click(function(e){
	// My Code Goes In Here
});

```

This gets the job done, but its not great. Over time more and more selectors get added, callbacks get added and in the end we will have the dreaded "jQuery Soup".

```javascript

$('.some_selector').click(function(e){
	$.get('some/url', function(data){
		$('.header').html(data.header);
	});
});

// ... Repeat to 1000 lines

```

Now all of the code that you have written is directly tied to the DOM. Our jobs demand that we write more and more complex JavaScript everyday, heck we are building "Web Applications". Users demand a more interactive experiance with their Web Applications, so we must write more JavaScript and apply more classical approaches to writing clean, maintainable code.



Slides: https://docs.google.com/presentation/d/1aLUrfL_0ACOtdgVI_3oy0qh1LrtUOInb2oeSjlhei94/edit