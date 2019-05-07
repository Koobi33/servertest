var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
   email: {
       type: String,
       unique: true,
       required: true,
       trim: true
   },
   name: {
       type: String,
       required: true,
       trim: true
   },
    password: {
       type: String,
        required: true
    }
});

UserSchema.static.authenticate = function(email, password, callback) {
    User.findOne({email: email})
        .exec(function (error, user) {
            if (error) {
                return callback(error);
            } else if (!user) {
                let err = new Error('Пользовователь с таким email не найден');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (error, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });

};

UserSchema.pre('save', function (next) {
   var user = this;
   bcrypt.hash(user.password, function (err, hash) {
       if (err)
       {
           return next(err);
       }
       next();
   })
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
