const assert = require('assert');
const strictEqual = assert.strictEqual;
const JasmineSmacker = require('../main');

describe('getting test name in multiple test suite', () => {

    it('should get test name in combined it() test', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in combined it() test');
    });

    it('should get test name in combined async it() test', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in combined async it() test');
    });

    describe('nested combined', function () {

        it('should get test name in nested combined it() test', () => {
            strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in nested combined it() test');
        });

        it('should get test name in nested combined async it() test', async () => {
            strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in nested combined async it() test');
        });

    });

});

describe('getting test name in separate test suite in same fine', () => {

    it('should get test name in separated it() test in same file', () => {
        strictEqual(JasmineSmacker.getCurrentTestName(), 'should get test name in separated it() test in same file');
    });

});