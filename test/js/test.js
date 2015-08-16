(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Moto.png", id:"Moto"}
	]
};



// symbols:



(lib.Moto = function() {
	this.initialize(img.Moto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,272);


(lib.MyRect = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(195,194,191,0.949)").s("#000000").ss(1,1,1).dr(-75,-50,150,100);
	this.shape.setTransform(75,50);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,102);


(lib.Car = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Moto();
	this.instance.setTransform(-131,-136);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131,-136,262,272);


// stage content:
(lib.test = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.alpha = .5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(14));

	// Layer 3
	this.clip_2 = new lib.Car();
	this.clip_2.setTransform(401,534);

	this.timeline.addTween(cjs.Tween.get(this.clip_2).to({scaleX:0.49,scaleY:0.49,rotation:41,x:851,y:413},13).to({scaleX:1,scaleY:1,rotation:0},12).wait(1));

	// Layer 1
	this.clip_1 = new lib.MyRect();
	this.clip_1.setTransform(175,150,1,1,0,0,0,75,50);
	this.clip_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.clip_1).to({rotation:45,x:353,y:315},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(679.5,479.5,452.5,590.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;