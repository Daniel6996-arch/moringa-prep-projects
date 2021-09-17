var balance = 0;

$(document).ready(function(){
    $("#parent").append("<h6>" + "<b id = 'red' >" + "Your login time is:" + "</b>" + Date() + "</h6>");
    $("#red").css("color", "green");

    $("#linkOne").click(function(){
        $("#user").show();
        $("#money").css("display", "none");
        $("#about").remove();
    });

    $("#linkTwo").click(function(){
        $("#money").show();
        $("#user").css("display", "none");
        $("#about").remove();
        $(".balance").show();
    });

    $(".red").click(function(){
        $("body").css("color", "red");
    });
    $(".pink").click(function(){
        $("body").css("color", "pink");
    });
    $(".green").click(function(){
        $("body").css("color", "green");
    });
    $(".purple").click(function(){
        $("body").css("color", "purple");
    });
    $(".blue").click(function(){
        $("body").css("color", "blue");
    });
    $("#account").submit(function(event){
        event.preventDefault();

        var balance  = 0;
        var newDeposit = parseInt($("#inputThree").val());
        var withdraw = parseInt($("#inputFour").val());
        var newBalance = balance + newDeposit;
        var balance = newBalance;
        console.log(balance);
        $(".output").text();
    });
});