'use strict';

/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. i18n.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
  es: {
    translation: {
      SKILL_NAME: 'Pokedex',
      WELCOME_MSG: '¡Hola! ¡bienvenido a tu pokedex! si deseas parar solo di: para!... entonces, ¿cómo te puedo ayudar?',
      HELLO_MSG: '¡Hola Mundo!',
      HELP_MSG: 'Puedes decir: que Pokemon es Pikachu... o simplemente para detenerme puedes decir: ¡Cancela!... ¿Cómo te puedo ayudar?',
      GOODBYE_MSG: 'Hasta luego entrenador Pokemon.',
      REFLECTOR_MSG: 'Acabas de activar {{intentName}}',
      FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
      ERROR_MSG: 'Lo siento, ha habido un error. Por favor inténtalo otra vez.',
      POKEMON_INFO_MSG: 'Creo que he visto un pokemon cercano'
    },
  },
  en: {
    translation: {
      SKILL_NAME: 'Pokedex',
      WELCOME_MSG: 'Hello! welcome to Pokedex, if you want to stop me just say: Cancel! ... then how can I help you?',
      HELLO_MSG: 'Hello World!',
      HELP_MSG: 'You can say: which Pokemon is Pikachu ... or simply to stop me you can say: Cancel! ... How can I help you?',
      GOODBYE_MSG: 'Goodbye Pokemon trainer.',
      REFLECTOR_MSG: 'You just activated {{intentName}}',
      FALLBACK_MSG: 'Sorry, I do not know anything about that. Please try again.',
      ERROR_MSG: 'Sorry, there was an error. Please try again.',
      POKEMON_INFO_MSG: 'I think I\'ve seen a pokemon close to us'
    },
  },
};
