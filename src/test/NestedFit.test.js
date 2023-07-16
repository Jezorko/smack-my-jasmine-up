const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in nested fit() test', () => {

    describe('nested fit()', () => {

        fit('should get test name in nested fit() test', () => {
            strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in nested fit() test');
        });

    });

});