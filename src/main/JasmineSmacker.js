let CURRENT_TEST_DESCRIPTIONS = {
    currentValue: [],
    pushValue: (newValue) => CURRENT_TEST_DESCRIPTIONS.currentValue.push(newValue),
    popValue: () => CURRENT_TEST_DESCRIPTIONS.currentValue.pop()
};
let CURRENT_TEST_NAME = {
    currentValue: undefined,
    pushValue: (newValue) => CURRENT_TEST_NAME.currentValue = newValue,
    popValue: () => CURRENT_TEST_NAME.currentValue = undefined
};

[
    {
        testMethodToEnhance: global.describe,
        setTestMethod: (newValue) => global.describe = newValue,
        globalProp: CURRENT_TEST_DESCRIPTIONS
    },
    {
        testMethodToEnhance: global.fdescribe,
        setTestMethod: (newValue) => global.fdescribe = newValue,
        globalProp: CURRENT_TEST_DESCRIPTIONS
    },
    {
        testMethodToEnhance: global.it,
        setTestMethod: (newValue) => global.it = newValue,
        globalProp: CURRENT_TEST_NAME
    },
    {
        testMethodToEnhance: global.fit,
        setTestMethod: (newValue) => global.fit = newValue,
        globalProp: CURRENT_TEST_NAME
    }
].forEach(methodConfiguration => {
    const testMethodToEnhance = methodConfiguration.testMethodToEnhance;
    if (testMethodToEnhance === undefined) throw new Error('cannot smack Jasmine if not in a test environment');

    const oldTestMethodToEnhance = testMethodToEnhance;
    const globalProp = methodConfiguration.globalProp;
    const newTestMethod = Object.assign(
        (name, closure, timeout) => {
            oldTestMethodToEnhance(name, () => {
                globalProp.pushValue(name);
                Promise.resolve(closure()).then(() => {
                    globalProp.popValue();
                });
            }, timeout);
        },
        oldTestMethodToEnhance
    )
    methodConfiguration.setTestMethod(newTestMethod);
});

class JasmineSmacker {

    /**
     * @returns {string|undefined} current test name if executed inside a test case,
     *                             otherwise undefined
     */
    static getCurrentTestName() {
        return CURRENT_TEST_NAME.currentValue;
    }

    /**
     * @returns {string[]|undefined} current test description names if executed inside a define block,
     *                               ordered by nesting level,
     *                               otherwise undefined
     */
    static getCurrentTestDescriptionNames() {
        return CURRENT_TEST_DESCRIPTIONS.currentValue;
    }

}

module.exports = JasmineSmacker;
