function printOnScreen(message) {
    $("#messageBox").css('color', 'black');
    onScreen(message);
}

function errorOnScreen(message){
    $("#messageBox").css('color', 'red');
    onScreen(message);

    // Set fade out
    $( "#messageBox" ).delay(2000).fadeOut( "slow");
}

function onScreen(message) {
    console.log(message);

    // Stop any current fade out
    $("#messageBox").stop(true);

    // Change text
    $("#messageBox").text(message);

    // Show message
    $("#messageBox").show();
}

function removeMe(me) {
    me.remove();
}

function addScoop(flavor) {
    $("#order").append('<a href="#" onclick="removeMe(this);return false;" class="list-group-item list-group-item-action">' + flavor + '</a>')
    $('#flavor-add>option:eq(0)').prop('selected', true);
}

function parseBasicOrder(){
    // Retrieve name variable
    var name = $("#name").val();

    // Retrieve flavor variable
    var flavor = $("#flavor").val();

    // Check to see if a name exists
    if (!name){
        errorOnScreen("Please enter a name!");
    }
    else{
        orderIceCream(name, flavor);
    }
}

function parseBetterOrder(){
    // Retrieve name variable
    var name = $("#name").val();

    // Retrieve flavor1 variable
    var flavor1 = $("#flavor1").val();

    // Retrieve flavor2 variable
    var flavor2 = $("#flavor2").val();

    // Check to see if a name exists
    if (!name){
        errorOnScreen("Please enter a name!");
    }
    else{
        orderIceCream(name, flavor1, flavor2);
    }
}

function parseBestOrder(){
    // Retrieve name variable
    var name = $("#name").val();

    var flavors = $.map($("#order a"), function (item) {
        return item.text;
    })

    // Check to see if a name exists
    if (!name){
        errorOnScreen("Please enter a name!");
    }
    else{
        orderIceCream(name, flavors);
    }
}
