(function($, window, document) {

    var slugify = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    $.fn.toc = function(options) {

        var self = this;

        var toc = '<ul>';

        self.each(function () {
            var item = $(this).find('> .legend').text();
            var id = slugify(item);
            $(this).attr('id', id);
            toc += '<li><a href="#' + id + '">' + item + '</a></li>';
        });

        toc += '</ul>';

        $(options.container).html(toc);

        return self;

    };

}(jQuery, window, document));
