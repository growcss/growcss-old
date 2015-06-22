/**
 * This is a simple test to see if jasmine is working as expected.
 */
describe('The setup test', function() {

	// 3rd party libs

	it('expects jasmine to be working', function() {
		expect(true).toBe(true);
	});

	it('expects jQuery to be available', function() {
		expect(jQuery).toBeDefined();
	});

	it('expects FastClick to be available', function() {
		expect(FastClick).toBeDefined();
	});

});