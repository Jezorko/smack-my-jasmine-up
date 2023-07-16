const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in async it() test', () => {

    it('should get test name in async it() test', async () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in async it() test');
    });

});