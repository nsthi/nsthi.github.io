$(document).ready(function(){

    // show proper page on load
    var hash = location.hash.replace('#', '');
    if (hash != "")
    {
				if (hash == 'photo'){
					$("#main > div").hide();
	        $("#" + hash + "_section").fadeIn({duration:500}).find('#portfolio a').fluidbox();
	        
				}
				else{
					$("#main > div").hide();
	        $("#" + hash + "_section").fadeIn({duration:500});
				}
    }
        
    // page transitions
    $("#title a, #navigation a").click(function(e) {
        $("#main > div").hide();
        target = $(this).attr("href") + "_section";
        if (target == "#photo_section")
				{
	        $(target).fadeIn({duration:500}).find('#portfolio a').fluidbox();
				}
				else {
					$(target).fadeIn({duration: 500});					
				}
    });

});
