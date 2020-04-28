### target vs. currentTarget properties

[bubbles phase](https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property/10086501)
target | currentTarget
---| ---
If addEventListener("click") attached e.g to button <br> | If addEventListener("click") attached e.g to button <br>
and I want to affect some DIVS around e.g style them <br> | and I want to affect the button itself <br>
I need to use ***target*** property | I need to use ***currentTarget*** property *which actually work as keyword this*

