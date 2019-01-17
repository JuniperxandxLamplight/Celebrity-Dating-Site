$(function(){
  $("#submitButton").click(function(event){
    var activityOption = $("#activity").val();
    var beverageOption = $("#beverage").val();
    var seasonsOption = $("#seasons").val();
    var moviesOption = $("#movies").val();
    var crocsOption = $("#crocs").val();


    if (activityOption === "1" || beverageOption === "1" || seasonsOption === "1" || moviesOption === "1" || crocsOption === "1") {
      if (activityOption === "1" || beverageOption === "1" || seasonsOption === "1" || moviesOption === "1" || crocsOption === "1"){
        $("#chloe").show();
      }
    }


    event.preventDefault();
  });
});
