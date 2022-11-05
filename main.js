var form=document.getElementById('addForm');
var itemslist=document.getElementById('items');
var filer=document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemslist.addEventListener('click',removeItem);

//filter event
filer.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;
    //create a new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
   //create delete button element
   var deletebtn=document.createElement('button');

   //add classes to del button

   deletebtn.className='btn btn-danger btn-sm float-right delete';
   //append text node
   deletebtn.appendChild(document.createTextNode('x'));
   //append button to li
   li.appendChild(deletebtn);
    itemslist.appendChild(li);
}
//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li =e.target.parentElement;
            itemslist.removeChild(li);
        }
    }

}
//Filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemslist.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
