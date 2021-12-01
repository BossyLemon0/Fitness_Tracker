const router = require('express').Router();

const Workouts = require('../models/workouts')

//TODO: create two get routes, one gets the last workout and the
// other gets workouts in range

router.get('/workouts', (req,res) =>{
 Workouts.aggregate([{
    $addFields : {
        fullDuration : { $sum: "$exercises.duration"}
    }
}
]).then((workoutInfo)=>{
    res.json(workoutInfo);
}).catch(err => {
    res.status(400).json(err)
});
});

router.get('/workouts/range', (req,res)=>{
Workouts.aggregate([{
    $addFields: {
        totalDuration:{ $sum: "exercises.duration"}
    }
}]).then((workoutrange) =>{
    res.json(workoutrange);
}).catch(err =>{
    res.status(400).json(err);
})
})

//TODO: create a Post route to create a workout
router.post('/workouts', (req,res)=>{
Workouts.create(req.body)
.then(workoutInfo => {
    console.log(workoutInfo)
    res.json(workoutInfo)
}).catch(err =>{
    res.status(400).json(err)
})
})
//TODO: create a Put route to add exercises
router.put('/workouts/:id', (req,res)=>{
    Workouts.findByIdAndUpdate({_id : req.params.id}, { $push: { exercises : req.body}})
    .then((workoutInfo) => {
        console.log(workoutInfo)
        res.json(workoutInfo)
    })
    .catch(err =>{
        res.status(400).json(err)
    })
})

module.exports = router;