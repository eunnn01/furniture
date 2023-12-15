$(function(){
   $(".pwish").click(function(){
    console.log("클릭")
    $(".pwish").removeClass("fa-heart active").addClass("fa-heart-o")
    $(this).removeClass("fa-heart-o").addClass("fa-heart active");
   })

})