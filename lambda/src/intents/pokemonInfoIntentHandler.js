'use strict';

const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const pokeUtils = require('../utilities/pokeUtil');
const alexaUtils = require('../utilities/alexaUtil');
const welcome_document = require('../documents/apla/info_pokemon.json'); 
const APL_TOKEN = 'pokemon_token';


module.exports = {
  PokemonInfoIntentHandler: {
    canHandle(handlerInput) {
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PokemonInfoIntent';
    },
    async handle(handlerInput) {

      let { requestEnvelope } = handlerInput;

      const locale = Alexa.getLocale(requestEnvelope);

      const pokemon = alexaUtils.getSlotMatched(handlerInput, 'pokemon');

      const pokemonInfo = await pokeUtils.getPokemonInfo(pokemon, locale)

      const speakOutput = i18n.t('POKEMON_INFO_MSG');


      const apla_data = {
        data: {
            textToSpeech: {
              text: speakOutput,
              pokemon: pokemon.pokemon,
              pokemonDescription: pokemonInfo
            },
            audio: 'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/gbhogmtx/107-battle%20%28vs%20wild%20pokemon%29.mp3',
            audioPokemon: 'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/csmyktdq/146-bulbasaur.mp3'
        }
      }
      
      handlerInput.responseBuilder.addDirective({
        type: 'Alexa.Presentation.APLA.RenderDocument',
        document: welcome_document,
        datasources: apla_data,
        token: APL_TOKEN
      });

      return handlerInput.responseBuilder
        //.speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    },
  },
};
