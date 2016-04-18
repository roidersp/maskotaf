$(function() {
    $(document).on("click",".tips_icon",function(){
	   var num = $(this).attr("num");
	   $(".tips_info_content").fadeOut().removeClass("active");
	   $(".tips_icon").removeClass("active"); 
	   $("#tips_"+num).fadeIn().addClass("active");
	   $(this).addClass("active");
	   	    
    });
});