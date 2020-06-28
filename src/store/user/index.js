/* 
* Module user
*-----------------------
    contain states for game play
*/
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    state: {
        info: {
            name: "Player name",
            locale: "vi",
            photo: "",
            lastNLevel: 1,
            lastPoints: [0, 0, 0, 0, 0, 0]
        },
        friends : {
    
        },
        context: {
            
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
    
}