Asset Preprocessing With Grunt
==============================

Introduction
------------

Preprocessing is the act of transforming a file(s) into another file. These transformations come in several falvours.

### Concatenation

Turn multiple files into a single file. It is often helpful that you seperate your code into multiple files for organization. However it is more efficient to send a single larger file to the brower than to send multiple smaller files; less requests === win.

### Minification

This is the act of optimizing code for file size and sometimes performance. At a basic level, minification removes whitespace, comments and optimizes variable names without changing how your code executes thus decreasing the file size of your code; smaller file size === win. Some advanced tools, like [Google Closure Compiler](https://developers.google.com/closure/compiler/), will actually preform code optimizations making your code execure fast aswell as decreasing file size.

### Compilation

