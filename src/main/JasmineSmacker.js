let CURRENT_SPEC = undefined;

/** To make "enhancements" conflicts less likely to occur. */
const ENHANCED_SPEC_PROPERTY_NAME = 'JASMINE-SMACKER-ENHANCED';

if (it === undefined) throw new Error('cannot smack Jasmine if not in a test environment');
else if (it[ENHANCED_SPEC_PROPERTY_NAME] !== true) {
    it[ENHANCED_SPEC_PROPERTY_NAME] = true;
    const oldIt = it;
    it = Object.assign((name, closure) => {
        const spec = oldIt(name, closure);
        const {description} = spec;
        Object.defineProperty(spec, 'description', {
            get() {
                CURRENT_SPEC = this;
                return description;
            }
        });
        return spec;
    }, oldIt);
}

class JasmineSmacker {

    /**
     * @returns {object|undefined} current spec if executed inside a test case,
     *                             otherwise undefined
     */
    static getCurrentSpec() {
        try {
            // 'it' calls cannot be nested
            // this will throw if we are inside a test case
            jasmine.getEnv().it('', () => undefined);
            // if it didn't throw, we are not inside a test case
            return undefined;
        } catch (error) {
            // our "enhancement" should have set this by now
            const result = CURRENT_SPEC;
            // clear the variable, just in case
            CURRENT_SPEC = undefined;
            return result;
        }
    }

    /**
     * @returns {string|undefined} test case name if executed inside a test case,
     *                             otherwise undefined
     */
    static getCurrentTestName() {
        const currentSpec = JasmineSmacker.getCurrentSpec();
        if (currentSpec === undefined) return undefined;
        else return currentSpec.description;
    }

}

module.exports = JasmineSmacker;
