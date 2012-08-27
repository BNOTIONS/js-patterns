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

Grunt
-----

[Grunt](https://github.com/cowboy/grunt) is a simple to use build tool for front end assets. It has a strong plugin community and its configuration is done in plain JSON.

## Installation

### 0. Install Node.js

Check out [nodejs.org](http://nodejs.org/). Installers for all platforms are pretty friendly now.

### 1. Globally Install Grunt

NPM (Node Package Manager) is the official package manager for Node. It is an easy to use command line tool for install your favorite Node libraries and packages. You can install packages from the command line like so: 

```bash
npm install pacakge-name
```
Note: You may need to use sudo on Mac/Linux.

This command will install the pacakge locally for current directory. Grunt, you want to install globally however, so its binary can be executed anywhere. Install Grunt locally with this command:

```bash
npm install -g grunt
```
Note: Again, sudo may be required.

Lets double check that you have installed Grunt correctly. Run this command:

```bash
grunt --version
```

### 2. Generate Gruntfile

Grunt comes with handy command line tool for generating its configuration files. It has multiple modes for generating folder strucutre for projects aswell, but we are just going to use its basic "gruntfile" mode. Navigate to this folder, run the command and follow the interative prompts:

```bash
cd ~/js-patterns/3-grunt/
grunt init:gruntfile
```

## Anatomy of a Gruntfile

The Gruntfile or grunt.js is where you will configure Grunt with the tasks you want it to preform on your code. There are a few different components of a Gruntfile.

### initConfig

The majority of Grunt's configuration lives as a JSON object inside the grunt.initConfig function

```javascript
grunt.initConfig({
	someTask: {

	}
});
```

### Tasks

Grunt primarily revolves around the concept of Tasks. Tasks are the functions that transform your code from one state to another. Grunt comes with several very helpful Tasks. Lets take a look at the "concat" task config:

```javascript
grunt.initConfig({
	concat: { // <-- Task Name
      dist_js: { // <- Multi-task sub-task
        src: ['lib/jquery-1.7.2.js', 'lib/underscore.js'], // <-- Input Files
        dest: 'dist/app.js' // <-- Output files
      }
    }
});
```

The concat task is actually a special (but common type) of Task called a Multi-task. Multi-tasks can define multiple sub tasks that can be preformed independantly. This is helpful because we can use the concat tasks on more than just JS (CSS and HTML for templates comes to mind). For convienance, grunt allows us to reference files from the location of the Gruntfile (grunt.js). From the path containing your Gruntfile (grunt.js), lets run our "concat" task:

```bash
grunt concat
```

You can run just the "dist_js" sub-task like so:

```bash
grunt concat:dist_js
```

Lets add a second included task, min:

```javascript
grunt.initConfig({
    concat: { 
      dist_js: { 
        src: ['lib/jquery-1.7.2.js', 'lib/underscore.js'], 
        dest: 'dist/app.js'
      }
    },
    min: {
      js_min: {
        src: ['dist/baz.js'],
        dest: 'dist/baz-min.js'
      }
    }
});
```

This task will preform a simple minification of the file. min is a multi-task like concat so your build can have multiple minification targets. You can run the min task like so:

```bash
grunt min
```

or just the "js_min" sub-task:

```bash
grunt min:js_min
```


### Task Definition

Running one task at a time sucks. So lets define a custom task to run multiple tasks. Add this below your Grunt.initConfig function:

```javascript
grunt.registerTask('default', 'concat min');
// Task Name ---------^           |
// Tasks to execute ---------------
```

The "default" task, when defined, is a special task. It is run whenver your execute the grunt command without any arguments. Like so:

```bash
grunt
```

You can also define arbitrary tasks with the same pattern:

```javascript
grunt.registerTask('production', 'concat min');
// Task Name ---------^           |
// Tasks to execute ---------------
```

This task can be executed with:

```bash
grunt production
```



 





