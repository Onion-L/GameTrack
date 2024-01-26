import {defineStore} from "pinia";

export const usePlayerStore = defineStore('player',{
    state:() => {
        return {
            PLAYER_POSITION : ['GOALKEEPERS', 'DEFENDERS', 'MIDFIELDERS', 'FORWARDS'],
        }
    }
});