function addNewRecipe(recipeObject, targetDiv) {
    console.log(recipeObject);
    var recipeTitle = recipeObject.title;
    var recipePublisher = recipeObject.publisher;
    var recipeUrl = recipeObject.f2f_url;
    var recipeImage = recipeObject.image_url;

    // create div var
    var recipeDiv = $("<div>");
    // adding favorites button
    var favoriteButton = $("<button id='favoriteButton'>Favorite</div>")
    // creating recipeTitle
    var recipeTitle = $("<div>" + recipeTitle + "</div>")
    // create recipePublisher
    var recipePublisher = $('<div> Brought to you by: "' + recipePublisher + '"</div>');
    // create a href var
    var hrefLink = $('<a href="' + recipeUrl + '">');
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
        });
}