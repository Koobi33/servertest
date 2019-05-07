var mongoose= require('mongoose');
var TaskSchema = new mongoose.Schema({
    taskName: String,
    taskType: String,
    taskDate: String,
    taskIsComplete: String,
});

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;