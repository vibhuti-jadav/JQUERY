$(".moon").click(function(){
    $("body").addClass("theme");
    $(".moon").hide();
    $(".sun").show()
})

$(".sun").click(function(){
    $("body").removeClass("theme")
    $(".sun").hide();
    $(".moon").show()
})



