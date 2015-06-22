(function($, window, document, undefined) {
	'use strict';

	var cssClass,
	map = [],
        loader  = function(jq, uiClass) {
	if (!uiClass) {
		return;
	}

	jq.each(function() {
		new uiClass($(this)).init();
	});
        };

	/**
	     * Map CSS classes to JS classes
	     *
	     * DOM elements with the class on the left will be initialised using the class on the right.
	     */
	
	map['section.ui-well'] = ui.Well;

	/*!
	     * Auto initialize instances by CSS classname
	     */
	for (cssClass in map) {
		loader($(cssClass), map[cssClass]);
	}

	/*
	     * Fast click
	     */
	if (typeof FastClick !== 'undefined') {
		$(function() {
			if (typeof document.body !== 'undefined') {
				FastClick.attach(document.body);
			}
		});
	}
}(jQuery, window, window.document));
