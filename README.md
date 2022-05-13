# IABBB COLOR CHANGE TEST

By adding an event listener to the buttons it will allow the inline onclick in the HTML to still function correctly. 

I debated whether or not I should create a function and pass an array as a parameter since both click functions are essentially performing the same duty of changing the title text color. Due to one button having an id and the other button having a class, the buttons behave as seperate elements. If there were more buttons with an id or a class, it would be a good idea to create a reusable function for insertIdButton ot insertClassButton. Since there are only one button of each, I felt the straight forward approach worked best in this scenario.

Andrew Fitzpatrick
[doctorfitztastic@gmail.com](mailto:doctorfitztastic@gmail.com)
