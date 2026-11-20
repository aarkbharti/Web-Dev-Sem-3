const EventEmitter = require('events');
const emitter = new EventEmitter();
const time = new Date().toLocaleTimeString();

const informStudents = () => {
    console.log(`The bell has rung at ${time}! Students, please head to the classroom.`);
};

emitter.emit("bell-rang","10:00 AM");
emitter.emit("bell-rang","11:00 AM ");
//emitter.off("bell-rang",informStudents); 
emitter.emit("bell-rang",);