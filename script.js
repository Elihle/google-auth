function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src', profile.getImageUrl());
    $("#email").text(profile.getEmail());
}

Function signOut(){
    var auth2 = gapi.getAuthInstance();
    auth2.signOut().then(function() {
        alert("You have successfully sign out");

        $(".g-signin2").css("display", "block");
        $(".data").css("display","none");
    });
}