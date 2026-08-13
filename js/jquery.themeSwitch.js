(function($, window, document) {

    $.fn.themeSwitch = function(options) {

        var self = this;

        var toggleLink = $('<a href="#" class="look-button -small"><i aria-hidden="true" class="fa-solid fa-circle-half-stroke"></i>Toggle theme</a>');
        toggleLink.click(function () {
            $('html').toggleClass('dark');
            return false;
        });

        self.append(toggleLink);

        return self;

    };

}(jQuery, window, document));
