(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));


window.fbAsyncInit = function() {
  FB.init({
    appId      : "364417027243089",// la appid de tu aplicación facebook
    status   : true,
cookie   : true,
xfbml    : true,
oauth    : true // habilita oauth 2.0
  });

  FB.Event.subscribe('auth.statusChange', function(response) {
    if (response.authResponse) {
      FB.api('/me', function(me){
        if (me.name) {
           window.location = "index2.html";
        }
      })
    } 
  });

  document.getElementById('fb').addEventListener('click', function(){
   FB.login(function(){}, {  });
  });
} 













