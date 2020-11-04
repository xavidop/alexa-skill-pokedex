'use strict';

const axios = require('axios');
const pokeApi = 'https://pokeapi.co/api/v2/'

module.exports = { 

     getPokemonInfo : async function getPokemonInfo(pokemon, language) {
        
        const data = await sendGetRequest('pokemon-species/' + pokemon.id);
        
        const infoArray = data.flavor_text_entries;

        var pokemonInfoToReturn = '';
        var length = 0;

        for (var i = 0; i < infoArray.length; i+=1) {
            const info = infoArray[i];
            if(info.language &&
                info.language.name &&
                language.includes(info.language.name)){
                    var infoPokemon = info.flavor_text;

                    if(infoPokemon.length >= length){
                        length = infoPokemon.length;
                        pokemonInfoToReturn = infoPokemon;
                    }
            }
          }
       
        return pokemonInfoToReturn;

    }
}


const sendGetRequest = async (uri) => {
    try {
        const resp = await axios.get(pokeApi + uri);
        console.log(resp.data)
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

