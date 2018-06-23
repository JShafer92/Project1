// $(document).foundation();

// $(function() {
//   $('.search')
//     .bind('click', function(event) {
//       $(".hero-search-filter").toggleClass("hero-search-filter-clicked");

//       // if the search field is expanded, focus on it
//       if ($(".hero-search-filter").hasClass("hero-search-filter-clicked")) {
//         $(".hero-search-filter").focus();
//       }
//     })
// });

// Here is our recipe API

var recipeAPI = "f2ae69e21923e6f5b6bacaa4b9e6df57";
var queryURL = "https://food2fork.com/api/search?key=";

function addNewRecipe(recipeTitle, recipePublisher, recipeUrl, recipeImage) {

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
    $(".search-results").append(recipeDiv);
}

$("#search").on("submit", function (event) {
    event.preventDefault()
    $(".hero-search-filter").css({ height: "150px", marginTop: "0px" })
    $(".search-results").hide()
    $(".search-results").show()
    $(".search-results").empty()
    var searchTerm = $("#findtext").val()
    $(".search-results").append("<h1>Here are the results from search " + searchTerm + "</h1>")


    var fullRequest = queryURL + recipeAPI + "&q=" + searchTerm;

    // calling an ajax request
    $.ajax({
        url: fullRequest,
        dataType: "json",
        method: "GET"
    })
        .then(function (response) {
            // Displaying data from the API

            //Creating for loop for 10 entries
            for (var thisRecipe = 0; thisRecipe < 11; thisRecipe++) {
                //Pulling data from the API
                var recipeTitle = response.recipes[thisRecipe].title;
                var recipePublisher = response.recipes[thisRecipe].publisher;
                var recipeUrl = response.recipes[thisRecipe].f2f_url;
                var recipeImage = response.recipes[thisRecipe].image_url;
                addNewRecipe(recipeTitle, recipePublisher, recipeUrl, recipeImage);



            }
        });
});
/*
$(".grocery-map").hide()
$("#grocery").on("click", function(){
  $(".grocery-map").show()

})

*/

// Modal Element for Grocery Map
var groceryModal = document.getElementById("grocerysimpleModal");
var groceryBtn = document.getElementById("groceryBtn")
var groceryCloseBtn = document.getElementsByClassName("grocerycloseBtn")[0];

groceryBtn.addEventListener("click", openModal);
groceryCloseBtn.addEventListener("click", closeModal);
function openModal() {
    groceryModal.style.display = "block";
}

function closeModal() {
    groceryModal.style.display = "none";
}



