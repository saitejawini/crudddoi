var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://harsha:Harsha572@ds031278.mlab.com:31278/meanappl');


var device = mongoose.model('device', mongoose.Schema({
	Dname: String,
	Did: String,
	Dstatus: String,
	cost: Number
}));



app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/Device', function (req, res) {
	device.find(function (err, devices) {
		if (err)
			res.send(err);
		res.json(devices);
	});
});

app.get('/api/Device/:id', function (req, res) {
	device.findOne({
		_id: req.params.id
	}, function (err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
});
app.post('/api/Device', function (req, res) {
	device.create(req.body, function (err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
});

app.delete('/api/Device/:id', function (req, res) {
	device.findOneAndRemove({
		_id: req.params.id
	}, function (err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
});
app.put('/api/Device/:id', function (req, res) {
	var query = {
		Dname: req.body.Dname,
		Did: req.body.Did,
		Dstatus: req.body.Dstatus,
		cost: req.body.cost,

	};
	device.findOneAndUpdate({
		_id: req.params.id
	}, query, function (err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
});
app.listen(process.env.PORT || 3000, function () {
	console.log('server is running on port 3000..');
});
