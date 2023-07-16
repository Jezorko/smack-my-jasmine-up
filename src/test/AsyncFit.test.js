const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in async fit() test', () => {

    fit('should get test name in async fit() test', async () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in async fit() test');
    });

});