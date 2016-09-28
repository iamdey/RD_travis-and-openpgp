const SpecReporter = require('jasmine-spec-reporter');
const isTestEnv = process.env.NODE_ENV === 'test';

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
  baseUrl: isTestEnv ? 'http://localhost:4200' : 'http://localhost:4000/app/',
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'specs',
    }));
  },
};
