const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workouts = new Schema({
    day:{
        type: Date,
        default: Date.now()
    },
    exercises:[
        {
            type: {
                trim:true,
                type: String,
                required: 'Please enter type of excercise'
            },
            name:{
                trim:true,
                type: String,
                required: 'Please enter name of exercise'
            },
            duration:{
                type: Number,
                required: 'How long is this workout?'
            },
            weight:{
                type: Number
            },
            distance:{
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
});

const Workouts = mongoose.model('workouts', workouts);

module.exports = Workouts;