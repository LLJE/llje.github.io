$(document).ready(function() {
    $(".button").mouseover(function(){
        $(this).css("opacity", "1");
    });
    $(".button").mouseleave(function(){
        $(this).css("opacity", "0.3");
    });
});