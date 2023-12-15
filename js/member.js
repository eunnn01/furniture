$(function(){
    $(".e-select").change(function(){
        var $value=$(this).val();
        console.log("value 값 : "+$value)
        $("input[name=e-add]").val($value);

    })
})