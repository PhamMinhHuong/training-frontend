//=require node_modules/jquery/dist/jquery.min.js
//=require node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//=require _script.js
//=require node_modules/slick-carousel/slick/slick.min.js
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
