
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/browserTitle.js',
  'specs/browserInteract.js',
  'specs/browserMultipleScenario.js'],
  multiCapabilities: [{
    browserName: 'MicrosoftEdge'
  }, {
    browserName: 'chrome'
  }],
  onPrepare: function() {
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		savePath: './test/reports/'
}));
   }
}