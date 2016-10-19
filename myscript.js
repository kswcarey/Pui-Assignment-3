//list item template
var itemTemplate = 
    '<a href="#" class="list-group-item"> \
        <input type="checkbox" onclick="completeItem(this)" value=""> \
        <button class="delete-button" onclick="deleteItem(this)">Delete</button></a>';

//addItem function
var addItem = function () {
    var list=$("#notCompletedItems");
    var newItem=$(itemTemplate); 
    var userInput = document.getElementById("text-input").value;
    //put text input into the innerHTML of the newItem
    newItem.append(userInput);
    //check if any badges are selected
    var selectedBadges = [$(".badge.badge-is-enabled").clone(true)];
    //TODO create function that strips the badges in selectedBadges of their onclick listener
    removeOnClick(selectedBadges);
    //append newItem with the selected badge
    newItem.append(selectedBadges);
    list.append(newItem);
    //clear the text input box
    document.getElementById("text-input").value = '';
    //clear selected badges
    resetBadges();
};

var deleteItem = function(element){
    $(element).parent().fadeOut("slow");
}

var completeItem = function(checked) {
    var doneItem = $(checked).parent();
    var done =$("#completedItems");
    done.append(doneItem);
}

//open the add item overlay 
var openOverlay = function(){
     document.getElementById("add-item-overlay").style.width = "100%";
}

//close the add item overlay
var closeOverlay = function (){
    document.getElementById("add-item-overlay").style.width = "0%";
}

//Restyles clicked badge and prepare it to be added to a new item
var selectBadge = function(element){
    //when badge is clicked change styling of item
    $(element).css("border-color", "red");
    //append class of element to include "badge-is-enabled"
    $(element).addClass("badge-is-enabled");
}

//removes onclick function from array of objects
var removeOnClick = function(array){
    var badges = $(array);
    for (var i = 0, len = badges.length; i < len; i++){
        badges[i].removeAttr("onclick");
    }
}

//resets badges to default styling and class
var resetBadges = function(){
    $(".badge.badge-is-enabled").css("border-color", "grey");
    //clear selected badges
    $(".badge.badge-is-enabled").removeClass("badge-is-enabled");
}

////TODO create confirmation message when new item has been added
//var toaster = function(){
//    document.getElementById("toaster").style.height = "100%";
//    
//}