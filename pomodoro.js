$(document).ready(function() {
  var intervalID;

  $(".big-btn").on("click", function() {
    var seshTime = parseInt($(".seshNum").text());
    var breakTime = parseInt($(".breakNum").text());
    var counterSeshTime = seshTime;
    var counterBreakTime = breakTime;

    var counter = function() {
      if (counterSeshTime > 0) {
        // decrement sesh time
        counterSeshTime = counterSeshTime - 1;
        $(".time").text(counterSeshTime);
      } else if (counterSeshTime == 0 && counterBreakTime == breakTime) {
        var wav = 'http://www.soundjay.com/misc/sounds/bell-ring-01.mp3';
        var audio = new Audio(wav);
        audio.play();
        counterBreakTime = counterBreakTime - 1;
        $(".time").text(counterBreakTime);
      } else if (counterSeshTime == 0 && counterBreakTime > 0) {
        // decrement break time when sesh time is empty
        counterBreakTime = counterBreakTime - 1;
        $(".time").text(counterBreakTime);
      }  else {
        // reset sesh and break time
        // Play audio
        var wav = 'http://www.soundjay.com/misc/sounds/bell-ring-01.mp3';
        var audio = new Audio(wav);
        audio.play();
        counterSeshTime = seshTime;
        counterBreakTime = breakTime;
      }
    };

    intervalID = setInterval(counter, 1000);
  });

  $(".stop").on("click", function() {
    clearInterval(intervalID);

  });

});

/* The code below is for the 4 plus and minus buttons, to adjust the session & break length  */

//session plus button
$(document).ready(function() {
  $("#sesh-plus-btn").on("click", function() {
    var seshTime = $(".time").html();
    var newTime = parseInt(seshTime) + 1;
    $(".time").text(newTime);
    $(".seshNum").text(newTime);
  });
});

//session minus
$(document).ready(function() {
  $("#sesh-minus-btn").on("click", function() {
    var seshTime = $(".time").html();
    if (seshTime > 0) {
      var newTime = parseInt(seshTime) - 1;
      $(".time").html(newTime);
      $(".seshNum").text(newTime);
    } else {}
  });
});

//break plus button
$(document).ready(function() {
  $("#break-plus-btn").on("click", function() {
    var seshTime = $(".breakNum").html();
    var newTime = parseInt(seshTime) + 1;
    $(".breakNum").text(newTime);
  });
});

//break minus button
$(document).ready(function() {
  $("#break-minus-btn").on("click", function() {
    var seshTime = $(".breakNum").html();
    if (seshTime > 0) {
      var newTime = parseInt(seshTime) - 1;
      $(".breakNum").text(newTime);
    } else {

    }
  });
});
