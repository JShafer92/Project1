$(".search-results").hide()
//click event for recipe results
$("#search").on ("submit", function (event){
  event.preventDefault()
  $(".hero-search-filter").css({height: "150px", marginTop: "0px"})
  var searchTerm = $("#findtext").val()
  $(".search-results").show()
  $(".search-results").empty()
  $(".search-results").append("<h1>Here are the results for search " + searchTerm + "</h1>")

})
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

// Here is our API
var queryURL = "http://bc.zombievision.net/p1/relay.php?q=";

$("#search").on("submit", function (event) {
    event.preventDefault()
    var userinput = $("#findtext").val();
    var fullRequest = queryURL + userinput;
    // calling an ajax request
    $.ajax({
        url: fullRequest,
        dataType: "json",
        method: "GET"
    })
    console.log(userinput);


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
});
/*
$(".grocery-map").hide()
$("#grocery").on("click", function(){
  $(".grocery-map").show()

})

*/
