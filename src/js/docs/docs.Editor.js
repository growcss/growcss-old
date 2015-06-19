(function(root, factory) {
    'use strict';
    // GLOBAL: Register to docs
    root.docs = typeof root.docs === 'undefined' ? {} : root.docs;
    root.docs.Editor = factory(jQuery);

}(this, function($) {
    'use strict';

    /**
     * @constructor
     */
    function Editor(jq) {
        var

        /**
         * @property {jQuery} _jq
         * @private
         */
        _jq = jq,

        /**
         * @property {Object} _interface
         * @private
         */
        _interface = {};

        function changeEditorContent () {
            _jq.find('.header select').change(function() {
                _jq.find('.content .html, .content .css, .content .javascript').hide();

                $(this).find('option:selected').each(function() {
                    _jq.find(this.value).show();
                });
            });
        }

        /**
         * @method init
         */
        _interface.init = function() {
            changeEditorContent();
        };

        /*!*/
        return _interface;
    }

    return Editor;
}));
