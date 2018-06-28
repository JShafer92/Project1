$(document).ready(function () {

    var mapAPI = "AIzaSyAaYM5-O2TkTLKDy3h9mSJzE98XYikCZho";

    var mapURL = "https://www.google.com/maps/embed/v1/search?key=";

    var queryA = "&q=grocery+store+near";

    var queryUser = document.getElementById('zip').value;

    var newSearch = mapURL + mapAPI + queryA + queryUser
// onclick to get new search from user input
$('#searchBtn').on('click', function(){
event.preventDefault();
//inserts into new map
$('#iMap').attr('src', newSearch)
});

    });
