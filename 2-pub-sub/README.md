Pub/Sub
========

Slides: https://docs.google.com/presentation/d/1aLUrfL_0ACOtdgVI_3oy0qh1LrtUOInb2oeSjlhei94/edit


Exercise
========

1. Toast
--------

When a new Item is added to the Todo List, display a message at the stop of the screen for a few seconds.

The HTML is provided for you already and a partial implementation already exists. However the Todo List directly calls the Toast.toast method directly. 

Decouple the Todo List and the Toast by replacing the function call with Pub/Sub.

2. Todo Count
-------------

Implement a counter that shows display the total amount of item items and the amount that have been completed. HTML is provided for you (commented out).

When writing the module remember that it should work totally independtly first, then Subscribe to events laters.

