$(document).ready(function(){

    // // show proper page on load
    // var hash = location.hash.replace('#', '');
    // if (hash != "")
    // {
				// if (hash == 'photo'){
				// 	$("#main > div").hide();
	   //      $("#" + hash + "_section").fadeIn({duration:500}).find('#portfolio a').fluidbox();
	        
				// }
				// else{
				// 	$("#main > div").hide();
	   //      $("#" + hash + "_section").fadeIn({duration:500});
				// }
    // }
        
    // // page transitions
    // $("#title a, #navigation a").click(function(e) {
    //     $("#main > div").hide();
    //     target = $(this).attr("href") + "_section";
    //     if (target == "#photo_section")
				// {
	   //      $(target).fadeIn({duration:500}).find('#portfolio a').fluidbox();
				// }
				// else {
				// 	$(target).fadeIn({duration: 500});					
				// }
    // });
	$('#portfolio a').fluidbox();

	$('#porfolio').each(function() {
	    var images = [],
	        $fb = $(this).find('a.fluidbox');

	    $f.find('img').each(function() {
	        var image = $.Deferred();
	        $(this).load(image.resolve).error(image.resolve);
	        images.push(image);
	    });

	    $.when.apply(null, images).done(function() {
	        $fb.trigger('recompute');
	    });
	});

});
