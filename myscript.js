//list item template
var itemTemplate = 
    '<a href="#" class="list-group-item"> \
        <input type="checkbox" onclick="completeItem(this)" value=""> \
        <span class="badge">A</span> \
        <button class="delete-button" onclick="deleteItem(this)">Delete</button></a>';

//addItem function
var addItem = function () {
    var list=$("#notCompletedItems");
    var newItem=$(itemTemplate); 
    var userInput = document.getElementById("text-input").value;
    //put text input into the innerHTML of the newItem
    newItem.append(userInput);
    list.append(newItem);
    //TODO clear the text input box
    document.getElementById("text-input").value = '';
};

var deleteItem = function(element){
    $(element).parent().remove();
}

var completeItem = function(checked) {
    var doneItem = $(checked).parent();
    var done =$("#completedItems");
    done.append(doneItem);
}

