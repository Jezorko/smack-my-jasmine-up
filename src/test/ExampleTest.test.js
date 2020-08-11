const assert = require('assert');
const strictEqual = assert.strictEqual;
const fail = assert.fail;
const JasmineSmacker = require('../main');

describe('getting test name', () => {

    // we're not in a test yet!
    strictEqual(JasmineSmacker.getCurrentTestName(), undefined);

    it('should get test name', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name');
    });

    fit('should get test name in fit()', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in fit()');
    });

    it.skip('should be skipped', () => {
        fail('this should never happen');
    });

    fit.skip('fit() should be skipped', () => {
        fail('this should never happen');
    });

    it('should get test name in async test', async () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in async test');
    });

    fit('should get fit() test name in async test', async () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get fit() test name in async test');
    });

});

describe('getting test name in nested test', () => {

    describe('nested', () => {

        it('should get test name in nested test', () => {
            strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in nested test');
        });

        fit('should get fit() test name in nested test', () => {
            strictEqual(JasmineSmacker.getCurrentTestName(), 'should get fit() test name in nested test');
        });

        it('should get test name in a nested async test', async () => {
            strictEqual(
                JasmineSmacker.getCurrentTestName(),
                'should get test name in a nested async test'
            );
        });

        it('should get fit() test name in a nested async test', async () => {
            strictEqual(
                JasmineSmacker.getCurrentTestName(),
                'should get fit() test name in a nested async test'
            );
        });

    });

});
