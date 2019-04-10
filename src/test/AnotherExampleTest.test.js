const assert = require('assert');
const strictEqual = assert.strictEqual;
const fail = assert.fail;
const JasmineSmacker = require('../main');

describe('getting test name again', () => {

    it('should get test name again', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(),
            'should get test name again')
    });

    it.skip('should be skipped again', () => {
        fail('this should never happen')
    });

    it('should get test name in async test again', async () => {
        strictEqual(JasmineSmacker.getCurrentTestName(),
            'should get test name in async test again')
    });

});
