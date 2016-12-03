(function(d){
  $(".button-collapse").sideNav();
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));

window.fbAsyncInit = function() {
   FB.init({
    appId    : "364417027243089", //la appid de tu aplicación facebook
    status   : true,
		cookie   : true,
		xfbml    : true,
		oauth    : true //enables OAuth 2.0
  });

  FB.Event.subscribe('auth.statusChange', function(response) {
      // FB.api(
      //   "...?fields={fieldname_of_type_CoverPhoto}",
      //   function (me) {
      //     if (me) {
      //       var portada = '<div>{{portada}}</div>';
      //       var por = "";
      //       por += portada.replace("{{portada}}", '<img src="https://graph.facebook.com/' + me.id + '/picture">');

      //       $("#back").append(por);
      //     }
      //   }
      // );
    // FB.api(
    //     "/{photo-id}",
    //     function (response) {
    //       if (response && !response.error) {
    //         /* handle the result */
    //         var portada = '<div>{{portada}}</div>';
    //         var por = "";
    //         por += portada.replace("{{portada}}", '<img src="https://graph.facebook.com/' + response.images + '/picture">');

    //         $("#back").append(por);
    //       }
    //     }
    // );

    if (response.authResponse) {
      FB.api('/me', function(me){
        if (me.name) {
					var foto = "<div class='avatar'>{{fotoprincipal}}</div>";

        	var plantilla =  '<div class="contac">' + 
								  						'<div>' + 
											        	// '<div class="foto avatar">{{foto}}</div>' +
								  							'<span class="saludo">{{saludo}}</span>' +
								  						'</div>' +
										        '</div>';

					var agregrar ="";

					agregrar += plantilla.replace("{{saludo}}", me.name);
											// .replace("{{foto}}", '<img src="https://graph.facebook.com/' + me.id + '/picture">')
					var a ="";
					a = foto.replace("{{fotoprincipal}}", '<img class="circle" src="https://graph.facebook.com/' + me.id + '/picture">');

          $("#fotoPrincipal").prepend(a);
          $("#listaContactos").append(agregrar);

          // var portada = '<div>{{portada}}</div>';
          // var por = "";
          // por += portada.replace("{{portada}}", '<img src="https://graph.facebook.com/' + me.photo + '/picture">');

          // $("#back").append(por);
        }
      });
    } else {
      window.location = "https://paolaozv.github.io/music-detection/public/index.html";
    }
  });


  document.getElementById('salir').addEventListener('click', function(e){
  	e.preventDefault();
    FB.logout();
  }); 
} 
