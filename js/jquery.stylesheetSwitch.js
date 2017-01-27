(function($, window, document) {

    $.fn.stylesheetSwitch = function() {

        var self = this;
        var stylesheets = [];
        stylesheets.push(self.attr('href'));
        stylesheets.push(self.data('altHref'));
        var selected = false;

        $(document).ready(function () {

            var toggleLink = $('<a href="#" style="position:fixed;z-index:10000;top:10px;left:10px">Toggle stylesheet</a>');
            toggleLink.click(function () {
                selected = !selected;
                var i = selected ? 1 : 0;
                self.attr('href', stylesheets[i]);
                return false;
            });

            $('body').append(toggleLink);

        });

        return this;

    };

}(jQuery, window, document));
