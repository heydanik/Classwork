$(document).ready(function(){
    $("select").val('');
    $("#page").hide();
    
      $("#btn").click(function() {

    // grab the values from the input boxes, then append them to the DOM
    $("#one").append($("#first").val());
    $("#two").append($("#second").val());
    $("#three").append($("#third").val());
    $("#four").append($("#fourth").val());      
    
    $("#six").append($("#sixth").val());
    $("#seven").append($("#seventh").val());
    $("#eigh").append($("#eighth").val());
    $("#nine").append($("#ninth").val());
    $("#ten").append($("#tenth").val());

    $("#page").show();
   
    $("#input").hide();
      


  });

$("#playAgain").click(function(){
 
    $("#input").show();
    $("#page").hide();
    $(".span").empty();
    $("select").val('');
    
});

});
    
