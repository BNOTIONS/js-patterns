Introduction to Backbone.js
===========================

### TL;DR
### Backbone is not a framework, but rather some really amazing tools.

Backbone Components
-------------------

# Backbone.Events

Geuss what. You have been using through out these workshops already. All Backbone classes extend Backbone.Events giving them all an amazing Event based behaviours.

# Backbone.Model

Your data lives in these. Great API for adding getting/setting data. Also out of the box talks REST. Beware, if you let you Models know about the DOM, a kitten dies.

# Backbone.Collection

A iterable collection of Models. Similar RESTful interfaces that make life easy.

# Backbone.View

A great abstraction for the interacting with the DOM. A fanstastic DOM events abstraction leads to clean code. Views can listen to events triggerd by models to make them instantly react to data.

# Backbone.Router

Watches and manipulates the URL in the browser. Yup. Pretty freaking cool.


Exercise
--------

Create a Model and View that represent a Todo List Item that can be toggled completed/uncompleted. Explore different ways of binding the Models state to the View.


