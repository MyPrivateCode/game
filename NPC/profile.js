const animations = require('./animations');

class NPC {
    character = {};
    instance;
    constructor() {
        
         this.instance = this;
    }


    static action(npcID, actionID) {
        // when end.. idle? or new action -> change animation
        // set NPC properties
        if (this.animation(actionID) === "done") NPC.action(npcID, this.getActionQueue(npcID));
    }
    actionThink(npcID) {
        // to consider .food, .inventory or .inventoryHome, ownInterests
    }
    getActionQueue(npcID) {
        return this.character[npcID].actionQueue.shift();
    }
    animation(actionID) {
        setTimeout(() => {
            return "done"
        },);
    }
}