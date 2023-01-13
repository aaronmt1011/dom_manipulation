// selects #container div (parent div) and puts in container variable
let container = document.querySelector('#container');

// selects first child of #container (.display div)
console.dir(container.firstElementChild);

// selects .controls div and puts it in conrols variable
let controls = document.querySelector('.controls');

// selects previous sibiling (.display)
console.dir(controls.previousElementSibling);

// .creatElement() is used to create an elemt with this tag type. this does NOT 
// place the new element in the DOM (creates memory) allows manipulation of
// this element before using another function to place in DOM
let newDiv = document.createElement('div');

// can use (parent).appendChild(child) to append as last child of parent
container.appendChild(newDiv);

// can use (parent).insertBefore(child, reference child) to put new child
// in front of a particular sibiling (like line cutting, w/o the bullying)
let lineJumper = document.createElement('class');
container.insertBefore(lineJumper, controls);

// can use (parent).removeChild(child) to remove an unwanted child.
container.removeChild(lineJumper);