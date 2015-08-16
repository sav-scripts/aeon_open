(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1040,
	fps: 30,
	color: "#666666",
	manifest: [
		{src:"images/game_bg.png", id:"game_bg"},
		{src:"images/game_bg_shadow.png", id:"game_bg_shadow"},
		{src:"images/game_btn.png", id:"game_btn"},
		{src:"images/game_btn_ov.png", id:"game_btn_ov"},
		{src:"images/game_card.png", id:"game_card"},
		{src:"images/game_card_tit.png", id:"game_card_tit"},
		{src:"images/game_time.png", id:"game_time"},
		{src:"images/game_tit01.png", id:"game_tit01"},
		{src:"images/game_tit02.png", id:"game_tit02"},
		{src:"images/game_tit03.png", id:"game_tit03"},
		{src:"images/index_btn_main.png", id:"index_btn_main"},
		{src:"images/index_btn_peo.png", id:"index_btn_peo"},
		{src:"images/index_btn_peo_shadow.png", id:"index_btn_peo_shadow"},
		{src:"images/index_btn_shadow.png", id:"index_btn_shadow"},
		{src:"images/index_ground.png", id:"index_ground"},
		{src:"images/index_peo01.png", id:"index_peo01"},
		{src:"images/index_peo02.png", id:"index_peo02"},
		{src:"images/index_sea.png", id:"index_sea"},
		{src:"images/index_sky.jpg", id:"index_sky"},
		{src:"images/index_tit.png", id:"index_tit"},
		{src:"images/index_tree_l01.png", id:"index_tree_l01"},
		{src:"images/index_tree_l02.png", id:"index_tree_l02"},
		{src:"images/index_tree_r01.png", id:"index_tree_r01"},
		{src:"images/index_tree_r02.png", id:"index_tree_r02"}
	]
};



// symbols:



