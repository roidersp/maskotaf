$(function() {
	calcular_alto();
	
    $(document).on("click",".tips_icon",function(){
	   var num = $(this).attr("num");
	   $(".tips_info_content").fadeOut().removeClass("active");
	   $(".tips_icon").removeClass("active"); 
	   $("#tips_"+num).fadeIn().addClass("active");
	   $(this).addClass("active");
	   	    
    });
    
    $(document).on("click",".adopta_item",function(){
	   $("#adopta_popup").fadeIn(); 
	   $("html,body").css("overflow","hidden");
    });
    
    $(document).on("click","#adopta_cerar_popup",function(){
	     $("#adopta_popup").fadeOut(); 
	     $("html,body").css("overflow","auto");
    });
    
	
	if($("#trendy_content .size-1of2:nth-child(1)").height()>$("#trendy_content .size-1of2:nth-child(2)").height()){
		$("#trendy_content").addClass("l_more");
	}else{
		$("#trendy_content").addClass("r_more");
	}
	    
  /* minigrid({
	  container: '#adopta_content',
	  item: '.adopta_item',
	  gutter: 0
	});
	
	window.addEventListener('resize', function(){
		  minigrid({
		    container: '#adopta_content',
		    item: '.adopta_item',
		    gutter: 0
		  });
		});*/
    
});

$( window ).resize(function() {
	console.log("resize");
	$(".row-eq-height").height("auto");
  calcular_alto();
});


function calcular_alto(){
	 var heights = $(".row-eq-height").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".row-eq-height").height(maxHeight);
}