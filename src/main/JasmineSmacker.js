let CURRENT_TEST_NAME = undefined;

[
    {testMethodToEnhance: it, setter: (newValue) => it = newValue},
    {testMethodToEnhance: fit, setter: (newValue) => fit = newValue}
]
    .forEach(testMethodToEnhanceAndSetter => {
        const testMethodToEnhance = testMethodToEnhanceAndSetter.testMethodToEnhance;
        if (testMethodToEnhance === undefined) throw new Error('cannot smack Jasmine if not in a test environment');

        const oldTestMethodToEnhance = testMethodToEnhance;
        const newTestMethod = Object.assign(
            (name, assertion, timeout) => {
                oldTestMethodToEnhance(name, async () => {
                    CURRENT_TEST_NAME = name;
                    await assertion();
                    CURRENT_TEST_NAME = undefined;
                }, timeout);
            },
            oldTestMethodToEnhance
        )
        testMethodToEnhanceAndSetter.setter(newTestMethod);
    });

class JasmineSmacker {

    /**
     * @returns {string|undefined} current test name if executed inside a test case,
     *                             otherwise undefined
     */
    static getCurrentTestName() {
        // our "enhancement" should have set this by now
        return CURRENT_TEST_NAME;
    }

}

module.exports = JasmineSmacker;
