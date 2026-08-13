(function($, window, document) {

    var TAB_SIZE = 4;

    // Markup read back from the DOM carries the indentation of its place in the
    // document, so it has to be dedented before it reads like source code.
    function formatCode(html) {

        var lines = $.map(html.replace(/\r\n?/g, '\n').split('\n'), function (line) {
            return line
                .replace(/^[ \t]+/, function (indent) {
                    return indent.replace(/\t/g, new Array(TAB_SIZE + 1).join(' '));
                })
                .replace(/[ \t]+$/, '');
        });

        while (lines.length && lines[0] === '') {
            lines.shift();
        }
        while (lines.length && lines[lines.length - 1] === '') {
            lines.pop();
        }

        // The first line starts right after the opening tag, so it has no
        // indentation of its own to compare against the ones below it.
        var offset = null;
        $.each(lines.slice(1), function (i, line) {
            if (line === '') {
                return;
            }
            var indent = line.match(/^ */)[0].length;
            if (offset === null || indent < offset) {
                offset = indent;
            }
        });

        return $.map(lines, function (line, i) {
            return i === 0 ? line.replace(/^ +/, '') : line.slice(offset || 0);
        }).join('\n');

    }

    $.fn.codeSample = function() {

        var self = this;

        self.each(function () {
            var button = $('<a href="#" class="look-button -black"><i class="fa-regular fa-file-code" aria-hidden="true"></i>Toggle code</a>');
            button.click(function () {
                $(this).closest(self).find('pre').toggle();
                return false;
            });
            var p = $('<p />');
            p.append(button);
            var code = $('<div />').text(formatCode($(this).html())).html();
            var pre = $('<pre style="display:none" />').html(code);
            $(this).append(p);
            $(this).append(pre);
        });

        return self;

    };

}(jQuery, window, document));
