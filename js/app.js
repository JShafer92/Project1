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

$("#search").on("submit", function (event) {
    event.preventDefault()
    var userinput = $("#findtext").val();
    var fullRequest = queryURL + recipeAPI + "&q=" + userinput;
    // calling an ajax request
    $.ajax({
        url: fullRequest,
        dataType: "json",
        method: "GET"
    })
        .then(function (response) {
            //Creating for loop for 10 entries
            for (i = 0; i < 11; i++) {
                
            //Pulling data from the API
            var recipeTitle = response.recipes[i].title;
            var recipePublisher = response.recipes[i].publisher;
            var recipeUrl = response.recipes[i].f2f_url;
            var recipeImage = response.recipes[i].image_url;

            function repeat() {
            $(".hero-search-filter").css({ height: "150px", marginTop: "0px" })
            $(".search-results").hide()
            var searchTerm = $("#findtext").val()
            $(".search-results").show()
            $(".search-results").empty()
            $(".search-results").append("<h1>Here are the results from search " + searchTerm + "</h1>")
            // Displaying data from the API
            $(".search-results").append("<a class href=" + recipeUrl + ">");
            var imageDiv = $("<img>");
            imageDiv.attr("src", recipeImage);
            imageDiv.attr("alt", "mmmm food");
            $(".search-results").append(imageDiv);
            $(".search-results").append(recipeTitle);
            $(".search-results").append("Brought to you by: " + recipePublisher);
            $(".search-results").append("</a>");
            };
            repeat();

            /*
            var ahref = recipeUrl;
            var wholediv = $("<a href=" + recipeUrl + ">");
            imageDiv.attr("src", recipeImage);
            imageDiv.attr("alt", "mmmm food");
            $(".search-results").append(imageDiv);
            $(".search-results").append(recipeTitle);
            $(".search-results").append("Brought to you by: " + recipePublisher);
            var closingHref = $("</a>");
            ahref.append(image);
            wholediv.append(closingHref);
            */
            };
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
function openModal (){
  groceryModal.style.display = "block";
}

function closeModal (){
  groceryModal.style.display = "none";
}



