function addNewRecipe(recipeObject, targetDiv) {
    var recipeTitle = recipeObject.title;
    var recipePublisher = recipeObject.publisher;
    var recipeUrl = recipeObject.f2f_url;
    var recipeImage = recipeObject.image_url;
    var recipeID = recipeObject.recipe_id;
    // create div var
    var recipeDiv = $("<div>");
    // haha, only display the favorites button in the normal list - this way we don't offer to favorite something from the faves list
    if(targetDiv == ".search-results"){
        // adding favorites button
        var favoriteButton = $("<button class='favorites' recipe='" + recipeID + "'>Favorite</button>")
    }
    // creating recipeTitle
    var recipeTitle = $("<div>" + recipeTitle + "</div>")
    // create recipePublisher
    var recipePublisher = $('<div> Brought to you by: "' + recipePublisher + '"</div>');
    // create a href var
    var hrefLink = $('<a href="' + recipeUrl + '" target="_blank">');
    // create image var
    var imageTag = $('<img src="' + recipeImage + '">');
    // append image to link
    hrefLink.append(imageTag);
    // append link to div
    recipeDiv.append(hrefLink);
    // append recipeTitle
    recipeDiv.append(recipeTitle);
    // adding link to text
    hrefLink.append(recipeTitle);
    // append recipePublisher
    recipeDiv.append(recipePublisher);
    // adding link to text
    hrefLink.append(recipePublisher);
        // appending button
        recipeDiv.append(favoriteButton);
    // append div to search results
    $(targetDiv).append(recipeDiv);
}

function runRecipeSearch(searchTerm){
    var queryURL = "http://bc.zombievision.net/p1/relay.php?q=" + searchTerm;
    // calling an ajax request
    $.ajax({
        url: queryURL,
        dataType: "json",
        method: "GET"
    })
    .then(function (response) {
        // Displaying data from the API

        //Creating for loop for 10 entries
        for (var thisRecipe = 0; thisRecipe < 11; thisRecipe++) {
            //Pulling data from the API
            var recipeObject = response.recipes[thisRecipe];

            addNewRecipe(recipeObject, ".search-results");
        }
        $(".favorites").on("click", function(event){
            var eventID = $(this).attr("recipe");
            addFavorite(eventID);
        });
    });
}

function grabOneRecipe(recipeID){
    var queryURL = "http://bc.zombievision.net/p1/relay.php?r=" + recipeID;

    $.ajax({
        url: queryURL,
        dataType: "json",
        method: "GET"
    })
    .then(function (response) {
        // Displaying data from the API
        var recipeObject = response.recipe;
        addNewRecipe(recipeObject, "#favorited-stuff");
        $(".favorites").on("click", function(event){
            var eventID = $(this).attr("recipe");
            addFavorite(eventID);
        });
    });
}