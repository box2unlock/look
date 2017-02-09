(function($, window, document) {

    var slugify = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    $.fn.tableOfContents = function(options) {

        var self = this;

        var settings = $.extend({
            section: '.js-table-of-contents',
            sectionItem: '.js-table-of-contents-item'
        }, options);

        var toc = '<ul>';

        $(settings.section).each(function () {
            var item = $(this).find(settings.sectionItem);
            var itemText = item.text();
            var id = slugify(itemText);
            var anchor = $('<a style="margin: 0 10px" href="#' + id + '">#</a>');
            $(this).attr('id', id);
            item.append(anchor);
            toc += '<li><a href="#' + id + '">' + itemText + '</a></li>';
        });

        toc += '</ul>';

        self.html(toc);

        return self;

    };

}(jQuery, window, document));
