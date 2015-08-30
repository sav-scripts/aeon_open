(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 720,
	height: 1280,
	fps: 30,
	color: "#999999",
	manifest: [
		{src:"images/_360_bg01.png", id:"_360_bg01"},
		{src:"images/_360_bg02.png", id:"_360_bg02"},
		{src:"images/_360_bg03.png", id:"_360_bg03"},
		{src:"images/_360_bg04.png", id:"_360_bg04"},
		{src:"images/_360_bg05.png", id:"_360_bg05"},
		{src:"images/_360_bg06.png", id:"_360_bg06"},
		{src:"images/_360_bg07.png", id:"_360_bg07"},
		{src:"images/_360_bike01.png", id:"_360_bike01"},
		{src:"images/_360_bike02.png", id:"_360_bike02"},
		{src:"images/_360_bike_coin01.png", id:"_360_bike_coin01"},
		{src:"images/_360_bike_coin02.png", id:"_360_bike_coin02"},
		{src:"images/_360_bike_coin03.png", id:"_360_bike_coin03"},
		{src:"images/_360_bike_coin04.png", id:"_360_bike_coin04"},
		{src:"images/_360_bike_coin05.png", id:"_360_bike_coin05"},
		{src:"images/_360_bike_coin06.png", id:"_360_bike_coin06"},
		{src:"images/_360_bike_my01.png", id:"_360_bike_my01"},
		{src:"images/_360_bike_my02.png", id:"_360_bike_my02"},
		{src:"images/_360_bike_my03.png", id:"_360_bike_my03"},
		{src:"images/_360_bike_my04.png", id:"_360_bike_my04"},
		{src:"images/_360_bike_my05.png", id:"_360_bike_my05"},
		{src:"images/_360_bike_my06.png", id:"_360_bike_my06"},
		{src:"images/_360_lighting_bg.png", id:"_360_lighting_bg"},
		{src:"images/_360_lighting_light01.png", id:"_360_lighting_light01"},
		{src:"images/_360_lighting_light02.png", id:"_360_lighting_light02"},
		{src:"images/_360_lighting_light03.png", id:"_360_lighting_light03"},
		{src:"images/_360_lighting_light04.png", id:"_360_lighting_light04"},
		{src:"images/_360_lighting_light05.png", id:"_360_lighting_light05"},
		{src:"images/_360_lighting_light06.png", id:"_360_lighting_light06"},
		{src:"images/_360_lighting_light07.png", id:"_360_lighting_light07"},
		{src:"images/Bitmap45.jpg", id:"Bitmap45"},
		{src:"images/Bitmap58.jpg", id:"Bitmap58"},
		{src:"images/detail_t01.png", id:"detail_t01"},
		{src:"images/detail_t02.png", id:"detail_t02"},
		{src:"images/detail_tit.png", id:"detail_tit"},
		{src:"images/game_bg.png", id:"game_bg"},
		{src:"images/game_btn.png", id:"game_btn"},
		{src:"images/game_btn_ov.png", id:"game_btn_ov"},
		{src:"images/game_peo01.png", id:"game_peo01"},
		{src:"images/game_peo02.png", id:"game_peo02"},
		{src:"images/game_tit01pngcopy.png", id:"game_tit01pngcopy"},
		{src:"images/game_tit02.png", id:"game_tit02"},
		{src:"images/game_tit03_v2.png", id:"game_tit03_v2"},
		{src:"images/gift_btn.png", id:"gift_btn"},
		{src:"images/gift_copyright.png", id:"gift_copyright"},
		{src:"images/gift_pro01_v222.png", id:"gift_pro01_v222"},
		{src:"images/gift_pro02_v2222.png", id:"gift_pro02_v2222"},
		{src:"images/gift_pro03_v2222.png", id:"gift_pro03_v2222"},
		{src:"images/gift_tit.png", id:"gift_tit"},
		{src:"images/index_btn_main.png", id:"index_btn_main"},
		{src:"images/index_btn_peo.png", id:"index_btn_peo"},
		{src:"images/index_peo02pngcopy.png", id:"index_peo02pngcopy"},
		{src:"images/index_tit101.png", id:"index_tit101"},
		{src:"images/index_tit102.png", id:"index_tit102"},
		{src:"images/index_tit103.png", id:"index_tit103"},
		{src:"images/index_tit104.png", id:"index_tit104"},
		{src:"images/index_tit105.png", id:"index_tit105"},
		{src:"images/index_tit106pngcopy2.png", id:"index_tit106pngcopy2"},
		{src:"images/index_tree_l01pngcopy.png", id:"index_tree_l01pngcopy"},
		{src:"images/index_tree_l02pngcopy.png", id:"index_tree_l02pngcopy"},
		{src:"images/mobile_index_peo01.png", id:"mobile_index_peo01"},
		{src:"images/mobile_product01pngcopy.png", id:"mobile_product01pngcopy"},
		{src:"images/mobile_product02pngcopy.png", id:"mobile_product02pngcopy"},
		{src:"images/mobile_product03pngcopy.png", id:"mobile_product03pngcopy"},
		{src:"images/mobile_product04pngcopy.png", id:"mobile_product04pngcopy"},
		{src:"images/mobile_product05pngcopy.png", id:"mobile_product05pngcopy"},
		{src:"images/mobile_product06pngcopy.png", id:"mobile_product06pngcopy"},
		{src:"images/mobile_product07pngcopy.png", id:"mobile_product07pngcopy"},
		{src:"images/mobile_product08pngcopy2.png", id:"mobile_product08pngcopy2"},
		{src:"images/mobile_product09pngcopy.png", id:"mobile_product09pngcopy"},
		{src:"images/mobile_product10pngcopy.png", id:"mobile_product10pngcopy"},
		{src:"images/mobile_product_bgpngcopy.png", id:"mobile_product_bgpngcopy"},
		{src:"images/product_back.png", id:"product_back"},
		{src:"images/product_bg01.png", id:"product_bg01"},
		{src:"images/product_bg02.png", id:"product_bg02"},
		{src:"images/product_bg03.png", id:"product_bg03"},
		{src:"images/product_bg04.png", id:"product_bg04"},
		{src:"images/product_bg05.png", id:"product_bg05"},
		{src:"images/product_bg06.png", id:"product_bg06"},
		{src:"images/product_bg07.png", id:"product_bg07"},
		{src:"images/product_bg09.png", id:"product_bg09"},
		{src:"images/product_bg_line.png", id:"product_bg_line"},
		{src:"images/product_name01.png", id:"product_name01"},
		{src:"images/product_name02.png", id:"product_name02"},
		{src:"images/product_o.png", id:"product_o"},
		{src:"images/product_oo.png", id:"product_oo"},
		{src:"images/product_pro01.png", id:"product_pro01"},
		{src:"images/product_pro02pngcopy.png", id:"product_pro02pngcopy"},
		{src:"images/product_v.png", id:"product_v"},
		{src:"images/ston.png", id:"ston"}
	]
};



// symbols:



