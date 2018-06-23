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
        .then(function(response) {
            var imageUrl = response.recipes.title;
        });


      $(".hero-search-filter").css({height: "150px", marginTop: "0px"})
      $(".search-results").hide()
      var searchTerm = $("#findtext").val()
      $(".search-results").show()
      $(".search-results").empty()
      $(".search-results").append("<h1>Here are the results from search " + searchTerm + "</h1>")
});
/*
$(".grocery-map").hide()
$("#grocery").on("click", function(){
  $(".grocery-map").show()

})

*/