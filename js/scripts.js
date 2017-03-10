
$(document).ready(function() {
  $("form#number").submit(function(){
    event.preventDefault();

    var userInput = parseInt($("input#userNumber").val());
    var results;
    console.log(userInput);
    $("#output").text(userInput);
  });
});

for (var i = userInput; i < 0; i--) {
  
}
