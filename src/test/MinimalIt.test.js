const assert = require('assert');
const strictEqual = assert.strictEqual;
const deepEqual = assert.deepEqual;
const fail = assert.fail;
const JasmineSmacker = require('../main');

describe('getting test name in it() test', () => {

    // we're not in a test yet!
    strictEqual(JasmineSmacker.getCurrentTestName(), undefined);

    deepEqual(JasmineSmacker.getCurrentTestDefinitionNames(), ['getting test name in it() test']);

    it('should get test name in it() test', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in it() test');
    });

    it('should get test name in it() test twice', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in it() test twice');
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in it() test twice');
    });

    it.skip('should be skipped', () => {
        fail('this should never happen');
    });

    // fit.skip no longer exists

});