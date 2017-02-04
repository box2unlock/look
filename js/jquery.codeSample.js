(function($, window, document) {

    $.fn.codeSample = function() {

        var self = this;

        self.each(function () {
            var button = $('<a href="#" class="look-button -black -icon"><i class="fa fa-file-code-o" aria-hidden="true"></i><span>Toggle code</span></a>');
            button.click(function () {
                $(this).closest(self).find('pre').toggle();
                return false;
            });
            var p = $('<p />');
            p.append(button);
            var code = $('<div />').text($(this).html()).html();
            var pre = $('<pre style="display:none">' + $.trim(code) + '</pre>');
            $(this).append(p);
            $(this).append(pre);
        });

        return self;

    };

}(jQuery, window, document));
