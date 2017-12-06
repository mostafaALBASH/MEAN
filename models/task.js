const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const TaskItem = mongoose.Schema({
    name: {
        type: String
    }
});

const Task = module.exports = mongoose.model('Task', TaskItem);