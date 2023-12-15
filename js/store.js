$(function(){
    console.log("load");
    // 카테고리 버튼
    var searchArray=[]
    var searchCategory=null;
    var count=0;
    
    for(i=0; i<$(".store-product-box").length; i++){
        searchArray[i]=$(".store-product-box").eq(i).children("span").text();
        console.log("searchArray["+i+"]"+searchArray[i])
    }    
    $(".category").click(function(){
        searchCategory=$(this).children("p").text();
        console.log("searchCategory :"+searchCategory);
        for(i=0; i<$(".store-product-box").length; i++){
            if(searchCategory===searchArray[i]){
                count++;
                $(".store-product-box").hide();
                $(".store-product-box span:contains("+searchCategory+")").parents(".store-product-box").show();
                break;
            }
        }
        if(count===0){
            console.log("count:"+count)
            $(".store-product-box").show();
        }
        count=0;
    })
    $(".desk-nav-box").mouseleave(function(){
        $(".first:nth-child(2)>a").addClass("active");
    })
})