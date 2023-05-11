$(document).ready(function() {
    var row0 = $("#list_wood");
    var leftProperty0;
    var newleftProperty0;

    $("#right_button1").click(function (){
        leftProperty0 = parseInt(row.css("left"));
        if(leftProperty0 - 300 <= -900){
            newLeftProperty0 =0;
        }
        else{
            newLeftProperty0 = leftproperty0 -300;
        }
        row.animate({left: newLeftProperty0}, 500);
    });
    $("#left_button1").click(function (){
        leftProperty0 = parseInt(row.css("left"));
        if(leftProperty0 < 0){
            newLeftProperty0 =leftProperty0 + 300;
        }
        else{
            newLeftProperty0 = 0;
        }
        row.animate({left: newLeftProperty0}, 500);
    });
    $("#list_medora a").click(function (evt){
        var newimage0 = $(this).attr("href");
        $("#omedora").animate({opacity: 0}, 1000,
            function (){
                $(this).attr("src", newimage0);
                $(this).animate({opacity: 100}, 1000);
            })
        evt.preventDefault();
    });
/*///////////////////glacier///////////////////////////*/
    var row = $("#list_glacier");
    var leftProperty;
    var newleftProperty;

    $("#right_button2").click(function (){
        leftProperty = parseInt(row.css("left"));
        if(leftProperty - 300 <= -900){
            newLeftProperty =0;
        }
        else{
            newLeftProperty = leftproperty -300;
        }
        row.animate({left: newLeftProperty}, 500);
    });
    $("#left_button2").click(function (){
        leftProperty = parseInt(row.css("left"));
        if(leftProperty < 0){
            newLeftProperty =leftProperty + 300;
        }
        else{
            newLeftProperty = 0;
        }
        row.animate({left: newLeftProperty}, 500);
    });
    $("#list_glacier a").click(function (evt){
       var newimage = $(this).attr("href");
       $("#oglacier").animate({opacity: 0}, 1000,
           function (){
           $(this).attr("src", newimage);
           $(this).animate({opacity: 100}, 1000);
        })
        evt.preventDefault();
    });
/*//////////////////////////carribou////////////////////////*/
    var row2 = $("#list_wood");
    var leftProperty2;
    var newleftProperty2;

    $("#right_button3").click(function (){
        leftProperty2 = parseInt(row.css("left"));
        if(leftProperty2 - 300 <= -900){
            newLeftProperty2 =0;
        }
        else{
            newLeftProperty2 = leftproperty2 -300;
        }
        row.animate({left: newLeftProperty2}, 500);
    });
    $("#left_button3").click(function (){
        leftProperty2 = parseInt(row.css("left"));
        if(leftProperty2 < 0){
            newLeftProperty2 =leftProperty2 + 300;
        }
        else{
            newLeftProperty2 = 0;
        }
        row.animate({left: newLeftProperty2}, 500);
    });
    $("#list_wood a").click(function (evt){
        var newimage = $(this).attr("href");
        $("#owood").animate({opacity: 0}, 1000,
            function (){
                $(this).attr("src", newimage);
                $(this).animate({opacity: 100}, 1000);
            })
        evt.preventDefault();
    });
});