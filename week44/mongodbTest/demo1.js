var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const userSchema = new mongoose.Schema({
	name:String,
	qq:{type:String,default:'1405491181'}
});

const User = mongoose.model('User',userSchema);

// const user01 = new User();
// user01.save();

const user02 = new User({
	name:'fan',
	qq:'1234'
});
user02.save();
