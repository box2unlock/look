(function($, window, document) {

    $.fn.horizontalGrid = function(options) {

        var self = this;

        var settings = $.extend({
            color: '#ccc',
            height: 20
        }, options);

        $(window).load(function () {

            var documentHeight = $(document).height();
            var horizontalGridHeight = 0;

            var html = '<div style="display:none;position:absolute;z-index:9998;top:0;left:0;width:100%;height:' + documentHeight + 'px;overflow:hidden">';
            while (horizontalGridHeight < documentHeight) {
                html += '<div style="box-shadow:0 -1px 0 ' + settings.color + ';height:' + settings.height + 'px"></div>';
                horizontalGridHeight = horizontalGridHeight + settings.height;
            }
            html += '</div>';

            var horizontalGrid = $(html);

            var toggleLink = $('<a href="#" class="look-button -small">Toggle horizontal grid</a>');
            toggleLink.click(function () {
                horizontalGrid.toggle();
                return false;
            });

            self.append(toggleLink);
            $('body').append(horizontalGrid);

        });

        return self;

    };

}(jQuery, window, document));
