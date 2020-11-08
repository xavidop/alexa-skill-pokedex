'use strict';

// include the testing framework
const test = require('ask-sdk-test');
const skillHandler = require('../src/index.js').handler;
// i18n strings for all supported locales
const languageStrings = require('../src/utilities/languageStrings.js');
const i18n = require('i18next');

// initialize the testing framework
const skillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'es-ES',
};

i18n.init({
  lng: skillSettings.locale,
  resources: languageStrings,
});

const alexaTest = new test.AlexaTest(skillHandler, skillSettings);

describe('Pokedex Suite', function() {

  describe('AMAZON.HelpIntent', function() {
    alexaTest.test([
      {
        request:new test.IntentRequestBuilder(skillSettings, 'AMAZON.HelpIntent').build(),
        saysLike: i18n.t('HELP_MSG'), repromptsNothing: false, shouldEndSession: false,
      },
    ]);
  });

  describe('AMAZON.StopIntent', function() {
    alexaTest.test([
      {
        request:new test.IntentRequestBuilder(skillSettings, 'AMAZON.StopIntent').build(),
        saysLike: i18n.t('GOODBYE_MSG'), repromptsNothing: false, shouldEndSession: true,
      },
    ]);
  });

  describe('AMAZON.CancelIntent', function() {
    alexaTest.test([
      {
        request:new test.IntentRequestBuilder(skillSettings, 'AMAZON.CancelIntent').build(),
        saysLike: i18n.t('GOODBYE_MSG'), repromptsNothing: false, shouldEndSession: true,
      },
    ]);
  });

});
