//list item template
var itemTemplate = 
    '<a href="#" class="list-group-item" id="a href item">List item 1 \
        <span class="badge">A</span> \
        <button onclick="deleteItem()">Delete</button> \
     </a>';

//addItem function
var addItem = function () {
    var list = $("#notCompletedItems");
    var newItem = $(itemTemplate);
    list.append(newItem);
}

//Delete Item function will remove an item from the display when a user clicks the Delete button
var deleteItem = function () {
    console.log("Now running the deleteItem function!");
    var listItem = $(".badge").parent().css({"color": "red", "border": "2px solid red"});
};

$(document).ready(addItem)
