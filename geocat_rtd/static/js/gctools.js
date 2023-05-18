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
 * Small JavaScript module to fix http://localhost:8080/geoserver examples.
 *
 * live=instance.geocat.live results in https://instance.geocat.live/mapping
 * domain=domain.net results in https://domain.net/geoserver
 */
var FixLocalHostExamples = {

    init : function() {
        console.log("documentation example...");
        this.rewriteLiveUrls();
    },
    rewriteLiveUrls: function() {

        var params = $.getQueryParameters();
        
        var live = (params.live) ? params.live[0].split(/\s+/) : [];
        var domain = (params.domain) ? params.domain[0].split(/\s+/) : [];
        var geoserverSearch = "http://localhost:8080/geoserver";
        var geoserverReplace = "";
        var geonetworkSearch = "http://localhost:8080/geonetwork";
        var geonetworkReplace;
        
        
        if (live.length ) {
            geoserverReplace = "https://".concat(live[0],".geocat.live/mapping");
            geonetworkReplace = "https://".concat(live[0],".geocat.live/catalogue");
        }
        if (domain.length) {
            geoserverReplace = "https://".concat(domain[0],"/geoserver");
            geonetworkReplace = "https://".concat(domain[0],"/geonetwork");
        }
        if (geoserverReplace.length) {
            $("body a").each(function() {
                var hrefToReplace = $(this).attr('href');
                
                if (hrefToReplace.indexOf(geoserverSearch) > -1) {
                    var newHref = hrefToReplace.replaceAll(geoserverSearch, geoserverReplace);
                    
                    // replace attribute
                    $(this).attr('href', newHref);

                    var textToReplace = $(this).text();
                    if (textToReplace.length && textToReplace.indexOf(geoserverSearch) > -1) {
                        var newText = textToReplace.replaceAll(geoserverSearch, geoserverReplace);
                    
                        // replace string
                        $(this).text(newText);
                    }
                }
                
                if (hrefToReplace.indexOf(geonetworkSearch) > -1) {
                    var newHref = hrefToReplace.replaceAll(geonetworkSearch, geonetworkReplace);
                    
                    // replace attribute
                    $(this).attr('href', newHref);

                    var textToReplace = $(this).text();
                    if (textToReplace.length && textToReplace.indexOf(geonetworkSearch) > -1) {
                        var newText = textToReplace.replaceAll(geonetworkSearch, geonetworkReplace);
                    
                        // replace string
                        $(this).text(newText);
                    }
                }

            });
        }
    }
};

$(document).ready(function() {
    FixLocalHostExamples.init();
});