(lib._360_bg01 = function() {
	this.initialize(img._360_bg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,57);


(lib._360_bg02 = function() {
	this.initialize(img._360_bg02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,117);


(lib._360_bg03 = function() {
	this.initialize(img._360_bg03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,57);


(lib._360_bg04 = function() {
	this.initialize(img._360_bg04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,57);


(lib._360_bg05 = function() {
	this.initialize(img._360_bg05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,79);


(lib._360_bg06 = function() {
	this.initialize(img._360_bg06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,690,690);


(lib._360_bg07 = function() {
	this.initialize(img._360_bg07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,782);


(lib._360_bike01 = function() {
	this.initialize(img._360_bike01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,472);


(lib._360_bike02 = function() {
	this.initialize(img._360_bike02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,448);


(lib._360_bike_coin01 = function() {
	this.initialize(img._360_bike_coin01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,502);


(lib._360_bike_coin02 = function() {
	this.initialize(img._360_bike_coin02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,447);


(lib._360_bike_coin03 = function() {
	this.initialize(img._360_bike_coin03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,521);


(lib._360_bike_coin04 = function() {
	this.initialize(img._360_bike_coin04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,538);


(lib._360_bike_coin05 = function() {
	this.initialize(img._360_bike_coin05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,481);


(lib._360_bike_coin06 = function() {
	this.initialize(img._360_bike_coin06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,438);


(lib._360_bike_my01 = function() {
	this.initialize(img._360_bike_my01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,534);


(lib._360_bike_my02 = function() {
	this.initialize(img._360_bike_my02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,406);


(lib._360_bike_my03 = function() {
	this.initialize(img._360_bike_my03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,497);


(lib._360_bike_my04 = function() {
	this.initialize(img._360_bike_my04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,543);


(lib._360_bike_my05 = function() {
	this.initialize(img._360_bike_my05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,505);


(lib._360_bike_my06 = function() {
	this.initialize(img._360_bike_my06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,411);


(lib._360_lighting_bg = function() {
	this.initialize(img._360_lighting_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,561,151);


(lib._360_lighting_light01 = function() {
	this.initialize(img._360_lighting_light01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib._360_lighting_light02 = function() {
	this.initialize(img._360_lighting_light02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib._360_lighting_light03 = function() {
	this.initialize(img._360_lighting_light03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib._360_lighting_light04 = function() {
	this.initialize(img._360_lighting_light04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib._360_lighting_light05 = function() {
	this.initialize(img._360_lighting_light05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib._360_lighting_light06 = function() {
	this.initialize(img._360_lighting_light06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib._360_lighting_light07 = function() {
	this.initialize(img._360_lighting_light07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,93);


(lib.Bitmap45 = function() {
	this.initialize(img.Bitmap45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,1800);


(lib.Bitmap58 = function() {
	this.initialize(img.Bitmap58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,744);


(lib.detail_t01 = function() {
	this.initialize(img.detail_t01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,421);


(lib.detail_t02 = function() {
	this.initialize(img.detail_t02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,423);


(lib.detail_tit = function() {
	this.initialize(img.detail_tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,76);


(lib.game_bg = function() {
	this.initialize(img.game_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,743,940);


(lib.game_btn = function() {
	this.initialize(img.game_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,88);


(lib.game_btn_ov = function() {
	this.initialize(img.game_btn_ov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,88);


(lib.game_peo01 = function() {
	this.initialize(img.game_peo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,350);


(lib.game_peo02 = function() {
	this.initialize(img.game_peo02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,340);


(lib.game_tit01pngcopy = function() {
	this.initialize(img.game_tit01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,412,172);


(lib.game_tit02 = function() {
	this.initialize(img.game_tit02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,8);


(lib.game_tit03_v2 = function() {
	this.initialize(img.game_tit03_v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,56);


(lib.gift_btn = function() {
	this.initialize(img.gift_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,157);


(lib.gift_copyright = function() {
	this.initialize(img.gift_copyright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,62);


(lib.gift_pro01_v222 = function() {
	this.initialize(img.gift_pro01_v222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,462);


(lib.gift_pro02_v2222 = function() {
	this.initialize(img.gift_pro02_v2222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,387);


(lib.gift_pro03_v2222 = function() {
	this.initialize(img.gift_pro03_v2222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,298);


(lib.gift_tit = function() {
	this.initialize(img.gift_tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,236);


(lib.index_btn_main = function() {
	this.initialize(img.index_btn_main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,168);


(lib.index_btn_peo = function() {
	this.initialize(img.index_btn_peo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,158);


(lib.index_peo02pngcopy = function() {
	this.initialize(img.index_peo02pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,674);


(lib.index_tit101 = function() {
	this.initialize(img.index_tit101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,265);


(lib.index_tit102 = function() {
	this.initialize(img.index_tit102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,176);


(lib.index_tit103 = function() {
	this.initialize(img.index_tit103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,187);


(lib.index_tit104 = function() {
	this.initialize(img.index_tit104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,82);


(lib.index_tit105 = function() {
	this.initialize(img.index_tit105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,529,56);


(lib.index_tit106pngcopy2 = function() {
	this.initialize(img.index_tit106pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,55);


(lib.index_tree_l01pngcopy = function() {
	this.initialize(img.index_tree_l01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,898);


(lib.index_tree_l02pngcopy = function() {
	this.initialize(img.index_tree_l02pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,878);


(lib.mobile_index_peo01 = function() {
	this.initialize(img.mobile_index_peo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,576);


(lib.mobile_product01pngcopy = function() {
	this.initialize(img.mobile_product01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product02pngcopy = function() {
	this.initialize(img.mobile_product02pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product03pngcopy = function() {
	this.initialize(img.mobile_product03pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product04pngcopy = function() {
	this.initialize(img.mobile_product04pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product05pngcopy = function() {
	this.initialize(img.mobile_product05pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product06pngcopy = function() {
	this.initialize(img.mobile_product06pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product07pngcopy = function() {
	this.initialize(img.mobile_product07pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product08pngcopy2 = function() {
	this.initialize(img.mobile_product08pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product09pngcopy = function() {
	this.initialize(img.mobile_product09pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product10pngcopy = function() {
	this.initialize(img.mobile_product10pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,850);


(lib.mobile_product_bgpngcopy = function() {
	this.initialize(img.mobile_product_bgpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,531,1047);


(lib.product_back = function() {
	this.initialize(img.product_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.product_bg01 = function() {
	this.initialize(img.product_bg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,47);


(lib.product_bg02 = function() {
	this.initialize(img.product_bg02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,11);


(lib.product_bg03 = function() {
	this.initialize(img.product_bg03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,44);


(lib.product_bg04 = function() {
	this.initialize(img.product_bg04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,49);


(lib.product_bg05 = function() {
	this.initialize(img.product_bg05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,49);


(lib.product_bg06 = function() {
	this.initialize(img.product_bg06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,76);


(lib.product_bg07 = function() {
	this.initialize(img.product_bg07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,962,524);


(lib.product_bg09 = function() {
	this.initialize(img.product_bg09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,869,64);


(lib.product_bg_line = function() {
	this.initialize(img.product_bg_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,349);


(lib.product_name01 = function() {
	this.initialize(img.product_name01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,46);


(lib.product_name02 = function() {
	this.initialize(img.product_name02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,48);


(lib.product_o = function() {
	this.initialize(img.product_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.product_oo = function() {
	this.initialize(img.product_oo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.product_pro01 = function() {
	this.initialize(img.product_pro01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,391,443);


(lib.product_pro02pngcopy = function() {
	this.initialize(img.product_pro02pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,491,428);


(lib.product_v = function() {
	this.initialize(img.product_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.ston = function() {
	this.initialize(img.ston);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,205);


(lib.WatchRightBike = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bike02();
	this.instance.setTransform(0,-233.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-233.5,298,448);


(lib.WatchLeftBike = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bike01();
	this.instance.setTransform(-331.6,-245.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-331.6,-245.3,335,472);


(lib.ViewPortSample = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).dr(-360,-640,720,1280);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-361,-641,722,1282);


(lib.tree003 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tree_l01pngcopy();
	this.instance.setTransform(317.3,0,0.648,0.648,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,317.3,581.6);


(lib.tree002 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tree_l02pngcopy();
	this.instance.setTransform(0,0,0.626,0.626);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,550);


(lib.tree001 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tree_l01pngcopy();
	this.instance.setTransform(0,0,0.648,0.648);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,317.3,581.6);


(lib.tree_004 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tree_l02pngcopy();
	this.instance.setTransform(300.1,0,0.626,0.626,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,550);


(lib.Title = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_tit01pngcopy();
	this.instance.setTransform(-206,-86);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206,-86,412,172);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_pro02pngcopy();
	this.instance.setTransform(-288.6,-214);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288.6,-214,491,428);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_pro01();
	this.instance.setTransform(-195.5,-221.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-195.5,-221.5,391,443);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light07();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light06();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light05();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light04();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light03();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light02();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_lighting_light01();
	this.instance.setTransform(-54.5,-46.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-46.5,109,93);


(lib.ston_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ston();
	this.instance.setTransform(-209.3,-57.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-209.3,-57.9,726,205);


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


(lib.sky = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap45();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,1800);


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.game_bg, null, new cjs.Matrix2D(1,0,0,1,-371.5,-896.6)).s().p("Eg6CAGxIAAthMB0FAAAIAANhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-371.5,-43.3,743,86.7);


(lib.sea = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap58();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,744);


(lib.R_Label = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_name02();
	this.instance.setTransform(-60.5,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-24,121,48);


(lib.product_v_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_v();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.product_bg09_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,869,64);


(lib.product_bg08 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mobile_product_bgpngcopy();
	this.instance.setTransform(-6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,0,531,1047);


(lib.product_bg07_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg07();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,962,524);


(lib.product_bg06copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.detail_tit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193,76);


(lib.product_bg06_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,76);


(lib.product_bg05_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,49);


(lib.product_bg04_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,49);


(lib.product_bg03_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,398,44);


(lib.product_bg02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,11);


(lib.product_bg01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,47);


(lib.product_back_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.PrizeTitle = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gift_tit();
	this.instance.setTransform(-118,-118);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,-118,236,236);


(lib.PrizeOpenLogo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gift_copyright();
	this.instance.setTransform(-124,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-31,248,62);


(lib.mouse_icon_v = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABFIiXAAIAAiJICXAAIAAhTICYCXIiYCYg");
	this.shape.setTransform(15.2,15.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,30.5);


(lib.mouse_icon_t_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBuIAAgWIAOAAIAAhlIBCAAIADgJIhSAAIAAgVIBWAAIACgKIhSAAIAAg4IDQAAIAAA4IhQAAIgCAKIBXAAIAAAVIhbAAIgDAJIBUAAIAABlIAMAAIAAAWgAgyBYIBkAAIAAgIIhkAAgAgyA/IBkAAIAAgIIhkAAgAgyAnIBkAAIAAgIIhkAAgAgyAPIBkAAIAAgKIhkAAgAAshKIASAAIAAgNIgSAAgAgHhKIAQAAIAAgNIgQAAgAg9hKIARAAIAAgNIgRAAg");
	this.shape.setTransform(164,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BuIhDg+IgSAQIAAAWIAvAAIgPAYIhOAAIAAgeIgjAAIA2gsIgyAAIAAgXIBWAAIgBgJIgiAAIAAghIgIAAIAAAPIgLAQIgkAAIANgUIAAgLIgJAAIAAgXIAzAAIAAgKIgvAAIAAgrIAnAAIAAAVIAIAAIAAgZIAtAAIAABtIAiAAIADANIBWAAIAAAXIhvAAIgIAHIAwAAIAPANIAKgNIAuAAIgdAmIAfAdgAgEgDIAAgXIAgAAIAAgiIgjAAIAAgYIAjAAIAAgZIAsAAIAAAZIAmAAIAAAYIgmAAIAAAiIAfAAIAAAXg");
	this.shape_1.setTransform(138.2,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAxBuIgJgYIANAAIAAgWIhEAAIAAgVIBEAAIAAgIIAfAAIgCgFIhhAEIAAgUIAngDIAAgKIglAAIAAhDIAlAAIAAgHIgnAAIAAgXIAnAAIAAgNIAqAAIAAANIAqAAIAAAXIgqAAIAAAHIAmAAIAABDIgDAAIALAjIgSAAIAAAHIAPAAIAAAVIgPAAIAAAugABCAJIAKAAIgDgIIgHAAgABCgOIANAAIAAgJIgNAAgAALgOIANAAIAAgJIgNAAgABCgnIANAAIAAgIIgNAAgAALgnIANAAIAAgIIgNAAgAhTBuIAAgdIgcAAIAAgXIAcAAIAAgMIgYAAIAAhkIAYAAIAAgLIgaAAIAAgXIAaAAIAAgVIAmAAIAAAVIAaAAIAAAXIgaAAIAAALIAYAAIAABkIgYAAIAAAMIAaAAIAAAXIgaAAIAAAdgAgtAYIAIAAIAAgRIgIAAgAhbAYIAIAAIAAgRIgIAAgAgtgOIAIAAIAAgSIgIAAgAhbgOIAIAAIAAgSIgIAAgAAABmIgMgfIAnAAIAOAfg");
	this.shape_2.setTransform(113,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCBwIgJgXIAUAAIAAitIgSAAIAAgYIA1AAIAADcgAAGBwIgHgYIATAAIAAisIgSAAIAAgYIA1AAIAADcgAhoBwIAAhZIgHAAIAJgwIAYAAIgHAqIA/AAIgJgqIAYAAIAHAqIABgQIANAAIgCBNIgMAAIAAg3IgEAAIAABZgAguBaIAKAAIAAgQIgKAAgAhIBaIAJAAIAAgQIgJAAgAguA2IAKAAIAAgPIgKAAgAhIA2IAJAAIAAgPIgJAAgAA4BOIAEhNIAMAAIgCBNgAhKAKIAAgrIgkAAIAAgWIAIAAIgEgRIAXAAIAEARIAFAAIAAgYIgiAAIAAgXIA9AAIADgJIAsAAIgIAgIgaAAIAAAYIAFAAIAEgRIAWAAIgFARIAGAAIAAAWIggAAIAAArgAA8gIIgDhBIAOAAIACBBgAABgIIgBhBIAMAAIACBBg");
	this.shape_3.setTransform(87.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhWBvIAAg+IgaAAIA1hgIgxAAIAAgaIA+AAIATglIA1AAIgTAlIBqAAIAAAaIh1AAIgYAtICDAAIAABxgAgkBWIBZAAIAAhBIhZAAg");
	this.shape_4.setTransform(62.1,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhnBvIAAgZIBYAAIAAhGIgbAAIgRAmIg3AAIAxhrIgtAAIAAgaIA5AAIANgfIA0AAIgMAfIBzAAIAAAaIh+AAIgVAvICHAAIAAAWIhGAAIAABGIBPAAIAAAZg");
	this.shape_5.setTransform(36.7,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyBwIgJgWIATAAIAAgLIgbAAIAAAhIgrAAIAAhwIB0AAIAABwgAAhA7IAbAAIAAgIIgbAAgAAhAdIAbAAIAAgIIgbAAgAhqBwIAAheIBTAAIAABegAhFBZIAJAAIAAgwIgJAAgAhrAFIAAgXIBUAAIAAAXgAgTgLIAAgVIAqAAIAAgLIghAAIAAgVIAhAAIAAgLIgnAAIAAgWIAnAAIAAgOIAuAAIAAAOIAnAAIAAAWIgnAAIAAALIAiAAIAAAVIgiAAIAAALIAsAAIAAAVgAhrgdIAAgXIBUAAIAAAXgAhwhBIAAgYIAaAAIgFgVIAwAAIAFAVIATAAIAAAYg");
	this.shape_6.setTransform(11.4,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBuIgJgYIANAAIAAgVIhEAAIAAgXIBEAAIAAgHIAfAAIgCgFIhhAEIAAgUIAngDIAAgJIglAAIAAhEIAlAAIAAgIIgnAAIAAgVIAnAAIAAgOIAqAAIAAAOIAqAAIAAAVIgqAAIAAAIIAmAAIAABEIgDAAIALAiIgSAAIAAAGIAPAAIAAAXIgPAAIAAAtgABCAJIAKAAIgDgHIgHAAgABCgOIANAAIAAgIIgNAAgAALgOIANAAIAAgIIgNAAgABCgnIANAAIAAgIIgNAAgAALgnIANAAIAAgIIgNAAgAhTBuIAAgdIgcAAIAAgXIAcAAIAAgLIgYAAIAAhmIAYAAIAAgKIgaAAIAAgXIAaAAIAAgVIAmAAIAAAVIAaAAIAAAXIgaAAIAAAKIAYAAIAABmIgYAAIAAALIAaAAIAAAXIgaAAIAAAdgAgtAXIAIAAIAAgQIgIAAgAhbAXIAIAAIAAgQIgIAAgAgtgOIAIAAIAAgSIgIAAgAhbgOIAIAAIAAgSIgIAAgAAABmIgMggIAnAAIAOAgg");
	this.shape_7.setTransform(113,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:6.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2},{t:this.shape_1,p:{y:11.5}},{t:this.shape,p:{y:11.4}}]}).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:6.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2},{t:this.shape_1,p:{y:11.5}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:6.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2},{t:this.shape_1,p:{y:11.5}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:6.3}},{t:this.shape_2},{t:this.shape_1,p:{y:11.5}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_7},{t:this.shape_1,p:{y:11.5}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2},{t:this.shape_1,p:{y:6.5}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2},{t:this.shape_1,p:{y:11.5}},{t:this.shape,p:{y:6.4}}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,175.2,27.6);


(lib.L_Label = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_name01();
	this.instance.setTransform(-64,-23);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-23,128,46);


(lib.IntroText = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_tit03_v2();
	this.instance.setTransform(-181.5,-28);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-181.5,-28,363,56);


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
	this.instance = new lib.index_peo02pngcopy();
	this.instance.setTransform(-235,-339);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-235,-339,470,674);


(lib.IndexLeft = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mobile_index_peo01();
	this.instance.setTransform(-144,-288);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-288,288,576);


(lib.index_tit106 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit106pngcopy2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254,55);


(lib.index_tit105_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit105();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,529,56);


(lib.index_tit104_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit104();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,82);


(lib.index_tit103_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit103();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,291,187);


(lib.index_tit102_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit102();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,293,176);


(lib.index_tit101_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_tit101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,362,265);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXCdQgxgYgKgtQgKgyAcgmQAagmA2gQQATgEAZgBQA5AAAtAcQAiAVAOAhQAPAggLAlQgXBOhoAFIgOABIgGAAQgzAAgngTgAg9B0QgCANAPAQQANAOAiAAIARgCQAVgEANgKQALgKAAgNQAAgIgDgDQgDgDgDAAQgHAAgDAJQgBAJgMAHQgKAGgTAAIgLgBQgLAAgKgJQgJgHgBgGQgCgJgIAAQgJAAAAALgAgSA7QgMAFgDAJQgFAHAAAHQAAAFADAHQAEAGAJAEQALAGALgBQAJAAAIgDQASgGACgSQAAgKgFgIQgGgIgJgEQgGgCgKAAQgJAAgKAEgAhiAUQgJAEgEAHQgLAVAMATQAKARASAAIABAAQASAAALgPQAKgQgIgVQgCgLgJgFQgJgGgLAAQgJAAgIAGgABAARQgIAGgEAGQgLAVALATQALARARAAIABAAQARAAAMgPQAKgQgHgVQgEgKgIgGQgIgGgMAAQgJAAgIAFgAi5A5QAGg3AXgeQA5hJBaAAIAMAAQBrAKAsA7QApAygKBcIgUACIACgFQAMgsgKgmQgLgpgkgdQgcgWgvgIQgcgGgcAAQgcAAgPAFQhBASgfAuQgaAlAEAzQACAbAPAYIggABQgEgjAEgkgAjcCAQgDgnAGgoQAGg9AdglQBBhVBsgCIANAAQA5AEA0AcQA7AgAaA0QAQAgAEApQAEAagDAcIgBAAIgOACQAFhHgagzQgXgxg4gdQgvgag1gDIgNAAQhkABg9BQQgaAhgHA4QgFAmAEAogAj4B+QgEgZACgmQADg6ARgiQAWgzAvgoQA0gsA3gIIAogDQAzAAAwARQAwARAkAfQAdAaAUAjQAJAPAHAQQAYA6gIBBIgMABQAFhHgZg2IgDgJQgdg5hAgjQg4gfg9gDIgQAAQhyAAhJBeQgcAngLA9QgEApADAugAgEBeQgJAAAAgEQgCgEACgDQAGgGAJAAQAGAAAFADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQgCAIgOACg");
	this.shape.setTransform(25.2,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.4,35.3);


(lib.gift03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gift_pro03_v2222();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,298);


(lib.gift02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gift_pro02_v2222();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,387);


(lib.gift01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gift_pro01_v222();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,410,462);


(lib.gift_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gift_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,157);


(lib.GameDollRight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_peo02();
	this.instance.setTransform(-153,-340);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-153,-340,306,340);


(lib.GameDollLeft = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_peo01();
	this.instance.setTransform(-149,-350);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149,-350,298,350);


(lib.ClipGroup = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnqFsQgJAAgHgGQgFgGgBgIIAAquQABgJAFgGQAHgGAJAAIPVAAQAJAAAHAGQAFAGAAAJIAAKuQAAAIgFAGQgHAGgJAAg");
	mask.setTransform(53.9,36.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIHAsIwNAAIAAhXIQNAAg");
	this.shape.setTransform(53.1,59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDEE1").s().p("AoGAsIAAhXIQNAAIAABXg");
	this.shape_1.setTransform(53.1,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIHAsIwNAAIAAhXIQNAAg");
	this.shape_2.setTransform(53.1,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEDEE1").s().p("AoGAsIAAhXIQNAAIAABXg");
	this.shape_3.setTransform(53.1,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIGAtIwLAAIAAhZIQLAAg");
	this.shape_4.setTransform(53.1,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEDEE1").s().p("AoFAtIAAhYIQLAAIAABYg");
	this.shape_5.setTransform(53.1,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIMAsIwXAAIAAhXIQXAAg");
	this.shape_6.setTransform(52.6,4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEDEE1").s().p("AoLAsIAAhXIQXAAIAABXg");
	this.shape_7.setTransform(52.6,4.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,0.1,102.6,65.3);


(lib.FeatureDetailClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.instance = new lib.mobile_product01pngcopy();
	this.instance.setTransform(-232.1,-415);

	this.instance_1 = new lib.mobile_product05pngcopy();
	this.instance_1.setTransform(-232.1,-415);

	this.instance_2 = new lib.mobile_product02pngcopy();
	this.instance_2.setTransform(-232.1,-415);

	this.instance_3 = new lib.mobile_product03pngcopy();
	this.instance_3.setTransform(-232.1,-415);

	this.instance_4 = new lib.mobile_product04pngcopy();
	this.instance_4.setTransform(-232.1,-415);

	this.instance_5 = new lib.mobile_product06pngcopy();
	this.instance_5.setTransform(-232.1,-415);

	this.instance_6 = new lib.mobile_product07pngcopy();
	this.instance_6.setTransform(-232.1,-415);

	this.instance_7 = new lib.mobile_product09pngcopy();
	this.instance_7.setTransform(-232.1,-415);

	this.instance_8 = new lib.mobile_product08pngcopy2();
	this.instance_8.setTransform(-232.1,-415);

	this.instance_9 = new lib.mobile_product10pngcopy();
	this.instance_9.setTransform(-232.1,-415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.1,-415,462,850);


(lib.DotUnit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.product_o();
	this.instance.setTransform(-8.5,-8.5);

	this.instance_1 = new lib.product_oo();
	this.instance_1.setTransform(-14.5,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


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


(lib.btnpeo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_btn_peo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162,158);


(lib.BlueDotLine = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg_line();
	this.instance.setTransform(-2,-174.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-174.5,4,349);


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


(lib._360_bg07_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg07();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,702,782);


(lib._360_bg06_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,690,690);


(lib._360_bg05_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,79);


(lib._360_bg04_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,57);


(lib._360_bg03_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,57);


(lib._360_bg02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,442,117);


(lib._360_bg01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bg01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,57);


(lib.WatchProgress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// progress
	this.p_6 = new lib.Symbol12();
	this.p_6.setTransform(244.1,-38.5);

	this.p_5 = new lib.Symbol11();
	this.p_5.setTransform(173,18);

	this.p_4 = new lib.Symbol10();
	this.p_4.setTransform(90,53.5);

	this.p_3 = new lib.Symbol9();
	this.p_3.setTransform(0,65.5);

	this.p_2 = new lib.Symbol8();
	this.p_2.setTransform(-90.5,53);

	this.p_1 = new lib.Symbol7();
	this.p_1.setTransform(-173,18);

	this.p_0 = new lib.Symbol6();
	this.p_0.setTransform(-244.6,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_0},{t:this.p_1},{t:this.p_2},{t:this.p_3},{t:this.p_4},{t:this.p_5},{t:this.p_6}]}).wait(22));

	// basement
	this.instance = new lib._360_lighting_bg();
	this.instance.setTransform(-280.5,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.1,-85,597.7,197);


(lib.WatchDetail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer 4
	this.instance = new lib.L_Label();
	this.instance.setTransform(0,275.5);

	this.instance_1 = new lib.R_Label();
	this.instance_1.setTransform(2,273.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).wait(7));

	// Layer 3
	this.instance_2 = new lib._360_bike_coin01();
	this.instance_2.setTransform(-129.5,-251);

	this.instance_3 = new lib._360_bike_coin02();
	this.instance_3.setTransform(-328,-223.5);

	this.instance_4 = new lib._360_bike_coin03();
	this.instance_4.setTransform(-264,-260.5);

	this.instance_5 = new lib._360_bike_coin04();
	this.instance_5.setTransform(-146,-269);

	this.instance_6 = new lib._360_bike_coin05();
	this.instance_6.setTransform(-246.5,-240.5);

	this.instance_7 = new lib._360_bike_coin06();
	this.instance_7.setTransform(-331.5,-219);

	this.instance_8 = new lib._360_bike_my01();
	this.instance_8.setTransform(-137.5,-275);

	this.instance_9 = new lib._360_bike_my02();
	this.instance_9.setTransform(-284,-203);

	this.instance_10 = new lib._360_bike_my03();
	this.instance_10.setTransform(-255,-248.5);

	this.instance_11 = new lib._360_bike_my04();
	this.instance_11.setTransform(-145.5,-277.5);

	this.instance_12 = new lib._360_bike_my05();
	this.instance_12.setTransform(-261.5,-252.5);

	this.instance_13 = new lib._360_bike_my06();
	this.instance_13.setTransform(-283.5,-205.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-251,259,549.5);


(lib.tree004_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree_004();
	this.instance.setTransform(204.6,529.6,1,1,0,0,0,204.6,529.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:150,regY:275,x:150,y:275},0).wait(8).to({x:150.1},0).wait(6).to({x:150.2},0).wait(3).to({skewX:0.1},0).wait(2).to({x:150.3},0).wait(2).to({x:150.4},0).wait(3).to({x:150.5},0).wait(2).to({x:150.6},0).wait(2).to({skewX:0.2,x:150.7},0).wait(1).to({x:150.8},0).wait(2).to({x:150.9},0).wait(1).to({x:151},0).wait(1).to({x:151.1},0).wait(1).to({skewX:0.3},0).wait(1).to({x:151.2},0).wait(1).to({x:151.3},0).wait(1).to({x:151.4},0).wait(1).to({x:151.5},0).wait(1).to({x:151.6},0).wait(1).to({skewX:0.4,x:151.7},0).wait(1).to({x:151.8},0).wait(1).to({x:151.9},0).wait(2).to({skewX:0.5,x:152},0).wait(1).to({x:152.1},0).wait(1).to({x:152.2},0).wait(1).to({x:152.3},0).wait(1).to({x:152.4},0).wait(1).to({skewX:0.6,x:152.5},0).wait(1).to({x:152.6},0).wait(2).to({x:152.7},0).wait(1).to({x:152.8},0).wait(1).to({x:152.9},0).wait(1).to({skewX:0.7},0).wait(1).to({x:153},0).wait(2).to({x:153.1},0).wait(2).to({x:153.2},0).wait(2).to({x:153.3},0).wait(3).to({skewX:0.8,x:153.4},0).wait(6).to({x:153.5},0).wait(7).to({regX:204.6,regY:529.6,x:204.6,y:529.6},0).wait(1).to({regX:150,regY:275,x:153.5,y:275},0).wait(8).to({x:153.4},0).wait(1).to({x:153.5},0).wait(1).to({x:153.4},0).wait(5).to({skewX:0.7,x:153.3},0).wait(4).to({x:153.2},0).wait(2).to({x:153.1},0).wait(3).to({x:153},0).wait(2).to({x:152.9},0).wait(1).to({skewX:0.6},0).wait(1).to({x:152.8},0).wait(2).to({x:152.7},0).wait(1).to({x:152.6},0).wait(1).to({x:152.5},0).wait(2).to({skewX:0.5,x:152.4},0).wait(1).to({x:152.3},0).wait(1).to({x:152.2},0).wait(2).to({x:152.1},0).wait(1).to({skewX:0.4,x:152},0).wait(1).to({x:151.9},0).wait(1).to({x:151.8},0).wait(1).to({x:151.7},0).wait(1).to({x:151.6},0).wait(1).to({skewX:0.3,x:151.5},0).wait(1).to({x:151.4},0).wait(1).to({x:151.3},0).wait(1).to({x:151.2},0).wait(1).to({x:151.1},0).wait(1).to({skewX:0.2},0).wait(1).to({x:150.9},0).wait(2).to({x:150.8},0).wait(1).to({x:150.7},0).wait(1).to({skewX:0.1},0).wait(1).to({x:150.6},0).wait(1).to({x:150.5},0).wait(3).to({x:150.4},0).wait(2).to({x:150.3},0).wait(1).to({x:150.2},0).wait(2).to({skewX:0},0).wait(1).to({x:150.1},0).wait(6).to({x:150},0).wait(7).to({regX:204.6,regY:529.6,x:204.6,y:529.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,550);


(lib.tree003_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree003();
	this.instance.setTransform(207.8,558.1,1,1,0,0,0,207.8,558.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:158.6,regY:290.8,x:158.6,y:290.8},0).wait(7).to({x:158.7},0).wait(6).to({x:158.8},0).wait(2).to({skewX:0.1},0).wait(1).to({x:158.9},0).wait(1).to({x:159},0).wait(3).to({x:159.1},0).wait(2).to({x:159.2},0).wait(1).to({x:159.3},0).wait(1).to({skewX:0.2},0).wait(1).to({x:159.4},0).wait(1).to({x:159.5},0).wait(2).to({x:159.6},0).wait(1).to({x:159.8},0).wait(1).to({skewX:0.3},0).wait(1).to({x:159.9},0).wait(1).to({x:160},0).wait(1).to({x:160.2},0).wait(1).to({skewX:0.4},0).wait(1).to({x:160.4},0).wait(1).to({x:160.5},0).wait(1).to({x:160.6},0).wait(1).to({skewX:0.5,x:160.7},0).wait(1).to({x:160.9},0).wait(1).to({x:161},0).wait(1).to({x:161.2},0).wait(1).to({skewX:0.6,x:161.3},0).wait(1).to({x:161.4},0).wait(1).to({x:161.6},0).wait(1).to({skewX:0.7,x:161.7},0).wait(1).to({x:161.9},0).wait(1).to({x:162},0).wait(1).to({skewX:0.8,x:162.1},0).wait(1).to({x:162.2},0).wait(1).to({x:162.4},0).wait(1).to({x:162.5},0).wait(1).to({skewX:0.9,x:162.6},0).wait(1).to({x:162.7},0).wait(1).to({x:162.8},0).wait(1).to({x:162.9},0).wait(1).to({x:163},0).wait(1).to({skewX:1,x:163.1},0).wait(1).to({x:163.2},0).wait(2).to({x:163.3},0).wait(1).to({x:163.4},0).wait(2).to({x:163.5},0).wait(1).to({skewX:1.1},0).wait(2).to({x:163.6},0).wait(1).to({x:163.7},0).wait(5).to({x:163.8},0).wait(6).to({regX:207.8,regY:558.1,x:207.8,y:558.1},0).wait(1).to({regX:158.6,regY:290.8,x:163.8,y:290.8},0).wait(7).to({x:163.7},0).wait(6).to({x:163.6},0).wait(3).to({skewX:1,x:163.5},0).wait(1).to({x:163.4},0).wait(3).to({x:163.3},0).wait(2).to({x:163.2},0).wait(1).to({x:163.1},0).wait(2).to({skewX:0.9,x:163},0).wait(1).to({x:162.9},0).wait(2).to({x:162.8},0).wait(1).to({x:162.7},0).wait(1).to({x:162.6},0).wait(1).to({skewX:0.8,x:162.5},0).wait(1).to({x:162.4},0).wait(1).to({x:162.2},0).wait(2).to({skewX:0.7,x:162},0).wait(1).to({x:161.9},0).wait(1).to({x:161.8},0).wait(1).to({x:161.7},0).wait(1).to({skewX:0.6,x:161.5},0).wait(1).to({x:161.4},0).wait(1).to({x:161.2},0).wait(1).to({skewX:0.5,x:161.1},0).wait(1).to({x:161},0).wait(1).to({x:160.8},0).wait(1).to({skewX:0.4,x:160.7},0).wait(1).to({x:160.5},0).wait(1).to({x:160.4},0).wait(1).to({x:160.3},0).wait(1).to({skewX:0.3,x:160.2},0).wait(1).to({x:160},0).wait(1).to({x:159.9},0).wait(1).to({x:159.8},0).wait(1).to({skewX:0.2,x:159.7},0).wait(1).to({x:159.6},0).wait(1).to({x:159.5},0).wait(1).to({x:159.4},0).wait(1).to({x:159.3},0).wait(1).to({skewX:0.1,x:159.2},0).wait(2).to({x:159.1},0).wait(1).to({x:159},0).wait(2).to({x:158.9},0).wait(3).to({skewX:0,x:158.8},0).wait(1).to({x:158.7},0).wait(5).to({x:158.6},0).wait(6).to({regX:207.8,regY:558.1,x:207.8,y:558.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.3,581.6);


(lib.tree002_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree002();
	this.instance.setTransform(99.5,529.6,1,1,0,0,0,99.5,529.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:150,regY:275,x:150,y:275},0).wait(8).to({x:150.1},0).wait(6).to({x:150.2},0).wait(3).to({skewX:0.1},0).wait(2).to({x:150.3},0).wait(2).to({x:150.4},0).wait(3).to({x:150.5},0).wait(2).to({x:150.6},0).wait(2).to({skewX:0.2,x:150.7},0).wait(2).to({x:150.8},0).wait(1).to({x:150.9},0).wait(1).to({x:151},0).wait(1).to({x:151.1},0).wait(1).to({skewX:0.3},0).wait(1).to({x:151.2},0).wait(1).to({x:151.3},0).wait(1).to({x:151.4},0).wait(2).to({x:151.5},0).wait(1).to({skewX:0.4,x:151.6},0).wait(1).to({x:151.7},0).wait(1).to({x:151.8},0).wait(1).to({x:151.9},0).wait(1).to({skewX:0.5,x:152},0).wait(1).to({x:152.1},0).wait(1).to({x:152.2},0).wait(1).to({x:152.3},0).wait(1).to({x:152.4},0).wait(1).to({skewX:0.6,x:152.5},0).wait(1).to({x:152.6},0).wait(1).to({x:152.7},0).wait(2).to({x:152.8},0).wait(1).to({x:152.9},0).wait(1).to({skewX:0.7},0).wait(1).to({x:153},0).wait(2).to({x:153.1},0).wait(2).to({x:153.2},0).wait(2).to({x:153.3},0).wait(2).to({skewX:0.8},0).wait(1).to({x:153.4},0).wait(3).to({x:153.5},0).wait(1).to({x:153.4},0).wait(1).to({x:153.5},0).wait(8).to({regX:99.5,regY:529.6,x:99.5,y:529.6},0).wait(1).to({regX:150,regY:275,x:153.5,y:275},0).wait(10).to({x:153.4},0).wait(1).to({x:153.5},0).wait(1).to({x:153.4},0).wait(4).to({skewX:0.7,x:153.3},0).wait(3).to({x:153.2},0).wait(4).to({x:153.1},0).wait(1).to({x:153},0).wait(3).to({skewX:0.6,x:152.9},0).wait(1).to({x:152.8},0).wait(2).to({x:152.7},0).wait(1).to({x:152.6},0).wait(2).to({x:152.5},0).wait(1).to({skewX:0.5,x:152.4},0).wait(1).to({x:152.3},0).wait(2).to({x:152.1},0).wait(2).to({skewX:0.4,x:152},0).wait(1).to({x:151.9},0).wait(1).to({x:151.8},0).wait(1).to({x:151.7},0).wait(1).to({x:151.6},0).wait(1).to({skewX:0.3,x:151.5},0).wait(1).to({x:151.4},0).wait(1).to({x:151.3},0).wait(1).to({x:151.2},0).wait(2).to({skewX:0.2,x:151},0).wait(2).to({x:150.9},0).wait(1).to({x:150.8},0).wait(1).to({x:150.7},0).wait(2).to({skewX:0.1,x:150.6},0).wait(1).to({x:150.5},0).wait(3).to({x:150.4},0).wait(2).to({x:150.3},0).wait(1).to({x:150.2},0).wait(2).to({skewX:0},0).wait(1).to({x:150.1},0).wait(6).to({x:150},0).wait(7).to({regX:99.5,regY:529.6,x:99.5,y:529.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,550);


(lib.tree001_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree001();
	this.instance.setTransform(105,565.4,1,1,0,0,0,105,565.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:158.7,regY:290.8,x:158.7,y:290.8},0).wait(6).to({x:158.8},0).wait(4).to({x:158.9},0).wait(3).to({skewX:0.1},0).wait(1).to({x:159},0).wait(1).to({x:159.1},0).wait(3).to({x:159.2},0).wait(1).to({x:159.3},0).wait(2).to({skewX:0.2,x:159.5},0).wait(2).to({x:159.6},0).wait(1).to({x:159.7},0).wait(1).to({x:159.8},0).wait(1).to({x:159.9},0).wait(1).to({skewX:0.3,x:160},0).wait(1).to({x:160.1},0).wait(1).to({x:160.3},0).wait(1).to({x:160.4},0).wait(1).to({skewX:0.4,x:160.5},0).wait(1).to({x:160.6},0).wait(1).to({x:160.8},0).wait(1).to({skewX:0.5,x:161},0).wait(1).to({x:161.1},0).wait(1).to({x:161.3},0).wait(1).to({skewX:0.6,x:161.5},0).wait(1).to({x:161.6},0).wait(1).to({x:161.8},0).wait(1).to({skewX:0.7,x:162},0).wait(1).to({x:162.2},0).wait(1).to({skewX:0.8,x:162.4},0).wait(1).to({x:162.6},0).wait(1).to({x:162.8},0).wait(1).to({skewX:0.9,x:163},0).wait(1).to({x:163.1},0).wait(1).to({skewX:1,x:163.3},0).wait(1).to({x:163.5},0).wait(1).to({x:163.7},0).wait(1).to({skewX:1.1,x:163.8},0).wait(1).to({x:164},0).wait(1).to({x:164.2},0).wait(1).to({skewX:1.2,x:164.3},0).wait(1).to({x:164.4},0).wait(1).to({x:164.6},0).wait(1).to({x:164.7},0).wait(1).to({skewX:1.3,x:164.8},0).wait(1).to({x:164.9},0).wait(1).to({x:165},0).wait(1).to({x:165.1},0).wait(1).to({x:165.2},0).wait(1).to({skewX:1.4},0).wait(1).to({x:165.3},0).wait(1).to({x:165.4},0).wait(2).to({x:165.5},0).wait(2).to({x:165.6},0).wait(2).to({skewX:1.5,x:165.7},0).wait(5).to({x:165.8},0).wait(1).to({x:165.7},0).wait(2).to({regX:105,regY:565.4,x:105,y:565.4},0).wait(1).to({regX:158.7,regY:290.8,x:165.7,y:290.8},0).wait(2).to({x:165.8},0).wait(2).to({x:165.7},0).wait(5).to({skewX:1.4,x:165.6},0).wait(3).to({x:165.5},0).wait(3).to({x:165.4},0).wait(2).to({x:165.3},0).wait(1).to({x:165.2},0).wait(2).to({skewX:1.3,x:165.1},0).wait(1).to({x:165},0).wait(2).to({x:164.9},0).wait(1).to({x:164.8},0).wait(1).to({skewX:1.2,x:164.7},0).wait(1).to({x:164.6},0).wait(1).to({x:164.5},0).wait(1).to({x:164.3},0).wait(1).to({x:164.2},0).wait(1).to({skewX:1.1,x:164.1},0).wait(1).to({x:163.9},0).wait(1).to({x:163.8},0).wait(1).to({skewX:1,x:163.7},0).wait(1).to({x:163.5},0).wait(1).to({x:163.3},0).wait(1).to({skewX:0.9,x:163.2},0).wait(1).to({x:163},0).wait(1).to({x:162.8},0).wait(1).to({skewX:0.8,x:162.6},0).wait(1).to({x:162.5},0).wait(1).to({skewX:0.7,x:162.3},0).wait(1).to({x:162.1},0).wait(1).to({x:161.9},0).wait(1).to({skewX:0.6,x:161.7},0).wait(1).to({x:161.5},0).wait(1).to({skewX:0.5,x:161.3},0).wait(1).to({x:161.1},0).wait(1).to({x:161},0).wait(1).to({skewX:0.4,x:160.8},0).wait(1).to({x:160.6},0).wait(1).to({x:160.5},0).wait(1).to({skewX:0.3,x:160.3},0).wait(1).to({x:160.2},0).wait(1).to({x:160.1},0).wait(1).to({x:159.9},0).wait(1).to({skewX:0.2,x:159.8},0).wait(1).to({x:159.7},0).wait(1).to({x:159.6},0).wait(1).to({x:159.5},0).wait(1).to({skewX:0.1,x:159.4},0).wait(1).to({x:159.3},0).wait(1).to({x:159.2},0).wait(2).to({x:159.1},0).wait(1).to({x:159},0).wait(2).to({skewX:0,x:158.9},0).wait(3).to({x:158.8},0).wait(3).to({x:158.7},0).wait(5).to({regX:105,regY:565.4,x:105,y:565.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.3,581.6);


(lib.R_Bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Normal:0,Focused:19});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31));

	// Layer 1
	this.instance = new lib.Symbol15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:21.6,y:0.3},19,cjs.Ease.get(1)).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.6,-214,491,428);


(lib.ProgressDot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Dots
	this.dot_0 = new lib.DotUnit();
	this.dot_0.setTransform(-100,0);

	this.dot_1 = new lib.DotUnit();
	this.dot_1.setTransform(-60,0);

	this.dot_5 = new lib.DotUnit();
	this.dot_5.setTransform(100,0);

	this.dot_4 = new lib.DotUnit();
	this.dot_4.setTransform(60,0);

	this.dot_3 = new lib.DotUnit();
	this.dot_3.setTransform(20,0);

	this.dot_2 = new lib.DotUnit();
	this.dot_2.setTransform(-20,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot_2},{t:this.dot_3},{t:this.dot_4},{t:this.dot_5},{t:this.dot_1},{t:this.dot_0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-8.5,217,17);


(lib.product_v_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.product_v_1();
	this.instance.setTransform(39.5,40,1,1,0,0,0,39.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.5},14).to({x:39.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.product_back_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.product_back_1();
	this.instance.setTransform(59,59,1,1,0,0,0,59,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.PrizeKeyRing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gift03();
	this.instance.setTransform(0,0,1,1,0,0,0,126,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-20},24).to({y:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-149,252,298);


(lib.PrizeHelm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gift02();
	this.instance.setTransform(0,0,1,1,0,0,0,160.5,193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-20},29).to({y:0},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-193.5,321,387);


(lib.PrizeCoat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gift01();
	this.instance.setTransform(0,0,1,1,0,0,0,205,231);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-20},34).to({y:0},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-231,410,462);


(lib.mouse_icon_v_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse_icon_v
	this.instance = new lib.mouse_icon_v();
	this.instance.setTransform(15.2,15.2,1,1,180,0,0,15.2,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.2},11).to({x:15.2},11).wait(1));

	// mouse_icon_v
	this.instance_1 = new lib.mouse_icon_v();
	this.instance_1.setTransform(160.4,15.3,1,1,0,0,0,15.2,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:170.4},11).to({x:160.4},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.6,30.5);


(lib.L_Bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Normal":0,"Focused":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46));

	// Layer 1
	this.instance = new lib.Symbol14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:-25.4,y:-0.5},20,cjs.Ease.get(1)).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.5,-221.5,391,443);


(lib.IndexButtonCombo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// startButton
	this.startButton = new lib.IndexStartButton();
	this.startButton.setTransform(66.5,-143);
	new cjs.ButtonHelper(this.startButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startButton).wait(1).to({regX:-1,x:65.5},0).wait(1).to({y:-143.1},0).wait(1).to({y:-143.3},0).wait(1).to({y:-143.6},0).wait(1).to({y:-144},0).wait(1).to({y:-144.5},0).wait(1).to({y:-145},0).wait(1).to({y:-145.7},0).wait(1).to({y:-146.3},0).wait(1).to({y:-147.1},0).wait(1).to({y:-147.9},0).wait(1).to({y:-148.8},0).wait(1).to({y:-149.7},0).wait(1).to({y:-150.7},0).wait(1).to({y:-151.7},0).wait(1).to({y:-152.7},0).wait(1).to({y:-153.7},0).wait(1).to({y:-154.7},0).wait(1).to({y:-155.7},0).wait(1).to({y:-156.7},0).wait(1).to({y:-157.6},0).wait(1).to({y:-158.6},0).wait(1).to({y:-159.4},0).wait(1).to({y:-160.2},0).wait(1).to({y:-160.9},0).wait(1).to({y:-161.5},0).wait(1).to({y:-162},0).wait(1).to({y:-162.4},0).wait(1).to({y:-162.7},0).wait(1).to({y:-162.9},0).wait(1).to({regX:0,x:66.5,y:-163},0).wait(1).to({regX:-1,x:65.5,y:-162.9},0).wait(1).to({y:-162.8},0).wait(1).to({y:-162.6},0).wait(1).to({y:-162.3},0).wait(1).to({y:-161.9},0).wait(1).to({y:-161.4},0).wait(1).to({y:-160.9},0).wait(1).to({y:-160.2},0).wait(1).to({y:-159.6},0).wait(1).to({y:-158.8},0).wait(1).to({y:-158},0).wait(1).to({y:-157.1},0).wait(1).to({y:-156.2},0).wait(1).to({y:-155.2},0).wait(1).to({y:-154.2},0).wait(1).to({y:-153.2},0).wait(1).to({y:-152.2},0).wait(1).to({y:-151.2},0).wait(1).to({y:-150.2},0).wait(1).to({y:-149.2},0).wait(1).to({y:-148.3},0).wait(1).to({y:-147.3},0).wait(1).to({y:-146.5},0).wait(1).to({y:-145.7},0).wait(1).to({y:-145},0).wait(1).to({y:-144.4},0).wait(1).to({y:-143.9},0).wait(1).to({y:-143.5},0).wait(1).to({y:-143.2},0).wait(1).to({y:-143},0).wait(1).to({regX:0,x:66.5},0).wait(1));

	// index_btn_peo.png
	this.instance = new lib.btnpeo();
	this.instance.setTransform(-48.5,-215,1,1,0,0,0,81,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-215.3},0).wait(1).to({y:-215.7},0).wait(1).to({y:-216.2},0).wait(1).to({y:-216.9},0).wait(1).to({y:-217.7},0).wait(1).to({y:-218.7},0).wait(1).to({y:-219.8},0).wait(1).to({y:-221.1},0).wait(1).to({y:-222.4},0).wait(1).to({y:-223.9},0).wait(1).to({y:-225.5},0).wait(1).to({y:-227.1},0).wait(1).to({y:-228.8},0).wait(1).to({y:-230.6},0).wait(1).to({y:-232.4},0).wait(1).to({y:-234.3},0).wait(1).to({y:-236.1},0).wait(1).to({y:-237.9},0).wait(1).to({y:-239.7},0).wait(1).to({y:-241.4},0).wait(1).to({y:-243},0).wait(1).to({y:-244.6},0).wait(1).to({y:-246},0).wait(1).to({y:-247.2},0).wait(1).to({y:-248.3},0).wait(1).to({y:-249.2},0).wait(1).to({y:-250},0).wait(1).to({y:-250.5},0).wait(1).to({y:-250.8},0).wait(1).to({y:-251},0).wait(1).to({y:-250.9},0).wait(1).to({y:-250.6},0).wait(1).to({y:-250.2},0).wait(1).to({y:-249.7},0).wait(1).to({y:-249},0).wait(1).to({y:-248.2},0).wait(1).to({y:-247.2},0).wait(1).to({y:-246.1},0).wait(1).to({y:-244.8},0).wait(1).to({y:-243.5},0).wait(1).to({y:-242},0).wait(1).to({y:-240.4},0).wait(1).to({y:-238.8},0).wait(1).to({y:-237.1},0).wait(1).to({y:-235.3},0).wait(1).to({y:-233.5},0).wait(1).to({y:-231.6},0).wait(1).to({y:-229.8},0).wait(1).to({y:-228},0).wait(1).to({y:-226.2},0).wait(1).to({y:-224.5},0).wait(1).to({y:-222.9},0).wait(1).to({y:-221.3},0).wait(1).to({y:-219.9},0).wait(1).to({y:-218.7},0).wait(1).to({y:-217.6},0).wait(1).to({y:-216.7},0).wait(1).to({y:-215.9},0).wait(1).to({y:-215.4},0).wait(1).to({y:-215.1},0).wait(1).to({y:-215},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-294,282,235);


(lib.head_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();
	this.instance.setTransform(25.2,35.3,1,1,-11.5,0,0,25.2,35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:13.7},25).to({rotation:-11.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-4.3,56.4,44.6);


(lib.FeatureDetailContainer = function() {
	this.initialize();

	// topDetail
	this.topDetail = new lib.FeatureDetailClip();
	this.topDetail.setTransform(15,21);

	// bottomDetail
	this.bottomDetail = new lib.FeatureDetailClip();
	this.bottomDetail.setTransform(15,21);

	this.addChild(this.bottomDetail,this.topDetail);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-217.1,-394,462,850);


(lib.FeatureBtnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.product_back_s();
	this.instance.setTransform(0,0,1,1,0,0,0,59,59);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("A70RkMAAAgjGMA3pAAAMAAAAjGg");
	this.shape.setTransform(-0.3,-36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


(lib.detail_t02_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.R_Label();
	this.instance.setTransform(119.6,17.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#727171").s().p("AgMAWIAAgGIAMgOQAGgHAAgEQAAgGgGAAQgGAAAAAIIgGAAQAAgOAMAAQAGAAADADQAEADABAGQgBAJgQAQIARAAIAAAGg");
	this.shape.setTransform(105.6,416.3,2.727,2.727);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727171").s().p("AgDAEIAAgHIAGAAIAAAHg");
	this.shape_1.setTransform(98.4,421.6,2.727,2.727);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727171").s().p("AgKATQgEgDAAgHQAAgHAGgCQgGgDAAgGQAAgGAFgEQAEgDAFAAQAFAAAFADQAEAEAAAGQAAAGgFADQAGACAAAHQAAAGgFAEQgFAEgFAAQgEAAgGgEgAgIAJQAAAEADABQACADADAAQACAAAEgDQACgBAAgEQAAgIgIAAQgIAAAAAIgAgFgOQgCACAAADQAAAGAHAAQAIAAAAgGQAAgDgDgCQgCgCgDAAQgCAAgDACg");
	this.shape_2.setTransform(91.2,416.4,2.727,2.727);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727171").s().p("AACAWIAAgKIgRAAIAAgEIASgdIAGAAIAAAbIAHAAIAAAGIgHAAIAAAKgAgHAGIAJAAIAAgOg");
	this.shape_3.setTransform(80.5,416.3,2.727,2.727);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727171").s().p("AgOAIIAHAAQAAAIAHAAQADAAACgCQADgCAAgDQAAgEgDgCQgCgCgDAAIgCABIAAgFIACAAQADAAACgBQADgDAAgDQAAgDgDgBQgCgCgDAAQgDAAgCACQgBACAAAEIgIAAQAAgHAFgEQAEgDAFAAQAFAAAFADQAEAEAAAGQAAAFgFAEQAGACAAAHQAAAGgFAEQgFAEgFAAQgOAAAAgPg");
	this.shape_4.setTransform(118,317.4,2.727,2.727);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727171").s().p("AgKATQgEgEAAgGIAHAAQAAAEACACQACACADAAQAHAAABgPQgEAEgEAAQgFAAgFgEQgEgCAAgHQAAgHAEgEQAEgEAGAAQAPAAAAAWQAAAXgPAAQgGAAgEgEgAgFgNQgCAEAAADQAAADACACQACABADAAQACAAADgBQADgCAAgEQAAgDgDgDQgDgDgCAAQgDAAgCADg");
	this.shape_5.setTransform(107.3,317.4,2.727,2.727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727171").s().p("AgMAWIAAgGQAIgGAEgIQAHgGgBgFQAAgGgGAAQgGAAABAIIgHAAQAAgOAMAAQAGAAADADQAEAEAAAFQAAAJgRAQIARAAIAAAGg");
	this.shape_6.setTransform(62.2,268,2.727,2.727);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727171").s().p("AAQAUQgHACgRACIgCgGIAGAAQAEgIAAgJIgJAAIAAgDIALAAIAAgLIgIAAIAAgEIAIAAIAAgJIAFAAIAAAJIANAAIAAAEIgNAAIAAALIAPAAIAAADIgRAAIgFAQIAOgBIgFgJIAFgCQAEAGAEANIgEACgAgVAVQAFgIADgLIAEAEIgIAUgAgVgGIACgEIAIAGIgDAEQgEgDgDgDgAgTgTIACgFQAFADAEADIgDAFQgFgEgDgCg");
	this.shape_7.setTransform(212.2,366.8,2.727,2.727);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727171").s().p("AAHAXIAEgGIACgIIAEABIgBAFIAGAGIgCAFIgFgHIgBAAIgEAHgAgDAWQADgGACgHIAEABIgCAEIAFADIgDAEIgDgDIgDAIgAgMAaIgBgFIAEAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgOIgOAAIAAgcIASAAIAAAFIgGAAIAAADIAFAAIAAACIAFgGIAEgHIAFAAQACAEADAEIAHAEIgDAGIgEgEIAAAEIgPAAIAAgDIgCADIgCgEIAAACIgFAAIAAADIAFAAIAAAFIgFAAIAAACIAFAAIAAAVQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAgAgQAAIAFAAIAAgCIgFAAgAgQgHIAFAAIAAgDIgFAAgAADgOIAAABIALAAIgGgHQgCAEgDACgAgQgPIAFAAIAAgDIgFAAgAgWAXIABgQIADABIgBAQgAgRAHIACAAIABAOIgDABgAgNASIgBgLIADAAIABALgAgLAHIACAAIACAIIgCABgAAKAJIAAgPIALAAIAAAPgAANAEIAEAAIAAgFIgEAAgAgBAJIAAgPIAJAAIAAAPgAABAEIADAAIAAgFIgDAAg");
	this.shape_8.setTransform(198.3,366.8,2.727,2.727);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727171").s().p("AgUAaIAAgVIAPAAIAAAUIgFAAIAAgDIgGAAIAAAEgAgQARIAGAAIAAgHIgGAAgAAOAXQgDgEAAgJIgCgUIgNAAIAAgEIgSAAIAAgFIAHAAIgCgGIAFgBIACAHIAHAAIAAADIAMAAIAAgKIAEAAIAAAKIAIAAIAAAGIgIAAIACAUQABAKACAAQABAAAAgJIAEAEQgCALgDAAQgCAAgCgDgAgFARIAFgBIAAgQIgEAAIAAgEIAMAAIAAAEIgFAAIAAAPIAHgEIAAAGIgNAGgAgUABIAAgCIAPAAIAAACgAgUgGIAAgEIAPAAIAAAEgAAOgXIAEgCIADAHIgDABg");
	this.shape_9.setTransform(184.2,366.8,2.727,2.727);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727171").s().p("AgWAZIAAgEIAVAAIAAgDIgRAAIAAgDIARAAIAAgDIgQAAIAAgNIAkAAIAAANIgRAAIAAADIASAAIAAADIgSAAIAAADIAVAAIAAAEgAACAJIANAAIAAgDIgNAAgAgNAJIAMAAIAAgDIgMAAgAACADIANAAIAAgDIgNAAgAgNADIAMAAIAAgDIgMAAgAgVgDIAAgEIArAAIAAAEgAgRgKIAAgOIAkAAIAAAOgAgNgNIAbAAIAAgCIgbAAgAgNgTIAbAAIAAgCIgbAAg");
	this.shape_10.setTransform(170.2,366.9,2.727,2.727);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727171").s().p("AgMAaIAAgRIgBABQgEAJgDACIgCgGQAFgFAEgIIgIAAIAAgCIAJAAIAAgGIgIAAIAAgEIAIAAIAAgFIgIAAIgBgEIAJAAIAAgHIAEAAIAAAGIAHgCIABAFIgIABIAAAGIAHAAIAAAEIgHAAIAAAGIAIAAIAAACIgIAAIAAAAIAIAKIgCAFIgGgJIAAASgAALAaQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgMIgGABIgBgFIAHgCIAAgGIgGACIAAgFIAGgBIAAgIIgFABIgBgEIAJgDIAHgDIAEAEIgJAEIAAAAIAAAIIAKgCIAAAEIgKACIAAAHIALgCIAAAFIgLACIAAALQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAgJIAFACQgBALgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_11.setTransform(156.2,366.8,2.727,2.727);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727171").s().p("AgGAaIAAgkIAKAAIAAgQIAEAAIAAAQIANAAIAAAeIgBAFQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgHAAIgBgGIAGABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgFIgTAAIAAAMgAgCAJIATAAIAAgGIgTAAgAgCAAIATAAIAAgGIgTAAgAgUAWQAEgIADgNIAEAEQgCAJgFAMgAgVgHIADgEIAIAGIgDAFIgIgHgAAMgOIAFgKIAFACIgGALgAgIgWIAFgCIADAKIgCADgAgTgTIACgFIAJAGIgDAFg");
	this.shape_12.setTransform(142.1,366.8,2.727,2.727);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727171").s().p("AAOAaIAAgOIgOADIgBgFIAPgCIAAgiIAEAAIAAAhIAEgBIABAFIgFABIAAAOgAgMAaIAAgVIgBACQgDAGgEAFIgCgGQAHgIACgEIgIAAIAAgGIAJAAIAAgUIAEAAIAAAUIAIAAIAAAGIgIAAIAAAAIAIAHIgCAEIgGgIIAAAXgAAAgBIADgEIAIAFIgEADQgCgDgFgBgAgGgJIACgNIAEACIgCAMgAABgPIADgEIAIAGIgEAFIgHgHgAgVgUIAEgCIADANIgEABg");
	this.shape_13.setTransform(128.3,366.8,2.727,2.727);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727171").s().p("AgWAXQAFgJAAgFQABgGABgKIAAgTIADAAIAAALIAEgFIADAEIgHAIIAAAOIAGAHIgDAFIgEgHQgCAIgDAHgAAOAMIAFgBIADANIgDACgAAHANIAEgBIADANIgFABgAAAANIADgBIACANIgEABgAgJAYQACgGABgGIAFABIgEANgAAQADIgDgEQgBADgGAIIgEgDQAFgFADgEIABgFIgEAAIAAgFIgEALQgDAFgGAGIgCgEIAHgGIgEgCIACgDIADADIAAgBIABgEIgCgCIABgEIACADIABgHIgDAAIAAAEQgCAFgEAGIgDgEIAFgJIACgLIADABIgBAEIAHAAIAAAIIAEAAIAAgMIAFAAIAAAMIAFAAIAAAGIgFAAIACAHIAFAHIgDADIgEgHgAgWAAIABgOIAEAAQAAAJgBAGgAARgVIADgCIACAIIgDABg");
	this.shape_14.setTransform(114.3,366.8,2.727,2.727);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727171").s().p("AgBAaIAAgHIgUAAIAAgFIAUAAIAAgFIgQAAIAAgUIAQAAIAAgFIgUAAIAAgEIAUAAIAAgGIADAAIAAAGIAUAAIAAAEIgUAAIAAAFIARAAIAAAUIgRAAIAAAFIAUAAIAAAFIgUAAIAAAHgAACAFIAMAAIAAgFIgMAAgAgNAFIAMAAIAAgFIgMAAgAACgDIAMAAIAAgEIgMAAgAgNgDIAMAAIAAgEIgMAAg");
	this.shape_15.setTransform(100.3,366.8,2.727,2.727);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727171").s().p("AAQAaIAAgCIgPAAIAAACIgCAAIAAgZIAVAAIAAAZgAABATIAPAAIAAgEIgPAAgAABAKIAPAAIAAgEIgPAAgAgWAUIABgBIAAgTIAFAAIAAASIADgBIAAgWIgGAAIAAgSIAPAAIAAASIAEgFIACgGIgEAAIAAgEIAIAAIAAADIgEAJIgEAIIgDgFIgDAAIAAAGIAFAAIAAAGIgFAAIAAAKIAFgCIAAAEIgSAGgAgPgJIAHAAIAAgJIgHAAgAACAAIAAgEIAEAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAAgVIAEAAIAAAEIADAGIAFgIIADAEQgCAEgEADIAAABQACADAFAEIgCAFQgFgFgDgEIgCgEIAAAJIgBAEIgDAAg");
	this.shape_16.setTransform(86.4,366.8,2.727,2.727);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#727171").s().p("AAKAaIAAgaIgCADIgBgBIAAAXIgEAAIAAgDIgDAAIAAAEIgEAAIAAgYIgCADIgBgEIAAATIgBADIgCACIgEAAIgBgFIADAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgOIgEAEIgBgDIgCAUIgEgEIACgKIAAglIAMAAIAAAZQAFgEACgIIACAAIAIAMIAAgYIAMAAIAAAmIgBAEIgDACIgCAAIgBgGIABABQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgfIgEAAIAAAtgAAAARIADAAIAAgMIgDAAgAgPAEIAFgEIAAgGIgDACIgCgHgAgDAAIAKAAIgGgIIgEAIgAgKgHIAAgNIgFAAIAAAHIABgBgAgHgMQADgGACgGIACABIgCANgAACgXIAEgBIADALIgDACg");
	this.shape_17.setTransform(72.2,367,2.727,2.727);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727171").s().p("AAOAZIAAgCIgIAAIAAACIgFAAIAAgTIAMAAIgDgCQgEgCgCgCIgGAAIgCAAIgIAGIALAAIAAATIgEAAIAAgCIgIAAIAAACIgEAAIAAgQIgCABIgCgFQAIgDAFgCIAAAAIgNAAIAAgFIARAAIACgFIgQAAIAAgOIARAAIAAAOIACAAIgBAFIALAAIgCgDIAEgBIADAEIAGAAIAAAFIgNAAIAEABQACACAHACIgCAFIgBgBIAAAQgAAGATIAIAAIAAgIIgIAAgAgNATIAIAAIAAgIIgIAAgAgNgOIAIAAIAAgGIgIAAgAABgKIAAgOIASAAIAAAOgAAGgOIAIAAIAAgGIgIAAg");
	this.shape_18.setTransform(58.4,367,2.727,2.727);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#727171").s().p("AALAUIgJAGIgCgEIAJgFIAAgBIgCgKIgHAAIAAACIAFAGIgCAEIgDgGIgCAIIgFAGIgDgEIAFgGIACgIIAAgCIgFAAIAAgDIgBACIgDgFIAAAaIgEAAIAAgZIgEAKIgCgFIAGgOIAAgBIgFAAIAAgGIAFAAIAAgLIAEAAIAAALIAEAAIAAAGIgEAAIAAADIAGAGIgBABIAEAAIAAgBIgDAAIgBgEIADgBIADgFIgGABIAAgFIACAAIADgLIACABIgCAKIACgBIAAgEIAEABQgCAGgDAHIACAAIgBgDIACgBIADAJIgDAAIgBgBIgBAAIAAACIAGAAIgBgBIgBgaIAEAAQAAAWACAFIAEAAIgBgBIgDAAIgBgEIADAAIADgGIgFABIgBgFIACAAIADgLIADABIgDAKIADgBIABgDIADABIgGANIAEgBIgBgDIACAAIADAIIgDAAIgBgBIgCABIABABIAFAAIAAAFIgNAAIACAGIADgEIAEABIgFAIQACAFACgBIAAAAIABgHIAEACIgCAJQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgDAAgEgGg");
	this.shape_19.setTransform(44.3,366.8,2.727,2.727);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#727171").s().p("AAHAaIAAgaIgLAAQgBAHgBAFQgCAGgJAIIgEgFQAHgFADgGQACgDABgHIgNAAIAAgEIANAAIAAgLIgJACIgDgFIANgDIAHgDIADAEIgHAEIAAAMIALAAIAAgVIAEAAIAAAVIALAAIAAAEIgLAAIAAAag");
	this.shape_20.setTransform(163.7,416.3,2.727,2.727);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#727171").s().p("AALATIgdADIgBgGIAFAAQAGgJAEgPIAEACQgDANgFAJIASgCIgGgLIAGgCQAEAKAFAMIgGACgAgVgCIAHgKIAEgLIAEACIgEAMIgGAJgAALgIQgDgFgBgGIgIAAIAAgFIALAAQAEAMAIAIIgDAEIgIgIg");
	this.shape_21.setTransform(150.2,416.4,2.727,2.727);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727171").s().p("AgFAYIAIgvIADAAIgIAvg");
	this.shape_22.setTransform(141.2,416.7,2.727,2.727);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727171").s().p("AgWAYIAAgFIAVAAIAAgGIgSAAIAAgFIASAAIAAgFIgRAAIAAgaIAlAAIAAAaIgRAAIAAAFIATAAIAAAFIgTAAIAAAGIAUAAIAAAFgAACAAIAMAAIAAgHIgMAAgAgNAAIAMAAIAAgHIgMAAgAACgMIAMAAIAAgGIgMAAgAgNgMIAMAAIAAgGIgMAAg");
	this.shape_23.setTransform(132.2,416.3,2.727,2.727);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727171").s().p("AALATIgdADIgBgGIAFAAQAEgGAGgSIAEACQgDANgFAJIASgCIgFgLIAEgCIAKAWIgGACgAgVgCIAHgKIAEgLIAFACIgFAMQgBAEgGAFgAAMgIQgEgGgBgFIgIAAIAAgFIALAAQADALAJAJIgDAEQgFgEgCgEg");
	this.shape_24.setTransform(118.6,416.4,2.727,2.727);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727171").s().p("AgQAaIAAgcIgEAEIgCgFIAGgJIAEgNIAFACIgFAMIAAAlgAgKAYIAAgFIAFAAIAAgfIAHAAIABgEIgKAAIAAgEIAKAAIAAgFIAGABIgBAEIAOAAIAAAEIgPAAIgBAEIAOAAIAAAfIADAAIAAAFgAgBATIAQAAIAAgEIgQAAgAgBALIAQAAIAAgEIgQAAgAgBADIAQAAIAAgDIgQAAgAgBgDIAQAAIAAgEIgQAAg");
	this.shape_25.setTransform(149.4,392.5,2.727,2.727);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727171").s().p("AgVAbIAAgWIAQAAIAAAUIgFAAIAAgDIgGAAIAAAFgAgQARIAGAAIAAgHIgGAAgAAOAXQgCgEgBgJIgCgUIgNAAIAAgEIgSAAIAAgEIAHAAIgCgHIAFgBIABAIIAIAAIAAACIAMAAIAAgKIAFAAIAAAKIAIAAIAAAGIgIAAIACAUQABAKABAAQABAAABgJIADAFQgBAKgEAAQgCAAgCgDgAgFARIAFgBIAAgQIgEAAIAAgEIAMAAIAAAEIgFAAIAAAPIAHgEIAAAGIgNAGgAgUABIAAgCIAPAAIAAACgAgUgGIAAgEIAPAAIAAAEgAAPgXIAEgCIADAHIgEACg");
	this.shape_26.setTransform(128.3,392.6,2.727,2.727);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727171").s().p("AgNAXIAGgJIAEACIgFAKgAgVAWQAEgMACgJIAEADQgCANgFAJgAALAaIgBgGIAFABQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgsIAFAAIAAAtQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAgAAAAQIACgCIAFAIIgEAEgAAJAOIAAgjIAEAAIAAAjgAgKANIAAgkIAPAAIAAAkgAgFAIIAGAAIAAgHIgGAAgAgFgBIAGAAIAAgHIgGAAgAgFgNIAGAAIAAgFIgGAAgAgVgGIACgFIAIAGIgDAFgAgVgUIADgEIAHAFIgDAFg");
	this.shape_27.setTransform(107,392.5,2.727,2.727);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727171").s().p("AAKAWQgFgHgCgKIgCgQIgXAAIAAgEIAXAAIAAgKIAEAAIABAKIAPAAIAAAEIgPAAQABAMADAIQAEALACAAQABAAABgMIAFAEIgEANIgCABQgDAAgEgEgAgWARIAKgCIAAgPIgHAAIAAgEIATAAIAAAEIgHAAIAAAOIAJgEIAAAFQgLAFgMACgAAIgXIAEgCIAGAGIgEADg");
	this.shape_28.setTransform(151.4,342.1,2.727,2.727);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727171").s().p("AgUAWQAGgFADgIQACgFAAgLIAAgEIgMAAIAAgGIAVAAIgFgFIADgEIAGAHIgCACIAUAAIAAAGIgaAAIAAAIIAUAAQAAAWgDAEQgCADgKAAIgBgGIAEAAQADAAACgCQACgCAAgQIgPAAIgCALQgEAJgGAHg");
	this.shape_29.setTransform(137.4,342.1,2.727,2.727);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727171").s().p("AgUAbIAAgWIAOAAIAAAUIgEAAIAAgDIgGAAIAAAFgAgQASIAGAAIAAgIIgGAAgAAOAWQgCgCgCgKIgBgUIgNAAIAAgEIgRAAIAAgEIAGAAIgCgHIAFAAIACAHIAHAAIAAACIAMAAIAAgJIAFAAIAAAJIAIAAIAAAGIgIAAIABAUQACAKABAAIABgJIAEAFQgCAKgDAAQgDAAgBgEgAgFARIAFgBIAAgQIgEAAIAAgEIAMAAIAAAEIgFAAIAAAPIAGgEIAAAGQgFADgHADgAgUABIAAgCIAOAAIAAACgAgUgGIAAgEIAOAAIAAAEgAAPgXIADgCIAEAHIgEACg");
	this.shape_30.setTransform(123.7,342,2.727,2.727);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727171").s().p("AgMAXIAGgJIADACIgFAKgAgVAWIAHgVIAEADQgEAPgDAHgAALAaIgBgGIAFABQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgsIAFAAIAAAtIgBAFIgFABgAAAAQIACgCIAFAIIgEAEgAAIAOIAAgjIAFAAIAAAjgAgJANIAAgkIAOAAIAAAkgAgEAIIAFAAIAAgHIgFAAgAgEgBIAFAAIAAgHIgFAAgAgEgNIAFAAIAAgFIgFAAgAgVgGIADgFIAHAGIgCAFgAgUgUIACgEIAHAFIgCAFIgHgGg");
	this.shape_31.setTransform(109.8,342,2.727,2.727);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727171").s().p("AAGAaIAAgaIgJAAQgBAIgCAFQgDAFgIAIIgEgEQAHgGADgGQACgEAAgGIgMAAIAAgFIAMAAIAAgLIgJADIgDgFIAOgDIAIgEIACAEQgDAEgDAAIAAAMIAJAAIAAgVIAGAAIAAAVIAKAAIAAAFIgKAAIAAAag");
	this.shape_32.setTransform(145.4,318,2.727,2.727);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727171").s().p("AAMAUIgfADIAAgGIAFAAQADgGAIgTIADACIgIAXIASgCIgFgMIAFgBQAEAIAFAOIgFACgAgVgCIAHgKIAEgMIAFACIgFANIgHAJgAAMgIQgDgFgCgHIgIAAIAAgFIAMAAQADAMAIAJIgDAEQgFgEgCgEg");
	this.shape_33.setTransform(132,318.1,2.727,2.727);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727171").s().p("AgWAZIAAgEIAVAAIAAgDIgRAAIAAgDIARAAIAAgDIgQAAIAAgNIAkAAIAAANIgRAAIAAADIASAAIAAADIgSAAIAAADIAVAAIAAAEgAACAJIANAAIAAgDIgNAAgAgNAJIAMAAIAAgDIgMAAgAACADIANAAIAAgCIgNAAgAgNADIAMAAIAAgCIgMAAgAgVgDIAAgEIArAAIAAAEgAgRgKIAAgOIAkAAIAAAOgAgNgNIAbAAIAAgCIgbAAgAgNgTIAbAAIAAgCIgbAAg");
	this.shape_34.setTransform(148.1,292.9,2.727,2.727);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727171").s().p("AAQAaIAAgDIgRAAIAAADIgFAAIAAgrIAKAAIAAgJIAFAAIAAAJIAMAAIAAArgAAJASIAHAAIAAgOIgHAAgAgBASIAFAAIAAgOIgFAAgAAJAAIAHAAIAAgLIgHAAgAgBAAIAFAAIAAgLIgFAAgAgUAWQAEgHAEgNIAEADQgEAOgEAHgAgUgGIACgEIAJAGIgDAEIgIgGgAgSgUIADgFIAIAHIgDAGg");
	this.shape_35.setTransform(134.1,292.8,2.727,2.727);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727171").s().p("AgMAaIAAgSIgBADQgDAGgEAFIgCgHQAFgFAEgIIgJAAIAAgDIAKAAIAAgFIgIAAIAAgEIAIAAIAAgFIgIABIgBgFIAJAAIAAgHIAEAAIAAAGIAGgBIACAEIgIABIAAAGIAIAAIAAAEIgIAAIAAAFIAIAAIAAADIgIAAIAAABIAIAJIgCAEIgGgIIAAASgAALAZQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIgBgDIAAgOIgGACIAAgFIAGgBIAAgGIgGABIAAgGIAGgBIAAgHIgFACIgBgFIAJgDIAIgDIACAEIgIAEIAAAAIAAAHIAJgBIABAEIgKADIAAAGIALgCIAAAFIgLACIAAALQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEAAIACgBIABgJIAEABQgBALgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_36.setTransform(120.7,292.8,2.727,2.727);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727171").s().p("AABAaIAAgMIgWAAIAAgFIAIAAIAAgOIAOAAIAAgJIgLAAIgBACIgIAJIgDgGIAHgHIAGgKIAEADIgCAEIAcAAIAAAFIgQAAIAAAJIAPAAIAAAEIgPAAIAAAKIARAAIAAAFIgRAAIAAAMgAgIAJIAJAAIAAgKIgJAAg");
	this.shape_37.setTransform(107,292.8,2.727,2.727);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727171").s().p("AgFAXIACgDIgDABIgCgKIAEgBIACAHIACgMIAAgYIgDAAIAAgFIAWAAQgCALgCAFIAGAAQgBAOgFAHIAIAIIgDAFIgHgIQgGAGgFACIgCgFQAHgDADgEIgBgCIgFgMIgBAHQgCAJgCALgAAEgMQAFAPADAGIAEgMIgGAAIADgQIgJAAgAgWAZIADgOIAEAAIgDAPgAgOAMIAEgBQABAFAAAIIgEAAgAgFAHQgHACgIAAIgBgFIADAAIAGgKIgIACIgBgFIACAAQAEgIACgJIAEACQgCAHgDAHIAFgBIADgIIAEACQgEALgHAKQAEAAADgCIgCgDIADgCIAEALIgEABg");
	this.shape_38.setTransform(148.1,243.2,2.727,2.727);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727171").s().p("AABAaIAAgGIAGABQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgGIgeAAIAAgFIAeAAIAAgEIgdAAIAAgEIATAAIAAgDIgRAAIAAgGIARAAIAAgDIABAAIAAgDIAAgBIgGAAIABAGIgEABIgCgHIgDAAIgGAGIgCgFIAFgEIADgGIAFAAIgCAFIALAAIAAADIACgCIADgGIAFAAIgCAFIAPAAIAAAEIgKAAIADAGIgFAAIgCgGIgEAAIgEAEIAAADIASAAIAAAGIgSAAIAAADIAUAAIAAAEIgHAAIAAAEIAIAAIAAAFIgIAAIAAAHQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAgAgLAQIAEgCIAGAIIgFAEg");
	this.shape_39.setTransform(107,243.2,2.727,2.727);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727171").s().p("AgDAUIADgKQABgFAAgFQAAgEgBgFIgDgKIADAAQAEALAAAIQAAAJgEALg");
	this.shape_40.setTransform(196.8,268.4,2.727,2.727);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_41.setTransform(193.8,271.9,2.727,2.727);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#727171").s().p("AgEAHQgDgEAAgDQAAgCADgEQACgDACAAQADAAACACQADABAAADIgDAAQAAgEgFAAQgBAAgCADQgBACAAACQgBADACACQADADAAAAQAFAAAAgFIADAAQAAAHgIAAQgCAAgCgDg");
	this.shape_42.setTransform(189.9,269.6,2.727,2.727);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_43.setTransform(186.1,271.9,2.727,2.727);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#727171").s().p("AgFAHQgCgDAAgEQAAgDACgDQADgDACAAQAEAAACACQABABABADIgCAAQgBgEgFAAQgBAAgCADQgCADAAABQAAADACACQACADABAAQAEAAACgFIACAAQgCAHgGAAQgCAAgDgDg");
	this.shape_44.setTransform(182.4,269.6,2.727,2.727);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#727171").s().p("AgHAKQgCgFAAgFQAAgDACgFQADgFAEgBQAFABADAFQACAFAAADQAAAFgCAFQgDAEgFABQgEgBgDgEgAgFgHIgBAHQAAAEABAEQADAFACgBQAEABACgFQABgEAAgEQAAgDgCgEQgBgEgEAAQgCAAgDAEg");
	this.shape_45.setTransform(176.3,268.4,2.727,2.727);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#727171").s().p("AgIAHIADAAQAAAFAFAAQADAAABgCQACgCAAgEIgBgEQgDgBgCAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgDABIgCAAIAAgOIAOAAIAAACIgLAAIgBAKQAEgCABAAQAEAAACADQADAAAAAEQAAAEgDADQgCADgEAAQgHAAgBgHg");
	this.shape_46.setTransform(169.5,268.4,2.727,2.727);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#727171").s().p("AACAOIAAgXIgFADIAAgCQADgCACgDIACAAIAAAbg");
	this.shape_47.setTransform(162,268.4,2.727,2.727);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#727171").s().p("AgSARIAAgCIASAAIAAgJIgOAAIAAgBIAOAAIAAgFIAAAAIAAAFIAPAAIAAABIgPAAIAAAJIATAAIAAACgAANgCIgdABIgBgBIAGgBIAJgLIgOAAIAAgDIAhAAIAAADIgRAAIgJALIATgBIgGgGIABgBQAIAFAEAGIgBAAg");
	this.shape_48.setTransform(153.2,268.2,2.727,2.727);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_49.setTransform(146.2,271.9,2.727,2.727);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#727171").s().p("AgFAHQgCgEAAgDQAAgCACgEQADgDACAAQADAAACACQACABABADIgDAAQAAgEgFAAQAAAAgDADQgBADgBABQABADABACQADADAAAAQAFAAAAgFIADAAQAAAHgIAAQgCAAgDgDg");
	this.shape_50.setTransform(142.3,269.6,2.727,2.727);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_51.setTransform(138.5,271.9,2.727,2.727);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#727171").s().p("AgFAHQgCgDAAgEQAAgDACgDQADgDACAAQAEAAACACIACAEIgCAAQgBgEgFAAQgBAAgCADQgCADAAABQAAADACACQABADACAAQAEAAACgFIACAAQgCAHgGAAQgCAAgDgDg");
	this.shape_52.setTransform(134.8,269.6,2.727,2.727);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#727171").s().p("AgHAKQgCgEAAgGQAAgEACgEQADgFAEgBQAFABADAFQACAFAAADQAAAFgCAFQgDAEgFABQgEgBgDgEgAgFgHIgBAHQAAAEABAEQADAFACgBQAEABACgFQABgEAAgEQAAgDgCgEQgBgEgEAAQgCAAgDAEg");
	this.shape_53.setTransform(128.7,268.4,2.727,2.727);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#727171").s().p("AgHAKQgCgFAAgFQAAgDACgFQADgFAEgBQAFABADAFQACAFAAADQAAAFgCAFQgDAEgFABQgEgBgDgEgAgFgHIgBAHQAAAEABAEQADAFACgBQAEABACgFQABgEAAgEQAAgDgCgEQgBgEgEAAQgCAAgDAEg");
	this.shape_54.setTransform(121.9,268.4,2.727,2.727);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#727171").s().p("AACAOIAAgXIgFADIAAgCQADgCACgDIACAAIAAAbg");
	this.shape_55.setTransform(114.4,268.4,2.727,2.727);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#727171").s().p("AgTASIAGgHIADgJIgGAAIgBACIgCgBQAFgDAEgHIgJAAIAAgCIALAAQgCAHgEACIAGAAQAAAGgDAFQAEACAFABQACACAJAAIALgBIgBACIgKABQgJAAgDgCIgIgDQgDADgEAEgAAKANIAAgCIADAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAgMIgSAAIAAAQIgCAAIAAgRIAEAAIAAgOIAPAAIAAAOIADAAIAAAOQAAADgEAAgAAGgEIAGAAIAAgGIgGAAgAAAgEIAEAAIAAgIIAIAAIAAgEIgMAAgAAIAJIAAgCIgHAAIAAACIgBAAIAAgJIAKAAIAAAJgAABAGIAHAAIAAgGIgHAAgAgQgSIABgBQAEAEABAEIgBABg");
	this.shape_56.setTransform(105.6,268.2,2.727,2.727);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#727171").s().p("AgTASIADgIQACgFAAgFIACAAIgBAGIAEAGIABAAIAAgOIgKAAIAAgCIAJAAIAAgHIgHAAIAAgCIAHAAIAAgGIACAAIAAAGIAGAAIAAACIgGAAIAAAHIAHAAIAAACIgGAAIAAAFIAGAAIAAACIgGAAIAAAIIAFACIAMABIAJAAIAAACIgJAAIgNgBQgDAAgEgDIgFgFIAAACIgDAJgAABAOIAAgOIAQAAIAAAOIgCAAIAAgDIgMAAIAAADgAADAJIAMAAIAAgJIgMAAgAAAAAIADgHIADgIIgGAAIAAgBIARAAQgBALgBABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgFgCIAAgCIAFACIACgBIABgKIgHAAIgDAJIgFAGg");
	this.shape_57.setTransform(93.5,268.2,2.727,2.727);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#727171").s().p("AACAUQgFgLAAgJQAAgIAFgLIACAAIgEAKIgBAJIABAKIAEAKg");
	this.shape_58.setTransform(85.6,268.4,2.727,2.727);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#727171").s().p("AgFAXIACgEIgDACIgCgKIAEgBIACAHIACgMIAAgYIgDAAIAAgFIAWAAIgEAQIAGAAQgBANgFAIIAIAIIgDAFIgHgIQgEAEgHAEIgCgFQAHgDADgEIgBgCQgEgIgBgFIgBAHIgDAPIgBAGgAAEgMQAFAQADAEIAAABQADgGABgGIgGAAIADgQIgJAAgAgWAYIADgNIAEAAIgDAPgAgOAMIAEgBQABAFAAAHIgEABgAgFAGIgPADIgBgFIADAAQADgEADgGIgIACIgBgFIACAAQAEgIACgJIAEACIgFAOIAFgBIADgIIAEACQgEALgHAKIAHgCIgCgEIADgBIAEALIgEABg");
	this.shape_59.setTransform(76.6,268.2,2.727,2.727);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#727171").ss(0.4,0,0,4).p("AIAFYQAAAIgHAGQgFAGgJAAIvVAAQgIAAgHgGQgGgGAAgIIAAquQAAgJAGgGQAHgGAIAAIPVAAQAJAAAFAGQAHAGAAAJg");
	this.shape_60.setTransform(127.7,328.2,2.727,2.727);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(124.6,328.5,2.727,2.727,0,0,0,52.6,36.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EEEFF0").s().p("AnpFsQgJAAgHgGQgFgGgBgIIAAquQABgJAFgGQAHgGAJAAIPUAAQAJAAAFAGQAHAGgBAJIAAKuQABAIgHAGQgFAGgJAAg");
	this.shape_61.setTransform(127.7,328.2,2.727,2.727);

	// 圖層 1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("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");
	this.shape_62.setTransform(135.3,136);

	this.addChild(this.shape_62,this.shape_61,this.instance_1,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-6.5,301.3,435.2);


(lib.detail_t01_1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#727171").s().p("AgOAIIAHAAQAAAIAHAAQADAAACgCQADgCAAgDQAAgEgDgCQgCgCgDAAIgCABIAAgFIACAAQADAAACgBQACgDAAgDQAAgDgCgBQgCgCgDAAQgCAAgCACQgCACAAAEIgHAAQAAgHAEgEQADgDAGAAQAFAAAFADQAEAEAAAGQAAAGgGADQAHACAAAHQAAAGgFAEQgFAEgFAAQgOAAAAgPg");
	this.shape.setTransform(106.5,415.1,2.719,2.719);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727171").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_1.setTransform(99.3,420.3,2.719,2.719);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727171").s().p("AgKATQgDgDgBgHIAHAAQAAAEACACQABACAEAAQAHAAABgPQgEAEgEAAQgGAAgEgEQgEgDAAgGQAAgGAEgFQAFgEAFAAQAPAAAAAWQAAAXgPAAQgGAAgEgEgAgFgNQgCACAAAFQAAADACACQADABACAAQABAAAEgBQACgDAAgDQAAgDgCgDQgDgDgCAAQgCAAgDADg");
	this.shape_2.setTransform(92.1,415.1,2.719,2.719);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727171").s().p("AgOAIIAHAAQAAAIAHAAQADAAADgCQACgCAAgDQAAgEgCgCQgDgCgDAAIgCABIAAgFIACAAQADAAACgBQADgDgBgDQABgDgDgBQgCgCgDAAQgCAAgCACQgDACAAAEIgGAAQAAgIAEgDQADgDAGAAQAFAAAEADQAFAEAAAGQAAAGgGADQAHACAAAHQAAAGgFAEQgFAEgFAAQgOAAAAgPg");
	this.shape_3.setTransform(81.5,415.1,2.719,2.719);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727171").s().p("AgOAJIAHAAQAAAIAHAAQADAAADgCQACgDAAgDQAAgDgDgDQgCgBgDAAIgCAAIAAgFIACABQADAAACgCQADgCgBgDQABgDgDgCQgCgCgDAAQgBAAgDACQgDACAAAEIgGAAQABgHADgDQAEgEAFAAQAFAAAEADQAFADAAAHQAAAGgGADQAHADAAAGQAAAGgFAEQgEAEgGAAQgOAAAAgOg");
	this.shape_4.setTransform(118.2,317.1,2.719,2.719);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727171").s().p("AABAWIAAghIgHAEIAAgHQAGgDACgEIAFAAIAAArg");
	this.shape_5.setTransform(108.3,317.1,2.719,2.719);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727171").s().p("AABAWIAAghIgHAEIAAgHQAGgDACgEIAFAAIAAArg");
	this.shape_6.setTransform(100.3,317.1,2.719,2.719);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727171").s().p("AACAWIAAgKIgRAAIAAgEIASgdIAGAAIAAAbIAHAAIAAAGIgHAAIAAAKgAgGAGIAIAAIAAgPg");
	this.shape_7.setTransform(63.3,267.8,2.719,2.719);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727171").s().p("AAQAVQgMADgMAAIgCgGIAGAAQAEgIAAgIIgJAAIAAgEIALAAIAAgKIgIAAIAAgGIAIAAIAAgIIAFAAIAAAIIANAAIAAAGIgNAAIAAAKIAPAAIAAAEIgRAAIgFAPQAGAAAIgCIgFgJIAFgCIAIAUIgEACgAgVAWQAFgKADgKIAEADIgIAVgAgVgFIACgFIAIAGIgDAEQgEgDgDgCgAgTgUIACgEIAJAGIgDAGIgIgIg");
	this.shape_8.setTransform(212.7,366.5,2.719,2.719);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727171").s().p("AAHAXIAEgHIACgHIAEABIgBAEIAGAHIgCAFIgFgHIgBAAIgEAHgAgDAWQADgFACgIIAEABIgCAEIAFADIgDAFIgDgEIgDAIgAgMAaIgBgFIAEAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgOIgOAAIAAgcIASAAIAAAEIgGAAIAAAFIAFAAIAAABIAFgGIAEgGIAFAAIAFAHIAHAFIgDAEIgEgDIAAADIgPAAIAAgDIgCAEIgCgEIAAABIgFAAIAAAEIAFAAIAAAEIgFAAIAAADIAFAAIAAAVQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAgAgQAAIAFAAIAAgDIgFAAgAgQgHIAFAAIAAgEIgFAAgAADgOIAAABIALAAIgGgIIgFAHgAgQgOIAFAAIAAgFIgFAAgAgWAXIABgQIADAAIgBARgAgRAWIAAgPIACAAIABAPgAgOAHIADAAIABALIgDAAgAgLAHIACgBIACAJIgCABgAAKAIIAAgOIALAAIAAAOgAANAEIAEAAIAAgGIgEAAgAgBAIIAAgOIAJAAIAAAOgAABAEIADAAIAAgGIgDAAg");
	this.shape_9.setTransform(198.9,366.6,2.719,2.719);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727171").s().p("AgUAaIAAgVIAPAAIAAAUIgFAAIAAgDIgGAAIAAAEgAgQARIAGAAIAAgHIgGAAgAAOAWQgDgCAAgKIgCgUIgNAAIAAgEIgSAAIAAgFIAHAAIgCgGIAFgBIACAHIAHAAIAAAEIAMAAIAAgLIAEAAIAAALIAIAAIAAAFIgIAAIACAVQABAJACAAQABAAAAgJIAEAEQgCALgDAAQgDAAgBgEgAgFARIAFgBIAAgQIgEAAIAAgDIAMAAIAAADIgFAAIAAAOIAHgCIAAAEIgNAHgAgUABIAAgDIAPAAIAAADgAgUgFIAAgFIAPAAIAAAFgAAOgXIAEgBIADAFIgDACg");
	this.shape_10.setTransform(184.9,366.5,2.719,2.719);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727171").s().p("AgWAZIAAgEIAVAAIAAgCIgRAAIAAgEIARAAIAAgDIgQAAIAAgNIAkAAIAAANIgRAAIAAADIASAAIAAAEIgSAAIAAACIAVAAIAAAEgAACAJIANAAIAAgDIgNAAgAgNAJIAMAAIAAgDIgMAAgAACADIANAAIAAgCIgNAAgAgNADIAMAAIAAgCIgMAAgAgVgDIAAgEIArAAIAAAEgAgRgKIAAgOIAkAAIAAAOgAgNgNIAbAAIAAgCIgbAAgAgNgTIAbAAIAAgCIgbAAg");
	this.shape_11.setTransform(170.9,366.6,2.719,2.719);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727171").s().p("AgMAaIAAgSIgBADQgEAHgDAEIgCgHQAGgFADgIIgJAAIAAgDIAKAAIAAgFIgJAAIAAgFIAJAAIAAgEIgIABIgBgFIAJgBIAAgGIAFAAIAAAGIAFgBIACAEIgHACIAAAEIAGAAIAAAFIgGAAIAAAFIAHAAIAAADIgHAAIAAABIAHAKIgCADIgFgIIAAASgAALAZQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIAAgOIgGACIgBgFIAHgBIAAgGIgGAAIAAgFIAGgBIAAgGIgFABIgBgGIAJgCQAEgBADgCIAEAEIgJAEIAAAAIAAAHIAKgBIAAAFIgKACIAAAGIAKgCIABAFIgLACIAAAMQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIAEAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgCAAgHIAEACQAAAKgCAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_12.setTransform(156.9,366.5,2.719,2.719);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727171").s().p("AgGAaIAAglIAKAAIAAgPIAEAAIAAAPIANAAIAAAgIgBADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgHAAIgBgFIAGAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgFIgTAAIAAAMgAgCAIIATAAIAAgFIgTAAgAgCAAIATAAIAAgFIgTAAgAgUAWQAEgIADgMIAEADIgHAVgAgVgGIADgFQAFADADAEIgDAEgAAMgNIAFgLIAFADIgGAKgAgIgVIAFgCIADAKIgCACIgGgKgAgTgUIACgEIAJAFIgDAGg");
	this.shape_13.setTransform(142.9,366.5,2.719,2.719);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727171").s().p("AAOAaIAAgNIgOACIgBgFIAPgDIAAghIAEAAIAAAhIAEgBIABAFIgFABIAAAOgAgMAaIAAgWIgBACQgCAHgFAGIgCgGQAHgJACgFIgIAAIAAgEIAJAAIAAgVIAEAAIAAAVIAIAAIAAAEIgIAAIAAABIAIAHIgCAFIgGgIIAAAWgAAAgCIADgDIAIAFIgEAEQgCgEgFgCgAABgPIADgEIAIAHIgEAEIgHgHgAgGgKIACgMIAEABIgCANgAgVgUIAEgBIADALIgEABg");
	this.shape_14.setTransform(129.1,366.5,2.719,2.719);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727171").s().p("AgWAXQAFgJAAgFQACgFgBgLIAAgSIAFAAIAAAKIADgFIADAEIgGAHIgBAOIAFAIIgCAFIgEgHQgBAIgEAHgAAPAMIADgBIAFANIgFACgAAHANIADgBIAEANIgFAAgAAAANIADAAIADAMIgGAAgAgJAYQADgGAAgGIAFABIgEAMgAAQADIgCgEQgCAEgGAHIgEgDQAFgFACgFIACgFIgEAAIAAgEIgEAKQgDAGgGAGIgCgFIAHgFIgEgCIADgDIACACIAAAAIABgEIgCgCIABgEIACACIABgGIgDAAIAAAEQgCAFgFAGIgCgEIAFgJIADgKIABAAIAAAEIAHAAIAAAIIAEAAIAAgMIAFAAIAAAMIAFAAIAAAFIgFAAIACAIQACADADADIgDAEIgEgHgAgWAAQACgGAAgIIADAAQAAAJgBAGgAARgVIADgBIACAHIgEACg");
	this.shape_15.setTransform(115.2,366.6,2.719,2.719);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727171").s().p("AgBAaIAAgHIgUAAIAAgFIAUAAIAAgEIgQAAIAAgVIAQAAIAAgEIgUAAIAAgGIAUAAIAAgFIADAAIAAAFIAUAAIAAAGIgUAAIAAAEIARAAIAAAVIgRAAIAAAEIAUAAIAAAFIgUAAIAAAHgAACAEIAMAAIAAgEIgMAAgAgNAEIAMAAIAAgEIgMAAgAACgDIAMAAIAAgDIgMAAgAgNgDIAMAAIAAgDIgMAAg");
	this.shape_16.setTransform(101.2,366.5,2.719,2.719);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#727171").s().p("AAQAaIAAgDIgPAAIAAADIgCAAIAAgYIAVAAIAAAYgAABATIAPAAIAAgFIgPAAgAABAKIAPAAIAAgEIgPAAgAgWAUIACAAIAAgVIADAAIAAAUIAEgBIAAgWIgGAAIAAgTIAPAAIAAASIAEgFIACgGIgEAAIAAgFIAIAAIAAAFIgEAIQgBAEgDADIgDgDIgDAAIAAAGIAFAAIAAAEIgFAAIAAAKIAGgBIAAAFQgLAEgIABgAgPgJIAHAAIAAgKIgHAAgAACAAIAAgEIAEABQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgWIAEAAIAAAFIADAFIAFgHIAEADQgDAFgEADIAAAAQACADAFAFIgCAEQgFgFgCgEIgDgEIAAAJIgBAEIgDAAg");
	this.shape_17.setTransform(87.3,366.5,2.719,2.719);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727171").s().p("AAKAaIAAgaIgDADIAAgBIAAAXIgEAAIAAgDIgDAAIAAAEIgEAAIAAgYIgCADIgBgEIAAATIgBADIgDACIgCAAIgBgFIACAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgOIgDAEIgBgDIgDAUIgDgEIABgKIABglIAMAAIAAAZQAEgEADgIIADAAIAHAMIAAgYIAMAAIAAAmIgBAEIgDACIgCAAIgBgFIABAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgfIgEAAIAAAtgAAAARIADAAIAAgMIgDAAgAgPAFIAEgFIAAgFIgCABIgCgHgAgDAAIAJAAIgFgIIgEAIgAgLgHIAAgNIgEAAIAAAHIACgBgAgHgMQADgFACgHIACABIgCANgAACgXIADgBIAEALIgEACg");
	this.shape_18.setTransform(73.2,366.7,2.719,2.719);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#727171").s().p("AAOAZIAAgCIgIAAIAAACIgFAAIAAgTIAMAAIgDgCQgEgCgCgCIgGAAIgCAAIgIAGIALAAIAAATIgEAAIAAgCIgIAAIAAACIgEAAIAAgQIgCABIgCgFQAIgDAFgCIAAAAIgNAAIAAgFIARAAIACgFIgQAAIAAgOIARAAIAAAOIACAAIgBAFIALAAIgCgDIAEgBIADAEIAGAAIAAAFIgNAAIAEABQAEADAFABIgCAFIgBgBIAAAQgAAGATIAIAAIAAgIIgIAAgAgNATIAIAAIAAgIIgIAAgAgNgOIAIAAIAAgGIgIAAgAABgKIAAgOIASAAIAAAOgAAGgOIAIAAIAAgGIgIAAg");
	this.shape_19.setTransform(59.4,366.7,2.719,2.719);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#727171").s().p("AALAUQgCACgHAEIgCgEIAJgGIAAAAIgCgKIgHAAIAAACIAFAGIgCAFIgDgGIgCAHIgFAGIgDgEQADgDACgEIACgIIAAgBIgFAAIAAgCIgBAAIgDgEIAAAaIgEAAIAAgYIgEAKIgCgGIAGgOIAAgCIgFAAIAAgEIAFAAIAAgLIAEAAIAAALIAEAAIAAAEIgEAAIAAAEIAGAHIgBABIAEAAIAAgDIgDABIgBgEIADAAIADgHIgGABIAAgDIACAAIADgLIACAAIgCAKIACAAIAAgFIAEABQgCAGgDAIIACgBIgBgDIACgBIADAJIgDAAIgBgCIgBABIAAADIAGAAIgBgCIgBgaIAEAAQAAAVACAHIAEAAIgBgCIgDAAIgBgDIADAAIADgIIgFABIgBgDIACAAIADgLIADAAIgDAKIADAAIABgFIADACIgGANIAEAAIgBgEIACgBIADAJIgDAAIgBgBIgCAAIABADIAFAAIAAAEIgNAAIACAHIADgGIAEADIgFAHQACAFACAAIAAgBIABgHIAEACIgCAJIgDABQgDABgEgHg");
	this.shape_20.setTransform(45.4,366.5,2.719,2.719);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#727171").s().p("AAHAaIAAgaIgKAAQgBAHgDAFQgCAHgIAHIgEgFQAIgFACgGQABgDABgHIgLAAIAAgEIALAAIAAgLIgIACIgDgFIANgDIAHgDIADAEIgGAEIAAAMIAKAAIAAgVIAEAAIAAAVIALAAIAAAEIgLAAIAAAag");
	this.shape_21.setTransform(164.4,415.8,2.719,2.719);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727171").s().p("AALATIgdADIgBgGIAFAAQAGgKAFgOIADACQgDANgFAJIARgBIgEgMIAEgCQAGAKADAMIgFACgAgVgCIAHgKIAEgLIAEACIgEANIgHAIgAALgIQgCgFgCgGIgIAAIAAgFIALAAQAEALAIAJIgEAEIgHgIg");
	this.shape_22.setTransform(151,415.9,2.719,2.719);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727171").s().p("AgFAYIAIgvIADAAIgIAvg");
	this.shape_23.setTransform(142,416.2,2.719,2.719);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727171").s().p("AgWAYIAAgFIAVAAIAAgGIgSAAIAAgFIASAAIAAgFIgRAAIAAgaIAlAAIAAAaIgRAAIAAAFIASAAIAAAFIgSAAIAAAGIAUAAIAAAFgAACAAIAMAAIAAgHIgMAAgAgOAAIANAAIAAgHIgNAAgAACgLIAMAAIAAgHIgMAAgAgOgLIANAAIAAgHIgNAAg");
	this.shape_24.setTransform(133,415.8,2.719,2.719);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727171").s().p("AALATIgdADIgBgGIAFAAQAFgHAFgRIAEACIgIAWIASgBIgFgMIAEgCIAKAWIgGACgAgVgCIAHgKIAEgLIAFACIgFANQgBADgGAFgAAMgIQgEgGgBgFIgIAAIAAgFIALAAQADAKAJAKIgDAEQgFgEgCgEg");
	this.shape_25.setTransform(119.5,415.9,2.719,2.719);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727171").s().p("AgQAaIAAgcIgEAEIgCgFIAGgJIAEgNIAFACIgFAMIAAAlgAgJAYIAAgEIAEAAIAAggIAHAAIAAgEIgJAAIAAgEIAJAAIABgFIAGABIgBAEIAOAAIAAAEIgOAAIgBAEIAMAAIAAAgIAEAAIAAAEgAAAAUIAPAAIAAgFIgPAAgAAAALIAPAAIAAgEIgPAAgAAAADIAPAAIAAgDIgPAAgAAAgDIAPAAIAAgEIgPAAg");
	this.shape_26.setTransform(150.1,392.2,2.719,2.719);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727171").s().p("AgVAaIAAgVIAQAAIAAAUIgFAAIAAgDIgGAAIAAAEgAgQARIAGAAIAAgHIgGAAgAAOAWQgCgDgBgIIgCgVIgNAAIAAgEIgSAAIAAgFIAHAAIgCgFIAFgCIABAHIAIAAIAAAEIAMAAIAAgLIAFAAIAAALIAIAAIAAAFIgIAAIACAVQABAJABAAQABAAABgIIADADQgBALgEAAQgCAAgCgEgAgFARIAFgBIAAgQIgEAAIAAgDIAMAAIAAADIgFAAIAAAOIAHgCIAAAFIgNAGgAgUABIAAgDIAPAAIAAADgAgUgFIAAgFIAPAAIAAAFgAAPgXIAEgBIADAGIgEABg");
	this.shape_27.setTransform(129.1,392.2,2.719,2.719);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727171").s().p("AALAaIgBgGIAFABQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgtIAFAAIAAAtQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAgAgNAXIAGgJIAEACQgCAHgDADgAgVAWQAEgMACgJIAEADQgCANgFAJgAAAAQIACgCIAFAIIgEAEgAAJAOIAAgjIAEAAIAAAjgAgKANIAAgkIAPAAIAAAkgAgFAIIAGAAIAAgHIgGAAgAgFgBIAGAAIAAgHIgGAAgAgFgMIAGAAIAAgGIgGAAgAgVgGIACgFIAIAGIgDAFgAgVgUIADgEIAHAFIgDAFIgHgGg");
	this.shape_28.setTransform(107.9,392.2,2.719,2.719);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727171").s().p("AAKAWQgFgHgCgKQgCgGAAgKIgXAAIAAgEIAXAAIAAgKIAEAAIABAKIAPAAIAAAEIgPAAQABAMADAIQAEALACAAQABAAABgLIAFADQgDALgBACQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgEAAgDgEgAgWARIAKgCIAAgPIgHAAIAAgDIATAAIAAADIgHAAIAAAOIAJgEIAAAFQgLAFgMACgAAIgXIAEgCIAGAGIgEADg");
	this.shape_29.setTransform(152.1,341.9,2.719,2.719);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727171").s().p("AgUAWQAGgFADgIQACgFAAgLIAAgEIgMAAIAAgGIAVAAIgFgFIADgEIAGAHIgCACIAUAAIAAAGIgaAAIAAAIIAUAAQAAAXgDADQgCADgKAAIgBgGIAEAAQADAAACgCQACgCAAgQIgPAAIgCALQgDAIgHAIg");
	this.shape_30.setTransform(138.2,341.9,2.719,2.719);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727171").s().p("AgUAaIAAgVIAPAAIAAAUIgFAAIAAgCIgGAAIAAADgAgQARIAGAAIAAgHIgGAAgAAOAXQgCgDgBgJIgCgVIgNAAIAAgEIgRAAIAAgFIAGAAIgCgGIAFgBIACAHIAHAAIAAADIAMAAIAAgKIAFAAIAAAKIAIAAIAAAGIgIAAIABAVQACAJABAAIABgIIAEADQgCALgDAAQgCAAgCgDgAgEARIAEgBIAAgQIgEAAIAAgDIAMAAIAAADIgFAAIAAAPQAEgBACgCIAAAFIgMAGgAgUABIAAgDIAPAAIAAADgAgUgFIAAgFIAPAAIAAAFgAAOgXIAEgCIAEAHIgEABg");
	this.shape_31.setTransform(124.6,341.8,2.719,2.719);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727171").s().p("AALAaIgBgGIAFABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgtIAEAAIAAAtIgBAFQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAgAgMAXIAGgJIADACQgCAHgDADgAgVAWIAHgVIAEADQgEAPgDAHgAAAAQIACgCIAFAIIgFAEgAAJAOIAAgjIAEAAIAAAjgAgJANIAAgkIAOAAIAAAkgAgEAIIAFAAIAAgHIgFAAgAgEgBIAFAAIAAgHIgFAAgAgEgMIAFAAIAAgGIgFAAgAgVgGIADgFIAHAGIgDAFgAgUgUIADgEIAGAFIgCAFIgHgGg");
	this.shape_32.setTransform(110.7,341.7,2.719,2.719);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727171").s().p("AAGAbIAAgbIgKAAQgBAIgBAFQgCAFgJAIIgFgEQAIgFADgGQACgFABgGIgNAAIAAgEIANAAIAAgLIgJACIgEgGIAOgCIAIgEIACAEIgHAEIAAANIAKAAIAAgVIAGAAIAAAVIAKAAIAAAEIgKAAIAAAbg");
	this.shape_33.setTransform(146.2,317.9,2.719,2.719);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727171").s().p("AAMAUQgMACgTABIAAgGIAFAAQADgGAIgTIADACIgIAXIASgCIgFgMIAFgBQAEAIAFAOIgFACgAgVgCIAHgKIAEgLIAFACIgFAMIgHAJgAAMgIQgDgFgCgHIgIAAIAAgFIAMAAQADAMAIAJIgDAEQgFgEgCgEg");
	this.shape_34.setTransform(132.8,317.9,2.719,2.719);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727171").s().p("AgWAZIAAgEIAVAAIAAgCIgRAAIAAgEIARAAIAAgDIgQAAIAAgNIAkAAIAAANIgRAAIAAADIASAAIAAAEIgSAAIAAACIAVAAIAAAEgAACAJIANAAIAAgDIgNAAgAgNAJIAMAAIAAgDIgMAAgAACADIANAAIAAgCIgNAAgAgNADIAMAAIAAgCIgMAAgAgVgDIAAgEIArAAIAAAEgAgRgKIAAgOIAkAAIAAAOgAgNgNIAbAAIAAgCIgbAAgAgNgTIAbAAIAAgCIgbAAg");
	this.shape_35.setTransform(148.8,292.8,2.719,2.719);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727171").s().p("AAQAbIAAgEIgRAAIAAAEIgFAAIAAgrIAKAAIAAgKIAFAAIAAAKIAMAAIAAArgAAJASIAHAAIAAgOIgHAAgAgBASIAFAAIAAgOIgFAAgAAJAAIAHAAIAAgLIgHAAgAgBAAIAFAAIAAgLIgFAAgAgUAWQAFgIADgMIAEADQgEAOgEAHgAgUgGIACgFIAJAHIgDAEIgIgGgAgSgUIADgFIAIAHIgDAFg");
	this.shape_36.setTransform(134.9,292.8,2.719,2.719);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727171").s().p("AgMAbIAAgSIgBACQgCAFgFAFIgCgFQAGgHADgHIgJAAIAAgCIAKAAIAAgGIgIAAIAAgFIAIAAIAAgEIgIAAIgBgEIAJgBIAAgFIAEAAIAAAFIAGgCIACAFIgIACIAAAEIAIAAIAAAFIgIAAIAAAGIAIAAIAAACIgIAAIAAABIAIAJIgCAFIgGgIIAAASgAALAaQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAIgBgEIAAgMIgGABIAAgFIAGgCIAAgGIgGABIAAgEIAGgBIAAgHIgFABIgBgGIAJgCIAIgDIACAEQgFADgDABIAAABIAAAHIAJgCIABAFIgKABIAAAHIALgCIAAAFIgLACIAAAMQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAEAAIACgBIABgIIAEABQgBAKgBABQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_37.setTransform(121.5,292.7,2.719,2.719);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727171").s().p("AABAbIAAgNIgWAAIAAgFIAIAAIAAgPIAOAAIAAgIIgLAAIgBABQgCAFgGAEIgDgEQAFgEACgEIAGgJIADACIgBAEIAcAAIAAAFIgPAAIAAAIIAOAAIAAAGIgOAAIAAAJIARAAIAAAFIgRAAIAAANgAgIAJIAJAAIAAgJIgJAAg");
	this.shape_38.setTransform(107.9,292.7,2.719,2.719);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727171").s().p("AgFAXIACgDIgDABIgCgKIAEgBIACAIIACgNIAAgYIgDAAIAAgEIAWAAQgCAKgCAFIAGAAQgBAOgFAHIAIAIIgDAFIgHgIQgGAGgFACIgCgFQAHgDADgEIgBgCIgFgMIgBAHQgCAJgCALgAAEgMQAFAPADAGIAEgMIgGAAIADgQIgJAAgAgWAZIADgOIAEAAIgDAPgAgOAMIAEgBQABAFAAAIIgEAAgAgFAHQgHACgIAAIgBgFIADAAIAGgKIgIACIgBgFIACAAQADgHADgKIAEACQgCAHgDAHIAFgBIADgIIAEACQgFANgGAIQAEAAADgCIgCgDIADgCIAEALIgEABg");
	this.shape_39.setTransform(148.8,243.3,2.719,2.719);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727171").s().p("AABAaIgBgFIAHAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgHIgeAAIAAgFIAeAAIAAgEIgdAAIAAgEIATAAIAAgEIgRAAIAAgEIARAAIAAgEIABAAIAAgDIAAgBIgHAAIACAGIgEAAIgBgGIgEAAIgFAFIgDgDIAFgFIADgGIAFABIgCADIALAAIAAAFIACgEIADgFIAEABIgBADIAPAAIAAAFIgJAAIACAFIgGABIgBgGIgEAAIgEAEIAAAEIASAAIAAAEIgSAAIAAAEIAUAAIAAAEIgHAAIAAAEIAJAAIAAAFIgJAAIAAAIQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAgAgLAQIAEgDIAGAJIgFAEg");
	this.shape_40.setTransform(107.9,243.2,2.719,2.719);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#727171").s().p("AgDAUIADgKQABgFAAgFQAAgFgBgEIgDgKIADAAQAEALAAAIQAAAJgEALg");
	this.shape_41.setTransform(197.5,268.4,2.719,2.719);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_42.setTransform(194.4,271.8,2.719,2.719);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#727171").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgEADAAQAEAAABABQADADAAADIgDAAQAAgFgFAAQgBAAgCADQgCACAAACQABADABACQACADABAAQAFAAAAgEIADAAQAAAGgIAAQgDAAgCgEg");
	this.shape_43.setTransform(190.5,269.6,2.719,2.719);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_44.setTransform(186.8,271.8,2.719,2.719);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#727171").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgEACAAQAEAAACABIACAGIgCAAQgBgFgFAAQgBAAgCADQgBACAAACQAAADABACQABADACAAQAEAAACgEIACAAQgCAGgGAAQgCAAgDgEg");
	this.shape_45.setTransform(183,269.6,2.719,2.719);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#727171").s().p("AgHAJQgCgEAAgFQAAgDACgFQADgGAEABQAFgBADAGQACAFAAADQAAAFgCAEQgDAGgFgBQgEABgDgGgAgFgHIgBAHQAAAFABADQADAEACABQAEgBACgEQABgDAAgFQAAgDgCgEQgBgEgEAAQgCAAgDAEg");
	this.shape_46.setTransform(177,268.4,2.719,2.719);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#727171").s().p("AgIAHIADAAQAAAFAFAAQADAAABgCQACgDAAgDIgBgEQgCgBgDAAIgCABIgDABIgCAAIAAgOIAOAAIAAACIgLAAIgBAKQAEgDABAAQAEAAACAEQADAAAAAEQAAAEgDADQgCADgEAAQgHAAgBgHg");
	this.shape_47.setTransform(170.2,268.5,2.719,2.719);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#727171").s().p("AACAOIAAgYIgFAEIAAgDIAFgEIACAAIAAAbg");
	this.shape_48.setTransform(162.7,268.4,2.719,2.719);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#727171").s().p("AgTASIAAgDIATAAIAAgIIgOAAIAAgDIAOAAIAAgEIAAAAIAAAEIAPAAIAAADIgPAAIAAAIIAUAAIAAADgAANgDIgdADIgBgDIAGAAIAJgLIgOAAIAAgCIAhAAIAAACIgRAAIgJALIAUgBIgHgGIABgCQAIAHAEAFIgBAAg");
	this.shape_49.setTransform(153.9,268.2,2.719,2.719);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_50.setTransform(146.9,271.8,2.719,2.719);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#727171").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgEADAAQADAAADABIACAGIgCAAQgBgFgFAAQgBAAgCADQgBACgBACQABADABACQACADABAAQAFAAABgEIACAAQgBAGgHAAQgDAAgCgEg");
	this.shape_51.setTransform(143.1,269.6,2.719,2.719);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#727171").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_52.setTransform(139.3,271.8,2.719,2.719);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#727171").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgEACAAQADAAACABIADAGIgDAAQAAgFgFAAQAAAAgDADQgBACAAACQAAADABACQABADACAAQAEAAABgEIADAAQgBAGgHAAQgCAAgDgEg");
	this.shape_53.setTransform(135.6,269.6,2.719,2.719);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#727171").s().p("AgHAJQgCgDAAgGQAAgEACgEQADgGAEABQAFgBADAGQACAFAAADQAAAFgCAEQgDAGgFgBQgEABgDgGgAgFgHIgBAHQAAAFABADQADAEACABQAEgBACgEQABgDAAgFQAAgDgCgEQgBgEgEAAQgCAAgDAEg");
	this.shape_54.setTransform(129.5,268.4,2.719,2.719);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#727171").s().p("AgHAJQgCgEAAgFQAAgDACgFQADgGAEABQAFgBADAGQACAFAAADQAAAFgCAEQgDAGgFgBQgEABgDgGgAgFgHIgBAHQAAAFABADQADAEACABQAEgBACgEQABgDAAgFQAAgDgCgEQgBgEgEAAQgCAAgDAEg");
	this.shape_55.setTransform(122.7,268.4,2.719,2.719);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#727171").s().p("AACAOIAAgYIgFAEIAAgDIAFgEIACAAIAAAbg");
	this.shape_56.setTransform(115.3,268.4,2.719,2.719);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#727171").s().p("AgTASIAGgHIADgJIgFAAIgCABIgCgBQAFgCADgGIgIAAIAAgCIALAAQgCAFgEADIAGAAQgBAGgCAFIAIAEIAXABIAAACIgLAAQgJAAgDgBIgIgFQgEAGgDABgAALAMIAAgBIACAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgNIgSAAIAAAQIgCAAIAAgSIADAAIAAgMIAPAAIAAAMIAEAAIAAAPQAAADgEAAgAAFgFIAHAAIAAgFIgHAAgAAAgFIAEAAIAAgHIAIAAIAAgDIgMAAgAAIAJIAAgCIgGAAIAAACIgCAAIAAgJIALAAIAAAJgAACAFIAGAAIAAgEIgGAAgAgQgRIACgBQADADABADIgBACg");
	this.shape_57.setTransform(106.5,268.2,2.719,2.719);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#727171").s().p("AgTASIADgIQACgFAAgFIACAAIgBAGIAEAGIABAAIAAgOIgKAAIAAgCIAJAAIAAgHIgHAAIAAgCIAHAAIAAgGIACAAIAAAGIAGAAIAAACIgGAAIAAAHIAHAAIAAACIgGAAIAAAFIAGAAIAAACIgGAAIAAAIIAFACIAMABIAJAAIAAACIgJAAIgNgBQgEAAgDgDIgFgFIAAACIgDAJgAABAOIAAgOIAQAAIAAAOIgCAAIAAgDIgMAAIAAADgAADAJIAMAAIAAgJIgMAAgAAAAAIADgHIADgIIgGAAIAAgBIARAAQAAALgCABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgFgCIAAgBIAFABIACgBIABgKIgHAAIgDAJIgFAGg");
	this.shape_58.setTransform(94.5,268.2,2.719,2.719);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#727171").s().p("AABAUQgEgLAAgJQAAgIAEgLIADAAIgEAKIAAAJIAAAKIAEAKg");
	this.shape_59.setTransform(86.5,268.4,2.719,2.719);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#727171").s().p("AgFAXIACgEIgDACIgCgKIAEgBIACAHIACgMIAAgYIgDAAIAAgFIAWAAQgCALgCAFIAGAAQgBANgFAIIAIAIIgDAFIgHgIQgFAFgGADIgCgFQAHgDADgEIgBgCIgFgMIgBAHIgDAOIgBAGgAAEgMQAFAQADAEIAAABQADgGABgGIgGAAIADgQIgJAAgAgWAYIADgNIAEAAIgDAPgAgOAMIAEgBQABAFAAAIIgEAAgAgFAGIgPADIgBgFIADAAQADgEADgGIgIACIgBgFIACAAQAEgIACgJIAEACIgFAOIAFgBIADgIIAEACQgEALgHAKIAHgCIgCgEIADgBIAEALIgEABg");
	this.shape_60.setTransform(77.6,268.2,2.719,2.719);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#727171").ss(0.4,0,0,4).p("AH/FYQAAAIgFAGQgHAGgIAAIvVAAQgIAAgHgGQgGgGAAgIIAAquQAAgJAGgGQAHgGAIAAIPVAAQAIAAAHAGQAFAGAAAJg");
	this.shape_61.setTransform(128.1,328,2.719,2.719);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIHAsIwNAAIAAhXIQNAAg");
	this.shape_62.setTransform(128.3,391.3,2.682,2.719);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DEDEE1").s().p("AoGAsIAAhXIQNAAIAABXg");
	this.shape_63.setTransform(128.3,391.3,2.682,2.719);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIGAsIwLAAIAAhXIQLAAg");
	this.shape_64.setTransform(128.1,340.9,2.683,2.719);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DEDEE1").s().p("AoFAsIAAhXIQLAAIAABXg");
	this.shape_65.setTransform(128.1,340.9,2.683,2.719);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIHAsIwNAAIAAhXIQNAAg");
	this.shape_66.setTransform(128.3,291.8,2.682,2.719);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DEDEE1").s().p("AoGAsIAAhXIQNAAIAABXg");
	this.shape_67.setTransform(128.3,291.8,2.682,2.719);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#727171").ss(0.2,0,0,4).p("AIAAsIv+AAIAAhEQACgIAEgGQADgDAHgCQADAAADAAIPaAAQAHAAACAFQAEAFABAGg");
	this.shape_68.setTransform(128.2,241.4,2.719,2.719);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DEDEE1").s().p("An+AsIAAhEQABgIAFgGQADgDAGgCIAGAAIPbAAQAHAAACAFQAEAFAAAGIAABHg");
	this.shape_69.setTransform(128.2,241.4,2.719,2.719);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EEEFF0").s().p("AnpFsQgJAAgHgGQgFgGAAgIIAAquQAAgJAFgGQAHgGAJAAIPUAAQAIAAAHAGQAFAGAAAJIAAKuQAAAIgFAGQgHAGgIAAg");
	this.shape_70.setTransform(128.1,328,2.719,2.719);

	// 圖層 1
	this.instance = new lib.L_Label();
	this.instance.setTransform(116,17.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("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");
	this.shape_71.setTransform(127.8,129.1);

	this.addChild(this.shape_71,this.instance,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.1,-5.1,280.7,433.3);


(lib.CardGameClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{StageIn:6,StageInComplete:37,ReadyPlay:74});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
		this.dispatchEvent("readyPlay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74).wait(80));

	// ViewPort
	this.vp = new lib.ViewPortSample();
	this.vp.setTransform(0,0,1,0.781);

	this.timeline.addTween(cjs.Tween.get(this.vp).wait(154));

	// IntroText
	this.instance = new lib.IntroText();
	this.instance.setTransform(-6,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(11).to({_off:false,scaleX:0.43,scaleY:0.43,x:0,alpha:0},0).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.004},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-0.1,alpha:0.017},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-0.2,alpha:0.04},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-0.5,alpha:0.078},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.8,alpha:0.133},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-1.3,alpha:0.209},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-1.9,alpha:0.311},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-2.6,alpha:0.436},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-3.4,alpha:0.57},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-4.2,alpha:0.694},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-4.8,alpha:0.794},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-5.3,alpha:0.869},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-5.6,alpha:0.923},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-5.8,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-6,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(8).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-5.9,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-5.8,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-5.5,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-5.1,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-4.6,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-3.9,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-3,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-2.2,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-1.5,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-0.9,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.5,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-0.3,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-0.1,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,x:0,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},17).wait(80));

	// DotLine
	this.instance_1 = new lib.DotLine();
	this.instance_1.setTransform(-5,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},6).wait(9).to({_off:false,scaleX:0.42,x:0,alpha:0},0).wait(1).to({scaleX:0.42,alpha:0.004},0).wait(1).to({scaleX:0.43,x:-0.1,alpha:0.017},0).wait(1).to({scaleX:0.44,x:-0.2,alpha:0.04},0).wait(1).to({scaleX:0.46,x:-0.4,alpha:0.078},0).wait(1).to({scaleX:0.5,x:-0.7,alpha:0.133},0).wait(1).to({scaleX:0.54,x:-1,alpha:0.209},0).wait(1).to({scaleX:0.6,x:-1.6,alpha:0.311},0).wait(1).to({scaleX:0.67,x:-2.2,alpha:0.436},0).wait(1).to({scaleX:0.75,x:-2.9,alpha:0.57},0).wait(1).to({scaleX:0.82,x:-3.5,alpha:0.694},0).wait(1).to({scaleX:0.88,x:-4,alpha:0.794},0).wait(1).to({scaleX:0.92,x:-4.3,alpha:0.869},0).wait(1).to({scaleX:0.96,x:-4.6,alpha:0.923},0).wait(1).to({scaleX:0.98,x:-4.8,alpha:0.96},0).wait(1).to({scaleX:0.99,x:-4.9,alpha:0.984},0).wait(1).to({scaleX:1,x:-5,alpha:0.996},0).wait(1).to({scaleX:1,alpha:1},0).wait(12).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-4.9,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-4.8,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-4.6,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-4.2,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-3.8,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-3.2,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-2.5,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-1.8,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-1.2,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-0.8,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.4,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-0.2,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-0.1,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,x:0,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},15).wait(80));

	// Title
	this.instance_2 = new lib.Title();
	this.instance_2.setTransform(15,-140.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},6).wait(7).to({_off:false,scaleX:0.21,scaleY:0.21,x:0,alpha:0},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:0.1,alpha:0.004},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:0.2,alpha:0.017},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:0.6,alpha:0.04},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:1.2,alpha:0.078},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:2,alpha:0.133},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:3.1,alpha:0.209},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:4.7,alpha:0.311},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:6.5,alpha:0.436},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:8.6,alpha:0.57},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:10.4,alpha:0.694},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:11.9,alpha:0.794},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:13,alpha:0.869},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:13.9,alpha:0.923},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:14.4,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:14.8,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,x:14.9,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,x:15,alpha:1},0).wait(16).to({scaleX:1,scaleY:1,x:14.9,alpha:0.996},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:14.7,alpha:0.981},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:14.3,alpha:0.954},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:13.7,alpha:0.91},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:12.7,alpha:0.846},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:11.3,alpha:0.756},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:9.6,alpha:0.637},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:7.5,alpha:0.497},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:5.4,alpha:0.358},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:3.6,alpha:0.241},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:2.3,alpha:0.152},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:1.3,alpha:0.088},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:0.7,alpha:0.046},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:0.3,alpha:0.019},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:0.1,alpha:0.004},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:0,alpha:0},0).to({_off:true},13).wait(80));

	// StartButton
	this.btnStart = new lib.StartButton();
	this.btnStart.setTransform(-1,180.3,0.385,0.385);
	this.btnStart.alpha = 0;
	new cjs.ButtonHelper(this.btnStart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).wait(11).to({x:0},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.004},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.017},0).wait(1).to({scaleX:0.41,scaleY:0.41,alpha:0.04},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-0.1,alpha:0.078},0).wait(1).to({scaleX:0.47,scaleY:0.47,alpha:0.133},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.2,alpha:0.209},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-0.3,alpha:0.311},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-0.4,alpha:0.436},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-0.6,alpha:0.57},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-0.7,alpha:0.694},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-0.8,alpha:0.794},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-0.9,alpha:0.869},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.923},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-1,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(20).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-0.9,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-0.8,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-0.6,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.5,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-0.4,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-0.2,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.1,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:0,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},11).wait(80));

	// BlueBackground
	this.instance_3 = new lib.BlueBackground();
	this.instance_3.setTransform(-1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},6).wait(3).to({_off:false,scaleX:0.12,scaleY:0.12,x:0,alpha:0},0).wait(1).to({scaleX:0.12,scaleY:0.12,alpha:0.004},0).wait(1).to({scaleX:0.13,scaleY:0.13,alpha:0.017},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.04},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-0.1,alpha:0.078},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.133},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-0.2,alpha:0.209},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-0.3,alpha:0.311},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.4,alpha:0.436},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-0.6,alpha:0.57},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-0.7,alpha:0.694},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-0.8,alpha:0.794},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-0.9,alpha:0.869},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.923},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-1,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(24).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-0.9,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-0.8,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-0.6,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.5,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-0.4,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-0.2,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.1,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:0,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},9).wait(80));

	// Basement
	this.instance_4 = new lib.Basement();
	this.instance_4.setTransform(9.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({scaleX:0.82,scaleY:0.82,alpha:0},0).wait(1).to({regX:-32,regY:-47,scaleX:0.82,scaleY:0.82,x:-16.6,y:-46.4,alpha:0.004},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-16.7,y:-46.5,alpha:0.017},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-16.9,y:-46.7,alpha:0.04},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-17.1,y:-47,alpha:0.078},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-17.4,y:-47.5,alpha:0.133},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-17.8,y:-48.2,alpha:0.209},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-18.4,y:-49,alpha:0.311},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-19.2,y:-50.1,alpha:0.436},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-20,y:-51.3,alpha:0.57},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-20.7,y:-52.3,alpha:0.694},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-21.3,y:-53.2,alpha:0.794},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-21.7,y:-53.9,alpha:0.869},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-22,y:-54.3,alpha:0.923},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-22.2,y:-54.6,alpha:0.96},0).wait(1).to({scaleX:1,scaleY:1,x:-22.4,y:-54.8,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,x:-22.5,y:-54.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:9.5,y:-8,alpha:1},0).wait(131));

	// Shadow
	this.instance_5 = new lib.Shadow();
	this.instance_5.setTransform(-22.5,422.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({scaleX:0.19,scaleY:0.19,alpha:0},0).wait(1).to({scaleX:0.19,scaleY:0.19,alpha:0.004},0).wait(1).to({scaleX:0.2,scaleY:0.2,alpha:0.017},0).wait(1).to({scaleX:0.22,scaleY:0.22,alpha:0.04},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.078},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.133},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.209},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.311},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.436},0).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.57},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.694},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.794},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.869},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.923},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401,-521,802,1042);


(lib.BtnToRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.product_v_s();
	this.instance.setTransform(0,0,1,1,0,0,0,39.5,40);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("AttbqMAAAg3TIbbAAMAAAA3Tg");
	this.shape.setTransform(-30,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-40,79,80);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gift_btn_1();
	this.instance.setTransform(74,78.5,1,1,0,0,0,74,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:58.5},29).to({y:78.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,157);


(lib.bg = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E5E5").s().p("Eg4RArcUAVFg5BASkgc+QCxgOD4gOQHygcFlAAQGZAAInAkQETATDCASQJYTkHjVKQHnVSGDXug");
	this.shape.setTransform(360.3,278.1);

	// Layer 2
	this.instance = new lib.ston_1();
	this.instance.setTransform(284,352.6,1,1,0,0,180,226.7,63.6);
	this.instance.alpha = 0.512;

	this.instance_1 = new lib.ston_1();
	this.instance_1.setTransform(302.3,147.6,1,1,0,0,180,226.7,63.6);
	this.instance_1.alpha = 0.512;

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBD587").s().p("Eg4QArcMgABhPlQG1h1K4h0QVvjpUIAAQUKAAScDpQFwBJE5BXQCdAsBTAdMAAABPlg");
	this.shape_1.setTransform(360.3,278.1);

	this.addChild(this.shape_1,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,0,744.3,556.2);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree001_s();
	this.instance.setTransform(50.7,-255.7,1,1,0,0,0,158.7,290.8);

	this.instance_1 = new lib.tree002_s();
	this.instance_1.setTransform(45,-258.1,1,1,0,0,0,150,275);

	this.instance_2 = new lib.tree003_s();
	this.instance_2.setTransform(-50.6,-255.7,1,1,0,0,0,158.7,290.8);

	this.instance_3 = new lib.tree004_s();
	this.instance_3.setTransform(-45,-258.1,1,1,0,0,0,150,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-546.5,317.3,581.6);


(lib.tree2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Trees("single",3);
	this.instance.setTransform(294.6,805,1.51,1.51);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,453.1,830.5);


(lib.tree1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Trees("single",0);
	this.instance.setTransform(157.2,795.3,1.455,1.455);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,461.8,846.2);


(lib.PrizeClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":16,"StageInComplete":50});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(102));

	// ViewPort
	this.vp = new lib.ViewPortSample();

	this.timeline.addTween(cjs.Tween.get(this.vp).wait(102));

	// btn
	this.btnLink = new lib.btn();
	this.btnLink.setTransform(-20.6,264.5,1,1,0,0,0,74,78.5);

	this.timeline.addTween(cjs.Tween.get(this.btnLink).wait(16).to({regX:74.1,rotation:-30,y:184.6,alpha:0},0).wait(1).to({regX:74,regY:68.5,x:-25.6,y:175.9},0).wait(8).to({regX:74.1,regY:78.5,x:-20.6,y:184.6},0).wait(1).to({regX:74,regY:68.5,rotation:-29.9,x:-25.6,y:176,alpha:0.002},0).wait(1).to({rotation:-29.8,y:176.5,alpha:0.007},0).wait(1).to({rotation:-29.5,y:177.3,alpha:0.017},0).wait(1).to({rotation:-29,x:-25.5,y:178.4,alpha:0.032},0).wait(1).to({rotation:-28.4,x:-25.4,y:180,alpha:0.053},0).wait(1).to({rotation:-27.6,x:-25.2,y:182.2,alpha:0.081},0).wait(1).to({rotation:-26.5,x:-25.1,y:185,alpha:0.118},0).wait(1).to({rotation:-25.1,x:-24.9,y:188.6,alpha:0.163},0).wait(1).to({rotation:-23.4,x:-24.6,y:193,alpha:0.22},0).wait(1).to({rotation:-21.3,x:-24.3,y:198.3,alpha:0.288},0).wait(1).to({rotation:-19,x:-23.9,y:204.6,alpha:0.368},0).wait(1).to({rotation:-16.3,x:-23.5,y:211.5,alpha:0.457},0).wait(1).to({rotation:-13.5,x:-23,y:218.7,alpha:0.549},0).wait(1).to({rotation:-10.9,x:-22.6,y:225.6,alpha:0.637},0).wait(1).to({rotation:-8.5,x:-22.1,y:231.9,alpha:0.716},0).wait(1).to({rotation:-6.5,x:-21.8,y:237.3,alpha:0.783},0).wait(1).to({rotation:-4.8,x:-21.5,y:241.6,alpha:0.839},0).wait(1).to({rotation:-3.5,x:-21.3,y:245.2,alpha:0.884},0).wait(1).to({rotation:-2.4,x:-21.1,y:248.1,alpha:0.92},0).wait(1).to({rotation:-1.6,x:-21,y:250.3,alpha:0.947},0).wait(1).to({rotation:-1,x:-20.9,y:251.9,alpha:0.968},0).wait(1).to({rotation:-0.5,x:-20.8,y:253.1,alpha:0.983},0).wait(1).to({rotation:-0.2,x:-20.7,y:253.9,alpha:0.993},0).wait(1).to({rotation:-0.1,y:254.4,alpha:0.998},0).wait(1).to({regY:78.5,rotation:0,x:-20.6,y:264.5,alpha:1},0).wait(52));

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-228.1,483.6,0.854,0.854,0,0,0,0,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},16).wait(9).to({_off:false,x:-193.9,alpha:0},0).wait(1).to({x:-194,alpha:0.002},0).wait(1).to({x:-194.2,alpha:0.007},0).wait(1).to({x:-194.5,alpha:0.017},0).wait(1).to({x:-195,alpha:0.032},0).wait(1).to({x:-195.7,alpha:0.053},0).wait(1).to({x:-196.7,alpha:0.081},0).wait(1).to({x:-197.9,alpha:0.118},0).wait(1).to({x:-199.5,alpha:0.163},0).wait(1).to({x:-201.4,alpha:0.22},0).wait(1).to({x:-203.7,alpha:0.288},0).wait(1).to({x:-206.5,alpha:0.368},0).wait(1).to({x:-209.5,alpha:0.457},0).wait(1).to({x:-212.6,alpha:0.549},0).wait(1).to({x:-215.6,alpha:0.637},0).wait(1).to({x:-218.3,alpha:0.716},0).wait(1).to({x:-220.7,alpha:0.783},0).wait(1).to({x:-222.6,alpha:0.839},0).wait(1).to({x:-224.1,alpha:0.884},0).wait(1).to({x:-225.3,alpha:0.92},0).wait(1).to({x:-226.3,alpha:0.947},0).wait(1).to({x:-227,alpha:0.968},0).wait(1).to({x:-227.5,alpha:0.983},0).wait(1).to({x:-227.8,alpha:0.993},0).wait(1).to({x:-228,alpha:0.998},0).wait(1).to({x:-228.1,alpha:1},0).wait(52));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(231.5,487.9,0.854,0.854,0,0,0,0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},16).wait(9).to({_off:false,x:197.3,alpha:0},0).wait(1).to({x:197.4,alpha:0.002},0).wait(1).to({x:197.6,alpha:0.007},0).wait(1).to({x:197.9,alpha:0.017},0).wait(1).to({x:198.4,alpha:0.032},0).wait(1).to({x:199.1,alpha:0.053},0).wait(1).to({x:200.1,alpha:0.081},0).wait(1).to({x:201.3,alpha:0.118},0).wait(1).to({x:202.9,alpha:0.163},0).wait(1).to({x:204.8,alpha:0.22},0).wait(1).to({x:207.1,alpha:0.288},0).wait(1).to({x:209.9,alpha:0.368},0).wait(1).to({x:212.9,alpha:0.457},0).wait(1).to({x:216,alpha:0.549},0).wait(1).to({x:219,alpha:0.637},0).wait(1).to({x:221.7,alpha:0.716},0).wait(1).to({x:224.1,alpha:0.783},0).wait(1).to({x:226,alpha:0.839},0).wait(1).to({x:227.5,alpha:0.884},0).wait(1).to({x:228.7,alpha:0.92},0).wait(1).to({x:229.7,alpha:0.947},0).wait(1).to({x:230.4,alpha:0.968},0).wait(1).to({x:230.9,alpha:0.983},0).wait(1).to({x:231.2,alpha:0.993},0).wait(1).to({x:231.4,alpha:0.998},0).wait(1).to({x:231.5,alpha:1},0).wait(52));

	// Title
	this.instance_2 = new lib.PrizeTitle();
	this.instance_2.setTransform(-214.6,-424.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},16).wait(1).to({_off:false,scaleX:0.64,scaleY:0.64,rotation:-60,x:-174.6,y:-424.5,alpha:0},0).wait(1).to({rotation:-59.9,x:-174.7,y:-424.6,alpha:0.001},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-59.7,x:-174.8,alpha:0.006},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-59.2,x:-175.1,alpha:0.014},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-58.5,x:-175.6,alpha:0.025},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-57.5,x:-176.3,alpha:0.041},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-56.2,x:-177.1,alpha:0.063},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-54.6,x:-178.2,alpha:0.09},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-52.6,x:-179.5,alpha:0.123},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-50.1,x:-181.2,alpha:0.165},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-47.1,x:-183.2,alpha:0.215},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-43.5,x:-185.6,alpha:0.275},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-39.3,x:-188.4,alpha:0.344},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-34.7,x:-191.5,alpha:0.421},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-29.8,x:-194.7,alpha:0.503},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-25,x:-198,alpha:0.584},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-20.4,x:-201,alpha:0.66},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-16.3,x:-203.8,alpha:0.729},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-12.7,x:-206.1,alpha:0.788},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-9.8,x:-208.1,alpha:0.837},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-7.3,x:-209.7,alpha:0.878},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-5.3,x:-211.1,alpha:0.912},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-3.7,x:-212.1,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-2.4,x:-213,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-1.5,x:-213.6,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:-214.1,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:-214.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:-214.5,alpha:0.999},0).wait(1).to({rotation:0,x:-214.6,alpha:1},0).wait(57));

	// Coat
	this.instance_3 = new lib.PrizeCoat();
	this.instance_3.setTransform(40.4,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},16).wait(1).to({_off:false,scaleX:0.76,scaleY:0.76,x:23.6,y:-131.9,alpha:0},0).wait(1).to({regY:-10,y:-139.6,alpha:0.001},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-140,alpha:0.006},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:23.8,y:-140.5,alpha:0.014},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:24,y:-141.4,alpha:0.025},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:24.2,y:-142.5,alpha:0.041},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:24.6,y:-144.1,alpha:0.063},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:25.1,y:-146.1,alpha:0.09},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:25.6,y:-148.6,alpha:0.123},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:26.3,y:-151.6,alpha:0.165},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:27.2,y:-155.4,alpha:0.215},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:28.2,y:-159.8,alpha:0.275},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:29.4,y:-164.8,alpha:0.344},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:30.6,y:-170.4,alpha:0.421},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:32,y:-176.4,alpha:0.503},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:33.4,y:-182.4,alpha:0.584},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:34.7,y:-188,alpha:0.66},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:35.8,y:-193,alpha:0.729},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:36.8,y:-197.4,alpha:0.788},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:37.7,y:-201,alpha:0.837},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:38.3,y:-204,alpha:0.878},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:38.9,y:-206.5,alpha:0.912},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:39.4,y:-208.4,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:39.7,y:-209.9,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:40,y:-211.1,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,x:40.2,y:-211.9,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:40.3,y:-212.5,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:40.4,y:-212.9,alpha:0.999},0).wait(1).to({regY:0,y:-203,alpha:1},0).wait(57));

	// Helm
	this.instance_4 = new lib.PrizeHelm();
	this.instance_4.setTransform(215.5,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},16).wait(1).to({_off:false,scaleX:0.76,scaleY:0.76,x:55.6,y:-43.4,alpha:0},0).wait(1).to({regY:-10,x:55.8,y:-50.7,alpha:0.001},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:56.5,y:-49.9,alpha:0.006},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:57.8,y:-48.4,alpha:0.014},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:59.6,y:-46.1,alpha:0.025},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:62.2,y:-43,alpha:0.041},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:65.6,y:-38.8,alpha:0.063},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:69.9,y:-33.6,alpha:0.09},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:75.3,y:-27,alpha:0.123},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:82,y:-18.9,alpha:0.165},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:90,y:-9.1,alpha:0.215},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:99.6,y:2.5,alpha:0.275},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:110.7,y:15.9,alpha:0.344},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:123,y:30.9,alpha:0.421},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:136,y:46.8,alpha:0.503},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:149,y:62.6,alpha:0.584},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:161.2,y:77.4,alpha:0.66},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:172.1,y:90.7,alpha:0.729},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:181.6,y:102.2,alpha:0.788},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:189.5,y:111.9,alpha:0.837},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:196,y:119.8,alpha:0.878},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:201.4,y:126.3,alpha:0.912},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:205.6,y:131.5,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:209,y:135.6,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:211.5,y:138.6,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,x:213.4,y:140.9,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:214.6,y:142.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:215.3,y:143.2,alpha:0.999},0).wait(1).to({regY:0,x:215.5,y:153.5,alpha:1},0).wait(57));

	// KeyRing
	this.instance_5 = new lib.PrizeKeyRing();
	this.instance_5.setTransform(-206.6,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},16).wait(1).to({_off:false,scaleX:0.76,scaleY:0.76,x:-60.5,y:-97,alpha:0},0).wait(1).to({regY:-10,x:-60.7,y:-104.4,alpha:0.001},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-61.3,y:-103.7,alpha:0.006},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-62.5,y:-102.4,alpha:0.014},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-64.2,y:-100.6,alpha:0.025},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-66.5,y:-97.9,alpha:0.041},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-69.6,y:-94.5,alpha:0.063},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-73.6,y:-90.2,alpha:0.09},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-78.5,y:-84.7,alpha:0.123},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-84.6,y:-77.9,alpha:0.165},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-92,y:-69.8,alpha:0.215},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-100.7,y:-60.2,alpha:0.275},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-110.8,y:-49,alpha:0.344},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-122,y:-36.5,alpha:0.421},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-133.9,y:-23.3,alpha:0.503},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-145.8,y:-10.2,alpha:0.584},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-157,y:2.1,alpha:0.66},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-166.9,y:13.1,alpha:0.729},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-175.5,y:22.6,alpha:0.788},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-182.8,y:30.7,alpha:0.837},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-188.8,y:37.3,alpha:0.878},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-193.6,y:42.7,alpha:0.912},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-197.5,y:47,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-200.6,y:50.4,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-202.9,y:52.9,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,x:-204.6,y:54.8,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:-205.7,y:56,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:-206.3,y:56.7,alpha:0.999},0).wait(1).to({regY:0,x:-206.6,y:67,alpha:1},0).wait(57));

	// OpenLogo
	this.instance_6 = new lib.PrizeOpenLogo();
	this.instance_6.setTransform(-3.2,588.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},16).wait(1).to({_off:false,y:568.1,alpha:0},0).wait(1).to({alpha:0.001},0).wait(1).to({y:568.2,alpha:0.006},0).wait(1).to({y:568.3,alpha:0.014},0).wait(1).to({y:568.6,alpha:0.025},0).wait(1).to({y:568.9,alpha:0.041},0).wait(1).to({y:569.3,alpha:0.063},0).wait(1).to({y:569.8,alpha:0.09},0).wait(1).to({y:570.5,alpha:0.123},0).wait(1).to({y:571.4,alpha:0.165},0).wait(1).to({y:572.4,alpha:0.215},0).wait(1).to({y:573.6,alpha:0.275},0).wait(1).to({y:574.9,alpha:0.344},0).wait(1).to({y:576.5,alpha:0.421},0).wait(1).to({y:578.1,alpha:0.503},0).wait(1).to({y:579.7,alpha:0.584},0).wait(1).to({y:581.3,alpha:0.66},0).wait(1).to({y:582.6,alpha:0.729},0).wait(1).to({y:583.8,alpha:0.788},0).wait(1).to({y:584.8,alpha:0.837},0).wait(1).to({y:585.6,alpha:0.878},0).wait(1).to({y:586.3,alpha:0.912},0).wait(1).to({y:586.8,alpha:0.938},0).wait(1).to({y:587.2,alpha:0.959},0).wait(1).to({y:587.6,alpha:0.975},0).wait(1).to({y:587.8,alpha:0.987},0).wait(1).to({y:587.9,alpha:0.994},0).wait(1).to({y:588,alpha:0.999},0).wait(1).to({y:588.1,alpha:1},0).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.5,-640.5,736.5,1281);


(lib.mouse_icon = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.head_s();
	this.instance.setTransform(87.6,88.8,1,1,0,0,0,25.2,17.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("ACCJyQgygFg0ABQibADiPgPQgMgBgMgHQgggUgIgtQgFkIABkQIABoYIADAAIAAgDIAAgJQAjhcCSAOQAzAFAzAAQCdgCCXAKQAUABAOALQA4AtgJB0QgGBEAABDQAAENACEMQABChgLCaQgBAMgIALQgpA5hlAAQgUAAgXgCgAgSHQIgDABQgYAKgJAZIAAADQABA5A2ABIABgCQAcgHAKgYIAAgDIAAgfIgBAAQgNgfgfAAIgNABgAkRh1IAAIYIAGAAIIYAAIAAkhIAAoYIgGAAIoYAAIAAEhgAg/nwQgCAGAEACQAUAMAmABQArAAATgSQABgHgEgBQgWgJgiAAIgFgBQgmAAgUAPg");
	this.shape.setTransform(87.6,87.8);

	this.instance_1 = new lib.mouse_icon_t_full();
	this.instance_1.setTransform(87.8,177.9,1,1,0,0,0,87.7,11.3);

	this.instance_2 = new lib.mouse_icon_v_full();
	this.instance_2.setTransform(87.8,96.4,1,1,0,0,0,87.8,15.3);

	this.addChild(this.instance_2,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,25,175.6,164.1);


(lib.MainScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"/Index":30,"/Feature":60,"/Watch":90,"/Detail":120,"/Prize":150,"/CardGame":180});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(235));

	// ContentContainer(Empty)
	this.contentContainer = new lib.ContentContainer();

	this.timeline.addTween(cjs.Tween.get(this.contentContainer).wait(235));

	// tree1
	this.instance = new lib.tree1();
	this.instance.setTransform(-304.7,241,1,1,0,0,0,230.8,423.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({scaleX:1.34,scaleY:1.34,x:-352.5,y:235},150).wait(55));

	// tree2
	this.instance_1 = new lib.tree2();
	this.instance_1.setTransform(323.7,197.1,1,1,0,0,0,226.6,415.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({regX:226.5,scaleX:1.34,scaleY:1.34,x:381.8,y:224.6},150).wait(55));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(-0.2,622,1,1,0,0,0,360.3,278.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({scaleY:0.62,y:555.8},150).wait(55));

	// sea
	this.instance_3 = new lib.sea();
	this.instance_3.setTransform(0,528,1,1,0,0,0,360,372);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({y:608.9},150).wait(55));

	// sky
	this.instance_4 = new lib.sky();
	this.instance_4.setTransform(0,0,1,1,0,0,0,360,900);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({y:116.3},150).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-856.7,-1216.8,1722.6,2443.6);


(lib.IndexClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":10,"StageInComplete":72});

	// ViewPort
	this.vp = new lib.ViewPortSample();

	this.timeline.addTween(cjs.Tween.get(this.vp).wait(129));

	// LeftBike
	this.instance = new lib.IndexLeft();
	this.instance.setTransform(-108.2,323.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({scaleX:0.25,scaleY:0.25,x:-19.5,y:349.2,alpha:0},0).wait(32).to({scaleX:0.25,scaleY:0.25,x:-19.6,alpha:0.001},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-19.8,y:349.1,alpha:0.004},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-20.2,y:349,alpha:0.008},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-20.9,y:348.8,alpha:0.016},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-21.8,y:348.5,alpha:0.026},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-23,y:348.2,alpha:0.04},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-24.7,y:347.7,alpha:0.058},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-26.8,y:347.1,alpha:0.082},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-29.5,y:346.3,alpha:0.113},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-33.1,y:345.2,alpha:0.153},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-37.8,y:343.8,alpha:0.206},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-44.1,y:342,alpha:0.277},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-52.4,y:339.5,alpha:0.371},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-62.5,y:336.6,alpha:0.484},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-72.5,y:333.6,alpha:0.597},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-80.7,y:331.2,alpha:0.689},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-87,y:329.3,alpha:0.761},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-91.9,y:327.9,alpha:0.816},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-95.7,y:326.8,alpha:0.858},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-98.6,y:325.9,alpha:0.892},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-101,y:325.2,alpha:0.918},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-102.9,y:324.7,alpha:0.939},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-104.4,y:324.2,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-105.5,y:323.9,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-106.5,y:323.6,alpha:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-107.2,y:323.4,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,x:-107.7,y:323.3,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:-108,y:323.2,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,x:-108.2,y:323.1,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(58));

	// RightBike
	this.instance_1 = new lib.IndexRight();
	this.instance_1.setTransform(128.3,315.5,0.854,0.854);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleX:0.25,scaleY:0.25,x:54.7,y:367.9,alpha:0},0).wait(1).to({regY:-2,y:367.4},0).wait(30).to({regY:0,y:367.9},0).wait(1).to({regY:-2,scaleX:0.25,scaleY:0.25,x:54.8,y:367.3,alpha:0.001},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:55,y:367.2,alpha:0.004},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:55.3,y:366.9,alpha:0.008},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:55.9,y:366.5,alpha:0.016},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:56.6,y:365.9,alpha:0.026},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:57.6,y:365.2,alpha:0.04},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:59,y:364.2,alpha:0.058},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:60.7,y:363,alpha:0.082},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:63,y:361.3,alpha:0.113},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:66,y:359.1,alpha:0.153},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:69.9,y:356.3,alpha:0.206},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:75.1,y:352.5,alpha:0.277},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:82,y:347.5,alpha:0.371},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:90.3,y:341.4,alpha:0.484},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:98.6,y:335.4,alpha:0.597},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:105.4,y:330.4,alpha:0.689},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:110.7,y:326.6,alpha:0.761},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:114.7,y:323.6,alpha:0.816},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:117.8,y:321.3,alpha:0.858},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:120.3,y:319.5,alpha:0.892},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:122.2,y:318.1,alpha:0.918},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:123.8,y:317,alpha:0.939},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:125,y:316.1,alpha:0.956},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:126,y:315.4,alpha:0.969},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:126.8,y:314.8,alpha:0.98},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:127.3,y:314.4,alpha:0.988},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:127.8,y:314.1,alpha:0.993},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:128,y:313.9,alpha:0.997},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:128.2,y:313.8,alpha:0.999},0).wait(1).to({regY:0,scaleX:0.85,scaleY:0.85,x:128.3,y:315.5,alpha:1},0).wait(58));

	// index_tit104
	this.instance_2 = new lib.index_tit104_1();
	this.instance_2.setTransform(315,-577.2,0.766,0.766,0,0,0,41,68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},10).wait(34).to({_off:false},0).wait(1).to({regY:41,y:-595.8},0).wait(1).to({y:-587.5},0).wait(1).to({y:-572.1},0).wait(1).to({y:-548.8},0).wait(1).to({y:-518.6},0).wait(1).to({y:-489.7},0).wait(1).to({regY:68.5,y:-456.2},0).to({scaleY:0.64,y:-456.3},2,cjs.Ease.get(1)).to({scaleY:0.77,y:-481.5},4).to({y:-456.2},4).to({scaleY:0.64,y:-456.3},2).to({scaleY:0.77,y:-456.2},4).wait(62));

	// index_tit106
	this.instance_3 = new lib.index_tit106();
	this.instance_3.setTransform(-70.2,-483.6,0.766,0.766,0,0,0,127,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},10).wait(19).to({_off:false,x:-85.5,alpha:0},0).wait(1).to({regY:27.5,y:-483.7,alpha:0.003},0).wait(1).to({x:-85.3,alpha:0.012},0).wait(1).to({x:-85,alpha:0.03},0).wait(1).to({x:-84.6,alpha:0.059},0).wait(1).to({x:-83.9,alpha:0.103},0).wait(1).to({x:-83,alpha:0.166},0).wait(1).to({x:-81.6,alpha:0.256},0).wait(1).to({x:-79.8,alpha:0.374},0).wait(1).to({x:-77.8,alpha:0.505},0).wait(1).to({x:-75.9,alpha:0.625},0).wait(1).to({x:-74.5,alpha:0.722},0).wait(1).to({x:-73.3,alpha:0.796},0).wait(1).to({x:-72.5,alpha:0.853},0).wait(1).to({x:-71.8,alpha:0.896},0).wait(1).to({x:-71.3,alpha:0.929},0).wait(1).to({x:-70.9,alpha:0.954},0).wait(1).to({x:-70.6,alpha:0.972},0).wait(1).to({x:-70.4,alpha:0.985},0).wait(1).to({x:-70.3,alpha:0.994},0).wait(1).to({x:-70.2,alpha:0.999},0).wait(1).to({regY:27.6,y:-483.6,alpha:1},0).wait(79));

	// index_tit105
	this.instance_4 = new lib.index_tit105_1();
	this.instance_4.setTransform(8.8,-333.5,0.766,0.766,0,0,0,264.6,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},10).wait(16).to({_off:false,regX:264.4,x:24,alpha:0},0).wait(1).to({regX:264.5,x:24.1,alpha:0.003},0).wait(1).to({x:23.9,alpha:0.012},0).wait(1).to({x:23.6,alpha:0.03},0).wait(1).to({x:23.2,alpha:0.059},0).wait(1).to({x:22.5,alpha:0.103},0).wait(1).to({x:21.6,alpha:0.166},0).wait(1).to({x:20.2,alpha:0.256},0).wait(1).to({x:18.4,alpha:0.374},0).wait(1).to({x:16.4,alpha:0.505},0).wait(1).to({x:14.6,alpha:0.625},0).wait(1).to({x:13.1,alpha:0.722},0).wait(1).to({x:11.9,alpha:0.796},0).wait(1).to({x:11.1,alpha:0.853},0).wait(1).to({x:10.4,alpha:0.896},0).wait(1).to({x:9.9,alpha:0.929},0).wait(1).to({x:9.5,alpha:0.954},0).wait(1).to({x:9.3,alpha:0.972},0).wait(1).to({x:9.1,alpha:0.985},0).wait(1).to({x:8.9,alpha:0.994},0).wait(1).to({x:8.8,alpha:0.999},0).wait(1).to({regX:264.6,alpha:1},0).wait(82));

	// index_tit103
	this.instance_5 = new lib.index_tit103_1();
	this.instance_5.setTransform(213.4,-407.1,0.766,0.766,0,0,0,145.5,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},10).wait(13).to({_off:false,regY:93.5,y:-391.8,alpha:0},0).wait(1).to({alpha:0.003},0).wait(1).to({y:-392,alpha:0.012},0).wait(1).to({y:-392.3,alpha:0.03},0).wait(1).to({y:-392.7,alpha:0.059},0).wait(1).to({y:-393.4,alpha:0.103},0).wait(1).to({y:-394.3,alpha:0.166},0).wait(1).to({y:-395.7,alpha:0.256},0).wait(1).to({y:-397.5,alpha:0.374},0).wait(1).to({y:-399.5,alpha:0.505},0).wait(1).to({y:-401.4,alpha:0.625},0).wait(1).to({y:-402.8,alpha:0.722},0).wait(1).to({y:-404,alpha:0.796},0).wait(1).to({y:-404.8,alpha:0.853},0).wait(1).to({y:-405.5,alpha:0.896},0).wait(1).to({y:-406,alpha:0.929},0).wait(1).to({y:-406.4,alpha:0.954},0).wait(1).to({y:-406.7,alpha:0.972},0).wait(1).to({y:-406.9,alpha:0.985},0).wait(1).to({y:-407,alpha:0.994},0).wait(1).to({y:-407.1,alpha:0.999},0).wait(1).to({regY:93.7,alpha:1},0).wait(85));

	// index_tit102
	this.instance_6 = new lib.index_tit102_1();
	this.instance_6.setTransform(14.7,-411.3,0.766,0.766,0,0,0,146.5,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},10).wait(10).to({_off:false,regY:87.9,y:-426.7,alpha:0},0).wait(1).to({regY:88,y:-426.5,alpha:0.003},0).wait(1).to({y:-426.4,alpha:0.012},0).wait(1).to({y:-426.1,alpha:0.03},0).wait(1).to({y:-425.6,alpha:0.059},0).wait(1).to({y:-425,alpha:0.103},0).wait(1).to({y:-424,alpha:0.166},0).wait(1).to({y:-422.6,alpha:0.256},0).wait(1).to({y:-420.8,alpha:0.374},0).wait(1).to({y:-418.8,alpha:0.505},0).wait(1).to({y:-416.9,alpha:0.625},0).wait(1).to({y:-415.5,alpha:0.722},0).wait(1).to({y:-414.3,alpha:0.796},0).wait(1).to({y:-413.4,alpha:0.853},0).wait(1).to({y:-412.8,alpha:0.896},0).wait(1).to({y:-412.3,alpha:0.929},0).wait(1).to({y:-411.9,alpha:0.954},0).wait(1).to({y:-411.6,alpha:0.972},0).wait(1).to({y:-411.4,alpha:0.985},0).wait(1).to({y:-411.3,alpha:0.994},0).wait(1).to({y:-411.2,alpha:0.999},0).wait(1).to({regY:88.2,y:-411.3,alpha:1},0).wait(88));

	// index_tit101
	this.instance_7 = new lib.index_tit101_1();
	this.instance_7.setTransform(-215,-453.4,0.766,0.766,0,0,0,181,132.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},10).wait(7).to({_off:false,regY:132.5,y:-438,alpha:0},0).wait(1).to({alpha:0.003},0).wait(1).to({y:-438.2,alpha:0.012},0).wait(1).to({y:-438.5,alpha:0.03},0).wait(1).to({y:-438.9,alpha:0.059},0).wait(1).to({y:-439.6,alpha:0.103},0).wait(1).to({y:-440.6,alpha:0.166},0).wait(1).to({y:-441.9,alpha:0.256},0).wait(1).to({y:-443.7,alpha:0.374},0).wait(1).to({y:-445.7,alpha:0.505},0).wait(1).to({y:-447.6,alpha:0.625},0).wait(1).to({y:-449.1,alpha:0.722},0).wait(1).to({y:-450.2,alpha:0.796},0).wait(1).to({y:-451.1,alpha:0.853},0).wait(1).to({y:-451.7,alpha:0.896},0).wait(1).to({y:-452.2,alpha:0.929},0).wait(1).to({y:-452.6,alpha:0.954},0).wait(1).to({y:-452.9,alpha:0.972},0).wait(1).to({y:-453.1,alpha:0.985},0).wait(1).to({y:-453.2,alpha:0.994},0).wait(1).to({y:-453.3,alpha:0.999},0).wait(1).to({regY:132.4,y:-453.4,alpha:1},0).wait(91));

	// StartButton
	this.startClip = new lib.IndexButtonCombo();
	this.startClip.setTransform(-52.6,15);

	this.timeline.addTween(cjs.Tween.get(this.startClip).to({_off:true},10).wait(34).to({_off:false,y:-25,alpha:0},0).wait(1).to({regX:11.5,regY:-194.5,x:-41.1,y:-219.4,alpha:0.002},0).wait(1).to({y:-219.2,alpha:0.007},0).wait(1).to({y:-218.9,alpha:0.016},0).wait(1).to({y:-218.3,alpha:0.03},0).wait(1).to({y:-217.6,alpha:0.049},0).wait(1).to({y:-216.6,alpha:0.073},0).wait(1).to({y:-215.3,alpha:0.104},0).wait(1).to({y:-213.8,alpha:0.142},0).wait(1).to({y:-212,alpha:0.188},0).wait(1).to({y:-209.8,alpha:0.242},0).wait(1).to({y:-207.3,alpha:0.304},0).wait(1).to({y:-204.5,alpha:0.374},0).wait(1).to({y:-201.5,alpha:0.45},0).wait(1).to({y:-198.4,alpha:0.528},0).wait(1).to({y:-195.3,alpha:0.605},0).wait(1).to({y:-192.4,alpha:0.678},0).wait(1).to({y:-189.8,alpha:0.743},0).wait(1).to({y:-187.5,alpha:0.8},0).wait(1).to({y:-185.6,alpha:0.849},0).wait(1).to({y:-184,alpha:0.89},0).wait(1).to({y:-182.7,alpha:0.922},0).wait(1).to({y:-181.6,alpha:0.948},0).wait(1).to({y:-180.8,alpha:0.968},0).wait(1).to({y:-180.2,alpha:0.983},0).wait(1).to({y:-179.8,alpha:0.993},0).wait(1).to({y:-179.6,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-52.6,y:15,alpha:1},0).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.5,-640.5,721,1281);


