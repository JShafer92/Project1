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



