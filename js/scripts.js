$(document).ready(function() {

  $("form#leap-year").submit(function(event) {


    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
// below is the parameters
       if (!result) {
         $(".not").text("not");
       } else {
         $(".not").text("");
       }
// below will display the result
       $("#result").show();
     });
   });

// below backend logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
