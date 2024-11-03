/* selector require ---> if you missed the selector its possible to conflict data when use progress bar more than one time */
/* duration ---> if you miss that its work as default value 10ms */

(function ($) {
    $.fn.progress = function (options) {
        let settings = $.extend({
            commenceNum: 0,
            endNum: 0,
            duration: 10,
            selector:'.progress div',
        }, options);

        let progress = setInterval(function () {
            settings.commenceNum++;
            if (settings.commenceNum >= settings.endNum) {
                clearInterval(progress);
            }
                $(settings.selector).text(settings.commenceNum+'%') && $(settings.selector).css({"width": `${settings.commenceNum}` + "%"});

        }, settings.duration);
    }

}(jQuery));

$('#first').progress({commenceNum: 0, endNum: 90,selector:'#first'});

