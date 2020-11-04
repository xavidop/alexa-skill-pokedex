'use strict';

const axios = require('axios');
const pokeApi = 'https://pokeapi.co/api/v2/'

module.exports = { 

    getSlotMatched : function getSlotMatched(handlerInput, slotToFind) {

        const slotsInRequest = handlerInput.requestEnvelope.request.intent.slots;

        if (slotsInRequest[slotToFind] &&
            slotsInRequest[slotToFind].resolutions &&
            slotsInRequest[slotToFind].resolutions.resolutionsPerAuthority[0] &&
            slotsInRequest[slotToFind].resolutions.resolutionsPerAuthority[0].status &&
            slotsInRequest[slotToFind].resolutions.resolutionsPerAuthority[0].status.code) {
                if(slotsInRequest[slotToFind].resolutions.resolutionsPerAuthority[0].status.code === 'ER_SUCCESS_MATCH'){
                    const returnObject = {
                        id: slotsInRequest[slotToFind].resolutions.resolutionsPerAuthority[0].values[0].value.id - 1,
                        pokemon: slotsInRequest[slotToFind].resolutions.resolutionsPerAuthority[0].values[0].value.name
                    }

                    return returnObject;
                }else{
                    return null;
                }

        }else{
            return null;
        }
        
    }
}
