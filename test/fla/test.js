(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(195,194,191,0.949)").s("#000000").ss(1,1,1).dr(-75,-50,150,100);
	this.shape.setTransform(75,50);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,102);


// stage content:
(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.clip_1 = new lib.Symbol1();
	this.clip_1.setTransform(175,150,1,1,0,0,0,75,50);

	this.timeline.addTween(cjs.Tween.get(this.clip_1).to({rotation:45,x:353,y:315},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(699.5,499.5,151,101);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;