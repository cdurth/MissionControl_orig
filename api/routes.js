var Todo = require('./models/todo');
var Gpio = require('onoff').Gpio;
var pad1 = new Gpio(4, 'out');
var pad2 = new Gpio(17, 'out');
var pad3 = new Gpio(27, 'out');
var pad4 = new Gpio(22, 'out');
var pad5 = new Gpio(10, 'out');
var pad6 = new Gpio(9, 'out');
var pad7 = new Gpio(11, 'out');
var pad8 = new Gpio(14, 'out');
var pad9 = new Gpio(15, 'out');
var pad10 = new Gpio(18, 'out');


module.exports = function(app) {	
	app.post('/api/launch', function(req, res){
		console.log(req.body);
		for(var i in req.body){
			console.log(req.body[i].id);
			
			var id = req.body[i].id;
			var delay = req.body[i].delay;
			
			switch(id){
				case "1":
					pad1.writeSync(0);
					setTimeout(function(){
						pad1.writeSync(1)
					},delay);
					console.log("Launch 1");
					break;
				case "2":
					pad2.writeSync(0);
					setTimeout(function(){
						pad2.writeSync(1)
					}, delay);
					console.log("Launch 2");
					break;
				case "3":
					pad3.writeSync(0);
					setTimeout(function(){
						pad3.writeSync(1)
					}, delay);
					console.log("Launch 3");
					break;
				case "4":
					pad4.writeSync(0);
					setTimeout(function(){
						pad4.writeSync(1)
					}, delay);
					console.log("Launch 4");
					break;
				case "5":
					pad5.writeSync(0);
					setTimeout(function(){
						pad5.writeSync(1)
					}, delay);
					console.log("Launch 5");
					break;
				case "6":
					pad6.writeSync(0);
					setTimeout(function(){
						pad6.writeSync(1)
					}, delay);
					console.log("Launch 6");
					break;
				case "7":
					pad7.writeSync(0);
					setTimeout(function(){
						pad7.writeSync(1)
					}, delay);
					console.log("Launch 7");
					break;
				case "8":
					pad8.writeSync(0);
						setTimeout(function(){
						pad8.writeSync(1)
					}, delay);
					console.log("Launch 8");
					break;
				case "9":
					console.log("Launch 9");
					break;
				case "10":
					console.log("Launch 10");
					break;
				case "11":
					console.log("Launch 11");
					break;
				case "12":
					console.log("Launch 12");
					break;
				default:
					console.log("Something broke");
					break;
					
			}
		}
		res.send(req.body);
	});
	
	function exit() {
		console.log("exit");
		led.unexport();
		process.exit();
	}

	process.on('SIGINT', exit);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
