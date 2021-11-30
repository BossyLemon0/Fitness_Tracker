const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workouts = new Schema({
    day:{
        type: Date,
        default: Date.now();
    },
    exercises:[
        {
            type:{
                type: String,
                require: 'please enter type of excercise'
            },
            name:{
                type: String,
                require: 'please enter name of exercise'
            },
            duration:{

            },
            weight:{

            },
            reps:{

            },
            sets:{

            }
        }
    ]
})