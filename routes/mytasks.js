const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Task = require('../models/task');

// POST AND GET FROM DATABASE
router.post('/tasks', function(req, res, next) {
    var newName = new Task({
        name: req.body.name
    });
    newName.save(function (err) {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User registered'});
        }
    });
});


router.get('/tasks', function(req, res) {
    Task.find(function (err, Task) {
        if (err) throw err
        res.json({task: Task});
    })

});

router.get('/testget', function(req, res) {
    Task.find(function (err, Task) {
        if (err) throw err
        res.json({task: Task});
    })

});

module.exports = router;