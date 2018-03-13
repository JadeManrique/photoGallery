$(document).ready( function () {



  $("#article div img").click( function () {

    $("#lightbox").show();

    var imageLink = $(this).attr("src");

    var imageText = "<img src='" + imageLink + "' />";

    $("#lightbox").html(imageText);

    $("#lightbox").click( function (event) {

      $("#lightbox").hide();

      });

    });

    $("#article div").hover( function(e) {

          $(this).animate({opacity: 0.5}, 150);

      }, function() {

          $(this).animate({opacity: 1.0}, 150);

      });


  });


/*

$("#article div").click( function (e) {

    if ( $(this).find("img").css("width") == "100px" ) {

     $(this).find("img").css("width", "300px");

    } else {

      $(this).find("img").css("width", "100px");

    }

  });


*/
