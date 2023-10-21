const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://coRBRank:i1tyhm8CLKnBazSQ@cluster0.wxs72.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
mongoose.connect('mongodb+srv://coRBRank:coRBRank@cluster0.wxs72.mongodb.net/?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;