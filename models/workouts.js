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
                require: 'Please enter type of excercise'
            },
            name:{
                type: String,
                require: 'Please enter name of exercise'
            },
            duration:{
                type: Number,
                require: 'How long is this workout?'
            },
            distance:{
                type: Number
            },
            weight:{
                type: Number
            },
            reps:{
                type: Number
            },
            sets:{
                type: Number
            }
        }
    ]
})