/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
let body = document.querySelector('body');
let button = document.querySelector('.menu-button');

function listItemMaker(text){
  const listItem = document.createElement('li');
  listItem.textContent = text;
  return listItem;
}

let newMenuItems = menuItems.map(function(item){
  console.log(item);
  const newMenuItem = listItemMaker(item);
  return newMenuItem;
})


function menuMaker(){
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const list = document.createElement('ul');
  menu.appendChild(list);
  newMenuItems.forEach(function (item) {
    list.appendChild(item);
  })

  button.addEventListener('click', function () {
    menu.classList.toggle('menu--open');
  }) 
  return menu; 
}

body.prepend(menuMaker(menuItems));
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
