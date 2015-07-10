(function (root, factory) {
    'use strict';
    // GLOBAL: Register to ui
    root.ui = typeof root.ui === 'undefined' ? {} : root.ui;
    root.ui.Menu = factory(jQuery);

}(this, function ($) {
    'use strict';

    /**
     * @constructor
     */
    function Menu(jq) {
        var

        /**
         * @property {jQuery} _jq
         * @private
         */
        // _jq = jq,

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

    return Menu;
}));
