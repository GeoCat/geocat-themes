/*
 * gctools.js
 * ~~~~~~~~~~~
 *
 * Sphinx JavaScript utilities for all documentation.
 *
 * :copyright: Copyright 2007-2020 by the Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */

/**
 * small helper function to urldecode strings
 */
jQuery.urldecode = function(x) {
    return decodeURIComponent(x).replace(/\+/g, ' ');
};

/**
 * This function returns the parsed url parameters of the
 * current request. Multiple values per key are supported,
 * it will always return arrays of strings for the value parts.
 */
jQuery.getQueryParameters = function(s) {
    if (typeof s === 'undefined')
        s = document.location.search;
    var parts = s.substr(s.indexOf('?') + 1).split('&');
    var result = {};
    for (var i = 0; i < parts.length; i++) {
        var tmp = parts[i].split('=', 2);
        var key = jQuery.urldecode(tmp[0]);
        var value = jQuery.urldecode(tmp[1]);
        if (key in result)
            result[key].push(value);
        else
            result[key] = [value];
    }
    return result;
};

/**
 * Small JavaScript module for the documentation.
 */
var gcDocumentation = {

    init : function() {
        this.rewriteLiveUrls();
    },
    rewriteLiveUrls: function() {

        var params = $.getQueryParameters();
        var terms = (params.live) ? params.live[0].split(/\s+/) : [];
        if (terms.length) {

            $("body a").each(function() {
                var hrefToReplace = $(this).attr('href');
                var strToReplace = "$PARAMETER";

                if (hrefToReplace.indexOf(strToReplace) > -1) {
                    var newHref = hrefToReplace.replaceAll(strToReplace, terms[0]);
                    // replace string
                    $(this).text(newHref);
                    // replace attribute
                    $(this).attr('href', newHref);
                }

            });

        }
    }
};

$(document).ready(function() {
    gcDocumentation.init();
});
