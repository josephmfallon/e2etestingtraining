

exports.config = {
  tests: './e2etests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      SmartWait: 10000,
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: '1920x1080'
    },
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder : "./output/",
      baseFolder: "./e2etests/screenshots/base/",
      diffFolder: "./e2etests/screenshots/diff/"
     }
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        admin: {
          // login function is defined in `steps_file.js`
          login: (I) => I.login(),
          // if we see `Signed in successfully.` on page, we assume we are logged in
          check: (I) => {
            //   pause();
             I.amOnPage(process.env.aevi_admin_site);
            //  console.log('check');
             I.see('Signed in successfully.');
             }
           }
         }
       },
    allure: {
      enabled: true
      },
    retryFailedStep: {
      enabled: true
     },
     autoDelay: {
      enabled: true
    } 
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "mochaFile": "output/result.xml"
    }
  },
  name: 'e2e_codecept_selenium'
}
