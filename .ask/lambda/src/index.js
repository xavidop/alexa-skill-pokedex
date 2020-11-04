'use strict';

// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

let { LaunchRequestHandler } = require('./intents/launchRequestHandler');
let { HelpIntentHandler } = require('./intents/helpIntentHandler');
let { CancelAndStopIntentHandler } = require('./intents/cancelAndStopIntentHandler');
let { FallbackIntentHandler } = require('./intents/fallbackIntentHandler');
let { SessionEndedRequestHandler } = require('./intents/sessionEndedRequestHandler');
let { IntentReflectorHandler } = require('./intents/intentReflectorHandler');
let { PokemonInfoIntentHandler } = require('./intents/pokemonInfoIntentHandler');
let { ErrorHandler } = require('./errors/errorHandler');
let { LocalisationRequestInterceptor } = require('./interceptors/localisationRequestInterceptor');

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PokemonInfoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        FallbackIntentHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor)
    .lambda();
