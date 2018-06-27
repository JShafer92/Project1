  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-3856xz853xCGgFwpHpcMjZVru6UJipA",
    authDomain: "bc-p1-d3e98.firebaseapp.com",
    databaseURL: "https://bc-p1-d3e98.firebaseio.com",
    projectId: "bc-p1-d3e98",
    storageBucket: "bc-p1-d3e98.appspot.com",
    messagingSenderId: "292173050823"
  };
  firebase.initializeApp(config);

  var ui = new firebaseui.auth.AuthUI(firebase.auth());

 

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      },
      signInSuccess: function(){
        return false;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'localhost',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };
  // The start method will wait until the DOM is loaded.


// user state change
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      // run login function
      logIn();
    } else {
      // No user is signed in.

      // destroy logout button
      $("#firebaseui-auth-container").html("");
      // show login button
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  });

// contains all login code
function logIn(){
    console.log("logged in", firebase.auth().currentUser.uid);     
    // hide loading text
    document.getElementById('loader').style.display = 'none'; 
    // clear login button
    $("#firebaseui-auth-container").html("");
    // logout button
    var logOutLink = $('<a href="#">Log Out</a>');
    $("#firebaseui-auth-container").append(logOutLink);
    logOutLink.on("click", function(){
      logOut();
    });

    // code for displaying favorites list
}

function logOut(){
    // log out of auth. This will also trigger the onAuthStateChanged callback
    firebase.auth().signOut();

    // code for deleting shown favorites list
}


// HTML for login/logout button
/*
<div id="fbTest">
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
</div>
*/