(lib.FeatureClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":12,"StageInComplete":72,ToDetail:89,ToDetailComplete:105});

	// ViewPort
	this.vp = new lib.ViewPortSample();

	this.timeline.addTween(cjs.Tween.get(this.vp).wait(128));

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-252.5,500.9,0.643,0.643,0,0,0,0,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},12).wait(41).to({_off:false,scaleX:0.76,scaleY:0.76,x:-212,y:480.2,alpha:0},0).wait(1).to({x:-212.1,y:480.3,alpha:0.003},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-212.6,y:480.5,alpha:0.015},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-213.4,y:480.9,alpha:0.035},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-214.8,y:481.6,alpha:0.068},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-216.7,y:482.6,alpha:0.115},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-219.3,y:483.9,alpha:0.181},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-222.8,y:485.7,alpha:0.268},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-227.3,y:488,alpha:0.378},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-232.3,y:490.6,alpha:0.503},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-237.4,y:493.2,alpha:0.627},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-241.8,y:495.4,alpha:0.736},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-245.2,y:497.2,alpha:0.822},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-247.9,y:498.5,alpha:0.886},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-249.7,y:499.5,alpha:0.933},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-251,y:500.1,alpha:0.965},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-251.9,y:500.6,alpha:0.985},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-252.3,y:500.8,alpha:0.997},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-252.5,y:500.9,alpha:1},0).wait(57));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(261.2,508.3,0.646,0.646,0,0,0,0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(41).to({_off:false,scaleX:0.76,scaleY:0.76,x:220,y:488.8,alpha:0},0).wait(1).to({x:220.1,y:488.9,alpha:0.003},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:220.6,y:489.1,alpha:0.015},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:221.5,y:489.5,alpha:0.035},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:222.8,y:490.1,alpha:0.068},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:224.8,y:491,alpha:0.115},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:227.5,y:492.3,alpha:0.181},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:231,y:494,alpha:0.268},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:235.6,y:496.2,alpha:0.378},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:240.7,y:498.6,alpha:0.503},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:245.8,y:501.1,alpha:0.627},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:250.3,y:503.2,alpha:0.736},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:253.9,y:504.9,alpha:0.822},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:256.5,y:506.1,alpha:0.886},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:258.4,y:507,alpha:0.933},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:259.8,y:507.7,alpha:0.965},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:260.6,y:508.1,alpha:0.985},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:261.1,y:508.3,alpha:0.997},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:261.2,alpha:1},0).wait(57));

	// ProgressDot
	this.progressDot = new lib.ProgressDot();
	this.progressDot.setTransform(0,478);
	this.progressDot.alpha = 0;
	this.progressDot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressDot).wait(90).to({_off:false},0).to({y:466.5,alpha:1},15).wait(23));

	// L_Btn
	this.btnLeft = new lib.BtnToRight();
	this.btnLeft.setTransform(-274.8,-1,1,1,0,0,180);
	this.btnLeft.alpha = 0;
	this.btnLeft._off = true;
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.BtnToRight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft).wait(90).to({_off:false},0).to({x:-306.8,alpha:1},15).wait(23));

	// R_Btn
	this.btnRight = new lib.BtnToRight();
	this.btnRight.setTransform(271.6,-1);
	this.btnRight.alpha = 0;
	this.btnRight._off = true;
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.BtnToRight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnRight).wait(90).to({_off:false},0).to({x:303.6,alpha:1},15).wait(23));

	// DetailClip
	this.detailContainer = new lib.FeatureDetailContainer();
	this.detailContainer.setTransform(-15,-21);
	this.detailContainer.alpha = 0;
	this.detailContainer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.detailContainer).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// BtnBack
	this.btnBack = new lib.FeatureBtnBack();
	this.btnBack.setTransform(-10,563);
	this.btnBack.alpha = 0;
	this.btnBack._off = true;
	new cjs.ButtonHelper(this.btnBack, 0, 1, 2, false, new lib.FeatureBtnBack(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnBack).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// L_Label
	this.instance_2 = new lib.L_Label();
	this.instance_2.setTransform(-2.6,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},12).wait(33).to({_off:false,x:109.4,y:-16.6,alpha:0},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:1},0).wait(27).to({alpha:0},15).to({_off:true},1).wait(23));

	// R_Label
	this.instance_3 = new lib.R_Label();
	this.instance_3.setTransform(1.4,467.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},12).wait(33).to({_off:false,x:-83.4,y:446.5,alpha:0},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:1},0).wait(27).to({alpha:0},15).to({_off:true},1).wait(23));

	// DotLine
	this.instance_4 = new lib.BlueDotLine();
	this.instance_4.setTransform(0,33.1,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},12).wait(27).to({_off:false,scaleY:0.03,alpha:0},0).wait(1).to({scaleY:0.03,alpha:0.003},0).wait(1).to({scaleY:0.04,alpha:0.013},0).wait(1).to({scaleY:0.06,alpha:0.031},0).wait(1).to({scaleY:0.08,alpha:0.06},0).wait(1).to({scaleY:0.12,alpha:0.101},0).wait(1).to({scaleY:0.18,alpha:0.158},0).wait(1).to({scaleY:0.25,alpha:0.233},0).wait(1).to({scaleY:0.35,alpha:0.329},0).wait(1).to({scaleY:0.46,alpha:0.443},0).wait(1).to({scaleY:0.57,alpha:0.563},0).wait(1).to({scaleY:0.68,alpha:0.676},0).wait(1).to({scaleY:0.78,alpha:0.77},0).wait(1).to({scaleY:0.85,alpha:0.844},0).wait(1).to({scaleY:0.9,alpha:0.9},0).wait(1).to({scaleY:0.94,alpha:0.941},0).wait(1).to({scaleY:0.97,alpha:0.969},0).wait(1).to({scaleY:0.99,alpha:0.987},0).wait(1).to({scaleY:1,alpha:0.997},0).wait(1).to({scaleY:1,alpha:1},0).wait(31).to({alpha:0},15).to({_off:true},1).wait(23));

	// L_Bike
	this.leftBike = new lib.L_Bike();
	this.leftBike.setTransform(-43.7,-186.4);

	this.timeline.addTween(cjs.Tween.get(this.leftBike).wait(12).to({x:16.3,alpha:0},0).wait(1).to({regX:-16.9,regY:-0.5,x:-0.6,y:-186.9},0).wait(26).to({regX:0,regY:0,x:16.3,y:-186.4},0).wait(1).to({regX:-16.9,regY:-0.5,x:-0.8,y:-186.9,alpha:0.003},0).wait(1).to({x:-1.4,alpha:0.013},0).wait(1).to({x:-2.5,alpha:0.031},0).wait(1).to({x:-4.2,alpha:0.06},0).wait(1).to({x:-6.7,alpha:0.101},0).wait(1).to({x:-10.1,alpha:0.158},0).wait(1).to({x:-14.6,alpha:0.233},0).wait(1).to({x:-20.3,alpha:0.329},0).wait(1).to({x:-27.1,alpha:0.443},0).wait(1).to({x:-34.3,alpha:0.563},0).wait(1).to({x:-41.1,alpha:0.676},0).wait(1).to({x:-46.8,alpha:0.77},0).wait(1).to({x:-51.2,alpha:0.844},0).wait(1).to({x:-54.6,alpha:0.9},0).wait(1).to({x:-57,alpha:0.941},0).wait(1).to({x:-58.7,alpha:0.969},0).wait(1).to({x:-59.8,alpha:0.987},0).wait(1).to({x:-60.4,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:-43.7,y:-186.4,alpha:1},0).wait(31).to({alpha:0},15).to({_off:true},1).wait(23));

	// R_Bike
	this.rightBike = new lib.R_Bike();
	this.rightBike.setTransform(-5.6,260.3);

	this.timeline.addTween(cjs.Tween.get(this.rightBike).wait(12).to({x:-130.5,y:259.4,alpha:0},0).wait(1).to({regX:-26.8,regY:0.3,x:-157.3,y:259.7},0).wait(26).to({regX:0,regY:0,x:-130.5,y:259.4},0).wait(1).to({regX:-26.8,regY:0.3,x:-156.9,y:259.7,alpha:0.002},0).wait(1).to({x:-156,alpha:0.01},0).wait(1).to({x:-154.2,alpha:0.024},0).wait(1).to({x:-151.5,alpha:0.046},0).wait(1).to({x:-147.7,y:259.8,alpha:0.077},0).wait(1).to({x:-142.5,alpha:0.118},0).wait(1).to({x:-135.7,y:259.9,alpha:0.173},0).wait(1).to({x:-127,alpha:0.242},0).wait(1).to({x:-116.2,y:260,alpha:0.328},0).wait(1).to({x:-103.7,y:260.1,alpha:0.429},0).wait(1).to({x:-90.2,y:260.2,alpha:0.537},0).wait(1).to({x:-77.1,y:260.3,alpha:0.642},0).wait(1).to({x:-65.5,y:260.4,alpha:0.735},0).wait(1).to({x:-55.8,alpha:0.812},0).wait(1).to({x:-48.2,y:260.5,alpha:0.873},0).wait(1).to({x:-42.2,alpha:0.921},0).wait(1).to({x:-37.8,y:260.6,alpha:0.956},0).wait(1).to({x:-34.6,alpha:0.982},0).wait(1).to({regX:0,regY:0,x:-5.6,y:260.3,alpha:1},0).wait(31).to({alpha:0},15).to({_off:true},1).wait(23));

	// product_bg01
	this.instance_5 = new lib.product_bg01_1();
	this.instance_5.setTransform(-161.4,-521,1,1,0,0,0,24,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},12).wait(27).to({_off:false,scaleX:0.29,scaleY:0.29,alpha:0},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:1.1,y:-520.9,alpha:0.003},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:4.7,alpha:0.013},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:11.3,alpha:0.031},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:21.6,y:-521,alpha:0.06},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:36.5,y:-520.9,alpha:0.101},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:56.9,alpha:0.158},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:84,alpha:0.233},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:118.5,y:-521,alpha:0.329},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:159.3,y:-520.9,alpha:0.443},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:202.7,alpha:0.563},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:243.2,alpha:0.676},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:277.3,y:-521,alpha:0.77},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:304,y:-520.9,alpha:0.844},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:324.1,alpha:0.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:338.7,y:-521,alpha:0.941},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:348.8,y:-520.9,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:355.3,y:-521,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:358.9,y:-520.9,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,y:-521,alpha:1},0).wait(70));

	// product_bg02
	this.instance_6 = new lib.product_bg02_1();
	this.instance_6.setTransform(-152.6,-521,1,1,0,0,0,54,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},12).wait(27).to({_off:false,scaleX:0.44,x:-161.6,alpha:0},0).wait(1).to({scaleX:0.45,alpha:0.003},0).wait(1).to({scaleX:0.45,x:-161.5,alpha:0.013},0).wait(1).to({scaleX:0.46,x:-161.3,alpha:0.031},0).wait(1).to({scaleX:0.48,x:-161.1,alpha:0.06},0).wait(1).to({scaleX:0.5,x:-160.7,alpha:0.101},0).wait(1).to({scaleX:0.53,x:-160.2,alpha:0.158},0).wait(1).to({scaleX:0.57,x:-159.5,alpha:0.233},0).wait(1).to({scaleX:0.63,x:-158.7,alpha:0.329},0).wait(1).to({scaleX:0.69,x:-157.6,alpha:0.443},0).wait(1).to({scaleX:0.76,x:-156.5,alpha:0.563},0).wait(1).to({scaleX:0.82,x:-155.5,alpha:0.676},0).wait(1).to({scaleX:0.87,x:-154.7,alpha:0.77},0).wait(1).to({scaleX:0.91,x:-154,alpha:0.844},0).wait(1).to({scaleX:0.95,x:-153.5,alpha:0.9},0).wait(1).to({scaleX:0.97,x:-153.2,alpha:0.941},0).wait(1).to({scaleX:0.98,x:-152.9,alpha:0.969},0).wait(1).to({scaleX:0.99,x:-152.7,alpha:0.987},0).wait(1).to({scaleX:1,x:-152.6,alpha:0.997},0).wait(1).to({scaleX:1,alpha:1},0).wait(70));

	// product_bg03
	this.instance_7 = new lib.product_bg03_1();
	this.instance_7.setTransform(-4,-500.1,1,1,0,0,0,199,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},12).wait(21).to({_off:false,regY:21.8,scaleY:0.14,y:-519.2,alpha:0},0).wait(1).to({regY:22,scaleY:0.14,y:-519.1,alpha:0.002},0).wait(1).to({scaleY:0.14,y:-518.9,alpha:0.01},0).wait(1).to({scaleY:0.16,y:-518.7,alpha:0.023},0).wait(1).to({scaleY:0.17,y:-518.3,alpha:0.043},0).wait(1).to({scaleY:0.2,y:-517.7,alpha:0.072},0).wait(1).to({scaleY:0.23,y:-517,alpha:0.11},0).wait(1).to({scaleY:0.27,y:-516,alpha:0.161},0).wait(1).to({scaleY:0.33,y:-514.8,alpha:0.226},0).wait(1).to({scaleY:0.4,y:-513.2,alpha:0.306},0).wait(1).to({scaleY:0.48,y:-511.4,alpha:0.4},0).wait(1).to({scaleY:0.57,y:-509.4,alpha:0.503},0).wait(1).to({scaleY:0.66,y:-507.5,alpha:0.606},0).wait(1).to({scaleY:0.74,y:-505.7,alpha:0.699},0).wait(1).to({scaleY:0.81,y:-504.2,alpha:0.778},0).wait(1).to({scaleY:0.86,y:-502.9,alpha:0.841},0).wait(1).to({scaleY:0.91,y:-502,alpha:0.891},0).wait(1).to({scaleY:0.94,y:-501.3,alpha:0.929},0).wait(1).to({scaleY:0.96,y:-500.7,alpha:0.958},0).wait(1).to({scaleY:0.98,y:-500.4,alpha:0.977},0).wait(1).to({scaleY:0.99,y:-500.1,alpha:0.991},0).wait(1).to({scaleY:1,y:-500,alpha:0.998},0).wait(1).to({scaleY:1,y:-500.1,alpha:1},0).wait(73));

	// product_bg04
	this.instance_8 = new lib.product_bg04_1();
	this.instance_8.setTransform(-132.3,-474.9,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},12).wait(21).to({_off:false,x:-92.3,alpha:0},0).wait(1).to({x:-92.5,alpha:0.002},0).wait(1).to({x:-92.9,alpha:0.01},0).wait(1).to({x:-93.8,alpha:0.024},0).wait(1).to({x:-95.2,alpha:0.044},0).wait(1).to({x:-97.2,alpha:0.074},0).wait(1).to({x:-99.8,alpha:0.114},0).wait(1).to({x:-103.2,alpha:0.167},0).wait(1).to({x:-107.6,alpha:0.234},0).wait(1).to({x:-113.1,alpha:0.317},0).wait(1).to({x:-119.5,alpha:0.414},0).wait(1).to({x:-126.3,alpha:0.519},0).wait(1).to({x:-133.1,alpha:0.621},0).wait(1).to({x:-139.1,alpha:0.713},0).wait(1).to({x:-144.1,alpha:0.789},0).wait(1).to({x:-140.7,alpha:0.849},0).wait(1).to({x:-138.1,alpha:0.896},0).wait(1).to({x:-136.1,alpha:0.932},0).wait(1).to({x:-134.6,alpha:0.959},0).wait(1).to({x:-133.5,alpha:0.978},0).wait(1).to({x:-132.8,alpha:0.991},0).wait(1).to({x:-132.4,alpha:0.998},0).wait(1).to({x:-132.3,alpha:1},0).wait(73));

	// product_bg05
	this.instance_9 = new lib.product_bg05_1();
	this.instance_9.setTransform(125.6,-474.9,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},12).wait(21).to({_off:false,x:85.6,alpha:0},0).wait(1).to({x:85.7,alpha:0.002},0).wait(1).to({x:86.2,alpha:0.01},0).wait(1).to({x:87.1,alpha:0.024},0).wait(1).to({x:88.5,alpha:0.044},0).wait(1).to({x:90.4,alpha:0.074},0).wait(1).to({x:93,alpha:0.114},0).wait(1).to({x:96.5,alpha:0.167},0).wait(1).to({x:100.9,alpha:0.234},0).wait(1).to({x:106.3,alpha:0.317},0).wait(1).to({x:112.7,alpha:0.414},0).wait(1).to({x:119.6,alpha:0.519},0).wait(1).to({x:126.3,alpha:0.621},0).wait(1).to({x:132.3,alpha:0.713},0).wait(1).to({x:137.3,alpha:0.789},0).wait(1).to({x:134,alpha:0.849},0).wait(1).to({x:131.3,alpha:0.896},0).wait(1).to({x:129.3,alpha:0.932},0).wait(1).to({x:127.8,alpha:0.959},0).wait(1).to({x:126.8,alpha:0.978},0).wait(1).to({x:126.1,alpha:0.991},0).wait(1).to({x:125.7,alpha:0.998},0).wait(1).to({x:125.6,alpha:1},0).wait(73));

	// product_bg06
	this.instance_10 = new lib.product_bg06_1();
	this.instance_10.setTransform(-4,-486.7,1,1,0,0,0,95,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},12).wait(13).to({_off:false,scaleX:0.16,scaleY:0.16,y:-476.7,alpha:0},0).wait(1).to({scaleX:0.16,scaleY:0.16,alpha:0.001},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-3.9,y:-476.8,alpha:0.006},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-4,y:-476.9,alpha:0.015},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-3.9,alpha:0.027},0).wait(1).to({scaleX:0.2,scaleY:0.2,y:-477.1,alpha:0.045},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-477.4,alpha:0.068},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-4,y:-477.7,alpha:0.098},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-3.9,y:-478.1,alpha:0.135},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-4,y:-478.5,alpha:0.181},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:-479.1,alpha:0.236},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-3.9,y:-479.7,alpha:0.302},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-4,y:-480.5,alpha:0.378},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:-481.3,alpha:0.46},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-3.9,y:-482.2,alpha:0.545},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-483,alpha:0.627},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-4,y:-483.7,alpha:0.702},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-484.4,alpha:0.767},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-3.9,y:-484.9,alpha:0.822},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-4,y:-485.4,alpha:0.867},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-3.9,y:-485.8,alpha:0.904},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-486,alpha:0.933},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-4,y:-486.2,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-3.9,y:-486.4,alpha:0.973},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-486.5,alpha:0.985},0).wait(1).to({scaleX:1,scaleY:1,x:-4,y:-486.6,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:-3.9,y:-486.7,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,x:-4,alpha:1},0).wait(76));

	// product_bg07
	this.instance_11 = new lib.product_bg07_1();
	this.instance_11.setTransform(0,33.1,1,1,90,0,0,481,262);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},12).wait(7).to({_off:false,regX:480.9,scaleX:0.05,scaleY:0.05},0).wait(1).to({regX:481,scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.07,scaleY:0.07},0).wait(1).to({scaleX:0.08,scaleY:0.08},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.26,scaleY:0.26},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:33.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:33.1},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:33.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:33.1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:33.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:33.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(84));

	// product_bg08
	this.instance_12 = new lib.product_bg08();
	this.instance_12.setTransform(219.5,-226.5,1,1,0,0,0,485,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},12).wait(1).to({_off:false,regX:484.9,scaleX:0.25,scaleY:0.25,x:0,y:-56.7,alpha:0},0).wait(1).to({regX:259.5,regY:523.5,scaleX:0.25,scaleY:0.25,x:-55.6,y:-2.2,alpha:0.002},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-55.4,alpha:0.007},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-54.9,alpha:0.016},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-54.2,y:-2.3,alpha:0.03},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-53.3,alpha:0.049},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-52,y:-2.4,alpha:0.074},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-50.4,y:-2.5,alpha:0.107},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-48.3,y:-2.7,alpha:0.148},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-45.8,y:-2.9,alpha:0.199},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-42.7,y:-3.2,alpha:0.261},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-39.1,y:-3.4,alpha:0.333},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-35,y:-3.7,alpha:0.415},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-30.6,y:-4.1,alpha:0.503},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-26.3,y:-4.4,alpha:0.59},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-22.2,y:-4.7,alpha:0.672},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-18.7,y:-5,alpha:0.743},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-15.6,y:-5.2,alpha:0.804},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-13.1,y:-5.4,alpha:0.854},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-11.1,y:-5.6,alpha:0.895},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-9.5,y:-5.7,alpha:0.927},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-8.2,y:-5.8,alpha:0.952},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-7.3,alpha:0.971},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-6.6,y:-5.9,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,x:-6.2,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:-5.9,y:-6,alpha:0.998},0).wait(1).to({regX:485,regY:303,scaleX:1,scaleY:1,x:219.5,y:-226.5,alpha:1},0).wait(89));

	// Layer 21
	this.instance_13 = new lib.product_bg09_1();
	this.instance_13.setTransform(1,506.3,0.599,1,0,0,0,434.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},12).wait(7).to({_off:false,regX:434.6,regY:31.9,scaleX:0.14,scaleY:0.27,alpha:0},0).wait(1).to({regX:434.5,regY:32,scaleX:0.14,scaleY:0.27,alpha:0.002},0).wait(1).to({scaleX:0.14,scaleY:0.28,alpha:0.007},0).wait(1).to({scaleX:0.15,scaleY:0.28,alpha:0.017},0).wait(1).to({scaleX:0.15,scaleY:0.29,alpha:0.032},0).wait(1).to({scaleX:0.16,scaleY:0.31,alpha:0.053},0).wait(1).to({scaleX:0.18,scaleY:0.33,alpha:0.081},0).wait(1).to({scaleX:0.19,scaleY:0.36,alpha:0.118},0).wait(1).to({scaleX:0.21,scaleY:0.39,alpha:0.163},0).wait(1).to({scaleX:0.24,scaleY:0.43,alpha:0.22},0).wait(1).to({scaleX:0.27,scaleY:0.48,alpha:0.288},0).wait(1).to({scaleX:0.31,scaleY:0.54,y:506.4,alpha:0.368},0).wait(1).to({scaleX:0.35,scaleY:0.6,y:506.3,alpha:0.457},0).wait(1).to({scaleX:0.39,scaleY:0.67,alpha:0.549},0).wait(1).to({scaleX:0.43,scaleY:0.74,alpha:0.637},0).wait(1).to({scaleX:0.47,scaleY:0.79,alpha:0.716},0).wait(1).to({scaleX:0.5,scaleY:0.84,y:506.4,alpha:0.783},0).wait(1).to({scaleX:0.53,scaleY:0.88,alpha:0.839},0).wait(1).to({scaleX:0.55,scaleY:0.92,alpha:0.884},0).wait(1).to({scaleX:0.56,scaleY:0.94,y:506.3,alpha:0.92},0).wait(1).to({scaleX:0.57,scaleY:0.96,alpha:0.947},0).wait(1).to({scaleX:0.58,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.59,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.6,scaleY:1,y:506.4,alpha:0.993},0).wait(1).to({scaleX:0.6,scaleY:1,y:506.3,alpha:0.998},0).wait(1).to({scaleX:0.6,scaleY:1,alpha:1},0).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.5,-640.5,721,1281);


