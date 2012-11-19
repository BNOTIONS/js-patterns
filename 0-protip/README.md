ProTips and Understanding This
==============================

Chrome Dev Tools
----------------
TL;DR Never leave home without it.

[Command Line API](http://getfirebug.com/wiki/index.php/Command_Line_API#.240)

Truthy/Falsey
-------------
TL;DR When in doubt ===

```javascript

0 == false

"0" == false

"0.00" == false

"" == false

" " == false

```

Functional Scope
----------------

```javascript

// Bad
var foo = "Horse";

var bar = function(){
    foo = "Logan";
    console.log(foo); // Logan
}
console.log(foo); // Logan


// Good
var foo = "Horse";

var bar = function(){
    var foo = "Logan";
    console.log(foo); // Logan
}
console.log(foo); // Horse

```

Resources
---------

Douglas Crockford
[Javascript The Good Parts - Video](http://vimeo.com/8691412) || [Book](http://shop.oreilly.com/product/9780596517748.do)
