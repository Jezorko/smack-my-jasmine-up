const assert = require('assert');


describe('getting test name outside of test', () => {

    it('should throw when it() is not defined', () => {
        const tempIt = it;
        global.it = undefined;
        assert.throws(() => {
            require('../main');
        }, {
            name: 'Error',
            message: 'cannot smack Jasmine if not in a test environment'
        });
        global.it = tempIt;
    });

});