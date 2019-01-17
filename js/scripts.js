$(function(){
  $("#submitButton").click(function(event){
    var activityOption = $("#activity").val();
    var beverageOption = $("#beverage").val();
    var seasonsOption = $("#seasons").val();
    var moviesOption = $("#movies").val();
    var crocsOption = $("#crocs").val();
    var chloe = 0;


    if (activityOption === "1"){
      chloe += 1;
    }
    if (beverageOption === "1"){
      chloe += 1;
    }
    if (seasonsOption === "1"){
      chloe += 1;
    }
    if (moviesOption === "1"){
      chloe += 1;
    }
    if (crocsOption === "1"){
      chloe += 1;
    }

    if (chloe >= 3){
      $("#chloe").show();
    } else {
      $("#sheeran").show();
    }


    event.preventDefault();
  });
});
