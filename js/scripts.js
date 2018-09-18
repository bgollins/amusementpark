// business side


// front end side
$(document).ready(function() {
  $("form#heightmeter").submit(function(event) {

    var heightInput = parseInt($("input#height").val());

    if (heightInput < 36) {
      $(".tots").addClass("highlight");
    } else {
      $(".big").addClass("lowlight");
    }
    event.preventDefault();
  });
});
