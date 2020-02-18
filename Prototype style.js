"use strict"

function devide() {
	console.log('------------------------------------------------------');
}

function Robot() {
	
	let name;
	let action;
}

Robot.prototype.work = function() {
	console.log("Я " + this.name + " - я " + this.action + ".");
}

Robot.prototype.setName = function(nameValue) {
	this.name = nameValue;
}

Robot.prototype.setAction = function(actionValue) {
	this.action = actionValue;
}

Robot.prototype.setName(Robot.name);
Robot.prototype.setAction('просто працюю');


function CoffeRobot() {}
	
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.setName('CoffeRobot');
CoffeRobot.prototype.setAction('варю каву');


function RobotDancer() {}
	
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.setName('RobotDancer');
RobotDancer.prototype.setAction('просто танцюю');


function RobotCooker() {}
	
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.setName('RobotCooker');
RobotCooker.prototype.setAction('просто готую');


let robot = new Robot();
robot.work();

let coffeRobot = new CoffeRobot();
coffeRobot.work();

let robotDancer = new RobotDancer();
robotDancer.work();

let robotCooker = new RobotCooker();
robotCooker.work();


let Robots = [];

Robots.push(new Robot(), new CoffeRobot(), new RobotDancer(), new RobotCooker());

devide();

for (let i = 0; i < Robots.length; i++) {
	Robots[i].work();
}