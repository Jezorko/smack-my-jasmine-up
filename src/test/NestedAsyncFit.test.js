const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in nested async fit() test', () => {

    describe('nested async fit()', () => {

        fit('should get test name in a nested async fit() test', async () => {
            strictEqual(
                JasmineSmacker.getCurrentTestName(),
                'should get test name in a nested async fit() test'
            );
        });

    });

});
