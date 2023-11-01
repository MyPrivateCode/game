const animations = require('./animations');

class NPC {
    character;
    constructor() {
        
    }


    static action(npcID, actionID) {
        // when end.. idle? or new action -> change animation
        // set NPC properties
        if (this.animation(actionID) === "done") NPC.action(npcID, this.getActionQueue(npcID));
    }
    animation(actionID) {
        setTimeout(() => {
            return "done"
        },);
    }
}