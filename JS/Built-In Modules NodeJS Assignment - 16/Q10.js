const { channel } = require("diagnostics_channel");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter()

const subscribemsg = (channelName) => {
    console.log(`Thanks for subscribing to ${channelName}`);
}

eventEmitter.addListener("subscribe", subscribemsg);

eventEmitter.emit("subscribe", "College Wallah")

console.log(`The default maximum num of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5)

console.log(`The updated maximum num of event listners are: ${eventEmitter.getMaxListeners()}`);