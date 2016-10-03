//list item template
var itemTemplate = 
    '<a href="#" class="list-group-item" id=null>List item 1 \
        <span class="badge">A</span> \
        <button class="delete-button" onclick="deleteItem(this)">Delete</button</a>';
var newItemId=1;

//addItem function
var addItem = function () {
    //TODO take user input for content of list item 
        //set string to varible to alter inner HTML of list item?
    var list=$("#notCompletedItems");
    var newItem=$(itemTemplate); 
    list.append(newItem);
    //increment newItemId for next item created
    newItemId++;
};

//Delete Item function will remove an item from the display when a user clicks the Delete button
//$(document).click(function(event) {
//    if ($(event.target).hasClass("delete-button")){
//        $(event.target).parent().remove();
//    }
//});

var deleteItem = function(element){
    $(element).parent().remove();
}

