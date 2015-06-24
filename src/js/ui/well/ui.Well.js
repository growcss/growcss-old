(function (root, factory) {
    'use strict';
    // GLOBAL: Register to ui
    root.ui = typeof root.ui === 'undefined' ? {} : root.ui;
    root.ui.Well = factory(jQuery);

}(this, function ($) {
    'use strict';

    /**
     * @constructor
     */
    function Well(jq) {
        var

        /**
         * @property {Object} _interface
         * @private
         */
        _interface = {};

        /**
         * @method init
         */
        _interface.init = function () {

        };

        /*!*/
        return _interface;

    }

    return Well;

}));
