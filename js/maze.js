var success = true;
$(function () {
  $("#start").click(reset);
  $("#maze").hover(
    function(){
      $("#maze div.boundary").on();
      $("#end").on();
    },
    function(){
      $("#maze div.boundary").off();
      $("#end").off();
    }
    );
});

  var hoverStatus = $("#status").text();
  function red() {
    success = false;
    hoverStatus = "Sorry, you lost";
    $("#status").html(hoverStatus).css("color", "red");
    $(".boundary").each(function () {
      $(this).addClass("youlose");
    });
  }

  function end() {
    hoverStatus = "Game End!";
    $("#status").html(hoverStatus).css("color", "blue");
    let currentStatus = success == true ? "You win! :]" : "You lose! :[";
    alert(currentStatus);
    $(this).off();
    $("#maze div.boundary").off();
    return true;
  }

  function reset() {
    success = true;
    hoverStatus = "Game Started!";
    $("#status").html(hoverStatus).css("color", "green");
    $(".boundary").each(function () {
      $(this).removeClass("youlose");
    });
    $("#maze div.boundary").on("mouseover", red);
    $("#end").on("mouseover", end);
  }