(lib.game_bg = function() {
	this.initialize(img.game_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,743,940);


(lib.game_bg_shadow = function() {
	this.initialize(img.game_bg_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,63);


(lib.game_btn = function() {
	this.initialize(img.game_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,88);


(lib.game_btn_ov = function() {
	this.initialize(img.game_btn_ov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,88);


(lib.game_card = function() {
	this.initialize(img.game_card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,207);


(lib.game_card_tit = function() {
	this.initialize(img.game_card_tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,207);


(lib.game_time = function() {
	this.initialize(img.game_time);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,40);


(lib.game_tit01 = function() {
	this.initialize(img.game_tit01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,412,172);


(lib.game_tit02 = function() {
	this.initialize(img.game_tit02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,8);


(lib.game_tit03 = function() {
	this.initialize(img.game_tit03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,56);


(lib.index_btn_main = function() {
	this.initialize(img.index_btn_main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,168);


(lib.index_btn_peo = function() {
	this.initialize(img.index_btn_peo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,158);


(lib.index_btn_peo_shadow = function() {
	this.initialize(img.index_btn_peo_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,73);


(lib.index_btn_shadow = function() {
	this.initialize(img.index_btn_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,50);


(lib.index_ground = function() {
	this.initialize(img.index_ground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,295);


(lib.index_peo01 = function() {
	this.initialize(img.index_peo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,690);


(lib.index_peo02 = function() {
	this.initialize(img.index_peo02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,674);


(lib.index_sea = function() {
	this.initialize(img.index_sea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,474);


(lib.index_sky = function() {
	this.initialize(img.index_sky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,648);


(lib.index_tit = function() {
	this.initialize(img.index_tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,908,307);


(lib.index_tree_l01 = function() {
	this.initialize(img.index_tree_l01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,563);


(lib.index_tree_l02 = function() {
	this.initialize(img.index_tree_l02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,550);


(lib.index_tree_r01 = function() {
	this.initialize(img.index_tree_r01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,563);


(lib.index_tree_r02 = function() {
	this.initialize(img.index_tree_r02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,550);


(lib.Tree_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tree_l02();
	this.instance.setTransform(-105,-533.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105,-533.1,302,550);


(lib.Tree_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tree_l01();
	this.instance.setTransform(-108,-536.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108,-536.1,309,563);


(lib.Title = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_tit01();
	this.instance.setTransform(-206,-86);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206,-86,412,172);


(lib.StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_btn();
	this.instance.setTransform(-145.5,-44);

	this.instance_1 = new lib.game_btn_ov();
	this.instance_1.setTransform(-145.5,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,-44,291,88);


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.game_bg, null, new cjs.Matrix2D(1,0,0,1,-371.5,-896.6)).s().p("Eg6CAGxIAAthMB0FAAAIAANhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-371.5,-43.3,743,86.7);


(lib.IntroText = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_tit03();
	this.instance.setTransform(-139,-28);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139,-28,278,56);


(lib.IndexTitle = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit();
	this.instance.setTransform(-454,-153.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-454,-153.5,908,307);


(lib.IndexStartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.index_btn_main, null, new cjs.Matrix2D(1,0,0,1,-85.5,-84)).s().p("AtVNHIAA6NIasAAIAAaNg");
	this.shape.setTransform(0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.index_btn_main, null, new cjs.Matrix2D(1,0,0,1,-256.5,-84)).s().p("AtWNHIAA6NIasAAIAAaNg");
	this.shape_1.setTransform(-2.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-84,171,168);


(lib.IndexRight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_peo02();
	this.instance.setTransform(-235,-337);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-235,-337,470,674);


(lib.IndexLeft = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_peo01();
	this.instance.setTransform(-172,-345);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172,-345,344,690);


(lib.DotLine = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_tit02();
	this.instance.setTransform(-188.5,-4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-188.5,-4,377,8);


(lib.ContentContainer = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.BlueBackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(36,189,234,0.949)").s().dr(-317.5,-318.5,635,637);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-317.5,-318.5,635,637);


(lib.Basement = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.game_bg, null, new cjs.Matrix2D(1,0,0,1,-371.5,-426.6)).s().p("Eg6BBCqMAAAiFTMB0DAAAMAAACFTg");
	this.shape.setTransform(-32,-47);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-403.5,-473.6,743,853.3);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tree_1();

	this.instance_1 = new lib.Tree_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewY:0}}]}).to({state:[{t:this.instance_1,p:{skewY:0}}]},1).to({state:[{t:this.instance,p:{skewY:180}}]},1).to({state:[{t:this.instance_1,p:{skewY:180}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-536.1,309,563);


(lib.MainScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Index:0,CardGame:30});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(390));

	// ContentContainer(Empty)
	this.contentContainer = new lib.ContentContainer();

	this.timeline.addTween(cjs.Tween.get(this.contentContainer).to({_off:true},236).wait(154));

	// L
	this.instance = new lib.Trees("single",1);
	this.instance.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({scaleX:0.93,scaleY:0.93,x:-387,y:280.8},30).to({scaleX:0.7,scaleY:0.7,x:-257.6,y:222.4,startPosition:0},30).to({_off:true},1).wait(239));

	// R
	this.instance_1 = new lib.Trees("single",3);
	this.instance_1.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({scaleX:0.93,scaleY:0.93,x:473.3,y:277.8},30).to({scaleX:0.7,scaleY:0.7,x:370.7,y:222.1,startPosition:2},30).to({_off:true},1).wait(239));

	// L
	this.instance_2 = new lib.Trees("single",0);
	this.instance_2.setTransform(-1076,651.6,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({scaleX:0.93,scaleY:0.93,x:-387,y:280.8},30).to({scaleX:0.7,scaleY:0.7,x:-257.6,y:222.4},30).to({_off:true},1).wait(269));

	// R
	this.instance_3 = new lib.Trees("single",2);
	this.instance_3.setTransform(1067.6,646.2,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({scaleX:0.93,scaleY:0.93,x:473.3,y:277.8},30).to({scaleX:0.7,scaleY:0.7,x:370.7,y:222.1},30).to({_off:true},1).wait(269));

	// Land
	this.instance_4 = new lib.index_ground();
	this.instance_4.setTransform(-960,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},236).wait(154));

	// L
	this.instance_5 = new lib.Trees("single",1);
	this.instance_5.setTransform(-257.6,222.4,0.696,0.696);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:-179,y:258},30).to({scaleX:0.46,scaleY:0.46,x:-151.5,y:251.8,alpha:0},14).to({_off:true},1).wait(195));

	// Trees
	this.instance_6 = new lib.Trees("single",3);
	this.instance_6.setTransform(370.7,222.1,0.696,0.696);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:292.2,y:257.9},30).to({scaleX:0.46,scaleY:0.46,x:264.7,y:251.7,alpha:0},14).to({_off:true},1).wait(195));

	// L
	this.instance_7 = new lib.Trees("single",0);
	this.instance_7.setTransform(-257.6,222.4,0.696,0.696);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:-179,y:258},30).to({scaleX:0.46,scaleY:0.46,x:-151.5,y:251.8,alpha:0},14).to({_off:true},1).wait(225));

	// Trees
	this.instance_8 = new lib.Trees("single",2);
	this.instance_8.setTransform(370.7,222.1,0.696,0.696);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:292.2,y:257.9},30).to({scaleX:0.46,scaleY:0.46,x:264.7,y:251.7,alpha:0},14).to({_off:true},1).wait(225));

	// Sea
	this.instance_9 = new lib.index_sea();
	this.instance_9.setTransform(-960,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},236).wait(154));

	// Sky
	this.instance_10 = new lib.index_sky();
	this.instance_10.setTransform(-960,-520);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},236).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1313.6,-533.2,2618.8,1244);


(lib.IndexButtonCombo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_btn_shadow();
	this.instance.setTransform(-2.5,-14);

	this.instance_1 = new lib.index_btn_peo_shadow();
	this.instance_1.setTransform(-149.6,-42);

	this.startButton = new lib.IndexStartButton();
	this.startButton.setTransform(66.5,-143);
	new cjs.ButtonHelper(this.startButton, 0, 1, 1);

	this.instance_2 = new lib.index_btn_peo();
	this.instance_2.setTransform(-129.5,-294);

	this.addChild(this.instance_2,this.startButton,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.6,-294,302.1,330);


(lib.CardGameClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:1,ReadyPlay:38});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
		this.dispatchEvent("readyPlay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(25));

	// IntroText
	this.instance = new lib.IntroText();
	this.instance.setTransform(-6,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:0,scaleY:0},12).to({_off:true},21).wait(25));

	// DotLine
	this.instance_1 = new lib.DotLine();
	this.instance_1.setTransform(-5,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleX:0,scaleY:0},10).to({_off:true},18).wait(25));

	// Title
	this.instance_2 = new lib.Title();
	this.instance_2.setTransform(15,-140.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({scaleX:0,scaleY:0},10).to({_off:true},13).wait(25));

	// StartButton
	this.btnStart = new lib.StartButton();
	this.btnStart.setTransform(-1,180.3);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).wait(20).to({scaleX:0,scaleY:0},11).to({_off:true},7).wait(25));

	// BlueBackground
	this.instance_3 = new lib.BlueBackground();
	this.instance_3.setTransform(-1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({scaleX:0,scaleY:0},12).to({_off:true},1).wait(25));

	// Basement
	this.instance_4 = new lib.Basement();
	this.instance_4.setTransform(9.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63));

	// Shadow
	this.instance_5 = new lib.Shadow();
	this.instance_5.setTransform(-22.5,422.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1567.3,-521,1968.3,1042);


(lib.IndexClip = function() {
	this.initialize();

	// LeftBike
	this.instance = new lib.IndexLeft();
	this.instance.setTransform(-138,164.1);

	// RightBike
	this.instance_1 = new lib.IndexRight();
	this.instance_1.setTransform(203,156.1);

	// StartButton
	this.startClip = new lib.IndexButtonCombo();
	this.startClip.setTransform(481.5,349.1);

	// Title
	this.instance_2 = new lib.IndexTitle();
	this.instance_2.setTransform(-8,-346.4);

	this.addChild(this.instance_2,this.startClip,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-462,-499.9,1096,1009);


// stage content:
(lib.GamePart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MainScene
	this.instance = new lib.MainScene();
	this.instance.setTransform(960.2,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(606.6,506.8,2618.8,1244);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;