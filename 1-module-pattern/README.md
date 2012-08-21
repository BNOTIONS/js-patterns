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

Now all of the code that you have written is directly tied to the DOM. Our jobs demand that we write more and more complex JavaScript everyday, heck we are building "Web Applications". Users demand a more interactive experiance with their Web Applications, so we must write more JavaScript and apply more classical approaches to writing clean, maintainable and testable code.

Introduction
------------

The Module Pattern is a clean way of adding classic Object Oriented behaviour to JavaScripts Functional style. It can help you build a better mental model of the application you want to write, decouple your code from the DOM and event allow for inheritance.

Anatomy Of A Module
-------------------

1. Self Executing Function

```javascript

var Module = function(){
	
}();

```

A function definition can be immediatly executed by have a pair of parenthese after its closing brackets. In this case the result of this function executing is stored in the variable "Module". It is typical that you will see the function itself wrapped in parenthese, this a convention used by the community to make distinguish self executing functions from normal ones.

```javascript

var Module = (function(){
	
})();

```

2. Returning a function

In JavaScript, functions are first class. With this in mind, a function can return another function. This is the basis of the Module pattern. 

```javascript

var Module = (function(){
	
	var Module = function() {

	};

	return Module;
})();

```

Because JavaScript is a Functional language, variable scoping happens on a function by function basis. This means that we can use the same variable name inside the self executing function as we use as the variable we use to store the result of the self executing function. Beware: always use the "var" operator. If you do not, a puppy will die.

3. Scope Global Dependencies

We can use JavaScript's Functional nature to avoid using directly accessing the Global scope. Global scope is unpredictable, all of your code, and all of your libraries code, have access to Global scope.

```javascript

var Module = (function($, _){
	
})($, _);

```




Slides: https://docs.google.com/presentation/d/1aLUrfL_0ACOtdgVI_3oy0qh1LrtUOInb2oeSjlhei94/edit