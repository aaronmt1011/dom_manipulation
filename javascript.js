// selects #container div (parent div) and puts in container variable
let container = document.querySelector('#container');


// selects first child of #container (.display div)
let disp = console.dir(container.firstElementChild);


// selects .control div and puts it in cont variable
let cont = document.querySelector('.controls');


/*
// selects previous sibiling (.display)
console.dir(cont.previousElementSibling);
*/


// .creatElement() is used to create an elemt with this tag type. this does NOT 
// place the new element in the DOM (creates memory) allows manipulation of
// this element before using another function to place in DOM
let newDiv = document.createElement('div');


// can use (parent).appendChild(child) to append as last child of parent
container.appendChild(newDiv);


// can use (parent).insertBefore(child, reference child) to put new child
// in front of a particular sibiling (like line cutting, w/o the bullying)
let lineJumper = document.createElement('class');
container.insertBefore(lineJumper, cont);


// can use (parent).removeChild(child) to remove an unwanted child.
container.removeChild(lineJumper);




// newDiv is given different styles below
newDiv.style.color = 'blue';

newDiv.style.cssText = 'color: blue; background: black;';

newDiv.setAttribute('style', 'color: lightblue; background: black;');




// newDiv attributes are edited, will give description of each below
// .setAttribute() below adds an id (if it exists or creates new id) to the div
newDiv.setAttribute('id', 'theDiv');

// .getAttribute() returns value of an id
newDiv.getAttribute('id');

// .removeAttribute() removes attribute
newDiv.removeAttribute('id');





// newDiv will be using various class functions
// .classList.add() adds a class to div
newDiv.classList.add('new');

// .classList.remove() removes a class from a div
newDiv.classList.remove('new');

// this is used to toggle a class to be added or removed
// due to class 'active' not be used, it toggles it to be added
// if class 'active' was used, then it would be toggled off
// similar to a switch
newDiv.classList.toggle('active');




// newDiv will now add content to it
// .textContent creates a text node and puts it into newDiv
newDiv.textContent = 'Hello World!';

/*
// .innerHTML is used to add various HTML content, but use sparingly
// creates security risks if this is misused
newDiv.innerHTML = '<span>Hello World!</span>';
*/