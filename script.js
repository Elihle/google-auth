function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display", "none");
    $(".data").css("display", "block");
    $("#pic").attr('src', profile.getImageUrl());
    $("#email").text(profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have successfully sign out");

        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });


    // $.getJSON("https://www.codewars.com/users/Elihle/?access_key=gSYRvQHkdf8F8UwF7UZ_", function(data) {

    //     console.log(data);
    // })
}

$(document).ready(function (){
    $('.submit').click(function(event) {
        event.preventDefault();
        console.log("clicked");

        var email = $(".email").val();
        var subject = $(".subject").val();
        var message = $(".email").val();
        var statusElem = $(".status");
        statusElem.empty();
        
        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            statusElem.append("<div>email is valid</div>");
        } else {
            event.preventDefault();
            statusElem.append("<div>email is invalid</div>");
        }

        if (subject.length >= 2) {
            statusElem.append("<div>subject is valid</div>");
        } else {
            event.preventDefault();
            statusElem.append("<div>subject is invalid</div>");
        }

        if (message.length >= 10) {
            statusElem.append("<div>subject is valid</div>");
        } else {
            event.preventDefault();
            statusElem.append("<div>subject is invalid</div>");
        }
    })
})