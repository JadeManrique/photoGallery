$(document).ready( function () {



  $("#article div").click( function (e) {

    if ( $(this).find("img").css("width") == "100px" ) {

     $(this).find("img").css("width", "300px");

    } else {

      $(this).find("img").css("width", "100px");

    }

  });

  $("#article div").hover( function(e) {

        $(this).animate({opacity: 0.5}, 200);

    }, function() {

        $(this).animate({opacity: 1.0}, 200);

    });


});
