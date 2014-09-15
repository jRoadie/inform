(function($) {
    $.fn.inform = function(options) {
        var conf = $.extend({}, $.fn.inform.options, options);
        return this;
    };
    $.fn.inform.options = {};
    $('.inform, #inform').inform();
})(jQuery);