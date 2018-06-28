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


$("#search").on("submit", function (event) {
    event.preventDefault()
    $(".hero-search-filter").css({ height: "150px", marginTop: "0px" })
    $(".search-results").hide()
    $(".search-results").show()
    $(".search-results").empty()
    var searchTerm = $("#findtext").val()
    // $(".search-results").append("<h1>Here are the results from search " + searchTerm + "</h1>")

    // function from recipe.js that creates AJAX request for search API
    runRecipeSearch(searchTerm);

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

// Modal Element for Favorites
var favoriteModal = document.getElementById("favoritesimpleModal");
var favoriteBtn = document.getElementById("favoriteBtn")
var favoriteCloseBtn = document.getElementsByClassName("favoritecloseBtn")[0];

favoriteBtn.addEventListener("click", favoriteOpenModal);
favoriteCloseBtn.addEventListener("click", favoriteCloseModal);
function favoriteOpenModal (){
  favoritesimpleModal.style.display = "block";
}

function favoriteCloseModal (){
  favoriteModal.style.display = "none";
}


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


    /*
        .then(function (response) {
            var imageUrl = response.recipes.title;
        });




      $(".hero-search-filter").css({height: "150px", marginTop: "0px"})
      $(".search-results").hide()
      var searchTerm = $("#findtext").val()
      $(".search-results").show(imageUrl)
      $(".search-results").empty()
      $(".search-results").append("<h1>Here are the results from search " + searchTerm + "</h1>")
    */
//});
/*
$(".grocery-map").hide()
$("#grocery").on("click", function(){
  $(".grocery-map").show()

})

*/
