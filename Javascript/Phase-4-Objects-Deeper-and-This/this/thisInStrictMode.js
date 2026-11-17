"use strict";
function show() {
  console.log(this); // undefined (non-strict mein window hota)
}
show();