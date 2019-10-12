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

    $.getJSON("https://www.codewars.com/api/v1/users/Elihle/code-challenges/completed?page=0?access_key=gSYRvQHkdf8F8UwF7UZ_", function(data) {
        console.log(data);
    })
}
