$(document).ready(function() {
  $("form#celebform").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    if (gender === 'male' && age <=15) {
      $('#bart').show();
    }
      else if (gender === 'male' && age >= 15) {
      $('#homer').show();
    } else if (gender === 'female' && age <= 12) {
      $('#lisa').show();
    } else if (gender === 'female' && age >= 12) {
      $('#marge').show();
    } else if (gender === 'female' && age <= 5) {
      $('#maggie').show();
    } 

  });
});    
