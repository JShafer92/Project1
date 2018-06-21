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


$(".search-results").hide()

$("#search").on ("submit", function (event){
  event.preventDefault()
  $(".hero-search-filter").css({height: "150px", marginTop: "0px"})
  var searchTerm = $("#findtext").val()
  $(".search-results").show()
  $(".search-results").empty()
  $(".search-results").append("<h1>Here are the results from search " + searchTerm + "</h1>")

})

$(".grocery-map").hide()
$("#grocery").on("click", function(){
  $(".grocery-map").show()


})