$(document).ready(function () {

    var mapAPI = "AIzaSyAaYM5-O2TkTLKDy3h9mSJzE98XYikCZho";

    var mapURL = "https://www.google.com/maps/embed/v1/search?key=";

    var queryA = "&q=grocery+store+near";

    var queryUser = "";

    $.ajax({
        url: mapURL + mapAPI + queryA + queryUser,
        method: "GET",
    }).then(function (response) {



    });

    });
