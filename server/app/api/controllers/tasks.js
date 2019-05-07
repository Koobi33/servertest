const tasksModel = require('../models/task');

module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        tasksModel.findById(req.params._id, function (err, tasksInfo) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "task found!", data: {tasks: tasksInfo}});
            }
        });
    },

    getAll: function(req, res, next) {
        let tasklist = [];

        tasksModel.find({}, function (err, tasks) {
            if (err) {
                next(err);
            } else {
                for (let task of tasks) {
                    tasklist.push({
                        id: task._id,
                        taskName: task.taskName,
                        taskDate: task.taskDate,
                        taskType: task.taskType,
                        taskIsComplete: task.taskIsComplete
                    });
                }

                res.json({status: "success", message: "task list complete!", data: {tasks: tasklista}});
            }
        });
    },

    updateById: function(req, res, next) {
        tasksModel.findByIdAndUpdate(req.params._id,{name:req.body.name}, function(err, taskInfo){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Task updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        tasksModel.findByIdAndRemove(req.params._id, function(err, taskInfo){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Task deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        tasksModel.create({
            id: task._id,
            taskName: req.body.taskName,
            taskDate: req.body.taskDate,
            taskType: req.body.taskType,
            taskIsComplete: req.body.taskIsComplete
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({status: "success", message: "Task added successfully!!!", data: null});

        });
    },
};