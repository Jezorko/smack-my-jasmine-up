const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in nested async it() test', () => {

    describe('nested async it()', () => {

        it('should get test name in a nested async it() test', async () => {
            strictEqual(
                JasmineSmacker.getCurrentTestName(),
                'should get test name in a nested async it() test'
            );
        });

    });

});
