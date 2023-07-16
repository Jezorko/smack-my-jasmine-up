const assert = require('assert');
const strictEqual = assert.strictEqual;
const deepEqual = assert.deepEqual;
const JasmineSmacker = require('../main');

describe('getting test name in nested it() test', () => {

    describe('nested it()', () => {

        it('should get test name in nested it() test', () => {
            strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in nested it() test');
        });

        deepEqual(JasmineSmacker.getCurrentTestDescriptionNames(), [
            'getting test name in nested it() test',
            'nested it()'
        ]);

    });

});