$(".plus").on("click",function even(){
    if ($(".addtask").val()==0) {
        alert("Enter The Task");
    }
    else{
        var x=$(".addtask").val();
        $(".ol").append("<li>"+ x +"</li>");
    }
    $(".addtask").val("");
});
$(document).on("click","li",function odd(){
    $(this).toggleClass("strike").fadeOut("slow");
});