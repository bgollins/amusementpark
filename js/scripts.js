// business side


// front end side
$(document).ready(function() {
  $("form#heightmeter").submit(function(event) {

    var heightInput = parseInt($("input#height").val());
    var speedInput = parseInt($("#speed").val());
    var typeInput = parseInt($("#type").val());
    var total = speedInput + typeInput

    if (heightInput < 36) {
      $(".tots").show();
    } else if (heightInput >= 36 && total >= 6) {
      $(".big").show();
    } else {
      $(".broken").show();
      }
    event.preventDefault();
  });
});
