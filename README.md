# angular-unit-test

Angular unit test

# Prerequisites

- Angular 7 cli/Angular 8 cli
- change the tsconfig.json to target the code to esnext module and not using es2015

# How to write unit test in angular by jasmine and protractor

### Issue when run `ng e2e`

1.  WebDriverError: unknown error: cannot find Chrome binary
    Solution: https://github.com/SeleniumHQ/selenium/issues/4863

If your Chrome is not installed in the standard location, you may have to explicitly specify it in your protractor.conf.js:

```js
capabilities: {
'browserName': 'chrome',
"chromeOptions": {
binary: "/Applications/your_path/Google Chrome.app/Contents/MacOS/Google Chrome"
},
},
```

Run this command to install chromedriver ==>`npm install chromedriver --save-dev`

# How to reuse common layouts in Angular using Router?

Build this project based on [medium article](https://blog.angularindepth.com/angular-routing-reusing-common-layout-for-pages-from-different-modules-440a23f86b57)

Followed [angular official website](https://angular.io/guide/lazy-loading-ngmodules)
