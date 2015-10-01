/**
 * This is a simple test to see if mocha is working as expected.
 */
describe('The setup test', function() {
    'use strict';

    // 3rd party libs
    it('expects mocha to be working', function() {
        expect(true).to.be.true;
    });

    it('expects jQuery to be available', function() {
        expect(jQuery).to.not.be.undefined;
    });

    it('expects FastClick to be available', function() {
        expect(FastClick).to.not.be.undefined;
    });
});
