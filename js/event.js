$(function(){
    $(".event-content").eq(0).show();
    $(".event-menu a").click(function(){     
        $(".event-content").hide();       
        $(this.hash).show(); 
    })
    $(".event-menu a").eq(0).addClass("active");
    $(".event-menu a").click(function(){
        $(this).parent().children(".event-menu a").removeClass("active");
        $(this).addClass("active");
    })
})