(lib.DetailClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":11,"StageInComplete":75});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(115));

	// ViewPort
	this.vp = new lib.ViewPortSample();
	this.vp.setTransform(0,0,1,0.859);

	this.timeline.addTween(cjs.Tween.get(this.vp).wait(115));

	// detail_t02
	this.instance = new lib.detail_t02_1();
	this.instance.setTransform(-8.3,264.4,1,1,0,0,0,127,211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},11).wait(45).to({_off:false,alpha:0},0).wait(1).to({regX:134.6,regY:211.3,x:-0.7,y:264.2,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.181},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:127,regY:211.5,x:-8.3,y:264.4,alpha:1},0).wait(41));

	// detail_t01
	this.instance_1 = new lib.detail_t01_1();
	this.instance_1.setTransform(-2.3,-200.2,1,1,0,0,0,125.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},11).wait(45).to({_off:false,alpha:0},0).wait(1).to({regX:128.2,regY:211.7,x:0.4,y:-199,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.181},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:125.5,regY:210.5,x:-2.3,y:-200.2,alpha:1},0).wait(41));

	// DotLine
	this.instance_2 = new lib.BlueDotLine();
	this.instance_2.setTransform(0,33.1,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},11).wait(26).to({_off:false,scaleY:0.03,alpha:0},0).wait(1).to({scaleY:0.03,alpha:0.003},0).wait(1).to({scaleY:0.04,alpha:0.013},0).wait(1).to({scaleY:0.06,alpha:0.031},0).wait(1).to({scaleY:0.08,alpha:0.06},0).wait(1).to({scaleY:0.12,alpha:0.101},0).wait(1).to({scaleY:0.18,alpha:0.158},0).wait(1).to({scaleY:0.25,alpha:0.233},0).wait(1).to({scaleY:0.35,alpha:0.329},0).wait(1).to({scaleY:0.46,alpha:0.443},0).wait(1).to({scaleY:0.57,alpha:0.563},0).wait(1).to({scaleY:0.68,alpha:0.676},0).wait(1).to({scaleY:0.78,alpha:0.77},0).wait(1).to({scaleY:0.85,alpha:0.844},0).wait(1).to({scaleY:0.9,alpha:0.9},0).wait(1).to({scaleY:0.94,alpha:0.941},0).wait(1).to({scaleY:0.97,alpha:0.969},0).wait(1).to({scaleY:0.99,alpha:0.987},0).wait(1).to({scaleY:1,alpha:0.997},0).wait(1).to({scaleY:1,alpha:1},0).wait(59));

	// product_bg01
	this.instance_3 = new lib.product_bg01_1();
	this.instance_3.setTransform(-161.8,-520.2,1,1,0,0,0,24,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},11).wait(26).to({_off:false,scaleX:0.29,scaleY:0.29,alpha:0},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:1.1,y:-520.1,alpha:0.003},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:4.7,alpha:0.013},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:11.3,alpha:0.031},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:21.6,y:-520.2,alpha:0.06},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:36.5,y:-520.1,alpha:0.101},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:56.9,alpha:0.158},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:84,alpha:0.233},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:118.5,y:-520.2,alpha:0.329},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:159.3,y:-520.1,alpha:0.443},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:202.7,alpha:0.563},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:243.2,alpha:0.676},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:277.3,y:-520.2,alpha:0.77},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:304,y:-520.1,alpha:0.844},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:324.1,alpha:0.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:338.7,y:-520.2,alpha:0.941},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:348.8,y:-520.1,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:355.3,y:-520.2,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:358.9,y:-520.1,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,y:-520.2,alpha:1},0).wait(59));

	// product_bg02
	this.instance_4 = new lib.product_bg02_1();
	this.instance_4.setTransform(-153,-520.2,1,1,0,0,0,54,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},11).wait(26).to({_off:false,scaleX:0.44,x:-162,alpha:0},0).wait(1).to({scaleX:0.45,alpha:0.003},0).wait(1).to({scaleX:0.45,x:-161.9,alpha:0.013},0).wait(1).to({scaleX:0.46,x:-161.7,alpha:0.031},0).wait(1).to({scaleX:0.48,x:-161.5,alpha:0.06},0).wait(1).to({scaleX:0.5,x:-161.1,alpha:0.101},0).wait(1).to({scaleX:0.53,x:-160.6,alpha:0.158},0).wait(1).to({scaleX:0.57,x:-159.9,alpha:0.233},0).wait(1).to({scaleX:0.63,x:-159.1,alpha:0.329},0).wait(1).to({scaleX:0.69,x:-158,alpha:0.443},0).wait(1).to({scaleX:0.76,x:-156.9,alpha:0.563},0).wait(1).to({scaleX:0.82,x:-155.9,alpha:0.676},0).wait(1).to({scaleX:0.87,x:-155.1,alpha:0.77},0).wait(1).to({scaleX:0.91,x:-154.4,alpha:0.844},0).wait(1).to({scaleX:0.95,x:-153.9,alpha:0.9},0).wait(1).to({scaleX:0.97,x:-153.6,alpha:0.941},0).wait(1).to({scaleX:0.98,x:-153.3,alpha:0.969},0).wait(1).to({scaleX:0.99,x:-153.1,alpha:0.987},0).wait(1).to({scaleX:1,x:-153,alpha:0.997},0).wait(1).to({scaleX:1,alpha:1},0).wait(59));

	// product_bg03
	this.instance_5 = new lib.product_bg03_1();
	this.instance_5.setTransform(-4.4,-499.3,1,1,0,0,0,199,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},11).wait(20).to({_off:false,regY:21.8,scaleY:0.14,y:-518.4,alpha:0},0).wait(1).to({regY:22,scaleY:0.14,y:-518.3,alpha:0.002},0).wait(1).to({scaleY:0.14,y:-518.1,alpha:0.01},0).wait(1).to({scaleY:0.16,y:-517.9,alpha:0.023},0).wait(1).to({scaleY:0.17,y:-517.5,alpha:0.043},0).wait(1).to({scaleY:0.2,y:-516.9,alpha:0.072},0).wait(1).to({scaleY:0.23,y:-516.2,alpha:0.11},0).wait(1).to({scaleY:0.27,y:-515.2,alpha:0.161},0).wait(1).to({scaleY:0.33,y:-514,alpha:0.226},0).wait(1).to({scaleY:0.4,y:-512.4,alpha:0.306},0).wait(1).to({scaleY:0.48,y:-510.6,alpha:0.4},0).wait(1).to({scaleY:0.57,y:-508.6,alpha:0.503},0).wait(1).to({scaleY:0.66,y:-506.7,alpha:0.606},0).wait(1).to({scaleY:0.74,y:-504.9,alpha:0.699},0).wait(1).to({scaleY:0.81,y:-503.4,alpha:0.778},0).wait(1).to({scaleY:0.86,y:-502.1,alpha:0.841},0).wait(1).to({scaleY:0.91,y:-501.2,alpha:0.891},0).wait(1).to({scaleY:0.94,y:-500.5,alpha:0.929},0).wait(1).to({scaleY:0.96,y:-499.9,alpha:0.958},0).wait(1).to({scaleY:0.98,y:-499.6,alpha:0.977},0).wait(1).to({scaleY:0.99,y:-499.3,alpha:0.991},0).wait(1).to({scaleY:1,y:-499.2,alpha:0.998},0).wait(1).to({scaleY:1,y:-499.3,alpha:1},0).wait(62));

	// product_bg04
	this.instance_6 = new lib.product_bg04_1();
	this.instance_6.setTransform(-132.7,-474.1,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},11).wait(20).to({_off:false,x:-92.7,alpha:0},0).wait(1).to({x:-92.9,alpha:0.002},0).wait(1).to({x:-93.3,alpha:0.01},0).wait(1).to({x:-94.2,alpha:0.024},0).wait(1).to({x:-95.6,alpha:0.044},0).wait(1).to({x:-97.6,alpha:0.074},0).wait(1).to({x:-100.2,alpha:0.114},0).wait(1).to({x:-103.6,alpha:0.167},0).wait(1).to({x:-108,alpha:0.234},0).wait(1).to({x:-113.5,alpha:0.317},0).wait(1).to({x:-119.9,alpha:0.414},0).wait(1).to({x:-126.7,alpha:0.519},0).wait(1).to({x:-133.5,alpha:0.621},0).wait(1).to({x:-139.5,alpha:0.713},0).wait(1).to({x:-144.5,alpha:0.789},0).wait(1).to({x:-141.1,alpha:0.849},0).wait(1).to({x:-138.5,alpha:0.896},0).wait(1).to({x:-136.5,alpha:0.932},0).wait(1).to({x:-135,alpha:0.959},0).wait(1).to({x:-133.9,alpha:0.978},0).wait(1).to({x:-133.2,alpha:0.991},0).wait(1).to({x:-132.8,alpha:0.998},0).wait(1).to({x:-132.7,alpha:1},0).wait(62));

	// product_bg05
	this.instance_7 = new lib.product_bg05_1();
	this.instance_7.setTransform(125.2,-474.1,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},11).wait(20).to({_off:false,x:85.2,alpha:0},0).wait(1).to({x:85.3,alpha:0.002},0).wait(1).to({x:85.8,alpha:0.01},0).wait(1).to({x:86.7,alpha:0.024},0).wait(1).to({x:88.1,alpha:0.044},0).wait(1).to({x:90,alpha:0.074},0).wait(1).to({x:92.6,alpha:0.114},0).wait(1).to({x:96.1,alpha:0.167},0).wait(1).to({x:100.5,alpha:0.234},0).wait(1).to({x:105.9,alpha:0.317},0).wait(1).to({x:112.3,alpha:0.414},0).wait(1).to({x:119.2,alpha:0.519},0).wait(1).to({x:125.9,alpha:0.621},0).wait(1).to({x:131.9,alpha:0.713},0).wait(1).to({x:136.9,alpha:0.789},0).wait(1).to({x:133.6,alpha:0.849},0).wait(1).to({x:130.9,alpha:0.896},0).wait(1).to({x:128.9,alpha:0.932},0).wait(1).to({x:127.4,alpha:0.959},0).wait(1).to({x:126.4,alpha:0.978},0).wait(1).to({x:125.7,alpha:0.991},0).wait(1).to({x:125.3,alpha:0.998},0).wait(1).to({x:125.2,alpha:1},0).wait(62));

	// product_bg06
	this.instance_8 = new lib.product_bg06copy();
	this.instance_8.setTransform(-4.4,-485.9,1,1,0,0,0,95,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},11).wait(12).to({_off:false,scaleX:0.16,scaleY:0.16,y:-475.9,alpha:0},0).wait(1).to({regX:96.5,scaleX:0.16,scaleY:0.16,x:-4.1,alpha:0.001},0).wait(1).to({scaleX:0.16,scaleY:0.16,y:-476,alpha:0.006},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:-476.1,alpha:0.015},0).wait(1).to({scaleX:0.18,scaleY:0.18,alpha:0.027},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-4,y:-476.3,alpha:0.045},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-476.6,alpha:0.068},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:-476.9,alpha:0.098},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-3.9,y:-477.3,alpha:0.135},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-477.7,alpha:0.181},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-3.8,y:-478.3,alpha:0.236},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-3.7,y:-478.9,alpha:0.302},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-3.6,y:-479.7,alpha:0.378},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-3.5,y:-480.5,alpha:0.46},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-3.4,y:-481.4,alpha:0.545},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-3.3,y:-482.2,alpha:0.627},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-3.2,y:-482.9,alpha:0.702},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-483.6,alpha:0.767},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-3.1,y:-484.1,alpha:0.822},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-3,y:-484.6,alpha:0.867},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-485,alpha:0.904},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-2.9,y:-485.2,alpha:0.933},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-485.4,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-485.6,alpha:0.973},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-485.7,alpha:0.985},0).wait(1).to({scaleX:1,scaleY:1,y:-485.8,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:-2.8,y:-485.9,alpha:0.999},0).wait(1).to({regX:95,scaleX:1,scaleY:1,x:-4.4,alpha:1},0).wait(65));

	// product_bg07
	this.instance_9 = new lib.product_bg07_1();
	this.instance_9.setTransform(0,33.1,1,1,90,0,0,481,262);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},11).wait(8).to({_off:false,regX:480.9,scaleX:0.05,scaleY:0.05},0).wait(1).to({regX:481,scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.07,scaleY:0.07},0).wait(1).to({scaleX:0.08,scaleY:0.08},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.26,scaleY:0.26},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:33.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:33.1},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:33.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:33.1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:33.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:33.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(71));

	// product_bg08
	this.instance_10 = new lib.product_bg08();
	this.instance_10.setTransform(219.5,-226.5,1,1,0,0,0,485,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},11).wait(2).to({_off:false,regX:484.9,scaleX:0.25,scaleY:0.25,x:0,y:-56.7,alpha:0},0).wait(1).to({regX:259.5,regY:523.5,scaleX:0.25,scaleY:0.25,x:-55.6,y:-2.2,alpha:0.002},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-55.4,alpha:0.007},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-54.9,alpha:0.016},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-54.2,y:-2.3,alpha:0.03},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-53.3,alpha:0.049},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-52,y:-2.4,alpha:0.074},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-50.4,y:-2.5,alpha:0.107},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-48.3,y:-2.7,alpha:0.148},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-45.8,y:-2.9,alpha:0.199},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-42.7,y:-3.2,alpha:0.261},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-39.1,y:-3.4,alpha:0.333},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-35,y:-3.7,alpha:0.415},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-30.6,y:-4.1,alpha:0.503},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-26.3,y:-4.4,alpha:0.59},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-22.2,y:-4.7,alpha:0.672},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-18.7,y:-5,alpha:0.743},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-15.6,y:-5.2,alpha:0.804},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-13.1,y:-5.4,alpha:0.854},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-11.1,y:-5.6,alpha:0.895},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-9.5,y:-5.7,alpha:0.927},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-8.2,y:-5.8,alpha:0.952},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-7.3,alpha:0.971},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-6.6,y:-5.9,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,x:-6.2,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:-5.9,y:-6,alpha:0.998},0).wait(1).to({regX:485,regY:303,scaleX:1,scaleY:1,x:219.5,y:-226.5,alpha:1},0).wait(76));

	// Layer 4
	this.instance_11 = new lib.product_bg09_1();
	this.instance_11.setTransform(1,506.3,0.599,1,0,0,0,434.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},11).wait(8).to({_off:false,regX:434.6,regY:31.9,scaleX:0.14,scaleY:0.27,alpha:0},0).wait(1).to({regX:434.5,regY:32,scaleX:0.14,scaleY:0.27,alpha:0.002},0).wait(1).to({scaleX:0.14,scaleY:0.28,alpha:0.007},0).wait(1).to({scaleX:0.15,scaleY:0.28,alpha:0.017},0).wait(1).to({scaleX:0.15,scaleY:0.29,alpha:0.032},0).wait(1).to({scaleX:0.16,scaleY:0.31,alpha:0.053},0).wait(1).to({scaleX:0.18,scaleY:0.33,alpha:0.081},0).wait(1).to({scaleX:0.19,scaleY:0.36,alpha:0.118},0).wait(1).to({scaleX:0.21,scaleY:0.39,alpha:0.163},0).wait(1).to({scaleX:0.24,scaleY:0.43,alpha:0.22},0).wait(1).to({scaleX:0.27,scaleY:0.48,alpha:0.288},0).wait(1).to({scaleX:0.31,scaleY:0.54,y:506.4,alpha:0.368},0).wait(1).to({scaleX:0.35,scaleY:0.6,y:506.3,alpha:0.457},0).wait(1).to({scaleX:0.39,scaleY:0.67,alpha:0.549},0).wait(1).to({scaleX:0.43,scaleY:0.74,alpha:0.637},0).wait(1).to({scaleX:0.47,scaleY:0.79,alpha:0.716},0).wait(1).to({scaleX:0.5,scaleY:0.84,y:506.4,alpha:0.783},0).wait(1).to({scaleX:0.53,scaleY:0.88,alpha:0.839},0).wait(1).to({scaleX:0.55,scaleY:0.92,alpha:0.884},0).wait(1).to({scaleX:0.56,scaleY:0.94,y:506.3,alpha:0.92},0).wait(1).to({scaleX:0.57,scaleY:0.96,alpha:0.947},0).wait(1).to({scaleX:0.58,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.59,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.6,scaleY:1,y:506.4,alpha:0.993},0).wait(1).to({scaleX:0.6,scaleY:1,y:506.3,alpha:0.998},0).wait(1).to({scaleX:0.6,scaleY:1,alpha:1},0).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.5,-550.4,721,1100.9);


