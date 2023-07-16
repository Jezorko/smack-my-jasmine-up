const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in fit() test', () => {

    fit('should get test name in fit() test', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in fit() test');
    });

    // fit.skip no longer exists

});