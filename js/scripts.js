$(document).ready(function(){
$(window).load(function() {

    // show proper page on load
    var hash = location.hash.replace('#','');
    if (hash != "")
    {
        $("#main > div").hide();
        $("#" + hash + "_section").fadeIn({duration:0});
    }
        
    // page transitions
    $("#title a, #navigation a").click(function(e) {
        $("#main > div").hide();
        target = $(this).attr("href") + "_section";
        $(target).fadeIn({duration: 500});
    });

    // // logging
    // var request = $.get('/path/to/resource.ext');

    // request.success(function(result) {
    //   console.log(result);
    // });

    // request.error(function(jqXHR, textStatus, errorThrown) {
    //   if (textStatus == 'timeout')
    //     console.log('The server is not responding');

    //   if (textStatus == 'error')
    //     console.log(errorThrown);

    //   // Etc
    // });

    // light box

    if ($("#photo_section").is(":visible")) 
    {
            $('#portfolio a').fluidbox({
            viewportFill: 1.0,
            closeTrigger: [
            { selector: '#portfolio a', event: 'click'  },
            { selector: 'window', event: 'resize' }
        ],
    });
    }



});

});
