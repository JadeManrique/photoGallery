$(document).ready( function () {



  $("#article div img").click( function () {

  //  $("#lightbox").show();

    var imageLink = $(this).attr("src");

    var imageText = "<img src=\'" + imageLink + "\' />";

    $("#lightbox").html(imageText);

//    $("#lightbox").click( function (event) {

//      $("#lightbox").hide();

//      });

    });

    $("#article div img").hover( function(e) {

          $(this).animate({opacity: 0.5, height: "auto", width: "120px"}, 150);

      }, function() {

          $(this).animate({opacity: 1.0, height: "auto", width: "100px"}, 150);

      });



  });


/*

$("#article div").click( function (e) {

    if ( $(this).find("img").css("width") == "120px" ) {

     $(this).find("img").css("width", "200px");

    } else {

      $(this).find("img").css("width", "100px");

    }

  });


*/
