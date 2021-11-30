const router = require('express').Router();

const Workouts  = require('../models/workouts')

//TODO: create two get routes, one gets the last workout and the
// other gets workouts in range

router.get('/workouts', (req,res) =>{
const lastWorkout = Workouts.Find(
    { exercises }
);
})

router.get('/workouts/range', (req,res)=>{

})

//TODO: create a Post route to create a workout
router.post('/workouts', (req,res)=>{

})
//TODO: create a Put route to add exercises
router.put('/workouts/:id', (req,res)=>{
    Workouts.findByIdAndUpdate({_id : req.params.id}, {$push: {exercices: req.body}})
    .then((workoutInfo) => {
        res.json(workoutInfo)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

module.exports = router;