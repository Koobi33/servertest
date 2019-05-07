const express = require('express');
const router = express.Router();
const tasksController = require('../app/api/controllers/tasks');


router.get('/', tasksController.getAll);
router.post('/', tasksController.create);
router.get('/:taskId', tasksController.getById);
router.put('/:taskId', tasksController.updateById);
router.delete('/:taskId', tasksController.deleteById);
module.exports = router;


// //GET home
//
// router.get('/', function (res, req, next) {
//     if (!req.session.userId) {
//         let err = new Error('Чтобы просматривать эту страницу, нужно войти!');
//         err.status = 403;
//         return res.redirect('/403');
//     } else {
//         User.findById(req.session.userId)
//             .exec(function (error, user) {
//                 if (error) {
//                     return next(error);
//                 } else {
//                     return res.redirect('/index.html')
//                 }
//             });
//     }
// });
//
//
// //GET one task
// router.get('/tasks/:taskName', function (req, res, next) {
//     db.collection('tasks').findOne({taskName: req.body.taskName}, function (err, doc) {
//         if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//         }
//         res.send(doc);
//     })
// });
//
// //POST add task
// router.post('/tasks/add', function (req, res, next) {
//     if (req.body.taskName && req.body.taskType && req.body.taskDate && req.body.taskIsComplete) {
//         let newTask = {
//             taskName: req.body.taskName,
//             taskType: req.body.taskType,
//             taskDate: req.body.taskDate,
//             taskIsComplete: req.body.taskIsComplete
//         };
//         Task.create(newTask, function (error, task) {
//             if (error) {
//                 return next(error);
//             } else  {
//                 req.redirect('/');
//             }
//         })
//     }
// });
//
// reuter.del('/tasks/delete/:taskName', function(req, res, next) {
//     Œ
// }
