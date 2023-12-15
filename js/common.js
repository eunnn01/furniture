$(document).ready(function(){
    // 햄버거 버튼
    $(".m-open").click(function(){
        $(".mobile-content").addClass("active");
        $("html, body").css({
            "overflow":"hidden"
        })
    })
    $(".m-close").click(function(){
        $(".mobile-content").removeClass("active");
        $("html, body").css({
            "overflow":"auto"
        })
    })
    // 모바일 네비
    $(".menu-g>a").click(function(){
        if($(this).parent().find(".m-drop-down").is(":hidden")){
            $(".m-drop-down").slideUp();
            $(this).parent().find(".m-drop-down").slideDown();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(this).find(".arrow").removeClass("fa-angle-right").addClass("fa-angle-down");
        }else{
            $(".m-drop-down").slideUp();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right");
        }
        
    })
    // 데스크 네비
    $(".first>a").mouseenter(function(){
        $(".first>a").removeClass("active");
        $(this).addClass("active");
        $(".full-back").stop().slideDown();
        $(".drop-down").stop().slideDown();
        $(".drop-down").removeClass("active")
        $(this).parent().find(".drop-down").addClass("active");
    })

    $(".desk-nav").mouseleave(function(){
        $(".drop-down").stop().slideUp();
        $(".first>a").removeClass("active");
        $(".full-back").stop().slideUp();
    })

    $(".drop-down").mouseenter(function(){
        $(".drop-down").removeClass("active");
        $(this).addClass("active");
        $(".first>a").removeClass("active");
        $(this).parent().children("a").addClass("active");  
    })
    // 스크롤
    var $scroll=0;
    $(window).scroll(function(){
        $scroll=$(window).scrollTop();
        if($scroll>30){
            $("header").addClass("active");
            $(".desk-nav-box").addClass("active");
            $(".drop-down").addClass("active2");
            $(".full-back").addClass("active");
            $(".logo:nth-child(1)").addClass("active");
            $(".m-open").addClass("active");
        }else{
            $("header").removeClass("active");
            $(".desk-nav-box").removeClass("active");
            $(".drop-down").removeClass("active2");
            $(".full-back").removeClass("active");
            $(".logo:nth-child(1)").removeClass("active");
            $(".m-open").removeClass("active");
        }
    })
    // 추천사례 탭
    $(".ex-content").eq(0).show();
    $(".ex-box a").click(function(){
        $(".ex-content").hide();
        $(this.hash).show();
        $(".ex-box a").removeClass("active");
        $(this).addClass("active");
    })
    $(".ex-content").hover(function(){
        $(this).find(".e-content-box").css({display:"flex"});
    })
    $(".ex-content").mouseleave(function(){
        $(".e-content-box").css({display:"none"});
    })
    // 사이드 네비 (위로)
    $(".fa-angle-double-up").click(function(){
        $("html,body").stop().animate({
            scrollTop:0
        });
    })
    // 두번째 슬라이드
    var slidePosition=0;
    var $mslides=$(".m-menu-slides");
    var $mslide=$mslides.children(".m-menu-slide");
    var slideLength=$mslide.length;
    var mslideWidth=$mslide.width();
    console.log("슬라이드의 너비 : "+mslideWidth);

    function slideEvent(){
        function slideMove(){
            $mslides.stop().animate({
                left:-mslideWidth*slidePosition
            })
        }
        
        function nextMove(){
            if(slidePosition==slideLength-8){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            slideMove();
        }

        $(".menu-nextbt").click(function(){
            nextMove();
        });
        
        function prevMove(){
            if(slidePosition==0){
                slidePosition=slideLength-8;
            }else{
                slidePosition--;
            }
            slideMove();
        }
        $(".menu-prevbt").click(function(){
            prevMove();
        });
    }
    slideEvent();
    
})