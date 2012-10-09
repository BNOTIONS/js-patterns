Advanced Testing
================

Sinon.js
--------

(http://sinonjs.org/)[http://sinonjs.org/]

Sinon as library that allows you to use spys, stubs, and mocks in your tests. It allows you to write truly isolated components and fake out other factors invloved in your tests including XHR.

# Spys

Spys observe the usage of function. A spy can report if a function is called, how many times and with what arguments. Spys are helpful when testing callbacks or events.

```javascript

it("should be called once", function(){
    
    var sut = 

});

```

# Stubs

Stubs are functions like spys, but with preprogrammed behaviour. They are useful for getting a Subject Under Test (SUT) into a certain state for testing.

```javascript


```


# Mocks

Mocks are like stubs in the sense that they have preprogrammed behaviour, but also have preprogrammed expectations. If a Mock's expectations are not met, it will make your test fail.


Exercise
--------

Write a todo list using modules and events through Test Driven Development. Focus on isolating modules using events and using spys/stubs/mocks to test those events.


1. A todo list that can create todo items.
2. Todo items should be able to be toggled and deleted.
3. A counter should keep track of todo items completed vs total items.

