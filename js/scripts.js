$(document).ready(function () {
  // $("#formOne").submit(function (event) {
  //   event.preventDefault();
  //   const writeraddInput = $("#writeradd").val();
  //   const busstopInput = $("#busstop").val();
  //   const locationInput = $("#location").val();
  //   const stateInput = $("#state").val();
  //   const dateInput = $("#date").val();
  //   $(".writeradd").text(writeraddInput);
  //   $(".busstop").text(busstopInput);
  //   $(".location").text(locationInput);
  //   $(".state").text(stateInput);
  //   $(".date").text(dateInput);




  //   $("#story").show();
  //   $("#contain").hide();

  // });

  $("#button").click(function () {
    $("#formOne2").show();
    $("#formOne").hide();

  });
  $("#button2").click(function () {
    $("#formOne2").hide();
    $("#formOne").show();

  });
  $("#button3").click(function () {
    $("#formOne").hide();
    $("#formOne2").hide();
    $("#formOne3").show();

  });
  $("#button4").click(function () {
    $("#formOne").hide();
    $("#formOne3").hide();
    $("#formOne2").show();

  });


  $("#formOne3").submit(function (event) {
    event.preventDefault();
    const receiveraddInput = $("#receiveradd").val();
    const busstop2Input = $("#busstop2").val();
    const location2Input = $("#location2").val();
    const state2Input = $("#state2").val();
    $(".receiveradd").text(receiveraddInput);
    $(".busstop2").text(busstop2Input);
    $(".location2").text(location2Input);
    $(".state2").text(state2Input);



    const writernameInput = $("#writername").val();
    const writeraddInput = $("#writeradd").val();
    const busstopInput = $("#busstop").val();
    const locationInput = $("#location").val();
    const stateInput = $("#state").val();
    const date2Input = $("#date2").val();
    const monthInput = $("#month").val();
    const yearInput = $("#year").val();
    $(".writername").text(writernameInput);
    $(".writeradd").text(writeraddInput);
    $(".busstop").text(busstopInput);
    $(".location").text(locationInput);
    $(".state").text(stateInput);
    $(".date2").text(date2Input);
    $(".month").text(monthInput);
    $(".year").text(yearInput);



    const reasonsInput = $("#reason").val();
    const futureInstancesInput = $("#futureInstances").val();    
    $(".reason").text(reasonsInput);
    $(".futureInstances").text(futureInstancesInput);



    $("#story").show();
    $("#contain").hide();

  });

  $(".edit").click(function () {
    $("#contain").slideDown();
  });
  document.getElementById("printButton").addEventListener("click", function () {
    window.print();
  });
});
