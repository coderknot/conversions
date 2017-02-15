//business endTime
var pints=function(c){
  return c/2;
};

var quarts=function(c){
  return c/4;
}

var gallons=function(c){
  return c/16;
}

//UI
$(document).ready(function() {
  $("form#FormConversions").submit(function(event) {
     event.preventDefault();
     //stores user answer as "c"
     var c = parseInt($("#labelcups").val());
     //call function and outputs
     var result = pints(c);
      $(".OPpints").text(result);

     var resultQ = quarts(c);
      $(".OPquarts").text(resultQ);

     var resultG = gallons(c);
      $(".OPgallons").text(resultG);

    $("#output").show();
  });
});
