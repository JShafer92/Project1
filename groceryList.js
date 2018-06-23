$(document).ready(function(){
    //create var for recipe apikey and URL
    var recipeAPI = "";
    var 
    //create an ajax call for the recipe search

    //search by ingredient or type of cuisine i.e. chinese, italian, ect

    //parse ingredients and search for recipes with each


    //display a list of recipes with a favorite button that saves them to the favorites database

    //on click pull up recipe and list of grocery stores
    //Push recipe into an overlay window with text to speech option
    //Create a var list of objects or a string with each ingredient.

    var groceryList = ingredientList;

    var mapAPI = "";

    var mapURL = "" + groceryAPI;

    $.ajax({
        url: mapURL
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    
    //create a list of grocery stores that are near an entered zip/address
    
    //or and order list through instacart?

});

// function search(x,v){
//     return (x + v);
// }; 
// var ducks = search("ducks" + " cobra chicken");
// console.log(ducks)