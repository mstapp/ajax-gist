/*
    jquery-ajax-gist.js
    Copyright (c) 2014 Michael Stapp. MIT license, details at https://github.com/mstapp/ajax-gist
*/

(function( $ ) {

    $.fn.ajaxgist = function() {

        return this.each(function() {
            var $el = $(this),
                src = $el.data('gist');

            // get gist html to embed (change '.../gist/name/123.js?file=1.js' -> '.../gist/name/123.json?file=1.js&callback=...')
            // to get HTML fragment via JSONP.
            src = src.replace(/\.js\b/, '.json');
            $.getJSON(src + '&callback=?', function(data) {

                // replace script with gist html
                $el.replaceWith( $(data.div) );

                // json contains stylesheet url, too. this call does de-dupe for us (only load css once per life of app).
                loadStylesheetOnce( 'https://gist.github.com/' + data.stylesheet );
            });

        });
    };

    var isLoaded = false;

    var loadStylesheetOnce = function(url) {
        if (isLoaded) return;

        isLoaded = true;
        $('head').append('<link rel="stylesheet" href="'+ url +'" type="text/css" />');
    };

}( jQuery ));
