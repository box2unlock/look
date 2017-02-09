(function($, window, document) {

    $.fn.stylesheetSwitch = function(options) {

        var self = this;

        var stylesheets = [];

        var stylesheet = $('[data-stylesheet-switch]');

        stylesheets.push(stylesheet.attr('href'));
        stylesheets.push(stylesheet.data('stylesheetSwitch'));
        var selected = false;

        var toggleLink = $('<a href="#" class="look-button -small">Toggle stylesheet</a>');
        toggleLink.click(function () {
            selected = !selected;
            var i = selected ? 1 : 0;
            stylesheet.attr('href', stylesheets[i]);
            $('body').toggleClass('-stylesheet-switched');
            return false;
        });

        self.append(toggleLink);

        return self;

    };

}(jQuery, window, document));
