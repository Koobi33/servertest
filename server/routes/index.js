const express = require('express');
const router = express.Router();
import User from 'app/api/models/user';
import Task from 'app/api/models/task';


//GET registration
router.get('/registration', function (req, res, next) {
   return res.redirect('/registration.html');
});
//POST registration
router.post('/registration', function (req, res, next) {
    if (req.body.email && req.body.name && req.body.password && req.body.password2) {
        if (req.body.password !== req.body.password2) {
            let err = new Error('Пароли не совпадают');
            err.status = 400;
            return next(err);
        } else {
            let newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };

            User.create(newUser, function (error, user) {
                if(error) {
                    return next(error);
                } else {
                    req.session.userId = user._id;
                    return res.redirect('/');
                }
            });
            // db.collection('users').insertOne(newUser, (err, result) => {
            //     if (err) {
            //         console.log(err);
            //         return res.sendStatus(500);
            //     }
            //     res.send(task);
            //     res.redirect('/login');
            // })
        }
    } else {
        let err = new Error('Все поля обязательны для заполнения');
        err.status = 400;
        return next(err);
    }
});



//GET login
router.get('/login', function (req, res, next) {
   res.redirect('/login.html');
});




//POST login
router.post('login', (req, res, next) => {
    if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
        if (error || !user) {
            let err = new Error('Неверный email или пароль');
            err.status = 401;
            return next(err)
        } else {
            req.session.userId = user._id;
            return res.redirect('/');
        }
    })
    } else {
        let err = new Error('Email или пароль пусты!');
        err.status = 401;
        return next(err);
    }
});

module.exports = router;