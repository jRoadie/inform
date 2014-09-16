(function($) {
    var version = 1.0;
    var Field = function() {};
    Field.newInstance = function(args) {
        return $.extend(true, {}, new Field(), $.fn.inform.fieldPrototype, args);
    };
    var Text = 456;
    $.fn.inform = function(options) {
        var conf = $.extend(true, $.fn.inform.options, options);
        return this;
    };
    $.fn.inform.options = {};
    $.fn.inform.defaultFieldAttrs = {
        name: undefined,
        value: undefined,
        id: undefined,
        'class': undefined
    };
    $.fn.inform.fieldPrototype = {
        tag: undefined,
        uid: undefined,
        attrs: $.fn.inform.defaultFieldAttrs,
        data: {}
    };
    $('.inform, #inform').inform();
})(jQuery);