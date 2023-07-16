[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-red.svg)](http://www.wtfpl.net/txt/copying/)
[![Deployment Status](https://img.shields.io/github/actions/workflow/status/Jezorko/smack-my-jasmine-up/deploy.yml?branch=master&label=Deployment&logo=npm&logoColor=red)](https://github.com/Jezorko/smack-my-jasmine-up/actions/workflows/deploy.yml)
[![Tests](https://img.shields.io/github/actions/workflow/status/Jezorko/smack-my-jasmine-up/test.yml?branch=master&label=Tests&logo=jest&logoColor=red)](https://github.com/Jezorko/smack-my-jasmine-up/actions/workflows/test.yml)
[![Most recent version in NPM](https://img.shields.io/npm/v/smack-my-jasmine-up.svg)](https://www.npmjs.com/package/smack-my-jasmine-up)

## What is this?
This is a very hacky solution to [this issue](https://github.com/jasmine/jasmine/issues/611) on Jasmine's GitHub.

Jasmine's devs did a tremendous job making it difficult to get any information about the current test execution environment.
In my opinion, this is a design flaw.

Please use it with care and good intentions.

## How does it work?

1. `it` and `fit` are overriden like in [Pyrolistical's comment](https://github.com/jasmine/jasmine/issues/611#issuecomment-363936493)
2. spec's name is assigned to a global variable
3. assertion closure runs
4. spec's name is unassigned

## Changelog

### 0.1.1

 * added support for fetching test definition names

### 0.1.0

 * upgraded for Jest ^29.6.1 and Jasmine ^5.0.2
 * `JasmineSmacker.getCurrentSpec()` is no longer supported

### 0.0.x

 * initial implementation, worked with Jest up to ^26.6.3

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
