
$(document).ready(function() {
  $("form#number").submit(function(){
    event.preventDefault();

    var userInput = parseInt($("input#userNumber").val());

    for (userInput >= 1; userInput--;) {
      if (userInput % 15 === 0) {
        $("#output").prepend("<li>" + "ping-pong" + "</li>");
      } else if (userInput % 3 === 0) {
        $("#output").prepend("<li>" + "ping" + "</li>");
      } else if (userInput % 5 === 0) {
        $("#output").prepend("<li>" + "pong" + "<li>");
      } else {
        $("#output").prepend("<li>" + userInput + "</li>");
      }

      $("#output").fadeIn(500);
      console.log(userInput);
    };
  });
});
