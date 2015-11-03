(function ($, window, document, undefined) {
    'use strict';

    var CssClass,
        map = [],
        loader  = function (jq, UiClass) {
            if (!UiClass) {
                return;
            }

            jq.each(function () {
                new UiClass($(this)).init();
            });
        };

    /**
     * Map CSS classes to JS classes
     *
     * DOM elements with the class on the left will be initialised using the class on the right.
     */
    map['section.ui-well'] = ui.Well;
    map['header.ui-menu']  = ui.Menu;

    /**!
     * Auto initialize instances by CSS classname
     */
    for (CssClass in map) {
        loader($(CssClass), map[CssClass]);
    }

    /**
     * Fast click
     */
    if (typeof FastClick !== 'undefined') {
        $(function () {
            if (typeof document.body !== 'undefined') {
                FastClick.attach(document.body);
            }
        });
    }
}(jQuery, window, window.document));
