const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribemsg = (channelName) => {
    console.log(`Thanks for subscribing to ${channelName}`);
}

eventEmitter.addListener("subscribe", subscribemsg);
eventEmitter.emit("subscribe", "College Wallah");
