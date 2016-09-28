const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  capabilities: {
    browserName: 'firefox',
    // browserName: 'chromium-browser',
    maxInstances: 1,
  },
  specs: ['./features/**/*-spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    print: () => {},
  },
  baseUrl: 'http://localhost:4200',
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'specs',
    }));
  },
};
