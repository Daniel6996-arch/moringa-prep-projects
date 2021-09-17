$(document).ready(function() {
    $("p").click(function() {
      $(".walrus-showing").toggle();
      $(".walrus-hidden").toggle();
      $("img").fadeOut(500);
    });
  });