(lib.mouse_icon_full = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mouse_icon();
	this.instance.setTransform(321.1,301.5,1.651,1.651,0,0,0,87.8,94.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(137,219,243,0.918)").s().p("EgjdAjeQusutAA0xQAA0wOsutQOtusUwAAQUyAAOrOsQOtOtAAUwQAAUxutOtQurOs0yAAQ0wAAutusg");
	this.shape.setTransform(321.1,321);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,642.1,642.1);


(lib.WatchClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":17,"StageInComplete":70,"ToDetail":89,"ToDetailComplete":105});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(158));

	// icon
	this.hintIcon = new lib.mouse_icon_full();
	this.hintIcon.setTransform(0.1,-6,1,1,0,0,0,321.1,321);

	this.timeline.addTween(cjs.Tween.get(this.hintIcon).wait(158));

	// ViewPort
	this.vp = new lib.ViewPortSample();
	this.vp.setTransform(0,0,1,0.813);

	this.timeline.addTween(cjs.Tween.get(this.vp).wait(158));

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-178,361.2,0.799,0.799,0,0,0,0,-175.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({regY:-175,scaleX:0.8,scaleY:0.8,x:-178.1,y:361.4,alpha:0.003},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-178.6,y:361.6,alpha:0.015},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-179.5,y:362,alpha:0.035},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-180.9,y:362.8,alpha:0.068},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-182.9,y:363.8,alpha:0.115},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-185.7,y:365.2,alpha:0.181},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-189.4,y:367.1,alpha:0.268},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-194,y:369.5,alpha:0.378},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-199.3,y:372.2,alpha:0.503},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-204.6,y:374.9,alpha:0.627},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-209.2,y:377.2,alpha:0.736},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-212.9,y:379.1,alpha:0.822},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-215.6,y:380.5,alpha:0.886},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-217.6,y:381.5,alpha:0.933},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-219,y:382.2,alpha:0.965},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-219.8,y:382.7,alpha:0.985},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-220.3,y:382.9,alpha:0.997},0).wait(1).to({x:-220.5,y:383,alpha:1},0).wait(93));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(189.4,365.2,0.799,0.799,0,0,0,0,-170.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regY:-170,scaleX:0.8,scaleY:0.8,x:189.5,y:365.3,alpha:0.003},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:190,y:365.6,alpha:0.015},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:190.9,y:366,alpha:0.035},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:192.3,y:366.7,alpha:0.068},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:194.3,y:367.6,alpha:0.115},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:197.2,y:369,alpha:0.181},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:200.9,y:370.8,alpha:0.268},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:205.7,y:373,alpha:0.378},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:211.1,y:375.6,alpha:0.503},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:216.5,y:378.1,alpha:0.627},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:221.1,y:380.4,alpha:0.736},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:224.9,y:382.1,alpha:0.822},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:227.6,y:383.4,alpha:0.886},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:229.7,y:384.4,alpha:0.933},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:231,y:385.1,alpha:0.965},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:231.9,y:385.5,alpha:0.985},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:232.4,y:385.7,alpha:0.997},0).wait(1).to({regY:-170.1,x:232.6,alpha:1},0).wait(93));

	// BtnBack
	this.btnBack = new lib.FeatureBtnBack();
	this.btnBack.setTransform(-10,431);
	this.btnBack._off = true;
	new cjs.ButtonHelper(this.btnBack, 0, 1, 2, false, new lib.FeatureBtnBack(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnBack).wait(90).to({_off:false},0).wait(68));

	// BikeDetail
	this.detailClip = new lib.WatchDetail();
	this.detailClip.alpha = 0;
	this.detailClip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.detailClip).wait(90).to({_off:false},0).to({alpha:1},15).wait(53));

	// Progress
	this.progressClip = new lib.WatchProgress();
	this.progressClip.setTransform(0,274);
	this.progressClip.alpha = 0;
	this.progressClip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressClip).wait(90).to({_off:false},0).to({alpha:1},15).wait(53));

	// L_Label
	this.instance_2 = new lib.L_Label();
	this.instance_2.setTransform(-82.6,247.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},17).wait(30).to({_off:false,x:-62.6,alpha:0},0).wait(1).to({x:-62.7,alpha:0.003},0).wait(1).to({x:-62.8,alpha:0.012},0).wait(1).to({x:-63.2,alpha:0.028},0).wait(1).to({x:-63.7,alpha:0.053},0).wait(1).to({x:-64.4,alpha:0.09},0).wait(1).to({x:-65.4,alpha:0.139},0).wait(1).to({x:-66.7,alpha:0.205},0).wait(1).to({x:-68.4,alpha:0.288},0).wait(1).to({x:-70.4,alpha:0.39},0).wait(1).to({x:-72.7,alpha:0.503},0).wait(1).to({x:-74.9,alpha:0.615},0).wait(1).to({x:-76.9,alpha:0.716},0).wait(1).to({x:-78.6,alpha:0.798},0).wait(1).to({x:-79.9,alpha:0.863},0).wait(1).to({x:-80.8,alpha:0.912},0).wait(1).to({x:-81.5,alpha:0.947},0).wait(1).to({x:-82,alpha:0.972},0).wait(1).to({x:-82.4,alpha:0.988},0).wait(1).to({x:-82.5,alpha:0.997},0).wait(1).to({x:-82.6,alpha:1},0).wait(22).to({alpha:0},15).to({_off:true},1).wait(53));

	// R_Label
	this.instance_3 = new lib.R_Label();
	this.instance_3.setTransform(89,245.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},17).wait(30).to({_off:false,x:69,alpha:0},0).wait(1).to({alpha:0.003},0).wait(1).to({x:69.2,alpha:0.012},0).wait(1).to({x:69.5,alpha:0.028},0).wait(1).to({x:70,alpha:0.053},0).wait(1).to({x:70.7,alpha:0.09},0).wait(1).to({x:71.7,alpha:0.139},0).wait(1).to({x:73,alpha:0.205},0).wait(1).to({x:74.7,alpha:0.288},0).wait(1).to({x:76.7,alpha:0.39},0).wait(1).to({x:79,alpha:0.503},0).wait(1).to({x:81.3,alpha:0.615},0).wait(1).to({x:83.3,alpha:0.716},0).wait(1).to({x:84.9,alpha:0.798},0).wait(1).to({x:86.2,alpha:0.863},0).wait(1).to({x:87.2,alpha:0.912},0).wait(1).to({x:87.9,alpha:0.947},0).wait(1).to({x:88.4,alpha:0.972},0).wait(1).to({x:88.7,alpha:0.988},0).wait(1).to({x:88.9,alpha:0.997},0).wait(1).to({x:89,alpha:1},0).wait(22).to({alpha:0},15).to({_off:true},1).wait(53));

	// L_Bike
	this.leftBike = new lib.WatchLeftBike();

	this.timeline.addTween(cjs.Tween.get(this.leftBike).wait(17).to({alpha:0},0).wait(1).to({regX:-164.1,regY:-9.3,x:-164.1,y:-9.3},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-164.1,regY:-9.3,x:-164.1,y:-9.3,alpha:0.003},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(25).to({alpha:0},15).to({_off:true},1).wait(53));

	// R_Bike
	this.rightBike = new lib.WatchRightBike();

	this.timeline.addTween(cjs.Tween.get(this.rightBike).wait(17).to({alpha:0},0).wait(1).to({regX:149,regY:-9.5,x:149,y:-9.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:149,regY:-9.5,x:149,y:-9.5,alpha:0.003},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(25).to({alpha:0},15).to({_off:true},1).wait(53));

	// product_bg01
	this.instance_4 = new lib.product_bg01_1();
	this.instance_4.setTransform(-183.5,-380.9,1,1,0,0,0,24,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},17).wait(23).to({_off:false,regY:23.4,scaleX:0.46,scaleY:0.46,alpha:0},0).wait(1).to({regY:23.5,scaleX:0.46,scaleY:0.46,rotation:1,x:-183.4,y:-380.8,alpha:0.003},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:4.2,x:-183.5,alpha:0.012},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:10.1,x:-183.4,alpha:0.028},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:19.2,alpha:0.053},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:32.3,alpha:0.09},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:50.1,x:-183.5,y:-380.9,alpha:0.139},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:73.7,alpha:0.205},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:103.8,x:-183.4,alpha:0.288},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:140.3,x:-183.5,alpha:0.39},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:181,alpha:0.503},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:221.6,x:-183.4,alpha:0.615},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:257.7,alpha:0.716},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:287.4,alpha:0.798},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:310.6,y:-380.8,alpha:0.863},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:328.2,alpha:0.912},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:341,x:-183.5,alpha:0.947},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:350,x:-183.4,alpha:0.972},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:355.8,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,rotation:359,x:-183.5,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,y:-380.9,alpha:1},0).wait(98));

	// 360_bg01
	this.instance_5 = new lib._360_bg01_1();
	this.instance_5.setTransform(-179,-374,1,1,0,0,0,49.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},17).wait(23).to({_off:false,alpha:0},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:1},0).wait(98));

	// 360_bg02
	this.instance_6 = new lib._360_bg02_1();
	this.instance_6.setTransform(0,-366,1,1,0,0,0,221,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},17).wait(19).to({_off:false,regY:58.6,scaleX:0.93,scaleY:0.43,y:-385,alpha:0},0).wait(1).to({regY:58.5,scaleY:0.43,x:0.1,alpha:0.003},0).wait(1).to({scaleY:0.44,x:0,y:-384.8,alpha:0.011},0).wait(1).to({scaleX:0.93,scaleY:0.45,y:-384.5,alpha:0.025},0).wait(1).to({scaleX:0.93,scaleY:0.46,y:-384.1,alpha:0.048},0).wait(1).to({scaleX:0.93,scaleY:0.48,x:0.1,y:-383.5,alpha:0.08},0).wait(1).to({scaleX:0.94,scaleY:0.5,x:0,y:-382.7,alpha:0.123},0).wait(1).to({scaleX:0.94,scaleY:0.53,x:0.1,y:-381.6,alpha:0.181},0).wait(1).to({scaleX:0.95,scaleY:0.57,x:0,y:-380.2,alpha:0.254},0).wait(1).to({scaleX:0.95,scaleY:0.63,y:-378.5,alpha:0.344},0).wait(1).to({scaleX:0.96,scaleY:0.69,y:-376.5,alpha:0.448},0).wait(1).to({scaleX:0.97,scaleY:0.75,y:-374.4,alpha:0.557},0).wait(1).to({scaleX:0.98,scaleY:0.81,y:-372.5,alpha:0.66},0).wait(1).to({scaleX:0.98,scaleY:0.86,x:0.1,y:-370.8,alpha:0.749},0).wait(1).to({scaleX:0.99,scaleY:0.9,y:-369.4,alpha:0.822},0).wait(1).to({scaleX:0.99,scaleY:0.93,x:0,y:-368.4,alpha:0.878},0).wait(1).to({scaleX:0.99,scaleY:0.96,x:0.1,y:-367.6,alpha:0.921},0).wait(1).to({scaleX:1,scaleY:0.97,y:-366.9,alpha:0.953},0).wait(1).to({scaleX:1,scaleY:0.99,x:0,y:-366.5,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:0.99,x:0.1,y:-366.2,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-366.1,alpha:0.998},0).wait(1).to({scaleY:1,y:-366,alpha:1},0).wait(101));

	// 360_bg04
	this.instance_7 = new lib._360_bg04_1();
	this.instance_7.setTransform(146,-357.9,1,1,0,0,0,51,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},17).wait(19).to({_off:false,x:96,alpha:0},0).wait(1).to({x:96.2,alpha:0.002},0).wait(1).to({x:96.8,alpha:0.011},0).wait(1).to({x:98,alpha:0.025},0).wait(1).to({x:99.8,alpha:0.048},0).wait(1).to({x:102.3,alpha:0.08},0).wait(1).to({x:105.7,alpha:0.123},0).wait(1).to({x:110.2,alpha:0.181},0).wait(1).to({x:116,alpha:0.254},0).wait(1).to({x:123.1,alpha:0.344},0).wait(1).to({x:131.3,alpha:0.447},0).wait(1).to({x:139.8,alpha:0.556},0).wait(1).to({x:148,alpha:0.659},0).wait(1).to({x:155,alpha:0.748},0).wait(1).to({x:160.7,alpha:0.82},0).wait(1).to({x:156,alpha:0.877},0).wait(1).to({x:152.5,alpha:0.921},0).wait(1).to({x:149.9,alpha:0.952},0).wait(1).to({x:148.1,alpha:0.975},0).wait(1).to({x:146.9,alpha:0.989},0).wait(1).to({x:146.2,alpha:0.998},0).wait(1).to({x:146,alpha:1},0).wait(101));

	// 360_bg03
	this.instance_8 = new lib._360_bg03_1();
	this.instance_8.setTransform(-148,-357.9,1,1,0,0,0,51,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},17).wait(19).to({_off:false,x:-98,alpha:0},0).wait(1).to({x:-98.1,alpha:0.002},0).wait(1).to({x:-98.8,alpha:0.011},0).wait(1).to({x:-99.9,alpha:0.025},0).wait(1).to({x:-101.7,alpha:0.048},0).wait(1).to({x:-104.2,alpha:0.08},0).wait(1).to({x:-107.7,alpha:0.123},0).wait(1).to({x:-112.2,alpha:0.181},0).wait(1).to({x:-118,alpha:0.254},0).wait(1).to({x:-125,alpha:0.344},0).wait(1).to({x:-133.2,alpha:0.447},0).wait(1).to({x:-141.8,alpha:0.556},0).wait(1).to({x:-149.9,alpha:0.659},0).wait(1).to({x:-156.9,alpha:0.748},0).wait(1).to({x:-162.6,alpha:0.82},0).wait(1).to({x:-158,alpha:0.877},0).wait(1).to({x:-154.4,alpha:0.921},0).wait(1).to({x:-151.8,alpha:0.952},0).wait(1).to({x:-150,alpha:0.975},0).wait(1).to({x:-148.8,alpha:0.989},0).wait(1).to({x:-148.2,alpha:0.998},0).wait(1).to({x:-148,alpha:1},0).wait(101));

	// 360_bg05
	this.instance_9 = new lib._360_bg05_1();
	this.instance_9.setTransform(-11.5,-385,1,1,0,0,0,110,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},17).wait(12).to({_off:false,regX:110.1,scaleX:0.2,scaleY:0.2,alpha:0},0).wait(1).to({regX:110,scaleX:0.21,scaleY:0.21,alpha:0.003},0).wait(1).to({scaleX:0.21,scaleY:0.21,alpha:0.011},0).wait(1).to({scaleX:0.22,scaleY:0.22,alpha:0.025},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.048},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.08},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.123},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.181},0).wait(1).to({scaleX:0.41,scaleY:0.41,alpha:0.254},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.344},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.448},0).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.557},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.66},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-11.6,alpha:0.749},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.822},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.878},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-11.5,alpha:0.921},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-11.6,alpha:0.953},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.975},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-11.5,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(108));

	// 360_bg06
	this.instance_10 = new lib._360_bg06_1();
	this.instance_10.setTransform(0,-5.9,1,1,0,0,0,345,345);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},17).wait(5).to({_off:false,regX:344.9,regY:344.9,scaleX:0.08,scaleY:0.08,y:-38.6,alpha:0},0).wait(1).to({regX:345,regY:345,scaleX:0.08,scaleY:0.08,x:0.1,alpha:0.001},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:0,y:-38.5,alpha:0.004},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:0.1,y:-38.3,alpha:0.008},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:-38.1,alpha:0.016},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:0,y:-37.8,alpha:0.025},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:0.1,y:-37.3,alpha:0.038},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:-36.8,alpha:0.053},0).wait(1).to({scaleX:0.15,scaleY:0.15,y:-36.2,alpha:0.073},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:-35.4,alpha:0.096},0).wait(1).to({scaleX:0.2,scaleY:0.2,y:-34.5,alpha:0.123},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-33.5,alpha:0.156},0).wait(1).to({scaleX:0.26,scaleY:0.26,y:-32.2,alpha:0.194},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:-30.7,alpha:0.238},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:-29.1,alpha:0.288},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:-27.2,alpha:0.344},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:-25.3,alpha:0.405},0).wait(1).to({scaleX:0.51,scaleY:0.51,y:-23.1,alpha:0.47},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:-21,alpha:0.536},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:-18.9,alpha:0.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-16.9,alpha:0.66},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:-15.1,alpha:0.716},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:0.2,y:-13.4,alpha:0.765},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:-12,alpha:0.809},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-10.7,alpha:0.846},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-9.7,alpha:0.878},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-8.8,alpha:0.906},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-8,alpha:0.928},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-7.4,alpha:0.947},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-6.9,alpha:0.963},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-6.5,alpha:0.975},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-6.2,alpha:0.985},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-6,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,y:-5.8,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-5.9,alpha:1},0).wait(101));

	// product_bg09
	this.instance_11 = new lib.product_bg09_1();
	this.instance_11.setTransform(0,411.4,1,1,0,0,0,434.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},17).wait(5).to({_off:false,scaleX:0.19,scaleY:0.25,alpha:0},0).wait(1).to({scaleX:0.19,scaleY:0.25,alpha:0.002},0).wait(1).to({scaleX:0.19,scaleY:0.26,alpha:0.007},0).wait(1).to({scaleX:0.19,scaleY:0.26,alpha:0.017},0).wait(1).to({scaleX:0.2,scaleY:0.27,alpha:0.032},0).wait(1).to({scaleX:0.21,scaleY:0.29,alpha:0.053},0).wait(1).to({scaleX:0.23,scaleY:0.31,x:0.1,alpha:0.081},0).wait(1).to({scaleX:0.25,scaleY:0.34,x:0,alpha:0.118},0).wait(1).to({scaleX:0.28,scaleY:0.37,alpha:0.163},0).wait(1).to({scaleX:0.31,scaleY:0.42,x:0.1,alpha:0.22},0).wait(1).to({scaleX:0.34,scaleY:0.47,x:0,alpha:0.288},0).wait(1).to({scaleX:0.39,scaleY:0.53,alpha:0.368},0).wait(1).to({scaleX:0.44,scaleY:0.59,alpha:0.457},0).wait(1).to({scaleX:0.49,scaleY:0.66,alpha:0.549},0).wait(1).to({scaleX:0.54,scaleY:0.73,alpha:0.637},0).wait(1).to({scaleX:0.58,scaleY:0.79,x:0.1,alpha:0.716},0).wait(1).to({scaleX:0.62,scaleY:0.84,alpha:0.783},0).wait(1).to({scaleX:0.65,scaleY:0.88,x:0,alpha:0.839},0).wait(1).to({scaleX:0.68,scaleY:0.91,alpha:0.884},0).wait(1).to({scaleX:0.69,scaleY:0.94,alpha:0.92},0).wait(1).to({scaleX:0.71,scaleY:0.96,alpha:0.947},0).wait(1).to({scaleX:0.72,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.73,scaleY:0.99,x:0.1,alpha:0.983},0).wait(1).to({scaleX:0.74,scaleY:1,x:0,alpha:0.993},0).wait(1).to({scaleX:0.74,scaleY:1,x:0.1,alpha:0.998},0).wait(1).to({scaleX:0.74,scaleY:1,x:0,alpha:1},0).wait(111));

	// 360_bg07
	this.instance_12 = new lib._360_bg07_1();
	this.instance_12.setTransform(0,-41.5,1,1,0,0,0,351,391);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},17).wait(1).to({_off:false,regY:391.1,scaleX:0.08,scaleY:0.08,alpha:0},0).wait(1).to({regY:391,scaleX:0.08,scaleY:0.08,alpha:0.002},0).wait(1).to({scaleX:0.09,scaleY:0.09,alpha:0.007},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:0.1,alpha:0.017},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:0,y:-41.4,alpha:0.032},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:0.1,alpha:0.053},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:0,y:-41.5,alpha:0.081},0).wait(1).to({scaleX:0.19,scaleY:0.19,alpha:0.118},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.163},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.22},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:0.1,alpha:0.288},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.368},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.457},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.549},0).wait(1).to({scaleX:0.67,scaleY:0.67,alpha:0.637},0).wait(1).to({scaleX:0.74,scaleY:0.74,alpha:0.716},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:0,alpha:0.783},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.839},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-41.6,alpha:0.884},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-41.5,alpha:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-41.6,alpha:0.947},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:0.1,alpha:0.968},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0,y:-41.5,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:0.1,y:-41.6,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-41.5,alpha:1},0).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.5,-520.4,869,1040.8);


// stage content:



(lib.AeonOpenMobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MainScene
	this.instance = new lib.MainScene();
	this.instance.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(184.5,380,1085.8,1800);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;