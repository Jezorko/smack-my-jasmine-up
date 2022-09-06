[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-red.svg)](http://www.wtfpl.net/txt/copying/)
[![Deployment Status](https://img.shields.io/github/workflow/status/Jezorko/smack-my-jasmine-up/Deploy%20to%20NPM?label=Deployment&logo=npm&logoColor=red)](https://github.com/Jezorko/smack-my-jasmine-up/actions/workflows/deploy.yml)
[![Tests](https://img.shields.io/github/workflow/status/Jezorko/smack-my-jasmine-up/Run%20all%20tests?label=Tests&logo=jest&logoColor=red)](https://github.com/Jezorko/smack-my-jasmine-up/actions/workflows/test.yml)
[![Most recent version in NPM](https://img.shields.io/npm/v/smack-my-jasmine-up.svg)](https://www.npmjs.com/package/smack-my-jasmine-up)

## What is this?
This is a very hacky solution to [this issue](https://github.com/jasmine/jasmine/issues/611) on Jasmine's GitHub.

Jasmine's devs did a tremendous job making it difficult to get any information about the current test execution environment.
In my opinion, this is a design flaw.

Please use it with care and good intentions.

## How does it work?

1. `it` is overriden like in [Pyrolistical's comment](https://github.com/jasmine/jasmine/issues/611#issuecomment-363936493)
2. spec's description getter is overriden to assign the spec to an outside scope
3. when getCurrentSpec is called from within a test case, we try running it of the current's environment
4. this throws an error because we are already in a test case
5. spec's description is used to build the error message - our overridden getter is called
6. finally, current spec is returned from the outside context

## How do I use it?

### Unit testing
First, add the project as a test dependency in `package.json` file (see most recent version in [npm](https://www.npmjs.com/package/smack-my-jasmine-up)):

```json
"devDependencies": {
    "smack-my-jasmine-up": "^version"
    ...
}
```

Next, import `JasmineSmacker` in your test file (or any class that runs within a test):

```javascript
const JasmineSmacker = require('smack-my-jasmine-up');
```

Finally, fetch the test case's name and use it for whatever reason:

```javascript
const currentTestName = JasmineSmacker.getCurrentTestName();
if (currentTestName !== undefined) {
    console.log(`cool, we are within ${currentTestName}!`)
}
```
 
## Contribution guidelines
All I ask for is tests and documentation in form of JS docstrings.
Feel free to submit a PR if you feel like it.
