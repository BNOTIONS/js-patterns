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

Transform one (higher order) language into another. In the case of CSS, it is often more  productive to write LESS or SASS than pure CSS. Compilation will transform a LESS or SASS file into a CSS file. In the case of JavaScript, CoffeeScript is a popular example.

All of these different functions are preformed by some sort of build tool or script. In our case we are going to use a Node.js based system called Grunt. Other popular examples of build tools are Asset Pipeline (for Rails)/Sprockets in Ruby and Assetic in PHP.

Grunt.js
--------

Grunt is a simple to use build tool for front end assets. It has a strong plugin community and its configuration is done in plain JSON.

## Installation

### 0. Install Node.js

Check out [nodejs.org](http://nodejs.org/). Installers for all platforms are pretty friendly now.

### 1. Globally Install Grunt

NPM (Node Package Manager) is the official package manager for Node. It is an easy to use command line tool for install your favorite Node libraries and packages. From the command line packages are installed like so 

```bash
npm install pacakge-name
```
Note: You may need to use sudo on Mac/Linux.



### 2. Generate Gruntfile

