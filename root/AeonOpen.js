(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1040,
	fps: 30,
	color: "#666666",
	manifest: [
		{src:"images/_360_bg.png", id:"_360_bg"},
		{src:"images/_360_bg01.png", id:"_360_bg01"},
		{src:"images/_360_bg02.png", id:"_360_bg02"},
		{src:"images/_360_bg03.png", id:"_360_bg03"},
		{src:"images/_360_bg04.png", id:"_360_bg04"},
		{src:"images/_360_bg05.png", id:"_360_bg05"},
		{src:"images/_360_bg06.png", id:"_360_bg06"},
		{src:"images/_360_bg07.png", id:"_360_bg07"},
		{src:"images/_360_bike01.png", id:"_360_bike01"},
		{src:"images/_360_bike02pngcopy.png", id:"_360_bike02pngcopy"},
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
		{src:"images/game_tit03_v3.png", id:"game_tit03_v3"},
		{src:"images/gift_btn.png", id:"gift_btn"},
		{src:"images/gift_copyrightpngcopy.png", id:"gift_copyrightpngcopy"},
		{src:"images/gift_pro01_v222.png", id:"gift_pro01_v222"},
		{src:"images/gift_pro02_v2222.png", id:"gift_pro02_v2222"},
		{src:"images/gift_pro03_v2222.png", id:"gift_pro03_v2222"},
		{src:"images/gift_tit.png", id:"gift_tit"},
		{src:"images/index_ball01.png", id:"index_ball01"},
		{src:"images/index_ball02.png", id:"index_ball02"},
		{src:"images/index_ball03.png", id:"index_ball03"},
		{src:"images/index_btn_main.png", id:"index_btn_main"},
		{src:"images/index_btn_peo.png", id:"index_btn_peo"},
		{src:"images/index_btn_peo_shadow.png", id:"index_btn_peo_shadow"},
		{src:"images/index_btn_shadow.png", id:"index_btn_shadow"},
		{src:"images/index_peo01.png", id:"index_peo01"},
		{src:"images/index_peo02pngcopy.png", id:"index_peo02pngcopy"},
		{src:"images/index_sea.png", id:"index_sea"},
		{src:"images/index_sky.jpg", id:"index_sky"},
		{src:"images/index_tit.png", id:"index_tit"},
		{src:"images/index_tit101.png", id:"index_tit101"},
		{src:"images/index_tit102.png", id:"index_tit102"},
		{src:"images/index_tit103.png", id:"index_tit103"},
		{src:"images/index_tit104.png", id:"index_tit104"},
		{src:"images/index_tit105.png", id:"index_tit105"},
		{src:"images/index_tit106pngcopy2.png", id:"index_tit106pngcopy2"},
		{src:"images/index_tree_l01pngcopy.png", id:"index_tree_l01pngcopy"},
		{src:"images/index_tree_l02pngcopy.png", id:"index_tree_l02pngcopy"},
		{src:"images/product_back.png", id:"product_back"},
		{src:"images/product_bg.png", id:"product_bg"},
		{src:"images/product_bg01.png", id:"product_bg01"},
		{src:"images/product_bg02.png", id:"product_bg02"},
		{src:"images/product_bg03.png", id:"product_bg03"},
		{src:"images/product_bg04.png", id:"product_bg04"},
		{src:"images/product_bg05.png", id:"product_bg05"},
		{src:"images/product_bg06.png", id:"product_bg06"},
		{src:"images/product_bg07.png", id:"product_bg07"},
		{src:"images/product_bg08.png", id:"product_bg08"},
		{src:"images/product_bg09.png", id:"product_bg09"},
		{src:"images/product_bg_line.png", id:"product_bg_line"},
		{src:"images/product_logo01pngcopy.png", id:"product_logo01pngcopy"},
		{src:"images/product_logo02pngcopy.png", id:"product_logo02pngcopy"},
		{src:"images/product_main01.png", id:"product_main01"},
		{src:"images/product_main01pngcopy.png", id:"product_main01pngcopy"},
		{src:"images/product_main02_v2.png", id:"product_main02_v2"},
		{src:"images/product_main02_v2pngcopy.png", id:"product_main02_v2pngcopy"},
		{src:"images/product_main03.png", id:"product_main03"},
		{src:"images/product_main03pngcopy.png", id:"product_main03pngcopy"},
		{src:"images/product_main04.png", id:"product_main04"},
		{src:"images/product_main04pngcopy.png", id:"product_main04pngcopy"},
		{src:"images/product_main05.png", id:"product_main05"},
		{src:"images/product_main05pngcopy.png", id:"product_main05pngcopy"},
		{src:"images/product_main06.png", id:"product_main06"},
		{src:"images/product_main06pngcopy.png", id:"product_main06pngcopy"},
		{src:"images/product_main07pngcopy.png", id:"product_main07pngcopy"},
		{src:"images/product_main07pngcopy3.png", id:"product_main07pngcopy3"},
		{src:"images/product_main08pngcopy.png", id:"product_main08pngcopy"},
		{src:"images/product_main08pngcopy2.png", id:"product_main08pngcopy2"},
		{src:"images/product_main09.png", id:"product_main09"},
		{src:"images/product_main09pngcopy.png", id:"product_main09pngcopy"},
		{src:"images/product_main10.png", id:"product_main10"},
		{src:"images/product_main10pngcopy.png", id:"product_main10pngcopy"},
		{src:"images/product_name01pngcopy.png", id:"product_name01pngcopy"},
		{src:"images/product_name02pngcopy.png", id:"product_name02pngcopy"},
		{src:"images/product_o.png", id:"product_o"},
		{src:"images/product_oo.png", id:"product_oo"},
		{src:"images/product_pro01.png", id:"product_pro01"},
		{src:"images/product_pro02pngcopy2.png", id:"product_pro02pngcopy2"},
		{src:"images/product_v.png", id:"product_v"},
		{src:"images/ston.png", id:"ston"}
	]
};



// symbols:



(lib._360_bg = function() {
	this.initialize(img._360_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,865);


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


(lib._360_bike02pngcopy = function() {
	this.initialize(img._360_bike02pngcopy);
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


(lib.game_tit03_v3 = function() {
	this.initialize(img.game_tit03_v3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,56);


(lib.gift_btn = function() {
	this.initialize(img.gift_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,157);


(lib.gift_copyrightpngcopy = function() {
	this.initialize(img.gift_copyrightpngcopy);
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


(lib.index_ball01 = function() {
	this.initialize(img.index_ball01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,147);


(lib.index_ball02 = function() {
	this.initialize(img.index_ball02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,23);


(lib.index_ball03 = function() {
	this.initialize(img.index_ball03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,108);


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


(lib.index_peo01 = function() {
	this.initialize(img.index_peo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,690);


(lib.index_peo02pngcopy = function() {
	this.initialize(img.index_peo02pngcopy);
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


(lib.product_back = function() {
	this.initialize(img.product_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.product_bg = function() {
	this.initialize(img.product_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,748);


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


(lib.product_bg08 = function() {
	this.initialize(img.product_bg08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,606);


(lib.product_bg09 = function() {
	this.initialize(img.product_bg09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,869,64);


(lib.product_bg_line = function() {
	this.initialize(img.product_bg_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,349);


(lib.product_logo01pngcopy = function() {
	this.initialize(img.product_logo01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,86);


(lib.product_logo02pngcopy = function() {
	this.initialize(img.product_logo02pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,93);


(lib.product_main01 = function() {
	this.initialize(img.product_main01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,464);


(lib.product_main01pngcopy = function() {
	this.initialize(img.product_main01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,464);


(lib.product_main02_v2 = function() {
	this.initialize(img.product_main02_v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main02_v2pngcopy = function() {
	this.initialize(img.product_main02_v2pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main03 = function() {
	this.initialize(img.product_main03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,447);


(lib.product_main03pngcopy = function() {
	this.initialize(img.product_main03pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,447);


(lib.product_main04 = function() {
	this.initialize(img.product_main04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main04pngcopy = function() {
	this.initialize(img.product_main04pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main05 = function() {
	this.initialize(img.product_main05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main05pngcopy = function() {
	this.initialize(img.product_main05pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main06 = function() {
	this.initialize(img.product_main06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main06pngcopy = function() {
	this.initialize(img.product_main06pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main07pngcopy = function() {
	this.initialize(img.product_main07pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,483,464);


(lib.product_main07pngcopy3 = function() {
	this.initialize(img.product_main07pngcopy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,483,464);


(lib.product_main08pngcopy = function() {
	this.initialize(img.product_main08pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main08pngcopy2 = function() {
	this.initialize(img.product_main08pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main09 = function() {
	this.initialize(img.product_main09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main09pngcopy = function() {
	this.initialize(img.product_main09pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,464);


(lib.product_main10 = function() {
	this.initialize(img.product_main10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,464);


(lib.product_main10pngcopy = function() {
	this.initialize(img.product_main10pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,464);


(lib.product_name01pngcopy = function() {
	this.initialize(img.product_name01pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,46);


(lib.product_name02pngcopy = function() {
	this.initialize(img.product_name02pngcopy);
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


(lib.product_pro02pngcopy2 = function() {
	this.initialize(img.product_pro02pngcopy2);
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


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_btn_shadow();
	this.instance.setTransform(-70.5,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-25,141,50);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_btn_shadow();
	this.instance.setTransform(-70.5,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-25,141,50);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_btn_peo_shadow();
	this.instance.setTransform(-83.5,-36.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,-36.5,167,73);


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


(lib.t10_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.2,-25.5,110.4,51.2);


(lib.t09_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("AoqD0QASgRAHgMQAHgIAGgYIggAAIAAgPQAOgNANgWIggAAIAAgSIA5AAIAAAOQgLATgQARIAcAAIAAAOIgJAcQANARASAGQATAGAxgBQAlABANgCIgFAVQhiAAgWgGQgTgHgOgSQgKASgRASgAk/D8IAAgSIBVAAIAAgWIhFAAIAAgSIBFAAIAAgPIAUAAIAAAPIBJAAIAAASIhJAAIAAAWIBZAAIAAASgAGvDPQgSgWAAgjQAAggAPgVQAUgdAnAAQAqAAATAbQAQATAAAhQAAAjgSAWQgUAbgnAAQgkAAgUgYgAHCBmQgQARAAAhQAAAaAOARQAMARAdAAQAcAAAMgUQANgUAAgZQAAgcgOgPQgPgSgZAAQgXAAgPAQgAD7DVQgVgYABglQgBgoAVgWQATgWAhAAQAWAAAPAJQAWALAFAfIgUAAQgEgRgMgHQgMgJgRAAQgVAAgOAQQgOAQgBAhQABAcALARQAMARAbAAQATAAAOgMQAOgNAAgbIgwAAIAAgRIBEAAIAABSIgNAAIgGgTQgKALgJAFQgOAIgUAAQgaAAgVgSgAA+DPQgRgWAAgjQAAggAQgVQATgdAnAAQApAAAUAbQAPAVABAfQAAAhgSAYQgVAbgmAAQgjAAgWgYgABRBmQgPASAAAgQAAAYANATQANARAeAAQAbAAAMgUQANgUAAgZQAAgbgOgQQgPgSgYAAQgXAAgRAQgAhRDiIAAiaIAUAAIAACIIBNAAIAAASgAndDaIAAg5IBsAAIAAA5gAnKDJIBFAAIAAgXIhFAAgAk5ClQANgJAEgMIADgKIgaAAIAAgSIAcAAIAAgcIgUAAIAAgRIBoAAIAAARIgXAAIAAAcIAdAAIAAASIgdAAIAAArIgSAAIAAgrIgaAAIgEARQgEAOgPAOgAkQB0IAYAAIAAgcIgYAAgAi2CzIgEgSIAbABQAIAAAAgEIAAheIATAAIAABhQAAAKgFADQgEAEgMABgAmxCcIAAgNIg6AAIAAgSIA6AAIAAgVIgdAAQgEAJgKAKIgSgMQAUgTAKgcIASAEIgGASIATAAIAAgYIATAAIAAAYIAvAAIAAASIgvAAIAAAVIA4AAIAAASIg4AAIAAANgAi9CSIAAhFIASAAIAABFgAodBOIAMgMQALAIAPARIgNAPQgJgOgQgOgAIph3QgSgXAAgiQAAgeAPgYQAUgcAogBQApABATAaQAQAUAAAhQAAAigSAXQgUAbgmAAQgkAAgVgYgAI8jfQgPAPAAAhQAAAbAMAQQANATAegBQAbAAANgTQAMgUAAgaQAAgcgOgQQgOgRgZAAQgZAAgOARgAs8h3QgUgVABgkQAAggAPgWQAVgcAmgBQApABAVAaQAOATAAAiQAAAigRAXQgUAbgnAAQgkAAgTgYgAsqjfQgQAQAAAgQAAAbAOAQQANATAdgBQAbAAANgTQANgVgBgZQAAgagOgSQgOgRgZAAQgZAAgOARgAM6hjIhQh9IAAB9IgTAAIAAibIAYAAIBNB8IAAh8IAUAAIAACbgAGBhjIAAibIBwAAIAAATIhcAAIAAAvIBVAAIAAASIhVAAIAAA0IBdAAIAAATgAFFhjIgRgvIg8AAIgQAvIgXAAIA7ibIAXAAIA5CbgAD+ijIAxAAIgZhFgABThjIgohAIgrBAIgXAAIA0hQIgxhLIAYAAIAnA6IAng6IAZAAIgzBLIA1BQgAibhjIAAgWIAVAAIAAAWgAjthjIhOh9IAAB9IgUAAIAAibIAYAAIBOB8IAAh8IATAAIAACbgAnuhjIAAibIBxAAIAAATIhcAAIAAAvIBWAAIAAASIhWAAIAAA0IBeAAIAAATgAqNhjIAAibIBFAAQAVAAAMAMQAMAKAAAXQABASgLANQgMAOgXAAIgwAAIAABBgAp4i2IApAAQAOgBAJgFQAIgGABgPQAAgSgNgGQgGgDgNAAIgpAAgAiViIIgGh2IAVAAIgFB2g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.9,-26,169.8,52);


(lib.t08_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("AAlAtQgMAMgNAJIgIgOQAPgJAKgLIgCgCQgJgSgEgYIgDAAQgBAWgCAMQgCAVgHAXIgMgKQAIgUACgRQADgUAAgPIAAgrIA/AAIAAAMIg0AAIAAAXIAzAAQgBAggLATIgEAHQAJAMAKAGIgIAOQgMgLgIgKgAAlAVIABgBQAIgLACgVIgVAAQAEAUAGANgAgbBCIAAg0IgOAAIgBAKQgDATgJAWIgKgJQAHgSADgRQACgOAAgfIAAgkIANAAIAAAhIAMAAIAAgmIANAAIAAAmIALAAIAAANIgkAAIgBAQIAaAAIAABAg");
	this.shape.setTransform(34.5,15.6,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595959").s().p("AAyBBIAAgHIgeAAIAAAHIgMAAIAAgxIgIAEIgEgIQAAALgEANIgMgDQAEgKADgNIAJABIgBgBQAVgLAJgGQgHgIgIgGIAJgIQAKAIAFAGQAKgKAGgOIgfAAQgJARgIAIIgGgKQAPgSAIgWIAMACIgFALIAmAAIAAAKQgKAXgNAMQgGAGgJAFIAlAAIAAA8gAAUAvIAeAAIAAgfIgeAAgAg+AxIAZgDIAAgrIgYAAIAAgJIAYAAIAAgMIgPAAIAAgGIgHAHIgEgOQAQgQAJgRIAMAAQAOALAMARIgIAJIgCgCIAAALIgPAAIAAAMIAVAAIAAAJIgVAAIAAApIAWgGIAAANQgXAGgjAFgAgvgeIAlAAQgMgOgJgIgAg7AMIAKgBQAEAKABASIgMABQgBgRgCgLg");
	this.shape_1.setTransform(11.2,15.6,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595959").s().p("AgPBCIAAguIgHAGIgIgKQAQgLAHgNIAKADIgDAEIAUAAIgFgIIghAAIAAgbIAOAAIAAgIIgTAAIAAgLIATAAIAAgKIAJAAIAAAKIANAAIAAALIgNAAIAAAIIALAAIAAAaIAHgBIAAgZIANAAIAAgIIgNAAIAAgLIANAAIAAgKIALAAIAAAKIAQAAIAAALIgQAAIAAAIIANAAIAAAbIggAAIAFAIIAcAAIAAAIIgdAAIAAAHIAbAAIAAAJIgbAAIAAAIIAaAAIAAAJIgaAAIAAAKIAiAAIAAAJIhEAAIAAAHgAgCAyIAWAAIAAgKIgWAAgAgCAfIAWAAIAAgIIgWAAgAgCAOIAWAAIAAgHIgWAAgAAigSIAPAAIAAgKIgPAAgAgHgSIAMAAIAAgKIgMAAgAgwBCIAAhAQgFAPgHAMIgFgOQAKgQAHgXIAAgBIgPAAIAAgMIAPAAIAAgcIANAAIAAAcIAOAAIAAAMIgOAAIAAAJIARAQIgIALIgJgMIAABDg");
	this.shape_2.setTransform(-11.9,15.6,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595959").s().p("AgZA2QAWgFALgGQgKgIgKgMIAMgHQAIAOAMAGIABAAQAMgKAFgLIgzAAIAAgJIgJAAIAAgZIBUAAIAAAZIgJAAIAAAGQgHASgOANQARAGARADIgIAMQgWgFgPgIQgQAJgWAGgAgKADIA7AAIAAgLIg7AAgAg7BAIgDgNIAIABQAFAAAAgEIAAgdIgOAGIgCgPQAJgBAHgEIAAggIgPAAIAAgMIAPAAIAAgZIANAAIAAAZIAOAAIAAAMIgOAAIAAAbIANgIIAAANIgNAIIAAAmQAAAHgEADQgDADgIAAgAAkgZQAGgLADgKIANADQgDALgHALgAgPgnIALgDQAEAHADALIgKADQgEgJgEgJgAALgqIAMgBIAEATIgNABgAgVg4QAsAAAggJIAGALQgdAKgxAAg");
	this.shape_3.setTransform(-35,15.6,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595959").s().p("AAUBAIgDgNIAOABQAGAAAAgEIAAgeIgyAAIAAgNIAyAAIAAgNIANAAIAAANIAOAAIAAANIgOAAIAAAhQABAHgEADQgDADgIAAgAgeBAIAAg5IgJAAQAAATgCAJQgCAOgJANIgLgIQAGgLACgJQACgLABgQIgLAAIAAgKIAhAAIAAgNIgbAAIAAgnIAMAAIAAAbIAPAAIAAgjIANAAIAAB/gAgFAdIAIgHQAKAMAHAJIgNAJgAgOgFIAPgEIgMgMIAJgFIAPAMQADgBAFgEIgSgLIAIgIQALAGAJAGQAIgGAHgKIgkAAQgHAIgIAHIgKgLQAPgLALgOIAMADIgEAHIAsAAIAAAJQgJAPgRANQgSAPgcAFg");
	this.shape_4.setTransform(97.1,-15.9,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595959").s().p("AgcA/IgEgPIAVABQAGAAAAgEIAAhrIAOAAIAABuQAAAIgEAEQgDADgJAAgAAdgfIAOgFQAMAgAKAnIgOAEQgJgmgNgggAhAAdQAQgdAHgjIAPADQgKAogPAdg");
	this.shape_5.setTransform(74,-16.1,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595959").s().p("AAYAzIgyhRIAABRIgNAAIAAhlIAQAAIAyBRIAAhRIANAAIAABlg");
	this.shape_6.setTransform(53.7,-17.2,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595959").s().p("AgkAzIAAhlIBJAAIAAAMIg8AAIAAAgIA3AAIAAAKIg3AAIAAAjIA8AAIAAAMg");
	this.shape_7.setTransform(37.5,-17.2,1.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595959").s().p("AglAzIAAhlIAsAAQAOAAAJAIQAIAHAAAOQAAAMgIAJQgHAHgQABIgeAAIAAArgAgXgDIAaAAQAKAAAFgDQAGgEAAgLQAAgKgIgFQgFgCgIAAIgaAAg");
	this.shape_8.setTransform(21.6,-17.2,1.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595959").s().p("AglAmQgMgPAAgXQAAgTAKgPQAOgTAZAAQAaAAANASQALAOAAAVQAAAVgMAPQgOASgYAAQgXAAgOgQgAgYgeQgKALAAAUQAAASAIALQAJAMARgBQATAAAIgMQAIgOAAgPQAAgSgJgMQgKgKgQgBQgPABgJAKg");
	this.shape_9.setTransform(4,-17.2,1.5,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595959").s().p("AAbAzIgbgqIgaAqIgRAAIAkgzIgigyIASAAIAYAnIAZgnIARAAIgiAyIAkAzg");
	this.shape_10.setTransform(-20.8,-17.2,1.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595959").s().p("AgaAjQgHgNAAgWQAAgPAFgMQAHgXAVAAQASAAAJAQQAHAMAAAWQAAASgGAOQgJATgTAAQgRAAgJgQgAgPgcQgEAKAAATQgBAQAEAIQAFAPALAAQAJAAAGgJQAGgJgBgWQAAgQgDgMQgFgLgMAAQgJAAgGALg");
	this.shape_11.setTransform(-43.3,-16.8,1.5,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595959").s().p("AgWArQgKgGgBgPIANAAQABALAJAEQAEACAGAAQAJAAAGgHQAFgIABgIQgBgKgGgGQgHgEgHAAQgGAAgFADQgEABgEAEIgLgBIAIg0IAzAAIAAAMIgpAAIgFAcQADgDAEgBQAGgCAFAAQAOAAAJAJQAKAHAAANQAAAPgJAKQgIALgSAAQgNAAgIgHg");
	this.shape_12.setTransform(-56.9,-16.7,1.5,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595959").s().p("AAFAyIAAhGIgWAAIAAgJQANgBAEgEQAFgDADgLIAKAAIAABig");
	this.shape_13.setTransform(-71.6,-16.9,1.5,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595959").s().p("AgaAzIAAgLIAFABIACAAQAEAAABgBIADgDIAGgOIgchKIAOAAIATA6IAUg6IAOAAIgYA+QgKAcgDAHQgFAHgKgBg");
	this.shape_14.setTransform(-83.4,-12.7,1.5,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#595959").s().p("AAkAzIAAhVIgdBVIgNAAIgdhVIAABVIgNAAIAAhlIAUAAIAcBVIAdhVIAUAAIAABlg");
	this.shape_15.setTransform(-99.4,-17.2,1.5,1.5);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.8,-25.6,213.6,51.3);


(lib.t06_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("AhABAIAAgLIANAAIAAgcIBnAAIAAAcIAOAAIAAALgAAUA1IASAAIAAgRIgSAAgAgHA1IAOAAIAAgRIgOAAgAgmA1IARAAIAAgRIgRAAgAAuARIhrADIgDgMIAagBIAIgHIgjAAIAAgLIA7AAIAAgJIgzAAIAAgKIAzAAIAAgIIALAAIAAAIIA1AAIAAAKIg1AAIAAAJIA9AAIAAALIgYAAQAMAIAMALIgLAIgAgWAHIA6AAIgGgFIAGgCIgyAAgAATghIAAgJIgRAAIAAgLIARAAIAAgKIANAAIAAAKIAhAAIAAALIghAAIAAAJgAgggjIAAgHIggAAIAAgLIAgAAIAAgKIAPAAIAAAKIAPAAIAAALIgPAAIAAAHg");
	this.shape.setTransform(23,15.6,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595959").s().p("AAyBCIAAgHIgkAAIAAAHIgNAAIAAhXIA9AAIAABXgAAOAwIAkAAIAAgOIgkAAgAAOAYIAkAAIAAgMIgkAAgAAOAAIAkAAIAAgJIgkAAgAgkBCIAAgyIgCAGQgIAOgNANIgFgOQAPgPAMgUIgZAAIAAgKIAaAAIAAgOIANAAIAAAOIAXAAIAAAKIgXAAIAAABIAXAZIgIAMIgPgWIAAAygAhBgfQASgQAGgRIANABIgFAKIAhAAIAAAMIgRAAIAFAOIgOABIgEgPIgJAAIgOARgAAbgpIgKAAQgHAJgGAGIgKgHQAOgPAHgQIAMABIgDAJIAqAAIAAANIgaAAIAFAOIgOACg");
	this.shape_1.setTransform(-0.1,15.8,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595959").s().p("AAvBCIAAgKIg1AAIAAAKIgNAAIAAhsIAgAAIAAgXIANAAIAAAXIAjAAIAABsgAAaAsIAVAAIAAgiIgVAAgAgGAsIATAAIAAgiIgTAAgAAaAAIAVAAIAAgeIgVAAgAgGAAIATAAIAAgeIgTAAgAg7A1QALgQAMgfIAKAHQgJAdgOAXgAg8gRIAHgLQAMAGAMAJIgIANQgKgKgNgHgAg1gzIAHgLQAMAGAMAKIgJANQgJgKgNgIg");
	this.shape_2.setTransform(-23.8,15.8,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595959").s().p("AgtBCIAAhCQgGAPgJAOIgFgOQANgTAHgWIgTAAIAAgLIATAAIAAgcIANAAIAAAcIAPAAIAAALIgPAAIAAAIIAPATIgHALIgIgOIAABEgAABBBIgBgNIAOABQAEAAAAgEIAAgdIgiAAIAAgMIAvAAIAAAJIAFAJQAJgHAIgMIAJAJQgIANgLAGQAJAJAOAIIgJAKQgMgIgIgJIgGgHIAAANQAAAHgDADQgEAEgGAAgAgbA0QAPgEAGgGQADgCADgFIgWAAIAAgJIAiAAIAAAIQgFAKgHAGQgGAGgOAGgAgFACIAFgIQAYACAYAEIgEAJQgcgFgVgCgAgTgIIAAgKIAiAAIAAgHIgdAAIAAgJIAdAAIAAgGIghAAIAAgKIASAAIgHgJIAKgFQAGAIADAGIATAAIAHgPIAMAEIgGALIATAAIAAAKIgkAAIAAAGIAgAAIAAAJIggAAIAAAHIAlAAIAAAKg");
	this.shape_3.setTransform(68.6,-15.8,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595959").s().p("AAyA/IAAgFIhiAAIAAAFIgNAAIAAh9IB6AAIAAB9gAgwAwIBiAAIAAhkIhiAAgAgkAqIAAgtIBMAAIAAAtgAgZAhIA0AAIAAgdIg0AAgAgRAcIAAgTIAjAAIAAATgAgHAWIAQAAIAAgHIgQAAgAgugJIAAgIIAqAAIAAgHIggAAIAAgWIBKAAIAAAWIggAAIAAAHIApAAIAAAIgAgZgfIAzAAIAAgHIgzAAg");
	this.shape_4.setTransform(45.2,-15.6,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595959").s().p("AATBAIgCgNIAOABQAGAAAAgEIAAgeIgyAAIAAgNIAyAAIAAgNIAOAAIAAANIANAAIAAANIgNAAIAAAhQgBAHgDADQgDADgJAAgAgdBAIAAg5IgKAAQgBATgCAJQgCAOgIANIgLgIQAHgLACgJQACgLAAgQIgLAAIAAgKIAiAAIAAgNIgcAAIAAgnIAMAAIAAAbIAQAAIAAgjIAMAAIAAB/gAgGAdIAJgHQALAMAFAJIgMAJQgGgLgHgMgAgPgFIAPgEIgKgMIAIgFIAOAMIAJgFIgSgLIAHgIQALAGAKAGQAIgGAGgKIgkAAQgJAJgGAGIgJgLQAPgLAKgOIANADIgFAHIAsAAIAAAJQgJAQgQAMQgSAPgbAFg");
	this.shape_5.setTransform(22.1,-15.8,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595959").s().p("AgdA/IgDgPIAVABQAGAAABgEIAAhrIANAAIAABuQAAAIgEAEQgEADgHAAgAAdgfIANgFQAPAkAJAjIgQAEQgJgngMgfgAhBAdQARgeAHgiIAOADQgIAogQAdg");
	this.shape_6.setTransform(-1,-15.9,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595959").s().p("AAYAzIgyhRIAABRIgNAAIAAhlIARAAIAxBRIAAhRIANAAIAABlg");
	this.shape_7.setTransform(-21.3,-17,1.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595959").s().p("AglAzIAAhlIBKAAIAAAMIg7AAIAAAgIA2AAIAAAKIg2AAIAAAjIA8AAIAAAMg");
	this.shape_8.setTransform(-37.5,-17,1.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595959").s().p("AglAzIAAhlIAsAAQAOAAAIAIQAJAHAAAOQAAANgIAIQgHAHgQAAIgeAAIAAAsgAgXgCIAaAAQAKgBAFgDQAGgEAAgLQAAgLgJgEQgEgCgIAAIgaAAg");
	this.shape_9.setTransform(-53.4,-17,1.5,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595959").s().p("AgkAnQgNgRAAgWQAAgTALgPQANgTAZAAQAaAAAOARQAKAOAAAVQAAAXgMAOQgNASgZAAQgXAAgNgPgAgYgdQgKALAAATQAAARAJAMQAIALASAAQASABAIgNQAJgOAAgPQAAgSgKgLQgJgMgRABQgOgBgKAMg");
	this.shape_10.setTransform(-71.1,-17,1.5,1.5);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.6,-25.7,157.2,51.5);


(lib.t05_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("AgNA2QASgKANgMQgFgGgFgMQgIgRAAgXIgJAAIAAgJQgPAbgQAQQANgBAJgCQgBgGgDgIIALgDQAEAMAFASIgLADIgCgGQgQAEgdACIgEgMIAKAAQAJgJALgRIgdAEIgCgMIAJAAQAKgQAIgXIAMAEQgHASgKAQIAPgCIAJgRIANAFIgBABIBHAAIAAANIgKAAQgBAggPAWIgDAEIABACQAKAIAUALIgIANQgUgLgLgMIgBgBQgMAMgUAMgAAVALIAFALQANgSACgeIgfAAQAEAYAHANgAhBA6QAFgOACgTIALACQgCAWgDANgAgpAbIALgCQADAMABARIgMABQgBgTgCgJgAgWAZIAKgCIAIAWIgLAEQgEgPgDgJgAAGg5IAJgIQAPAJAIAHIgKAJQgHgHgPgKg");
	this.shape.setTransform(34.9,16.2,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595959").s().p("AhBA1QAGgPACgQIABhUIB5AAIAAAMIhsAAIAAArQAAARgCAQQgCASgHATgAgqA8IAAgKIAwAAIAAgJIgnAAIAAgKIAnAAIAAgHIAMAAIAAAHIAoAAIAAAKIgoAAIAAAJIAwAAIAAAKgAglAaIAAgnIAxAAIAAAeQAAAEgDABQgCABgGAAIgKAAIgBgGIAJABQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgCIgaAAIAAANgAgaAIIAaAAIAAgFIgaAAgAgagBIAaAAIAAgFIgaAAgAArACIgDgEIgBADQgGANgJAJIgKgIQAKgIAEgJQACgGABgIIgQAAIAAgMIAQAAIAAgUIAMAAIAAAUIAKAAIgGgMIAHgEIAJAMIgGAEIAGAAIAAAMIgSAAQAEAKADAFQAFAGAIAJIgIAKQgJgLgFgLgAglgRIAAgeIAxAAIAAAegAgagYIAaAAIAAgFIgaAAgAgagjIAaAAIAAgFIgaAAg");
	this.shape_1.setTransform(11.7,16.4,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595959").s().p("AgsBBIAAhBQgHAQgIANIgGgOQAMgPAIgZIgRAAIAAgMIASAAIAAgbIANAAIAAAbIAOAAIAAAMIgOAAIAAAFIAPAUIgHALIgIgPIAABFgAAZBAIgCgNIAOABQAFAAAAgEIAAgwIg6AAIAAgKIBSAAIAAAKIgLAAIAAAzQAAAIgDADQgDACgIAAgAgMAtIAAglIArAAIAAAlgAAAAiIASAAIAAgPIgSAAgAgRgXQASgEAIgHIAGgHIgbAAIAAgMIAcAAIAAgLIAOAAIAAALIAeAAIAAAMIggAAIgCADQAVAHAOAIIgHALQgPgLgRgFIgDADQgJAIgUAGg");
	this.shape_2.setTransform(-11.5,16.1,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595959").s().p("AhBA3QAGgNACgPQACgNAAgOIAAgyIA3AAIgIgLIAOgDIAIAOIA0AAIAAANIhsAAIAAAlQAAANgCASQgDASgHAQgAgqBAIAAgNIAuAAIAAgPIgnAAIAAgMIAnAAIAAg7IANAAIAAA7IArAAIAAAMIgrAAIAAAPIAwAAIAAANgAASAJQAIgJAEgIQADgIADgPIAMACIgEAQIAVATIgHALIgRgTQgEAJgKANgAgoAHQAJgIADgHQAEgJACgNIANACIgEANQAKAKAFAIIgGAMQgGgLgHgGQgEAIgKAMg");
	this.shape_3.setTransform(-34.6,16,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595959").s().p("AATBAIgCgOIAPACQAFAAAAgEIAAgeIgyAAIAAgNIAyAAIAAgNIAOAAIAAANIANAAIAAANIgNAAIAAAgQgBAIgDADQgDADgJAAgAgdBAIAAg4IgKAAQgBASgCAJQgCAOgIAOIgLgJQAHgLACgJQACgLAAgPIgLAAIAAgLIAiAAIAAgNIgcAAIAAgnIAMAAIAAAaIAQAAIAAgiIAMAAIAAB/gAgGAdIAJgHIAQAVIgMAKQgHgNgGgLgAgPgFIAPgFIgKgLIAIgFIAOAMIAJgFIgSgMIAIgHQAJAEALAJQAIgIAGgJIgkAAQgJAKgGAFIgJgMQAQgLAJgNIANADIgFAHIAsAAIAAAJQgJAQgQAMQgUAQgZAEg");
	this.shape_4.setTransform(45.5,-15.4,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595959").s().p("AgdA/IgDgQIAVABQAGAAABgDIAAhrIANAAIAABtQAAAJgEADQgEAEgHAAgAAeggIAMgEQAOAiAKAlIgQAEQgHglgNgigAhBAcQARgcAHgjIAOADQgIAngQAeg");
	this.shape_5.setTransform(22.4,-15.5,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595959").s().p("AAYAzIgyhRIAABRIgNAAIAAhlIARAAIAxBRIAAhRIANAAIAABlg");
	this.shape_6.setTransform(2.1,-16.6,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595959").s().p("AglAzIAAhlIBKAAIAAANIg7AAIAAAfIA2AAIAAAKIg2AAIAAAjIA8AAIAAAMg");
	this.shape_7.setTransform(-14.1,-16.6,1.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595959").s().p("AglAzIAAhlIAsAAQANAAAJAIQAJAHAAAOQAAANgIAIQgHAHgQAAIgeAAIAAAsgAgXgCIAaAAQAJAAAGgEQAGgFAAgJQAAgMgJgEQgFgCgHAAIgaAAg");
	this.shape_8.setTransform(-30,-16.6,1.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595959").s().p("AgkAmQgNgQAAgWQAAgTALgPQANgTAZAAQAbAAANASQAKANAAAWQAAAUgMAQQgOASgYAAQgXAAgNgQgAgYgeQgLALAAAUQAAARAJALQAJAMARAAQATAAAIgNQAIgNAAgPQAAgTgJgLQgJgKgRgBQgPABgJAKg");
	this.shape_9.setTransform(-47.6,-16.6,1.5,1.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.2,-25,110.4,51.3);


(lib.t04_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("AAYBCIAAhMIgZAAIAAgOIAZAAIAAgoIAPAAIAAAoIAbAAIAAAOIgbAAIAABMgAg7BBIAAg0IAxAAIAAAxIgMAAIAAgIIgZAAIAAALgAgvArIAZAAIAAgSIgZAAgAg7ADIAAgJIAzAAIAAAJgAg7gPIAAgMIAzAAIAAAMgAhBgkIAAgMIAZAAQgFgKgEgFIAOgBIAIAQIAYAAIAAAMg");
	this.shape.setTransform(46.9,16.8,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#595959").s().p("AgNA1QAQgEALgJQgMgLgGgQIAKgHQAHAPALAKIABAAQAKgMAEgPIgvAAIAAgKIA9AAIAAAHQgHAXgLAPQAMAIATAFIgIAMQgVgHgMgIQgMAJgSAIgAg8BBIAAg0IAsAAIAAApIgfAAIAAALgAgvArIASAAIAAgSIgSAAgAg7ADIAAgJIArAAIAAAJgAgNgSQAJgLACgEQACgHAAgVIAvAAIAAAiQAAAEAFABIALAAIAAAMIgNAAQgJAAgEgDQgEgDAAgJIAAgXIgWAAQAAANgDAHQgDAIgIALgAg7gQIAAgLIArAAIAAALgAhAgkIAAgMIAVAAIgHgPIAOgBIAGAQIAUAAIAAAMg");
	this.shape_1.setTransform(23.6,16.8,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#595959").s().p("AgRBCIAAgxQgHAQgLAOIgGgRQAOgQAJgUIgTAAIAAgLIAUAAIAAgTIAMAAIAAATIANAAIAAALIgNAAIAAAGQAIAHAJALIAAgwIAxAAIAABeIgMAAIAAgKIgZAAIAAAKIgMAAIAAgtIgHALIgKgQIAAA0gAAYAsIAZAAIAAgQIgZAAgAAYARIAZAAIAAgPIgZAAgAAYgGIAZAAIAAgOIgZAAgAhBA2QAGgLADgSIACgcIAAgxIA2AAIgFgLIANgCIAGANIA0AAIAAALIhrAAIAAAmQAAARgCAPQgDASgHASg");
	this.shape_2.setTransform(0.3,16.8,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595959").s().p("AgFBCIAAgTIg7AAIAAgNIA7AAIAAgKIguAAIAAg2IAuAAIAAgKIg5AAIAAgNIA5AAIAAgLIALAAIAAALIA6AAIAAANIg6AAIAAAKIAvAAIAAA2IgvAAIAAAKIA7AAIAAANIg7AAIAAATgAAGAMIAjAAIAAgMIgjAAgAgnAMIAiAAIAAgMIgiAAgAAGgJIAjAAIAAgKIgjAAgAgngJIAiAAIAAgKIgiAAg");
	this.shape_3.setTransform(-22.8,16.8,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595959").s().p("AAVAzQgQAIgbAHIgEgNQAXgDAOgHQgJgHgHgLQgFAGgIAFIgKgJQAPgKAFgGIAIgLIgUABIgEgLIARAAIAXgRIggACIgDgLIAJAAQAKgMALgQIAMAEQgMARgIAGIAbgCIAMgNIAMAHQgOANgdAWQAVgBAOgCIgGgLIAJgFQANAUAEAJIgKAGIgFgJIgmADIgGAJIAvAAIAAALQgKAPgLAIQAPAHASAEIgIAMQgXgHgOgIgAAWAkQAJgFAIgKIgiAAQAHAIAKAHgAgyBAIAAg1IgLAKIgEgOIAQgOQAJgJAFgLIALAFQgHAOgGAHIAABBgAhAgmQAJgEAJgHIANgPIALAGQgIAMgHAFQgHAIgNAGg");
	this.shape_4.setTransform(-46,16.8,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595959").s().p("AgsBCIAAhCQgHAPgJAOIgFgOQALgPAJgZIgSAAIAAgMIATAAIAAgcIANAAIAAAcIAOAAIAAAMIgOAAIAAAIQAIAKAHAIIgHALIgIgOIAABEgAABBBIgBgNIAOABQAEAAAAgEIAAgdIghAAIAAgMIAuAAIAAAJIAGAJQAIgGAIgNIAKAJQgJANgKAGQAIAJAOAIIgIAKQgMgIgJgJIgGgHIAAANQAAAHgDADQgDAEgHAAgAgbA0QAOgFAHgFQAEgDACgDIgVAAIAAgKIAiAAIAAAIQgGAKgHAGQgJAJgLADgAgFACIAFgIQAbACAVAEIgEAJQgdgFgUgCgAgTgIIAAgKIAiAAIAAgHIgcAAIAAgJIAcAAIAAgGIggAAIAAgKIARAAIgHgJIAKgFQAGAHAEAHIASAAIAIgPIAMAEIgGALIASAAIAAAKIgjAAIAAAGIAgAAIAAAJIggAAIAAAHIAkAAIAAAKg");
	this.shape_5.setTransform(69,-14.7,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595959").s().p("AAxA/IAAgEIhhAAIAAAEIgNAAIAAh9IB6AAIAAB9gAgwAwIBhAAIAAhkIhhAAgAglAqIAAgtIBMAAIAAAtgAgZAhIA0AAIAAgdIg0AAgAgRAcIAAgTIAjAAIAAATgAgHAWIAQAAIAAgHIgQAAgAgugIIAAgJIApAAIAAgHIgfAAIAAgWIBKAAIAAAWIggAAIAAAHIApAAIAAAJgAgZgfIAzAAIAAgHIgzAAg");
	this.shape_6.setTransform(45.7,-14.6,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595959").s().p("AAUBAIgDgNIAOABQAGAAAAgEIAAgeIgyAAIAAgNIAyAAIAAgNIAOAAIAAANIANAAIAAANIgNAAIAAAhQAAAIgEACQgDADgJAAgAgdBAIAAg5IgKAAIgCAcQgDAPgIAMIgLgIQAHgKACgKQACgLAAgQIgLAAIAAgJIAiAAIAAgOIgcAAIAAgnIAMAAIAAAbIAQAAIAAgjIAMAAIAAB/gAgGAdIAJgHQALAMAGAJIgNAJIgNgXgAgOgFIAPgEIgLgMIAIgFIAOAMIAJgEQgHgGgLgGIAIgIQALAGAIAGQAJgGAHgKIglAAQgIAJgHAGIgJgLQARgMAIgNIANADIgFAHIAsAAIAAAJQgJAQgQAMQgUAQgaAEg");
	this.shape_7.setTransform(22.6,-14.7,1.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595959").s().p("AgdA/IgDgPIAVABQAGAAAAgEIAAhrIAOAAIAABuQAAAIgEAEQgEADgHAAgAAdgfIANgFQAOAjAKAkIgQAEQgHghgOglgAhBAdQASgeAGghIAOACQgIAogQAdg");
	this.shape_8.setTransform(-0.5,-14.9,1.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595959").s().p("AAYAzIgyhRIAABRIgNAAIAAhlIARAAIAwBSIAAhSIAOAAIAABlg");
	this.shape_9.setTransform(-20.8,-15.9,1.5,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595959").s().p("AglAzIAAhlIBKAAIAAAMIg8AAIAAAgIA3AAIAAAKIg3AAIAAAjIA9AAIAAAMg");
	this.shape_10.setTransform(-37,-15.9,1.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595959").s().p("AglAzIAAhlIAsAAQAOAAAIAIQAJAIAAANQAAANgIAIQgHAHgQAAIgeAAIAAAsgAgXgCIAaAAQAJgBAGgDQAGgEAAgLQAAgLgJgEQgEgCgIAAIgaAAg");
	this.shape_11.setTransform(-52.9,-15.9,1.5,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595959").s().p("AglAnQgMgPAAgYQAAgTALgOQANgUAZAAQAaAAAOASQAKAOAAAVQAAAUgMAQQgOASgYAAQgXAAgOgPgAgYgdQgKALAAATQAAAQAIANQAJALASAAQASABAIgNQAJgOAAgPQAAgSgKgLQgKgMgQABQgNgBgLAMg");
	this.shape_12.setTransform(-70.6,-15.9,1.5,1.5);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.1,-24.6,157.1,51.4);


(lib.t03_t = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.7,-26.1,251.5,52.4);


(lib.t02_t = function() {
	this.initialize();

	// 分離模式
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("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");
	this.shape.setTransform(0.5,0.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.4,-25,169.8,50.9);


(lib.t01_t = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("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");
	this.shape.setTransform(78.5,25.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,156.9,51.6);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bike02pngcopy();
	this.instance.setTransform(0,-232);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-232,298,448);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._360_bike01();
	this.instance.setTransform(-335,-243.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-335,-243.7,335,472);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_pro02pngcopy2();
	this.instance.setTransform(-287.5,-214);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-287.5,-214,491,428);


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


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_v();
	this.instance.setTransform(-39.5,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-40,79,80);


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


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.game_bg, null, new cjs.Matrix2D(1,0,0,1,-371.5,-896.6)).s().p("Eg6CAGxIAAthMB0FAAAIAANhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-371.5,-43.3,743,86.7);


(lib.R_Label = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_name02pngcopy();
	this.instance.setTransform(-60.5,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-24,121,48);


(lib.product_bg09_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,869,64);


(lib.product_bg08_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_bg08();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,606);


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
	this.instance = new lib.gift_copyrightpngcopy();
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
	this.shape.graphics.f("#FFFFFF").s().p("AA6BvIgIhvIAsAAIAIBYIAJAAIgHAXgAgbBvIAAhvIApAAIAABYIAnAAIgKAXgAhuBvIAAhvIArAAIAABYIAjAAIgHAXgAAZBOIgHgiIAZAAIAHAigAg4BOIgFgiIAYAAIAFAigAAXAjIgGgfIAZAAIAHAfgAg4AjIgGgfIAZAAIAFAfgAhrgGIAAhgIA0AAIADgIIA0AAIgKAgIgxAAIAAAMIAxAAIAAAXIgxAAIAAANIBxAAIAAgNIgxAAIAAgXIAxAAIAAgMIg1AAIAAgYIBkAAIAABgg");
	this.shape.setTransform(164.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBvIgKgYIAiAAIAAgKIg4AAIAAAiIgsAAIAAhsIgJAAIAAgrIAJAAIAAhEICQAAIAABEIAKAAIAAArIgJAAIAABsgAADA4IA4AAIAAgKIg4AAgAADAZIA4AAIAAgLIg4AAgAgGgGIBJAAIAAgLIhJAAgAAugoIANAAIAAgOIgNAAgAACgoIALAAIAAgiIAuAAIAAgKIg5AAgAhuBvIAMhgIArAAIgKBggAhgAIIgQg2IAtAAIAPA2gAhgg3IgQg3IAtAAIAPA3g");
	this.shape_1.setTransform(138.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtBZIAtgCIAAgLIgmAAIAAgWIAmAAIAAgJIgqAAIAAhTIAqAAIAAgIIguAAIAAgYIAuAAIAAgIIgqAAIAAgXIBNAAIAEgJIAtAAIgMAgIgfAAIAAAIIAqAAIAAAYIgqAAIAAAIIAnAAIAABTIgnAAIAAAJIAkAAIAAAWIgkAAIAAAIIAmgBIAAARIAOgoIAAhuIgHAAIAAgXIAHAAIAAglIAlAAIAAAlIAtAAIAAC2IgpAAIgLgTIgHAUIgpAAIACgGIh6AHgABCBHIgFAPIAOAAIAAiIIgJAAgAgXAYIAMAAIAAgLIgMAAgAhLAYIALAAIAAgLIgLAAgAgXgGIAMAAIAAgLIgMAAgAhLgGIALAAIAAgLIgLAAg");
	this.shape_2.setTransform(112.9,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBwIgIgSIgMAAIgFhqIAXAAIACAwIATgnIgOAAIgHgVIgbAAIAACIIgpAAIAAiIIgfAAIAAgXIAfAAIAAgbIgeAAIAAgYIA1AAIAGgNIAtAAIgMAlIgVAAIAAAbIAdAAIAAAUIAcAAIgTgZIgTAAIAdg7IArAAIgFANIA+AAIAAARIgqBOIgMAAIgGAKIA9AAIAAAWIgvBTgAgFBYIAiAAIgXgiIgNAAgAAgAsIAMAAIAHALIANgZIgZAAgAAdg+IAMAAIAIAMIAMgWIgbAAgAhuBeIAHhqIAVAAIgHBqg");
	this.shape_3.setTransform(87.5,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhWBvIAAg+IgaAAIA1hgIgxAAIAAgaIA+AAIATglIA1AAIgTAlIBqAAIAAAaIh1AAIgYAtICDAAIAABxgAgkBWIBZAAIAAhBIhZAAg");
	this.shape_4.setTransform(62.1,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhnBvIAAgZIBYAAIAAhGIgbAAIgRAmIg3AAIAxhrIgtAAIAAgaIA5AAIANgfIA0AAIgMAfIBzAAIAAAaIh+AAIgVAvICHAAIAAAWIhGAAIAABGIBPAAIAAAZg");
	this.shape_5.setTransform(36.7,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyBwIgJgWIATAAIAAgLIgbAAIAAAhIgrAAIAAhwIB0AAIAABwgAAhA7IAbAAIAAgIIgbAAgAAhAdIAbAAIAAgIIgbAAgAhqBwIAAheIBTAAIAABegAhFBZIAJAAIAAgwIgJAAgAhrAFIAAgXIBUAAIAAAXgAgTgLIAAgVIAqAAIAAgLIghAAIAAgVIAhAAIAAgLIgnAAIAAgWIAnAAIAAgOIAuAAIAAAOIAnAAIAAAWIgnAAIAAALIAiAAIAAAVIgiAAIAAALIAsAAIAAAVgAhrgdIAAgXIBUAAIAAAXgAhwhBIAAgYIAaAAIgFgVIAwAAIAFAVIATAAIAAAYg");
	this.shape_6.setTransform(11.4,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:6.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2,p:{y:11.4}},{t:this.shape_1,p:{y:11.4}},{t:this.shape,p:{y:11.4}}]}).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:6.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2,p:{y:11.4}},{t:this.shape_1,p:{y:11.4}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:6.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2,p:{y:11.4}},{t:this.shape_1,p:{y:11.4}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:6.3}},{t:this.shape_2,p:{y:11.4}},{t:this.shape_1,p:{y:11.4}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2,p:{y:6.4}},{t:this.shape_1,p:{y:11.4}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2,p:{y:11.4}},{t:this.shape_1,p:{y:6.4}},{t:this.shape,p:{y:11.4}}]},6).to({state:[{t:this.shape_6,p:{y:11.2}},{t:this.shape_5,p:{y:11.3}},{t:this.shape_4,p:{y:11.3}},{t:this.shape_3,p:{y:11.3}},{t:this.shape_2,p:{y:11.4}},{t:this.shape_1,p:{y:11.4}},{t:this.shape,p:{y:6.4}}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,175.4,27.6);


(lib.L_Label = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_name01pngcopy();
	this.instance.setTransform(-64,-23);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-23,128,46);


(lib.IntroText = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.game_tit03_v3();
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
	this.instance.setTransform(-233.4,-337.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-233.4,-337.4,470,674);


(lib.IndexLeft = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_peo01();
	this.instance.setTransform(-172,-345);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172,-345,344,690);


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


(lib.FeatureBtnBack = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.product_back();
	this.instance.setTransform(-59,-59);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


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


(lib.ball03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_ball02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,23);


(lib.ball02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_ball03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,108);


(lib.ball01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.index_ball01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,147);


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


(lib.wfesgcopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ston_1();
	this.instance.setTransform(1119.6,769.1,1,1,0,0,180,226.7,63.6);
	this.instance.alpha = 0.512;

	this.instance_1 = new lib.ston_1();
	this.instance_1.setTransform(1195.6,564.1,1,1,0,0,0,226.7,63.6);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.ston_1();
	this.instance_2.setTransform(969.2,329.5,1,1,0,0,180,226.7,63.6);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.ston_1();
	this.instance_3.setTransform(948,122.7,1,1,0,0,0,226.7,63.6);
	this.instance_3.alpha = 0.512;

	this.instance_4 = new lib.ston_1();
	this.instance_4.setTransform(1829.9,769.1,1,1,0,0,180,226.7,63.6);
	this.instance_4.alpha = 0.512;

	this.instance_5 = new lib.ston_1();
	this.instance_5.setTransform(1905.9,564.1,1,1,0,0,0,226.7,63.6);
	this.instance_5.alpha = 0.512;

	this.instance_6 = new lib.ston_1();
	this.instance_6.setTransform(1679.5,329.5,1,1,0,0,180,226.7,63.6);
	this.instance_6.alpha = 0.512;

	this.instance_7 = new lib.ston_1();
	this.instance_7.setTransform(1658.3,122.7,1,1,0,0,0,226.7,63.6);
	this.instance_7.alpha = 0.512;

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(512,1.2,1754,851.4);


(lib.wfesg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ston_1();
	this.instance.setTransform(886.1,769.1,1,1,0,0,180,226.7,63.6);
	this.instance.alpha = 0.512;

	this.instance_1 = new lib.ston_1();
	this.instance_1.setTransform(1077.2,564.1,1,1,0,0,0,226.7,63.6);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.ston_1();
	this.instance_2.setTransform(979.4,327.7,1,1,0,0,180,226.7,63.6);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.ston_1();
	this.instance_3.setTransform(1260.5,122.7,1,1,0,0,0,226.7,63.6);
	this.instance_3.alpha = 0.512;

	this.instance_4 = new lib.ston_1();
	this.instance_4.setTransform(178.4,769.1,1,1,0,0,180,226.7,63.6);
	this.instance_4.alpha = 0.512;

	this.instance_5 = new lib.ston_1();
	this.instance_5.setTransform(369.5,564.1,1,1,0,0,0,226.7,63.6);
	this.instance_5.alpha = 0.512;

	this.instance_6 = new lib.ston_1();
	this.instance_6.setTransform(271.7,327.7,1,1,0,0,180,226.7,63.6);
	this.instance_6.alpha = 0.512;

	this.instance_7 = new lib.ston_1();
	this.instance_7.setTransform(552.8,122.7,1,1,0,0,0,226.7,63.6);
	this.instance_7.alpha = 0.512;

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.6,1.2,1662.1,851.4);


(lib.WatchRightBike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Normal:0,Focused:15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer 1
	this.instance = new lib.Symbol17();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},15,cjs.Ease.get(1)).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-232,298,448);


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


(lib.WatchLeftBike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Normal":0,"Focused":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer 1
	this.instance = new lib.Symbol16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},15,cjs.Ease.get(1)).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-243.7,335,472);


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


(lib.t10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AjxAAIHjAA");
	this.shape_45.setTransform(-200.6,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AmfAAIM/AA");
	this.shape_46.setTransform(-183.2,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("Ao2AAIRtAA");
	this.shape_47.setTransform(-168.1,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("Aq2AAIVtAA");
	this.shape_48.setTransform(-155.3,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AseAAIY9AA");
	this.shape_49.setTransform(-144.9,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AtvAAIbfAA");
	this.shape_50.setTransform(-136.8,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AupAAIdTAA");
	this.shape_51.setTransform(-131,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AvMAAIeZAA");
	this.shape_52.setTransform(-127.5,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("AvYAAIexAA");
	this.shape_53.setTransform(-126.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(76.8,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-54}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-27.5}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:71.9},0).wait(1).to({x:63.8},0).wait(1).to({x:52.3},0).wait(1).to({x:37.6},0).wait(1).to({x:19.6},0).wait(1).to({x:-1.7},0).wait(1).to({x:-26.2},0).to({_off:true},1).wait(1).to({_off:false,x:-49.8},0).wait(1).to({x:-45.9},0).wait(1).to({x:-42.4},0).wait(1).to({x:-39.3},0).wait(1).to({x:-36.5},0).wait(1).to({x:-34.1},0).wait(1).to({x:-32.1},0).wait(1).to({x:-30.5},0).wait(1).to({x:-29.2},0).wait(1).to({x:-28.3},0).wait(1).to({x:-27.7},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(80.2,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:215.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:189.4}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:85.3},0).wait(1).to({x:93.7},0).wait(1).to({x:105.6},0).wait(1).to({x:120.9},0).wait(1).to({x:139.6},0).wait(1).to({x:161.6},0).wait(1).to({x:187.1},0).to({_off:true},1).wait(1).to({_off:false,x:211.7},0).wait(1).to({x:207.8},0).wait(1).to({x:204.3},0).wait(1).to({x:201.2},0).wait(1).to({x:198.4},0).wait(1).to({x:196.1},0).wait(1).to({x:194},0).wait(1).to({x:192.4},0).wait(1).to({x:191.1},0).wait(1).to({x:190.2},0).wait(1).to({x:189.6},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t10_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AjcAAIG5AA");
	this.shape_45.setTransform(-202.7,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("Al4AAILxAA");
	this.shape_46.setTransform(-187.1,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("An/AAIP/AA");
	this.shape_47.setTransform(-173.6,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("ApxAAITjAA");
	this.shape_48.setTransform(-162.2,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("ArPAAIWfAA");
	this.shape_49.setTransform(-152.8,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AsXAAIYvAA");
	this.shape_50.setTransform(-145.6,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AtLAAIaXAA");
	this.shape_51.setTransform(-140.4,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AtqAAIbVAA");
	this.shape_52.setTransform(-137.3,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("At1AAIbrAA");
	this.shape_53.setTransform(-136.2,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(76.7,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-64}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-47.5}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:71.4},0).wait(1).to({x:62.6},0).wait(1).to({x:50.3},0).wait(1).to({x:34.5},0).wait(1).to({x:15.1},0).wait(1).to({x:-7.7},0).wait(1).to({x:-34.1},0).to({_off:true},1).wait(1).to({_off:false,x:-61.4},0).wait(1).to({x:-59},0).wait(1).to({x:-56.8},0).wait(1).to({x:-54.9},0).wait(1).to({x:-53.1},0).wait(1).to({x:-51.6},0).wait(1).to({x:-50.4},0).wait(1).to({x:-49.4},0).wait(1).to({x:-48.6},0).wait(1).to({x:-48},0).wait(1).to({x:-47.6},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(80.3,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:225.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:209.4}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:85.8},0).wait(1).to({x:94.9},0).wait(1).to({x:107.6},0).wait(1).to({x:124},0).wait(1).to({x:144},0).wait(1).to({x:167.7},0).wait(1).to({x:195},0).to({_off:true},1).wait(1).to({_off:false,x:223.3},0).wait(1).to({x:220.9},0).wait(1).to({x:218.7},0).wait(1).to({x:216.8},0).wait(1).to({x:215},0).wait(1).to({x:213.6},0).wait(1).to({x:212.3},0).wait(1).to({x:211.3},0).wait(1).to({x:210.5},0).wait(1).to({x:209.9},0).wait(1).to({x:209.5},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t09_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AjRAAIGjAA");
	this.shape_45.setTransform(-203.7,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AlkAAILJAA");
	this.shape_46.setTransform(-189.1,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("AnjAAIPGAA");
	this.shape_47.setTransform(-176.4,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("ApOAAISdAA");
	this.shape_48.setTransform(-165.7,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AqmAAIVMAA");
	this.shape_49.setTransform(-156.9,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("ArqAAIXVAA");
	this.shape_50.setTransform(-150.1,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AsbAAIY3AA");
	this.shape_51.setTransform(-145.2,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("As4AAIZxAA");
	this.shape_52.setTransform(-142.3,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("AtCAAIaFAA");
	this.shape_53.setTransform(-141.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(76.6,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-74}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-57.5}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:70.9},0).wait(1).to({x:61.5},0).wait(1).to({x:48.4},0).wait(1).to({x:31.4},0).wait(1).to({x:10.7},0).wait(1).to({x:-13.8},0).wait(1).to({x:-42},0).to({_off:true},1).wait(1).to({_off:false,x:-71.4},0).wait(1).to({x:-69},0).wait(1).to({x:-66.8},0).wait(1).to({x:-64.9},0).wait(1).to({x:-63.1},0).wait(1).to({x:-61.6},0).wait(1).to({x:-60.4},0).wait(1).to({x:-59.4},0).wait(1).to({x:-58.6},0).wait(1).to({x:-58},0).wait(1).to({x:-57.6},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(80.4,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:235.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:219.4}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:86.3},0).wait(1).to({x:96},0).wait(1).to({x:109.6},0).wait(1).to({x:127.1},0).wait(1).to({x:148.5},0).wait(1).to({x:173.7},0).wait(1).to({x:202.9},0).to({_off:true},1).wait(1).to({_off:false,x:233.3},0).wait(1).to({x:230.9},0).wait(1).to({x:228.7},0).wait(1).to({x:226.8},0).wait(1).to({x:225},0).wait(1).to({x:223.6},0).wait(1).to({x:222.3},0).wait(1).to({x:221.3},0).wait(1).to({x:220.5},0).wait(1).to({x:219.9},0).wait(1).to({x:219.5},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t08_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AjxAAIHjAA");
	this.shape_45.setTransform(-200.6,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AmfAAIM/AA");
	this.shape_46.setTransform(-183.2,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("Ao2AAIRtAA");
	this.shape_47.setTransform(-168.1,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("Aq2AAIVtAA");
	this.shape_48.setTransform(-155.3,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AseAAIY9AA");
	this.shape_49.setTransform(-144.9,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AtvAAIbfAA");
	this.shape_50.setTransform(-136.8,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AupAAIdTAA");
	this.shape_51.setTransform(-131,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AvMAAIeZAA");
	this.shape_52.setTransform(-127.5,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("AvYAAIexAA");
	this.shape_53.setTransform(-126.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(77.1,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-34}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-27.5}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:72.9},0).wait(1).to({x:66},0).wait(1).to({x:56.3},0).wait(1).to({x:43.8},0).wait(1).to({x:28.5},0).wait(1).to({x:10.4},0).wait(1).to({x:-10.4},0).to({_off:true},1).wait(1).to({_off:false,x:-33},0).wait(1).to({x:-32},0).wait(1).to({x:-31.2},0).wait(1).to({x:-30.4},0).wait(1).to({x:-29.7},0).wait(1).to({x:-29.1},0).wait(1).to({x:-28.7},0).wait(1).to({x:-28.2},0).wait(1).to({x:-27.9},0).wait(1).to({x:-27.7},0).wait(1).to({x:-27.6},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(79.9,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:195.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:189.4}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:84.3},0).wait(1).to({x:91.5},0).wait(1).to({x:101.7},0).wait(1).to({x:114.7},0).wait(1).to({x:130.7},0).wait(1).to({x:149.5},0).wait(1).to({x:171.3},0).to({_off:true},1).wait(1).to({_off:false,x:194.9},0).wait(1).to({x:193.9},0).wait(1).to({x:193.1},0).wait(1).to({x:192.3},0).wait(1).to({x:191.6},0).wait(1).to({x:191.1},0).wait(1).to({x:190.6},0).wait(1).to({x:190.1},0).wait(1).to({x:189.8},0).wait(1).to({x:189.6},0).wait(1).to({x:189.5},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t06_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AkGAAIINAA");
	this.shape_45.setTransform(-198.5,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AnHAAIOPAA");
	this.shape_46.setTransform(-179.2,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("ApuAAITdAA");
	this.shape_47.setTransform(-162.5,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("Ar8AAIX5AA");
	this.shape_48.setTransform(-148.3,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AtvAAIbfAA");
	this.shape_49.setTransform(-136.8,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AvJAAIeTAA");
	this.shape_50.setTransform(-127.8,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AwJAAMAgTAAA");
	this.shape_51.setTransform(-121.4,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AwwAAMAhhAAA");
	this.shape_52.setTransform(-117.5,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("Aw9AAMAh7AAA");
	this.shape_53.setTransform(-116.2,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(77.2,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-24}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-7.5}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:73.4},0).wait(1).to({x:67.1},0).wait(1).to({x:58.2},0).wait(1).to({x:46.8},0).wait(1).to({x:32.9},0).wait(1).to({x:16.5},0).wait(1).to({x:-2.5},0).to({_off:true},1).wait(1).to({_off:false,x:-21.4},0).wait(1).to({x:-19},0).wait(1).to({x:-16.8},0).wait(1).to({x:-14.9},0).wait(1).to({x:-13.1},0).wait(1).to({x:-11.6},0).wait(1).to({x:-10.4},0).wait(1).to({x:-9.4},0).wait(1).to({x:-8.6},0).wait(1).to({x:-8},0).wait(1).to({x:-7.6},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(79.8,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:185.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:169.4}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:83.8},0).wait(1).to({x:90.4},0).wait(1).to({x:99.7},0).wait(1).to({x:111.6},0).wait(1).to({x:126.2},0).wait(1).to({x:143.5},0).wait(1).to({x:163.4},0).to({_off:true},1).wait(1).to({_off:false,x:183.3},0).wait(1).to({x:180.9},0).wait(1).to({x:178.7},0).wait(1).to({x:176.8},0).wait(1).to({x:175},0).wait(1).to({x:173.6},0).wait(1).to({x:172.3},0).wait(1).to({x:171.3},0).wait(1).to({x:170.5},0).wait(1).to({x:169.9},0).wait(1).to({x:169.5},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t05_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AjrAAIHXAA");
	this.shape_45.setTransform(-201.2,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AmTAAIMnAA");
	this.shape_46.setTransform(-184.4,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("AolAAIRLAA");
	this.shape_47.setTransform(-169.8,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("AqhAAIVDAA");
	this.shape_48.setTransform(-157.4,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AsGAAIYNAA");
	this.shape_49.setTransform(-147.3,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AtVAAIaqAA");
	this.shape_50.setTransform(-139.4,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AuNAAIcbAA");
	this.shape_51.setTransform(-133.8,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AuuAAIddAA");
	this.shape_52.setTransform(-130.5,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("Au6AAId1AA");
	this.shape_53.setTransform(-129.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(77,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-45}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-33.5}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:72.4},0).wait(1).to({x:64.8},0).wait(1).to({x:54.1},0).wait(1).to({x:40.4},0).wait(1).to({x:23.6},0).wait(1).to({x:3.8},0).wait(1).to({x:-19.1},0).to({_off:true},1).wait(1).to({_off:false,x:-43.2},0).wait(1).to({x:-41.5},0).wait(1).to({x:-40},0).wait(1).to({x:-38.6},0).wait(1).to({x:-37.4},0).wait(1).to({x:-36.4},0).wait(1).to({x:-35.5},0).wait(1).to({x:-34.8},0).wait(1).to({x:-34.2},0).wait(1).to({x:-33.8},0).wait(1).to({x:-33.6},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(80.1,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:206.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:195.4}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:84.8},0).wait(1).to({x:92.7},0).wait(1).to({x:103.8},0).wait(1).to({x:118.1},0).wait(1).to({x:135.6},0).wait(1).to({x:156.2},0).wait(1).to({x:180},0).to({_off:true},1).wait(1).to({_off:false,x:205.1},0).wait(1).to({x:203.4},0).wait(1).to({x:201.9},0).wait(1).to({x:200.5},0).wait(1).to({x:199.3},0).wait(1).to({x:198.3},0).wait(1).to({x:197.4},0).wait(1).to({x:196.7},0).wait(1).to({x:196.1},0).wait(1).to({x:195.7},0).wait(1).to({x:195.5},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t04_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("AjGAAIGMAA");
	this.shape_45.setTransform(-204.9,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AlNAAIKbAA");
	this.shape_46.setTransform(-191.4,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("AnDAAIOHAA");
	this.shape_47.setTransform(-179.6,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("AomAAIRNAA");
	this.shape_48.setTransform(-169.7,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("Ap4AAITxAA");
	this.shape_49.setTransform(-161.5,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("Aq3AAIVvAA");
	this.shape_50.setTransform(-155.2,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("ArkAAIXJAA");
	this.shape_51.setTransform(-150.7,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AsAAAIYAAA");
	this.shape_52.setTransform(-147.9,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("AsIAAIYSAA");
	this.shape_53.setTransform(-147,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(76.5,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-78}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-69}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:70.7},0).wait(1).to({x:61.1},0).wait(1).to({x:47.6},0).wait(1).to({x:30.2},0).wait(1).to({x:8.9},0).wait(1).to({x:-16.2},0).wait(1).to({x:-45.2},0).to({_off:true},1).wait(1).to({_off:false,x:-76.6},0).wait(1).to({x:-75.3},0).wait(1).to({x:-74.1},0).wait(1).to({x:-73},0).wait(1).to({x:-72.1},0).wait(1).to({x:-71.3},0).wait(1).to({x:-70.6},0).wait(1).to({x:-70},0).wait(1).to({x:-69.6},0).wait(1).to({x:-69.3},0).wait(1).to({x:-69.1},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(80.5,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:239.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:230.9}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:86.4},0).wait(1).to({x:96.4},0).wait(1).to({x:110.4},0).wait(1).to({x:128.3},0).wait(1).to({x:150.2},0).wait(1).to({x:176.1},0).wait(1).to({x:206},0).to({_off:true},1).wait(1).to({_off:false,x:238.5},0).wait(1).to({x:237.2},0).wait(1).to({x:236},0).wait(1).to({x:234.9},0).wait(1).to({x:234},0).wait(1).to({x:233.2},0).wait(1).to({x:232.5},0).wait(1).to({x:231.9},0).wait(1).to({x:231.5},0).wait(1).to({x:231.2},0).wait(1).to({x:231},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t03_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-224.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAHQgDgEAAgDQAAgDADgCQACgDADAAQADAAADADQAEACAAADQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(-224.8,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(-224.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGAAQAIAAAFAFQAHAHAAAGQAAAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_3.setTransform(-224.8,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAJgJAKABQAMgBAIAJQAJAJAAAKQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_4.setTransform(-224.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgMAPAAQAQAAANAMQAMAMgBAPQABAQgMAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-224.8,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(-224.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAWgVAbAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgbAAgWgVg");
	this.shape_7.setTransform(-224.8,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAbgaAjgBQAlABAbAaQAaAbABAkQgBAlgaAaQgbAbglAAQgjAAgbgbg");
	this.shape_8.setTransform(-224.8,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_9.setTransform(-224.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhHBIQgegegBgqQABgpAegfQAegdApAAQAqAAAfAdQAdAfAAApQAAAqgdAeQgfAegqABQgpgBgegeg");
	this.shape_10.setTransform(-224.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhBBCQgcgcAAgmQAAgmAcgbQAcgcAlABQAmgBAcAcQAcAbgBAmQABAmgcAcQgcAcgmAAQglAAgcgcg");
	this.shape_11.setTransform(-224.8,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag7A8QgZgZgBgjQABgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-224.8,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_13.setTransform(-224.8,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgyAyQgVgVABgdQgBgcAVgWQAWgVAcAAQAdAAAVAVQAWAWAAAcQAAAdgWAVQgVAWgdAAQgcAAgWgWg");
	this.shape_14.setTransform(-224.8,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguAuQgTgTAAgbQAAgaATgTQAVgUAZAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgZAAgVgUg");
	this.shape_15.setTransform(-224.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASABAYQgBAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_16.setTransform(-224.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoAoQgQgQgBgYQABgXAQgRQARgRAXAAQAXAAARARQARARAAAXQAAAYgRAQQgRASgXgBQgXABgRgSg");
	this.shape_17.setTransform(-224.8,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWABQgVgBgQgQg");
	this.shape_18.setTransform(-224.8,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(-224.8,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgjAkQgPgQAAgUQAAgUAPgPQAPgPAUAAQAUAAAQAPQAPAPAAAUQAAAUgPAQQgQAPgUAAQgUAAgPgPg");
	this.shape_20.setTransform(-224.8,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAOgUAAQgUAAgOgOg");
	this.shape_21.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(42));

	// o
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_22.setTransform(-224.8,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AgJAAQAAgDADgCQADgEADAAQAEAAACAEQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgDgEQgDgCAAgEg");
	this.shape_23.setTransform(-224.8,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgOAAQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgFgFAAgGg");
	this.shape_24.setTransform(-224.8,26.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_25.setTransform(-224.8,26.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("AgkAAQAAgOALgLQALgMAOAAQAPAAALAMQAMALAAAOQAAAQgMAKQgLAMgPAAQgOAAgLgMQgLgKAAgQg");
	this.shape_26.setTransform(-224.8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("Ag2AAQAAgVARgQQAPgRAWAAQAWAAAQARQARAQAAAVQAAAXgRAPQgQARgWAAQgWAAgPgRQgRgPAAgXg");
	this.shape_27.setTransform(-224.8,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAXgWQAVgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgVgWQgXgWAAgfg");
	this.shape_28.setTransform(-224.8,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAoQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpg");
	this.shape_29.setTransform(-224.8,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("Ah+AAQAAgzAmgmQAkgmA0AAQA0AAAmAmQAmAmAAAzQAAA1gmAlQgmAmg0AAQg0AAgkgmQgmglAAg1g");
	this.shape_30.setTransform(-224.8,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_31.setTransform(-224.8,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AiVAAQAAg8AtgtQArgsA9AAQA9AAAtAsQAsAtAAA8QAAA+gsAsQgtAtg9AAQg9AAgrgtQgtgsAAg+g");
	this.shape_32.setTransform(-224.8,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiMAAQAAg5AqgqQAogqA6AAQA5AAArAqQApAqAAA5QAAA6gpAqQgrAqg5AAQg6AAgogqQgqgqAAg6g");
	this.shape_33.setTransform(-224.8,26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AiEAAQAAg2AngnQAngoA2AAQA2AAAoAoQAnAnAAA2QAAA2gnAoQgoAog2AAQg2AAgngoQgngoAAg2g");
	this.shape_34.setTransform(-224.8,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAAzglAmQgmAmgzAAQgzAAglgmQglgmAAgzg");
	this.shape_35.setTransform(-224.8,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("Ah3AAQAAgwAkgkQAjgjAwAAQAxAAAkAjQAjAkAAAwQAAAxgjAkQgkAjgxAAQgwAAgjgjQgkgkAAgxg");
	this.shape_36.setTransform(-224.8,26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AhyAAQAAguAjgiQAhgiAuAAQAuAAAiAiQAjAiAAAuQAAAvgjAiQgiAiguAAQguAAghgiQgjgiAAgvg");
	this.shape_37.setTransform(-224.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AhtAAQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAggggQghghAAgtg");
	this.shape_38.setTransform(-224.8,26.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_39.setTransform(-224.8,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgqAegeQAegfAqAAQAqAAAeAfQAfAeAAAqQAAAqgfAfQgeAfgqAAQgqAAgegfQgegfAAgqg");
	this.shape_40.setTransform(-224.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AhkAAQAAgoAegeQAdgeApAAQApAAAeAeQAeAeAAAoQAAApgeAeQgeAegpAAQgpAAgdgeQgegeAAgpg");
	this.shape_41.setTransform(-224.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAQgoAAgdgdQgegeAAgpg");
	this.shape_42.setTransform(-224.8,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_43.setTransform(-224.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(33));

	// line
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AgsAAIBZAA");
	this.shape_44.setTransform(-220.3,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("Aj1AAIHrAA");
	this.shape_45.setTransform(-200.2,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AmnAAINOAA");
	this.shape_46.setTransform(-182.4,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("ApAAAISCAA");
	this.shape_47.setTransform(-167,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("ArDAAIWHAA");
	this.shape_48.setTransform(-154,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AstAAIZbAA");
	this.shape_49.setTransform(-143.4,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AuAAAIcBAA");
	this.shape_50.setTransform(-135.1,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("Au7AAId4AA");
	this.shape_51.setTransform(-129.1,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AvfAAIe/AA");
	this.shape_52.setTransform(-125.6,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("AvrAAIfXAA");
	this.shape_53.setTransform(-124.4,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},18).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(36));

	// line
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_54.setTransform(78.5,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_55.setTransform(77,27.2);
	this.shape_55._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54,p:{x:78.5}}]},18).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-44}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{x:-24}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(19).to({_off:false},0).wait(1).to({x:72.4},0).wait(1).to({x:64.9},0).wait(1).to({x:54.3},0).wait(1).to({x:40.7},0).wait(1).to({x:24},0).wait(1).to({x:4.4},0).wait(1).to({x:-18.3},0).to({_off:true},1).wait(1).to({_off:false,x:-40.8},0).wait(1).to({x:-37.9},0).wait(1).to({x:-35.3},0).wait(1).to({x:-32.9},0).wait(1).to({x:-30.8},0).wait(1).to({x:-29},0).wait(1).to({x:-27.5},0).wait(1).to({x:-26.2},0).wait(1).to({x:-25.3},0).wait(1).to({x:-24.6},0).wait(1).to({x:-24.2},0).to({_off:true},1).wait(24));

	// line
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_56.setTransform(78.5,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(80,27.2);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56,p:{x:78.5}}]},18).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:205.9}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56,p:{x:185.9}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(19).to({_off:false},0).wait(1).to({x:84.8},0).wait(1).to({x:92.6},0).wait(1).to({x:103.6},0).wait(1).to({x:117.8},0).wait(1).to({x:135.1},0).wait(1).to({x:155.6},0).wait(1).to({x:179.2},0).to({_off:true},1).wait(1).to({_off:false,x:202.7},0).wait(1).to({x:199.8},0).wait(1).to({x:197.2},0).wait(1).to({x:194.8},0).wait(1).to({x:192.7},0).wait(1).to({x:190.9},0).wait(1).to({x:189.4},0).wait(1).to({x:188.1},0).wait(1).to({x:187.2},0).wait(1).to({x:186.5},0).wait(1).to({x:186.1},0).to({_off:true},1).wait(24));

	// t
	this.instance = new lib.t02_t();
	this.instance.setTransform(79.9,28.1,0.836,0.836,0,0,0,-0.7,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:1,scaleY:1},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,26,1.7,1.7);


(lib.t01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(-450.6,102.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(-450.6,102.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNANQgFgFAAgIQAAgHAFgGQAHgFAGAAQAIAAAFAFQAHAGgBAHQABAIgHAFQgFAHgIgBQgGABgHgHg");
	this.shape_2.setTransform(-450.6,102.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(-450.6,102.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQABAVQgBAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_4.setTransform(-450.6,102.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgYAgAAQAhAAAYAYQAXAYABAgQgBAhgXAYQgYAYghgBQggABgYgYg");
	this.shape_5.setTransform(-450.6,102.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhOBPQghghgBguQABgtAhghQAhgiAtABQAugBAiAiQAgAhAAAtQAAAuggAhQgiAhguAAQgtAAghghg");
	this.shape_6.setTransform(-450.6,102.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhFBGQgdgeAAgoQAAgoAdgdQAegeAnAAQAoAAAfAeQAdAdAAAoQAAAogdAeQgfAegoAAQgnAAgegeg");
	this.shape_7.setTransform(-450.6,102.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag9A9QgagaAAgjQAAgjAagbQAagZAjAAQAkAAAaAZQAaAbAAAjQAAAjgaAaQgaAbgkAAQgjAAgagbg");
	this.shape_8.setTransform(-450.6,102.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_9.setTransform(-450.6,102.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgwAxQgVgVAAgcQAAgbAVgVQAVgVAbAAQAcAAAVAVQAUAVABAbQgBAcgUAVQgVAVgcAAQgbAAgVgVg");
	this.shape_10.setTransform(-450.6,102.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgrAsQgSgTAAgZQAAgZASgSQATgTAYAAQAaAAASATQATASAAAZQAAAZgTATQgSATgaAAQgYAAgTgTg");
	this.shape_11.setTransform(-450.6,102.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgoAoQgRgQAAgYQAAgWARgSQARgRAXAAQAYAAAQARQASASgBAWQABAYgSAQQgQASgYgBQgXABgRgSg");
	this.shape_12.setTransform(-450.6,102.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgkAlQgRgPABgWQgBgVARgPQAPgRAVABQAWgBAPARQAQAPABAVQgBAWgQAPQgPAQgWABQgVgBgPgQg");
	this.shape_13.setTransform(-450.6,102.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgjAkQgQgPAAgVQAAgUAQgPQAPgQAUAAQAVAAAPAQQAPAPABAUQgBAVgPAPQgPAQgVAAQgUAAgPgQg");
	this.shape_14.setTransform(-450.6,102.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgiAkQgPgQgBgUQABgUAPgOQAOgPAUgBQAUABAQAPQAOAOAAAUQAAAUgOAQQgQAPgUAAQgUAAgOgPg");
	this.shape_15.setTransform(-450.6,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(25));

	// o
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(1,1,1).p("AAHAAQAAADgCACQgCACgDAAQgCAAgCgCQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQACACAAACg");
	this.shape_16.setTransform(-450.6,102.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(1,1,1).p("AgLAAQAAgEAEgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAQgEAAgDgEQgEgDAAgFg");
	this.shape_17.setTransform(-450.6,102.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(1,1,1).p("AgYAAQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIQgIgHAAgKg");
	this.shape_18.setTransform(-450.6,102.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(1,1,1).p("AgtAAQAAgSAOgNQANgOASAAQASAAAOAOQANANAAASQAAATgNANQgOAOgSAAQgSAAgNgOQgOgNAAgTg");
	this.shape_19.setTransform(-450.6,102.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(1,1,1).p("AhKAAQAAgeAWgWQAWgWAeAAQAeAAAXAWQAWAWAAAeQAAAfgWAWQgXAWgeAAQgeAAgWgWQgWgWAAgfg");
	this.shape_20.setTransform(-450.6,102.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(1,1,1).p("AhwAAQAAgtAhgiQAhghAuAAQAuAAAiAhQAhAiAAAtQAAAughAiQgiAhguAAQguAAghghQghgiAAgug");
	this.shape_21.setTransform(-450.6,102.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("ACgAAQAABBgwAwQgvAvhBAAQhBAAgugvQgwgwAAhBQAAhAAwgvQAugwBBAAQBBAAAvAwQAwAvAABAg");
	this.shape_22.setTransform(-450.6,102.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AiSAAQAAg7AsgsQAqgrA8AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg8AAgqgrQgsgsAAg8g");
	this.shape_23.setTransform(-450.6,102.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AiHAAQAAg3AogoQAogoA3AAQA3AAAoAoQApAoAAA3QAAA4gpAoQgoAog3AAQg3AAgogoQgogoAAg4g");
	this.shape_24.setTransform(-450.6,102.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("Ah9AAQAAgzAlglQAlgmAzAAQAzAAAmAmQAlAlAAAzQAAA0glAlQgmAmgzAAQgzAAglgmQglglAAg0g");
	this.shape_25.setTransform(-450.6,102.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("Ah1AAQAAgvAjgjQAigjAwAAQAwAAAjAjQAjAjAAAvQAAAwgjAkQgjAigwAAQgwAAgigiQgjgkAAgwg");
	this.shape_26.setTransform(-450.6,102.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("AhvAAQAAgtAhghQAhghAtAAQAtAAAhAhQAhAhAAAtQAAAughAhQghAhgtAAQgtAAghghQghghAAgug");
	this.shape_27.setTransform(-450.6,102.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AhpAAQAAgqAfggQAfgfArAAQArAAAgAfQAfAgAAAqQAAAsgfAfQggAfgrAAQgrAAgfgfQgfgfAAgsg");
	this.shape_28.setTransform(-450.6,102.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AhmAAQAAgpAfgeQAegfApAAQApAAAfAfQAeAeAAApQAAAqgeAeQgfAfgpAAQgpAAgegfQgfgeAAgqg");
	this.shape_29.setTransform(-450.6,102.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("AhjAAQAAgoAdgeQAdgdApAAQApAAAdAdQAeAeAAAoQAAApgeAeQgdAdgpAAQgpAAgdgdQgdgeAAgpg");
	this.shape_30.setTransform(-450.6,102.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ABkAAQAAApgeAdQgeAegoAAQgoAAgdgeQgegdAAgpQAAgoAegdQAdgeAoAAQAoAAAeAeQAeAdAAAog");
	this.shape_31.setTransform(-450.6,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},6).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(19));

	// line
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AAQgKIgfAV");
	this.shape_32.setTransform(-445.5,98.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AiuB3IFdjt");
	this.shape_33.setTransform(-429.6,87.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AkxDPIJjmd");
	this.shape_34.setTransform(-416.6,78.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("AmWETIMtol");
	this.shape_35.setTransform(-406.4,72);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("AnfFEIO/qH");
	this.shape_36.setTransform(-399.2,67.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AoKFhIQVrC");
	this.shape_37.setTransform(-394.8,64.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AIZlqIwyLV");
	this.shape_38.setTransform(-393.4,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},12).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).wait(22));

	// line
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AgHAAIAQAA");
	this.shape_39.setTransform(-338.7,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_40.setTransform(-289.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AuAAAIcBAA");
	this.shape_41.setTransform(-249.8,26.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("Ay4AAMAlxAAA");
	this.shape_42.setTransform(-218.7,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("A2WAAMAstAAA");
	this.shape_43.setTransform(-196.5,26.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("A4bAAMAw3AAA");
	this.shape_44.setTransform(-183.1,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("A5IAAMAyRAAA");
	this.shape_45.setTransform(-178.7,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39}]},18).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(16));

	// line
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_46.setTransform(78.5,27.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_47.setTransform(75.6,27.2);
	this.shape_47._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46,p:{x:78.5}}]},18).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46,p:{x:-24}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46,p:{x:-16}}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(19).to({_off:false},0).wait(1).to({x:67.1},0).wait(1).to({x:52.9},0).wait(1).to({x:32.9},0).wait(1).to({x:7.3},0).to({_off:true},1).wait(1).to({_off:false,x:-22.3},0).wait(1).to({x:-20.9},0).wait(1).to({x:-19.6},0).wait(1).to({x:-18.5},0).wait(1).to({x:-17.6},0).wait(1).to({x:-16.9},0).wait(1).to({x:-16.4},0).wait(1).to({x:-16.1},0).to({_off:true},1).wait(7));

	// line
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("AAAhlIAADL");
	this.shape_48.setTransform(78.5,27.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AAABmIAAjL");
	this.shape_49.setTransform(81.5,27.2);
	this.shape_49._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48,p:{x:78.5}}]},18).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48,p:{x:185.9}}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48,p:{x:177.9}}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(19).to({_off:false},0).wait(1).to({x:90.4},0).wait(1).to({x:105.3},0).wait(1).to({x:126.2},0).wait(1).to({x:153.1},0).to({_off:true},1).wait(1).to({_off:false,x:184.2},0).wait(1).to({x:182.8},0).wait(1).to({x:181.5},0).wait(1).to({x:180.4},0).wait(1).to({x:179.5},0).wait(1).to({x:178.8},0).wait(1).to({x:178.3},0).wait(1).to({x:178},0).to({_off:true},1).wait(7));

	// t
	this.instance = new lib.t01_t();
	this.instance.setTransform(78.5,25.8,0.13,0.13,0,0,0,78.4,25.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:78.5,scaleX:1.17,scaleY:1.17},6).to({scaleX:1,scaleY:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-451.5,101.7,1.7,1.7);


(lib.R_Bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Normal":0,"Focused":19});

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
p.nominalBounds = new cjs.Rectangle(-287.5,-214,491,428);


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


(lib.product_v_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(39.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:44.5},11).to({x:39.5},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


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


(lib.mouse_icon = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mouse_icon_t_full();
	this.instance.setTransform(87.8,177.9,1,1,0,0,0,87.7,11.3);

	this.instance_1 = new lib.mouse_icon_v_full();
	this.instance_1.setTransform(87.8,96.4,1,1,0,0,0,87.8,15.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAALVQiNAAhkhlQhkhkAAiOIAAigQCOh+DHAAQDIAACOB+IAACgQAACOhkBkQhlBliNAAgAAAATQjCAAiTBoIAAhJQAAiMBkhlQBkhkCNAAIAAAAQA0AAAuAOQBKAVA8A4IAKAJQBkBlAACMIAABKQiUhpjCAAgAgijfQgMAMAAAQIAABhQAAARAMALQAMAMARAAQAPAAAMgMQAMgLAAgRIAAhhQAAgQgMgMQgMgMgPAAQgRAAgMAMgAgKlKQgKgHgCgLQgaicCWhKQAZgMAPgXQAZgkgGgrQgCgMAHgJQAHgJALgBQALgCAJAHQAKAHABALQAJBBgkA1IAAAAQgYAjgmASQhyA4ATB0QACALgHAKQgHAJgLACIgFAAQgGAAgHgFg");
	this.shape.setTransform(87.8,72.5);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175.6,189.1);


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

	// index_btn_shadow.png
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(68,11);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(68,11,0.716,0.716);
	this.instance_1._off = true;

	this.instance_2 = new lib.index_btn_shadow();
	this.instance_2.setTransform(-2.5,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(1));

	// index_btn_peo_shadow.png
	this.instance_3 = new lib.Tween7("synched",0);
	this.instance_3.setTransform(-66.1,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// startButton
	this.startButton = new lib.IndexStartButton();
	this.startButton.setTransform(66.5,-143);
	new cjs.ButtonHelper(this.startButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startButton).wait(1).to({regX:-1,x:65.5},0).wait(1).to({y:-143.1},0).wait(1).to({y:-143.3},0).wait(1).to({y:-143.6},0).wait(1).to({y:-144},0).wait(1).to({y:-144.5},0).wait(1).to({y:-145},0).wait(1).to({y:-145.7},0).wait(1).to({y:-146.3},0).wait(1).to({y:-147.1},0).wait(1).to({y:-147.9},0).wait(1).to({y:-148.8},0).wait(1).to({y:-149.7},0).wait(1).to({y:-150.7},0).wait(1).to({y:-151.7},0).wait(1).to({y:-152.7},0).wait(1).to({y:-153.7},0).wait(1).to({y:-154.7},0).wait(1).to({y:-155.7},0).wait(1).to({y:-156.7},0).wait(1).to({y:-157.6},0).wait(1).to({y:-158.6},0).wait(1).to({y:-159.4},0).wait(1).to({y:-160.2},0).wait(1).to({y:-160.9},0).wait(1).to({y:-161.5},0).wait(1).to({y:-162},0).wait(1).to({y:-162.4},0).wait(1).to({y:-162.7},0).wait(1).to({y:-162.9},0).wait(1).to({regX:0,x:66.5,y:-163},0).wait(1).to({regX:-1,x:65.5,y:-162.9},0).wait(1).to({y:-162.8},0).wait(1).to({y:-162.6},0).wait(1).to({y:-162.3},0).wait(1).to({y:-161.9},0).wait(1).to({y:-161.4},0).wait(1).to({y:-160.9},0).wait(1).to({y:-160.2},0).wait(1).to({y:-159.6},0).wait(1).to({y:-158.8},0).wait(1).to({y:-158},0).wait(1).to({y:-157.1},0).wait(1).to({y:-156.2},0).wait(1).to({y:-155.2},0).wait(1).to({y:-154.2},0).wait(1).to({y:-153.2},0).wait(1).to({y:-152.2},0).wait(1).to({y:-151.2},0).wait(1).to({y:-150.2},0).wait(1).to({y:-149.2},0).wait(1).to({y:-148.3},0).wait(1).to({y:-147.3},0).wait(1).to({y:-146.5},0).wait(1).to({y:-145.7},0).wait(1).to({y:-145},0).wait(1).to({y:-144.4},0).wait(1).to({y:-143.9},0).wait(1).to({y:-143.5},0).wait(1).to({y:-143.2},0).wait(1).to({y:-143},0).wait(1).to({regX:0,x:66.5},0).wait(1));

	// index_btn_peo.png
	this.instance_4 = new lib.btnpeo();
	this.instance_4.setTransform(-48.5,-215,1,1,0,0,0,81,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({y:-215.3},0).wait(1).to({y:-215.7},0).wait(1).to({y:-216.2},0).wait(1).to({y:-216.9},0).wait(1).to({y:-217.7},0).wait(1).to({y:-218.7},0).wait(1).to({y:-219.8},0).wait(1).to({y:-221.1},0).wait(1).to({y:-222.4},0).wait(1).to({y:-223.9},0).wait(1).to({y:-225.5},0).wait(1).to({y:-227.1},0).wait(1).to({y:-228.8},0).wait(1).to({y:-230.6},0).wait(1).to({y:-232.4},0).wait(1).to({y:-234.3},0).wait(1).to({y:-236.1},0).wait(1).to({y:-237.9},0).wait(1).to({y:-239.7},0).wait(1).to({y:-241.4},0).wait(1).to({y:-243},0).wait(1).to({y:-244.6},0).wait(1).to({y:-246},0).wait(1).to({y:-247.2},0).wait(1).to({y:-248.3},0).wait(1).to({y:-249.2},0).wait(1).to({y:-250},0).wait(1).to({y:-250.5},0).wait(1).to({y:-250.8},0).wait(1).to({y:-251},0).wait(1).to({y:-250.9},0).wait(1).to({y:-250.6},0).wait(1).to({y:-250.2},0).wait(1).to({y:-249.7},0).wait(1).to({y:-249},0).wait(1).to({y:-248.2},0).wait(1).to({y:-247.2},0).wait(1).to({y:-246.1},0).wait(1).to({y:-244.8},0).wait(1).to({y:-243.5},0).wait(1).to({y:-242},0).wait(1).to({y:-240.4},0).wait(1).to({y:-238.8},0).wait(1).to({y:-237.1},0).wait(1).to({y:-235.3},0).wait(1).to({y:-233.5},0).wait(1).to({y:-231.6},0).wait(1).to({y:-229.8},0).wait(1).to({y:-228},0).wait(1).to({y:-226.2},0).wait(1).to({y:-224.5},0).wait(1).to({y:-222.9},0).wait(1).to({y:-221.3},0).wait(1).to({y:-219.9},0).wait(1).to({y:-218.7},0).wait(1).to({y:-217.6},0).wait(1).to({y:-216.7},0).wait(1).to({y:-215.9},0).wait(1).to({y:-215.4},0).wait(1).to({y:-215.1},0).wait(1).to({y:-215},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-294,302.1,330);


(lib.FeatureDetailClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// t
	this.textClip_0 = new lib.t01();
	this.textClip_0.setTransform(-255.2,44.2,1,1,0,0,0,-450.7,102.6);

	this.textClip_1 = new lib.t02();
	this.textClip_1.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_2 = new lib.t03();
	this.textClip_2.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_3 = new lib.t04();
	this.textClip_3.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_4 = new lib.t05();
	this.textClip_4.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_5 = new lib.t06();
	this.textClip_5.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_7 = new lib.t08();
	this.textClip_7.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_8 = new lib.t09();
	this.textClip_8.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.textClip_9 = new lib.t10();
	this.textClip_9.setTransform(-234.9,59.3,1,1,0,0,0,-450.7,102.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textClip_0}]}).to({state:[{t:this.textClip_1}]},1).to({state:[{t:this.textClip_2}]},1).to({state:[{t:this.textClip_3}]},1).to({state:[{t:this.textClip_4}]},1).to({state:[{t:this.textClip_5}]},1).to({state:[]},1).to({state:[{t:this.textClip_7}]},1).to({state:[{t:this.textClip_8}]},1).to({state:[{t:this.textClip_9}]},1).wait(1));

	// p
	this.instance = new lib.product_main01pngcopy();
	this.instance.setTransform(-395.5,-253);

	this.instance_1 = new lib.product_main05pngcopy();
	this.instance_1.setTransform(-448.5,-253);

	this.instance_2 = new lib.product_main02_v2pngcopy();
	this.instance_2.setTransform(-447.5,-253);

	this.instance_3 = new lib.product_main03pngcopy();
	this.instance_3.setTransform(-448.5,-236);

	this.instance_4 = new lib.product_main04pngcopy();
	this.instance_4.setTransform(-448.5,-253);

	this.instance_5 = new lib.product_main06pngcopy();
	this.instance_5.setTransform(-448.5,-253);

	this.instance_6 = new lib.product_main07pngcopy3();
	this.instance_6.setTransform(-451.5,-253);

	this.instance_7 = new lib.product_main09pngcopy();
	this.instance_7.setTransform(-447.5,-253);

	this.instance_8 = new lib.product_main08pngcopy2();
	this.instance_8.setTransform(-447.5,-253);

	this.instance_9 = new lib.product_main10pngcopy();
	this.instance_9.setTransform(-447.5,-253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// logo
	this.instance_10 = new lib.product_logo01pngcopy();
	this.instance_10.setTransform(157.1,115.5);

	this.instance_11 = new lib.product_logo02pngcopy();
	this.instance_11.setTransform(179.6,111.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{x:157.1}}]}).to({state:[{t:this.instance_10,p:{x:179.5}}]},1).to({state:[{t:this.instance_11}]},5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.5,-253,791,464);


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
	this.shape_29.setTransform(137.5,342.1,2.727,2.727);

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

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-469.1,291,1,1,0,0,0,0,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(13).to({_off:false,x:-429.1,alpha:0},0).wait(1).to({x:-429.3,alpha:0.004},0).wait(1).to({x:-429.8,alpha:0.017},0).wait(1).to({x:-430.7,alpha:0.04},0).wait(1).to({x:-432.2,alpha:0.078},0).wait(1).to({x:-434.4,alpha:0.133},0).wait(1).to({x:-437.5,alpha:0.209},0).wait(1).to({x:-441.5,alpha:0.311},0).wait(1).to({x:-446.5,alpha:0.436},0).wait(1).to({x:-451.9,alpha:0.57},0).wait(1).to({x:-456.8,alpha:0.694},0).wait(1).to({x:-460.9,alpha:0.794},0).wait(1).to({x:-463.9,alpha:0.869},0).wait(1).to({x:-466,alpha:0.923},0).wait(1).to({x:-467.5,alpha:0.96},0).wait(1).to({x:-468.4,alpha:0.984},0).wait(1).to({x:-468.9,alpha:0.996},0).wait(1).to({x:-469.1,alpha:1},0).wait(118));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(469,276.1,1,1,0,0,0,0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},6).wait(13).to({_off:false,x:429,alpha:0},0).wait(1).to({x:429.2,alpha:0.004},0).wait(1).to({x:429.7,alpha:0.017},0).wait(1).to({x:430.6,alpha:0.04},0).wait(1).to({x:432.1,alpha:0.078},0).wait(1).to({x:434.3,alpha:0.133},0).wait(1).to({x:437.4,alpha:0.209},0).wait(1).to({x:441.4,alpha:0.311},0).wait(1).to({x:446.4,alpha:0.436},0).wait(1).to({x:451.8,alpha:0.57},0).wait(1).to({x:456.7,alpha:0.694},0).wait(1).to({x:460.8,alpha:0.794},0).wait(1).to({x:463.8,alpha:0.869},0).wait(1).to({x:465.9,alpha:0.923},0).wait(1).to({x:467.4,alpha:0.96},0).wait(1).to({x:468.3,alpha:0.984},0).wait(1).to({x:468.8,alpha:0.996},0).wait(1).to({x:469,alpha:1},0).wait(118));

	// IntroText
	this.instance_2 = new lib.IntroText();
	this.instance_2.setTransform(-6,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},6).wait(11).to({_off:false,scaleX:0.43,scaleY:0.43,x:0,alpha:0},0).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.004},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-0.1,alpha:0.017},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-0.2,alpha:0.04},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-0.5,alpha:0.078},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.8,alpha:0.133},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-1.3,alpha:0.209},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-1.9,alpha:0.311},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-2.6,alpha:0.436},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-3.4,alpha:0.57},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-4.2,alpha:0.694},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-4.8,alpha:0.794},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-5.3,alpha:0.869},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-5.6,alpha:0.923},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-5.8,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-6,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(8).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-5.9,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-5.8,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-5.5,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-5.1,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-4.6,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-3.9,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-3,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-2.2,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-1.5,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-0.9,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.5,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-0.3,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-0.1,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,x:0,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},17).wait(80));

	// DotLine
	this.instance_3 = new lib.DotLine();
	this.instance_3.setTransform(-5,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},6).wait(9).to({_off:false,scaleX:0.42,x:0,alpha:0},0).wait(1).to({scaleX:0.42,alpha:0.004},0).wait(1).to({scaleX:0.43,x:-0.1,alpha:0.017},0).wait(1).to({scaleX:0.44,x:-0.2,alpha:0.04},0).wait(1).to({scaleX:0.46,x:-0.4,alpha:0.078},0).wait(1).to({scaleX:0.5,x:-0.7,alpha:0.133},0).wait(1).to({scaleX:0.54,x:-1,alpha:0.209},0).wait(1).to({scaleX:0.6,x:-1.6,alpha:0.311},0).wait(1).to({scaleX:0.67,x:-2.2,alpha:0.436},0).wait(1).to({scaleX:0.75,x:-2.9,alpha:0.57},0).wait(1).to({scaleX:0.82,x:-3.5,alpha:0.694},0).wait(1).to({scaleX:0.88,x:-4,alpha:0.794},0).wait(1).to({scaleX:0.92,x:-4.3,alpha:0.869},0).wait(1).to({scaleX:0.96,x:-4.6,alpha:0.923},0).wait(1).to({scaleX:0.98,x:-4.8,alpha:0.96},0).wait(1).to({scaleX:0.99,x:-4.9,alpha:0.984},0).wait(1).to({scaleX:1,x:-5,alpha:0.996},0).wait(1).to({scaleX:1,alpha:1},0).wait(12).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-4.9,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-4.8,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-4.6,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-4.2,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-3.8,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-3.2,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-2.5,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-1.8,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-1.2,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-0.8,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.4,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-0.2,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-0.1,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,x:0,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},15).wait(80));

	// Title
	this.instance_4 = new lib.Title();
	this.instance_4.setTransform(15,-140.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},6).wait(7).to({_off:false,scaleX:0.21,scaleY:0.21,x:0,alpha:0},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:0.1,alpha:0.004},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:0.2,alpha:0.017},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:0.6,alpha:0.04},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:1.2,alpha:0.078},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:2,alpha:0.133},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:3.1,alpha:0.209},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:4.7,alpha:0.311},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:6.5,alpha:0.436},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:8.6,alpha:0.57},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:10.4,alpha:0.694},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:11.9,alpha:0.794},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:13,alpha:0.869},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:13.9,alpha:0.923},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:14.4,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:14.8,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,x:14.9,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,x:15,alpha:1},0).wait(16).to({scaleX:1,scaleY:1,x:14.9,alpha:0.996},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:14.7,alpha:0.981},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:14.3,alpha:0.954},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:13.7,alpha:0.91},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:12.7,alpha:0.846},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:11.3,alpha:0.756},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:9.6,alpha:0.637},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:7.5,alpha:0.497},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:5.4,alpha:0.358},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:3.6,alpha:0.241},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:2.3,alpha:0.152},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:1.3,alpha:0.088},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:0.7,alpha:0.046},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:0.3,alpha:0.019},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:0.1,alpha:0.004},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:0,alpha:0},0).to({_off:true},13).wait(80));

	// StartButton
	this.btnStart = new lib.StartButton();
	this.btnStart.setTransform(-1,180.3,0.385,0.385);
	this.btnStart.alpha = 0;
	new cjs.ButtonHelper(this.btnStart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).wait(11).to({x:0},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.004},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.017},0).wait(1).to({scaleX:0.41,scaleY:0.41,alpha:0.04},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-0.1,alpha:0.078},0).wait(1).to({scaleX:0.47,scaleY:0.47,alpha:0.133},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-0.2,alpha:0.209},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-0.3,alpha:0.311},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-0.4,alpha:0.436},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-0.6,alpha:0.57},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-0.7,alpha:0.694},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-0.8,alpha:0.794},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-0.9,alpha:0.869},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.923},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-1,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(20).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-0.9,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-0.8,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-0.6,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.5,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-0.4,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-0.2,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.1,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:0,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},11).wait(80));

	// BlueBackground
	this.instance_5 = new lib.BlueBackground();
	this.instance_5.setTransform(-1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},6).wait(3).to({_off:false,scaleX:0.12,scaleY:0.12,x:0,alpha:0},0).wait(1).to({scaleX:0.12,scaleY:0.12,alpha:0.004},0).wait(1).to({scaleX:0.13,scaleY:0.13,alpha:0.017},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.04},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-0.1,alpha:0.078},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.133},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-0.2,alpha:0.209},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-0.3,alpha:0.311},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.4,alpha:0.436},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-0.6,alpha:0.57},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-0.7,alpha:0.694},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-0.8,alpha:0.794},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-0.9,alpha:0.869},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.923},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-1,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(24).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.981},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.954},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-0.9,alpha:0.91},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-0.8,alpha:0.846},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.756},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-0.6,alpha:0.637},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-0.5,alpha:0.497},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-0.4,alpha:0.358},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-0.2,alpha:0.241},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.152},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-0.1,alpha:0.088},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:0,alpha:0.046},0).wait(1).to({scaleX:0.02,scaleY:0.02,alpha:0.019},0).wait(1).to({scaleX:0.01,scaleY:0.01,alpha:0.004},0).wait(1).to({scaleX:0,scaleY:0,alpha:0},0).to({_off:true},9).wait(80));

	// Basement
	this.instance_6 = new lib.Basement();
	this.instance_6.setTransform(9.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({scaleX:0.82,scaleY:0.82,alpha:0},0).wait(1).to({regX:-32,regY:-47,scaleX:0.82,scaleY:0.82,x:-16.6,y:-46.4,alpha:0.004},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-16.7,y:-46.5,alpha:0.017},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-16.9,y:-46.7,alpha:0.04},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-17.1,y:-47,alpha:0.078},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-17.4,y:-47.5,alpha:0.133},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-17.8,y:-48.2,alpha:0.209},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-18.4,y:-49,alpha:0.311},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-19.2,y:-50.1,alpha:0.436},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-20,y:-51.3,alpha:0.57},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-20.7,y:-52.3,alpha:0.694},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-21.3,y:-53.2,alpha:0.794},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-21.7,y:-53.9,alpha:0.869},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-22,y:-54.3,alpha:0.923},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-22.2,y:-54.6,alpha:0.96},0).wait(1).to({scaleX:1,scaleY:1,x:-22.4,y:-54.8,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,x:-22.5,y:-54.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:9.5,y:-8,alpha:1},0).wait(131));

	// Shadow
	this.instance_7 = new lib.Shadow();
	this.instance_7.setTransform(-22.5,422.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({scaleX:0.19,scaleY:0.19,alpha:0},0).wait(1).to({scaleX:0.19,scaleY:0.19,alpha:0.004},0).wait(1).to({scaleX:0.2,scaleY:0.2,alpha:0.017},0).wait(1).to({scaleX:0.22,scaleY:0.22,alpha:0.04},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.078},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.133},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.209},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.311},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.436},0).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.57},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.694},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.794},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.869},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.923},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-618.1,-521,1240.2,1042);


(lib.BtnToRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();

	this.instance_1 = new lib.product_v_1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,39.5,40);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

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


(lib.PrizeClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":16,"StageInComplete":50});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(103));

	// btn
	this.btnLink = new lib.btn();
	this.btnLink.setTransform(25,292.5,1,1,0,0,0,74,78.5);

	this.timeline.addTween(cjs.Tween.get(this.btnLink).to({_off:true},1).wait(24).to({_off:false,regX:74.1,rotation:-30,x:47.1,y:200.6,alpha:0},0).wait(1).to({regX:74,regY:68.5,rotation:-29.9,x:42,y:192,alpha:0.002},0).wait(1).to({rotation:-29.8,y:192.5,alpha:0.007},0).wait(1).to({rotation:-29.5,x:42.1,y:193.3,alpha:0.017},0).wait(1).to({rotation:-29,x:42.2,y:194.4,alpha:0.032},0).wait(1).to({rotation:-28.4,x:42.3,y:196,alpha:0.053},0).wait(1).to({rotation:-27.6,x:42.4,y:198.2,alpha:0.081},0).wait(1).to({rotation:-26.5,x:42.6,y:201,alpha:0.118},0).wait(1).to({rotation:-25.1,x:42.8,y:204.6,alpha:0.163},0).wait(1).to({rotation:-23.4,x:43,y:209,alpha:0.22},0).wait(1).to({rotation:-21.3,x:43.4,y:214.3,alpha:0.288},0).wait(1).to({rotation:-19,x:43.8,y:220.6,alpha:0.368},0).wait(1).to({rotation:-16.3,x:44.2,y:227.5,alpha:0.457},0).wait(1).to({rotation:-13.5,x:44.7,y:234.7,alpha:0.549},0).wait(1).to({rotation:-10.9,x:45.1,y:241.6,alpha:0.637},0).wait(1).to({rotation:-8.5,x:45.5,y:247.9,alpha:0.716},0).wait(1).to({rotation:-6.5,x:45.8,y:253.3,alpha:0.783},0).wait(1).to({rotation:-4.8,x:46.1,y:257.6,alpha:0.839},0).wait(1).to({rotation:-3.5,x:46.3,y:261.2,alpha:0.884},0).wait(1).to({rotation:-2.4,x:46.6,y:264.1,alpha:0.92},0).wait(1).to({rotation:-1.6,x:46.7,y:266.3,alpha:0.947},0).wait(1).to({rotation:-1,x:46.8,y:267.9,alpha:0.968},0).wait(1).to({rotation:-0.5,x:46.9,y:269.1,alpha:0.983},0).wait(1).to({rotation:-0.2,y:269.9,alpha:0.993},0).wait(1).to({rotation:-0.1,y:270.4,alpha:0.998},0).wait(1).to({regY:78.5,rotation:0,x:47,y:280.5,alpha:1},0).wait(53));

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-437.1,299,1,1,0,0,0,0,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},16).wait(9).to({_off:false,alpha:0},0).wait(1).to({x:-437.2,alpha:0.002},0).wait(1).to({x:-437.4,alpha:0.007},0).wait(1).to({x:-437.8,alpha:0.017},0).wait(1).to({x:-438.4,alpha:0.032},0).wait(1).to({x:-439.2,alpha:0.053},0).wait(1).to({x:-440.4,alpha:0.081},0).wait(1).to({x:-441.8,alpha:0.118},0).wait(1).to({x:-443.6,alpha:0.163},0).wait(1).to({x:-445.9,alpha:0.22},0).wait(1).to({x:-448.6,alpha:0.288},0).wait(1).to({x:-451.8,alpha:0.368},0).wait(1).to({x:-455.4,alpha:0.457},0).wait(1).to({x:-459,alpha:0.549},0).wait(1).to({x:-462.6,alpha:0.637},0).wait(1).to({x:-465.7,alpha:0.716},0).wait(1).to({x:-468.4,alpha:0.783},0).wait(1).to({x:-470.7,alpha:0.839},0).wait(1).to({x:-472.5,alpha:0.884},0).wait(1).to({x:-473.9,alpha:0.92},0).wait(1).to({x:-475,alpha:0.947},0).wait(1).to({x:-475.8,alpha:0.968},0).wait(1).to({x:-476.4,alpha:0.983},0).wait(1).to({x:-476.8,alpha:0.993},0).wait(1).to({x:-477,alpha:0.998},0).wait(1).to({x:-477.1,alpha:1},0).to({_off:true},52).wait(1));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(609,308.1,1,1,0,0,0,0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},16).wait(9).to({_off:false,x:529,alpha:0},0).wait(1).to({x:529.1,alpha:0.002},0).wait(1).to({x:529.3,alpha:0.007},0).wait(1).to({x:529.7,alpha:0.017},0).wait(1).to({x:530.3,alpha:0.032},0).wait(1).to({x:531.1,alpha:0.053},0).wait(1).to({x:532.3,alpha:0.081},0).wait(1).to({x:533.7,alpha:0.118},0).wait(1).to({x:535.5,alpha:0.163},0).wait(1).to({x:537.8,alpha:0.22},0).wait(1).to({x:540.5,alpha:0.288},0).wait(1).to({x:543.7,alpha:0.368},0).wait(1).to({x:547.3,alpha:0.457},0).wait(1).to({x:550.9,alpha:0.549},0).wait(1).to({x:554.5,alpha:0.637},0).wait(1).to({x:557.6,alpha:0.716},0).wait(1).to({x:560.3,alpha:0.783},0).wait(1).to({x:562.6,alpha:0.839},0).wait(1).to({x:564.4,alpha:0.884},0).wait(1).to({x:565.8,alpha:0.92},0).wait(1).to({x:566.9,alpha:0.947},0).wait(1).to({x:567.7,alpha:0.968},0).wait(1).to({x:568.3,alpha:0.983},0).wait(1).to({x:568.7,alpha:0.993},0).wait(1).to({x:568.9,alpha:0.998},0).wait(1).to({x:569,alpha:1},0).to({_off:true},52).wait(1));

	// Title
	this.instance_2 = new lib.PrizeTitle();
	this.instance_2.setTransform(-214.6,-300.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},16).wait(1).to({_off:false,scaleX:0.64,scaleY:0.64,rotation:-60,alpha:0},0).wait(1).to({rotation:-59.9,x:-214.7,alpha:0.001},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-59.7,x:-214.8,alpha:0.006},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-59.2,x:-215.1,alpha:0.014},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-58.5,x:-215.6,alpha:0.025},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-57.5,x:-216.3,alpha:0.041},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-56.2,x:-217.1,alpha:0.063},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-54.6,x:-218.2,alpha:0.09},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-52.6,x:-219.5,alpha:0.123},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-50.1,x:-221.2,alpha:0.165},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-47.1,x:-223.2,alpha:0.215},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-43.5,x:-225.6,alpha:0.275},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-39.3,x:-228.4,alpha:0.344},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-34.7,x:-231.5,alpha:0.421},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-29.8,x:-234.7,alpha:0.503},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-25,x:-238,alpha:0.584},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-20.4,x:-241,alpha:0.66},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-16.3,x:-243.8,alpha:0.729},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-12.7,x:-246.1,alpha:0.788},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-9.8,x:-248.1,alpha:0.837},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-7.3,x:-249.7,alpha:0.878},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-5.3,x:-251.1,alpha:0.912},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-3.7,x:-252.1,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-2.4,x:-253,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-1.5,x:-253.6,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:-254.1,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:-254.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:-254.5,alpha:0.999},0).wait(1).to({rotation:0,x:-254.6,alpha:1},0).to({_off:true},57).wait(1));

	// Helm
	this.instance_3 = new lib.PrizeHelm();
	this.instance_3.setTransform(348.1,203.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},16).wait(1).to({_off:false,scaleX:0.76,scaleY:0.76,x:176.2,y:97.5,alpha:0},0).wait(1).to({regY:-10,x:176.3,y:90,alpha:0.001},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:176.9,y:90.5,alpha:0.006},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:177.9,y:91.3,alpha:0.014},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:179.5,y:92.5,alpha:0.025},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:181.6,y:94.2,alpha:0.041},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:184.4,y:96.4,alpha:0.063},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:188,y:99.2,alpha:0.09},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:192.4,y:102.7,alpha:0.123},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:197.9,y:107,alpha:0.165},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:204.6,y:112.2,alpha:0.215},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:212.5,y:118.4,alpha:0.275},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:221.6,y:125.6,alpha:0.344},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:231.7,y:133.6,alpha:0.421},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:242.5,y:142,alpha:0.503},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:253.2,y:150.4,alpha:0.584},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:263.3,y:158.3,alpha:0.66},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:272.3,y:165.4,alpha:0.729},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:280.1,y:171.5,alpha:0.788},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:286.6,y:176.7,alpha:0.837},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:292,y:180.9,alpha:0.878},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:296.4,y:184.3,alpha:0.912},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:299.9,y:187.1,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:302.7,y:189.3,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:304.8,y:190.9,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,x:306.3,y:192.1,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:307.3,y:192.9,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:307.9,y:193.4,alpha:0.999},0).wait(1).to({regY:0,x:308.1,y:203.5,alpha:1},0).to({_off:true},57).wait(1));

	// KeyRing
	this.instance_4 = new lib.PrizeKeyRing();
	this.instance_4.setTransform(-206.6,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},16).wait(1).to({_off:false,scaleX:0.76,scaleY:0.76,x:-72.5,y:76,alpha:0},0).wait(1).to({regY:-10,x:-72.7,y:68.5,alpha:0.001},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-73.5,y:68.7,alpha:0.006},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-74.9,y:69.3,alpha:0.014},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-76.9,y:70.1,alpha:0.025},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-79.7,y:71.3,alpha:0.041},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-83.4,y:72.8,alpha:0.063},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-88.1,y:74.6,alpha:0.09},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-94,y:77.1,alpha:0.123},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-101.2,y:80,alpha:0.165},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-110,y:83.5,alpha:0.215},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-120.4,y:87.8,alpha:0.275},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-132.4,y:92.7,alpha:0.344},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-145.8,y:98.1,alpha:0.421},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-160,y:103.9,alpha:0.503},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-174.2,y:109.6,alpha:0.584},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-187.5,y:115,alpha:0.66},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-199.3,y:119.8,alpha:0.729},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-209.6,y:124,alpha:0.788},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-218.2,y:127.5,alpha:0.837},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-225.4,y:130.4,alpha:0.878},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-231.2,y:132.7,alpha:0.912},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-235.8,y:134.6,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-239.4,y:136.1,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-242.2,y:137.2,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,x:-244.2,y:138.1,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:-245.6,y:138.6,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:-246.3,y:138.9,alpha:0.999},0).wait(1).to({regY:0,x:-246.6,y:149,alpha:1},0).to({_off:true},57).wait(1));

	// Coat
	this.instance_5 = new lib.PrizeCoat();
	this.instance_5.setTransform(108.4,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},16).wait(1).to({_off:false,scaleX:0.76,scaleY:0.76,x:51.6,y:-41,alpha:0},0).wait(1).to({regY:-10,y:-48.6,alpha:0.001},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-49,alpha:0.006},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:51.8,y:-49.6,alpha:0.014},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:52,y:-50.4,alpha:0.025},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:52.2,y:-51.6,alpha:0.041},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:52.6,y:-53.1,alpha:0.063},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:53.1,y:-55.2,alpha:0.09},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:53.6,y:-57.6,alpha:0.123},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:54.3,y:-60.7,alpha:0.165},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:55.2,y:-64.4,alpha:0.215},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:56.2,y:-68.8,alpha:0.275},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:57.4,y:-73.9,alpha:0.344},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:58.6,y:-79.5,alpha:0.421},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:60,y:-85.5,alpha:0.503},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:61.4,y:-91.5,alpha:0.584},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:62.7,y:-97.1,alpha:0.66},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:63.8,y:-102.1,alpha:0.729},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:64.8,y:-106.4,alpha:0.788},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:65.7,y:-110,alpha:0.837},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:66.3,y:-113.1,alpha:0.878},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:66.9,y:-115.5,alpha:0.912},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:67.4,y:-117.5,alpha:0.938},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:67.7,y:-119,alpha:0.959},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:68,y:-120.2,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,x:68.2,y:-121,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:68.3,y:-121.6,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:68.4,y:-121.9,alpha:0.999},0).wait(1).to({regY:0,y:-112,alpha:1},0).to({_off:true},57).wait(1));

	// OpenLogo
	this.instance_6 = new lib.PrizeOpenLogo();
	this.instance_6.setTransform(0,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},16).wait(1).to({_off:false,y:444,alpha:0},0).wait(1).to({alpha:0.001},0).wait(1).to({y:444.1,alpha:0.006},0).wait(1).to({y:444.3,alpha:0.014},0).wait(1).to({y:444.5,alpha:0.025},0).wait(1).to({y:444.8,alpha:0.041},0).wait(1).to({y:445.3,alpha:0.063},0).wait(1).to({y:445.8,alpha:0.09},0).wait(1).to({y:446.5,alpha:0.123},0).wait(1).to({y:447.3,alpha:0.165},0).wait(1).to({y:448.3,alpha:0.215},0).wait(1).to({y:449.5,alpha:0.275},0).wait(1).to({y:450.9,alpha:0.344},0).wait(1).to({y:452.4,alpha:0.421},0).wait(1).to({y:454.1,alpha:0.503},0).wait(1).to({y:455.7,alpha:0.584},0).wait(1).to({y:457.2,alpha:0.66},0).wait(1).to({y:458.6,alpha:0.729},0).wait(1).to({y:459.8,alpha:0.788},0).wait(1).to({y:460.7,alpha:0.837},0).wait(1).to({y:461.6,alpha:0.878},0).wait(1).to({y:462.2,alpha:0.912},0).wait(1).to({y:462.8,alpha:0.938},0).wait(1).to({y:463.2,alpha:0.959},0).wait(1).to({y:463.5,alpha:0.975},0).wait(1).to({y:463.7,alpha:0.987},0).wait(1).to({y:463.9,alpha:0.994},0).wait(1).to({y:464,alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},57).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-586.1,-418.5,1348.2,913.6);


(lib.mouse_icon_full = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mouse_icon();
	this.instance.setTransform(321.1,333.5,1,1,0,0,0,87.8,94.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(137,219,243,0.918)").s().p("EgjdAjeQusutAA0xQAA0wOsutQOtusUwAAQUyAAOrOsQOtOtAAUwQAAUxutOtQurOs0yAAQ0wAAutusg");
	this.shape.setTransform(321.1,321);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,642.1,642.1);


(lib.MainScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"/Index":30,"/Feature":60,"/Watch":90,"/Detail":120,"/Prize":150,"/CardGame":180});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1027));

	// ContentContainer(Empty)
	this.contentContainer = new lib.ContentContainer();

	this.timeline.addTween(cjs.Tween.get(this.contentContainer).to({_off:true},235).wait(792));

	// L
	this.instance = new lib.Trees("single",1);
	this.instance.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({_off:true},1).wait(846));

	// R
	this.instance_1 = new lib.Trees("single",3);
	this.instance_1.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({_off:true},1).wait(846));

	// L
	this.instance_2 = new lib.Trees("single",1);
	this.instance_2.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({_off:true},1).wait(846));

	// R
	this.instance_3 = new lib.Trees("single",3);
	this.instance_3.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({_off:true},1).wait(846));

	// L
	this.instance_4 = new lib.Trees("single",1);
	this.instance_4.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({_off:true},1).wait(846));

	// R
	this.instance_5 = new lib.Trees("single",3);
	this.instance_5.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({_off:true},1).wait(846));

	// L
	this.instance_6 = new lib.Trees("single",1);
	this.instance_6.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({scaleX:0.93,scaleY:0.93,x:-387,y:280.8},30).to({_off:true},1).wait(846));

	// R
	this.instance_7 = new lib.Trees("single",3);
	this.instance_7.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({scaleX:0.93,scaleY:0.93,x:473.3,y:277.8},30).to({_off:true},1).wait(846));

	// L
	this.instance_8 = new lib.Trees("single",0);
	this.instance_8.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({scaleX:0.93,scaleY:0.93,x:-397,y:280.8},30).to({scaleX:0.7,scaleY:0.7,x:-257.6,y:222.4},30).to({_off:true},1).wait(846));

	// R
	this.instance_9 = new lib.Trees("single",2);
	this.instance_9.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({scaleX:0.93,scaleY:0.93,x:473.3,y:277.8},30).to({scaleX:0.7,scaleY:0.7,x:370.7,y:222.1},30).to({_off:true},1).wait(846));

	// L
	this.instance_10 = new lib.Trees("single",0);
	this.instance_10.setTransform(-1195.1,714.1,2.444,2.444);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:-1076,y:651.6,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({scaleX:0.93,scaleY:0.93,x:-401,y:280.8},30).to({scaleX:0.7,scaleY:0.7,x:-257.6,y:219.4},29).to({_off:true},1).wait(877));

	// R
	this.instance_11 = new lib.Trees("single",3);
	this.instance_11.setTransform(1186.7,708.2,2.444,2.444);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({scaleX:2.2,scaleY:2.2,x:1067.6,y:646.2,alpha:1},10).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({scaleX:0.93,scaleY:0.93,x:473.3,y:277.8},30).to({scaleX:0.7,scaleY:0.7,x:370.7,y:234.1},29).to({_off:true},1).wait(877));

	// L
	this.instance_12 = new lib.Trees("single",1);
	this.instance_12.setTransform(-1076,651.6,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1.65,scaleY:1.65,x:-808,y:510.9},30).to({scaleX:1.24,scaleY:1.24,x:-590.3,y:385.4},30).to({scaleX:0.93,scaleY:0.93,x:-387,y:280.8},30).to({scaleX:0.7,scaleY:0.7,x:-257.6,y:233.4},29).to({_off:true},1).wait(907));

	// R
	this.instance_13 = new lib.Trees("single",2);
	this.instance_13.setTransform(1067.6,646.2,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1.65,scaleY:1.65,x:799.7,y:506.9},30).to({scaleX:1.24,scaleY:1.24,x:633.5,y:381.4},30).to({scaleX:0.93,scaleY:0.93,x:473.3,y:277.8},30).to({scaleX:0.7,scaleY:0.7,x:370.7,y:219.1},29).to({_off:true},1).wait(907));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E5E5").s().p("EhswAXIQUNvFTUrdQTHrYR/nvQFYgKHjgJQPFgTK1AAQMVAAQkATQISAKF0AKQSHKaOnLSQOsLTLsMpg");
	this.shape.setTransform(0.5,371.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},235).wait(792));

	// Layer 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(219,213,135,0)","rgba(219,213,135,0.902)"],[0.537,1],0,148.5,0,-148.4).s().p("EiWUAXIMAAAgm9QSQh1dBh0UA6DgDpA10AAAUA11AAAAxPADpQPYBJNFBXQGiAsDeAdMAAAAm9g");
	this.shape_1.setTransform(-0.2,371.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},235).wait(792));

	// Layer 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiWUAXIMAAAgm9QSQh1dBh0UA6DgDpA10AAAUA11AAAAxPADpQPYBJNFBXQGiAsDeAdMAAAAm9g");
	mask.setTransform(-0.2,371.9);

	// Layer 2
	this.instance_14 = new lib.wfesgcopy();
	this.instance_14.setTransform(893.4,875.2,1.543,1.324,0,0,0,1012.4,493.5);
	this.instance_14._off = true;

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({_off:false},0).to({regX:1012.5,regY:493.4,scaleX:0.88,scaleY:0.76,skewX:-6.2,x:33.9,y:267.7},150).to({_off:true},55).wait(792));

	// Layer 20
	this.instance_15 = new lib.wfesg();
	this.instance_15.setTransform(-855,875.2,1.543,1.324,0,0,0,1012.4,493.5);
	this.instance_15._off = true;

	this.instance_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({regY:493.6,scaleX:0.71,scaleY:0.73,skewX:11.6,x:-158.9,y:264.3},150).to({_off:true},55).wait(792));

	// Layer 16
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBD587").s().p("EiWUAXIMAAAgm9QSQh1dBh0UA6DgDpA10AAAUA11AAAAxPADpQPYBJNFBXQGiAsDeAdMAAAAm9g");
	this.shape_2.setTransform(-0.2,371.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},235).wait(792));

	// L
	this.instance_16 = new lib.Trees("single",0);
	this.instance_16.setTransform(-257.6,219.4,0.696,0.696);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(150).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:-179,y:258},30).to({scaleX:0.46,scaleY:0.46,x:-151.5,y:251.8,alpha:0},14).to({_off:true},1).wait(832));

	// Trees
	this.instance_17 = new lib.Trees("single",3);
	this.instance_17.setTransform(370.7,234.1,0.696,0.696);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(150).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:292.2,y:257.9},30).to({scaleX:0.46,scaleY:0.46,x:264.7,y:251.7,alpha:0},14).to({_off:true},1).wait(832));

	// L
	this.instance_18 = new lib.Trees("single",1);
	this.instance_18.setTransform(-257.6,233.4,0.696,0.696);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:-179,y:258},30).to({scaleX:0.46,scaleY:0.46,x:-151.5,y:251.8,alpha:0},14).to({_off:true},1).wait(862));

	// Trees
	this.instance_19 = new lib.Trees("single",2);
	this.instance_19.setTransform(370.7,219.1,0.696,0.696);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:292.2,y:257.9},30).to({scaleX:0.46,scaleY:0.46,x:264.7,y:251.7,alpha:0},14).to({_off:true},1).wait(862));

	// Sea
	this.instance_20 = new lib.index_sea();
	this.instance_20.setTransform(-960,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},235).wait(792));

	// Sky
	this.instance_21 = new lib.index_sky();
	this.instance_21.setTransform(-960,-520);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},235).wait(792));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1307,-556.2,2612.2,1279.4);


(lib.IndexClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":10,"StageInComplete":72});

	// index_ball03.png
	this.instance = new lib.ball02();
	this.instance.setTransform(-589.6,344.7,1,1,0,0,0,67,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:-731.6,y:344.6,alpha:0},0).wait(1).to({x:-695.7,alpha:0.253},0).wait(1).to({x:-682.3,alpha:0.347},0).wait(1).to({x:-672.7,alpha:0.415},0).wait(1).to({x:-665,alpha:0.469},0).wait(1).to({x:-658.5,alpha:0.515},0).wait(1).to({x:-652.9,alpha:0.554},0).wait(1).to({x:-648,alpha:0.589},0).wait(1).to({x:-643.5,alpha:0.62},0).wait(1).to({x:-639.6,alpha:0.648},0).wait(1).to({x:-635.9,alpha:0.674},0).wait(1).to({x:-632.6,alpha:0.697},0).wait(1).to({x:-629.6,alpha:0.719},0).wait(1).to({x:-626.7,alpha:0.739},0).wait(1).to({x:-624.1,alpha:0.757},0).wait(1).to({x:-621.7,alpha:0.774},0).wait(1).to({x:-619.4,alpha:0.79},0).wait(1).to({x:-617.3,alpha:0.805},0).wait(1).to({x:-615.3,alpha:0.819},0).wait(1).to({x:-613.5,alpha:0.832},0).wait(1).to({x:-611.8,alpha:0.844},0).wait(1).to({x:-610.1,alpha:0.855},0).wait(1).to({x:-608.6,alpha:0.866},0).wait(1).to({x:-607.2,alpha:0.876},0).wait(1).to({x:-605.8,alpha:0.886},0).wait(1).to({x:-604.6,alpha:0.895},0).wait(1).to({x:-603.4,alpha:0.903},0).wait(1).to({x:-602.3,alpha:0.911},0).wait(1).to({x:-601.2,alpha:0.918},0).wait(1).to({x:-600.3,alpha:0.925},0).wait(1).to({x:-599.3,alpha:0.931},0).wait(1).to({x:-598.5,alpha:0.938},0).wait(1).to({x:-597.7,alpha:0.943},0).wait(1).to({x:-596.9,alpha:0.948},0).wait(1).to({x:-596.2,alpha:0.953},0).wait(1).to({x:-595.6,alpha:0.958},0).wait(1).to({x:-594.9,alpha:0.962},0).wait(1).to({x:-594.4,alpha:0.966},0).wait(1).to({x:-593.9,alpha:0.97},0).wait(1).to({x:-593.4,alpha:0.973},0).wait(1).to({x:-592.9,alpha:0.977},0).wait(1).to({x:-592.5,alpha:0.98},0).wait(1).to({x:-592.1,alpha:0.982},0).wait(1).to({x:-591.8,alpha:0.985},0).wait(1).to({x:-591.5,alpha:0.987},0).wait(1).to({x:-591.2,alpha:0.989},0).wait(1).to({x:-590.9,alpha:0.991},0).wait(1).to({x:-590.7,alpha:0.992},0).wait(1).to({x:-590.5,alpha:0.994},0).wait(1).to({x:-590.3,alpha:0.995},0).wait(1).to({x:-590.2,alpha:0.996},0).wait(1).to({x:-590,alpha:0.997},0).wait(1).to({x:-589.9,alpha:0.998},0).wait(1).to({x:-589.8},0).wait(1).to({alpha:0.999},0).wait(1).to({x:-589.7},0).wait(1).to({alpha:1},0).wait(1).to({x:-589.6},0).wait(4).to({y:344.7},0).wait(58));

	// index_ball01.png
	this.instance_1 = new lib.ball01();
	this.instance_1.setTransform(-596.1,325.1,1,1,0,0,0,73.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({x:-738.1,alpha:0},0).wait(1).to({rotation:91.1,x:-702.2,alpha:0.253},0).wait(1).to({rotation:125,x:-688.8,alpha:0.347},0).wait(1).to({rotation:149.4,x:-679.1,alpha:0.415},0).wait(1).to({rotation:168.9,x:-671.5,y:325,alpha:0.469},0).wait(1).to({rotation:185.3,x:-665,y:325.1,alpha:0.515},0).wait(1).to({rotation:199.5,x:-659.4,alpha:0.554},0).wait(1).to({rotation:212.1,x:-654.5,alpha:0.589},0).wait(1).to({rotation:223.3,x:-650.1,alpha:0.62},0).wait(1).to({rotation:233.4,x:-646,alpha:0.648},0).wait(1).to({rotation:242.6,x:-642.4,y:325,alpha:0.674},0).wait(1).to({rotation:251,x:-639.1,y:325.1,alpha:0.697},0).wait(1).to({rotation:258.7,x:-636,alpha:0.719},0).wait(1).to({rotation:265.9,x:-633.2,alpha:0.739},0).wait(1).to({rotation:272.5,x:-630.6,alpha:0.757},0).wait(1).to({rotation:278.7,x:-628.2,alpha:0.774},0).wait(1).to({rotation:284.4,x:-625.9,alpha:0.79},0).wait(1).to({rotation:289.7,x:-623.8,alpha:0.805},0).wait(1).to({rotation:294.8,x:-621.8,alpha:0.819},0).wait(1).to({rotation:299.4,x:-620,alpha:0.832},0).wait(1).to({rotation:303.8,x:-618.3,alpha:0.844},0).wait(1).to({rotation:307.9,x:-616.6,alpha:0.855},0).wait(1).to({rotation:311.8,x:-615.1,alpha:0.866},0).wait(1).to({rotation:315.4,x:-613.7,alpha:0.876},0).wait(1).to({rotation:318.8,x:-612.3,alpha:0.886},0).wait(1).to({rotation:322,x:-611.1,alpha:0.895},0).wait(1).to({rotation:325,x:-609.9,alpha:0.903},0).wait(1).to({rotation:327.9,x:-608.8,alpha:0.911},0).wait(1).to({rotation:330.5,x:-607.7,alpha:0.918},0).wait(1).to({rotation:333,x:-606.7,alpha:0.925},0).wait(1).to({rotation:335.3,x:-605.8,alpha:0.931},0).wait(1).to({rotation:337.5,x:-605,alpha:0.938},0).wait(1).to({rotation:339.5,x:-604.2,alpha:0.943},0).wait(1).to({rotation:341.5,x:-603.4,alpha:0.948},0).wait(1).to({rotation:343.2,x:-602.7,alpha:0.953},0).wait(1).to({rotation:344.9,x:-602.1,alpha:0.958},0).wait(1).to({rotation:346.4,x:-601.4,alpha:0.962},0).wait(1).to({rotation:347.9,x:-600.9,alpha:0.966},0).wait(1).to({rotation:349.2,x:-600.4,alpha:0.97},0).wait(1).to({rotation:350.4,x:-599.8,alpha:0.973},0).wait(1).to({rotation:351.6,x:-599.4,alpha:0.977},0).wait(1).to({rotation:352.6,x:-599,alpha:0.98},0).wait(1).to({rotation:353.6,x:-598.6,alpha:0.982},0).wait(1).to({rotation:354.5,x:-598.3,alpha:0.985},0).wait(1).to({rotation:355.3,x:-598,alpha:0.987},0).wait(1).to({rotation:356,x:-597.7,alpha:0.989},0).wait(1).to({rotation:356.6,x:-597.5,alpha:0.991},0).wait(1).to({rotation:357.2,x:-597.2,alpha:0.992},0).wait(1).to({rotation:357.7,x:-597,alpha:0.994},0).wait(1).to({rotation:358.2,x:-596.8,alpha:0.995},0).wait(1).to({rotation:358.6,x:-596.7,alpha:0.996},0).wait(1).to({rotation:358.9,x:-596.5,alpha:0.997},0).wait(1).to({rotation:359.2,x:-596.4,alpha:0.998},0).wait(1).to({rotation:359.4},0).wait(1).to({rotation:359.6,x:-596.2,alpha:0.999},0).wait(1).to({rotation:359.7},0).wait(1).to({rotation:359.8,alpha:1},0).wait(1).to({rotation:359.9,x:-596.1},0).wait(1).to({rotation:360},0).wait(61));

	// index_ball02.png
	this.instance_2 = new lib.ball03();
	this.instance_2.setTransform(-585.6,387.1,1,1,0,0,0,63,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({x:-726.5,alpha:0},0).wait(1).to({x:-690.8,alpha:0.253},0).wait(1).to({x:-677.6,alpha:0.347},0).wait(1).to({x:-668,alpha:0.415},0).wait(1).to({x:-660.4,alpha:0.469},0).wait(1).to({x:-654,alpha:0.515},0).wait(1).to({x:-648.4,alpha:0.554},0).wait(1).to({x:-643.5,alpha:0.589},0).wait(1).to({x:-639.1,alpha:0.62},0).wait(1).to({x:-635.2,alpha:0.648},0).wait(1).to({x:-631.6,alpha:0.674},0).wait(1).to({x:-628.3,alpha:0.697},0).wait(1).to({x:-625.2,alpha:0.719},0).wait(1).to({x:-622.4,alpha:0.739},0).wait(1).to({x:-619.8,alpha:0.757},0).wait(1).to({x:-617.4,alpha:0.774},0).wait(1).to({x:-615.2,alpha:0.79},0).wait(1).to({x:-613.1,alpha:0.805},0).wait(1).to({x:-611.1,alpha:0.819},0).wait(1).to({x:-609.3,alpha:0.832},0).wait(1).to({x:-607.6,alpha:0.844},0).wait(1).to({x:-606,alpha:0.855},0).wait(1).to({x:-604.5,alpha:0.866},0).wait(1).to({x:-603,alpha:0.876},0).wait(1).to({x:-601.7,alpha:0.886},0).wait(1).to({x:-600.5,alpha:0.895},0).wait(1).to({x:-599.3,alpha:0.903},0).wait(1).to({x:-598.2,alpha:0.911},0).wait(1).to({x:-597.1,alpha:0.918},0).wait(1).to({x:-596.2,alpha:0.925},0).wait(1).to({x:-595.3,alpha:0.931},0).wait(1).to({x:-594.4,alpha:0.938},0).wait(1).to({x:-593.6,alpha:0.943},0).wait(1).to({x:-592.9,alpha:0.948},0).wait(1).to({x:-592.2,alpha:0.953},0).wait(1).to({x:-591.5,alpha:0.958},0).wait(1).to({x:-590.9,alpha:0.962},0).wait(1).to({x:-590.3,alpha:0.966},0).wait(1).to({x:-589.8,alpha:0.97},0).wait(1).to({x:-589.3,alpha:0.973},0).wait(1).to({x:-588.9,alpha:0.977},0).wait(1).to({x:-588.5,alpha:0.98},0).wait(1).to({x:-588.1,alpha:0.982},0).wait(1).to({x:-587.8,alpha:0.985},0).wait(1).to({x:-587.5,alpha:0.987},0).wait(1).to({x:-587.2,alpha:0.989},0).wait(1).to({x:-586.9,alpha:0.991},0).wait(1).to({x:-586.7,alpha:0.992},0).wait(1).to({x:-586.5,alpha:0.994},0).wait(1).to({x:-586.3,alpha:0.995},0).wait(1).to({x:-586.2,alpha:0.996},0).wait(1).to({x:-586,alpha:0.997},0).wait(1).to({x:-585.9,alpha:0.998},0).wait(1).to({x:-585.8},0).wait(1).to({alpha:0.999},0).wait(1).to({x:-585.7},0).wait(1).to({alpha:1},0).wait(1).to({x:-585.6},0).wait(62));

	// LeftBike
	this.instance_3 = new lib.IndexLeft();
	this.instance_3.setTransform(-138,164.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({scaleX:0.29,scaleY:0.29,x:-19,y:190.6,alpha:0},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-19.1,y:190.5,alpha:0.001},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-19.4,alpha:0.004},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-20,y:190.3,alpha:0.008},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-20.9,y:190.1,alpha:0.016},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-22.1,y:189.9,alpha:0.026},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-23.8,y:189.5,alpha:0.04},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-25.9,y:189,alpha:0.058},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-28.8,y:188.4,alpha:0.082},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-32.4,y:187.6,alpha:0.113},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-37.2,y:186.5,alpha:0.153},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-43.6,y:185.1,alpha:0.206},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-52,y:183.2,alpha:0.277},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-63.2,y:180.7,alpha:0.371},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-76.6,y:177.7,alpha:0.484},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-90,y:174.7,alpha:0.597},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-101,y:172.3,alpha:0.689},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-109.5,y:170.4,alpha:0.761},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-116.1,y:168.9,alpha:0.816},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-121.1,y:167.8,alpha:0.858},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-125.1,y:166.9,alpha:0.892},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-128.3,y:166.2,alpha:0.918},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-130.8,y:165.7,alpha:0.939},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-132.8,y:165.2,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-134.4,y:164.9,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-135.6,y:164.6,alpha:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-136.5,y:164.4,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,x:-137.2,y:164.2,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:-137.7,y:164.1,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,x:-137.9,alpha:0.999},0).wait(1).to({x:-138,alpha:1},0).wait(89));

	// RightBike
	this.instance_4 = new lib.IndexRight();
	this.instance_4.setTransform(203,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({scaleX:0.3,scaleY:0.3,x:117.6,y:190.2,alpha:0},0).wait(1).to({regX:1.6,regY:-0.4,scaleX:0.3,scaleY:0.3,x:118.1,y:190,alpha:0.001},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:118.4,y:189.9,alpha:0.004},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:118.8,y:189.8,alpha:0.008},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:119.4,y:189.5,alpha:0.016},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:120.3,y:189.1,alpha:0.026},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:121.5,y:188.6,alpha:0.04},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:123.1,y:188,alpha:0.058},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:125.1,y:187.2,alpha:0.082},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:127.8,y:186.2,alpha:0.113},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:131.3,y:184.8,alpha:0.153},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:135.9,y:182.9,alpha:0.206},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:142,y:180.5,alpha:0.277},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:150.1,y:177.3,alpha:0.371},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:159.9,y:173.4,alpha:0.484},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:169.7,y:169.5,alpha:0.597},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:177.7,y:166.3,alpha:0.689},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:183.9,y:163.9,alpha:0.761},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:188.6,y:162,alpha:0.816},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:192.3,y:160.5,alpha:0.858},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:195.2,y:159.4,alpha:0.892},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:197.5,y:158.4,alpha:0.918},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:199.3,y:157.7,alpha:0.939},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:200.8,y:157.1,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:201.9,y:156.7,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:202.8,y:156.3,alpha:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:203.5,y:156.1,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,x:204,y:155.9,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:204.3,y:155.7,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,x:204.5,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:203,y:156.1,alpha:1},0).wait(89));

	// StartButton
	this.startClip = new lib.IndexButtonCombo();
	this.startClip.setTransform(481.5,309.1);
	this.startClip.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.startClip).wait(45).to({regX:1.4,regY:-147,x:482.9,y:162.1,alpha:0.002},0).wait(1).to({y:162.3,alpha:0.007},0).wait(1).to({y:162.7,alpha:0.016},0).wait(1).to({y:163.2,alpha:0.03},0).wait(1).to({y:164,alpha:0.049},0).wait(1).to({y:165,alpha:0.073},0).wait(1).to({y:166.2,alpha:0.104},0).wait(1).to({y:167.7,alpha:0.142},0).wait(1).to({y:169.6,alpha:0.188},0).wait(1).to({y:171.7,alpha:0.242},0).wait(1).to({y:174.2,alpha:0.304},0).wait(1).to({y:177,alpha:0.374},0).wait(1).to({y:180,alpha:0.45},0).wait(1).to({y:183.2,alpha:0.528},0).wait(1).to({y:186.3,alpha:0.605},0).wait(1).to({y:189.2,alpha:0.678},0).wait(1).to({y:191.8,alpha:0.743},0).wait(1).to({y:194.1,alpha:0.8},0).wait(1).to({y:196,alpha:0.849},0).wait(1).to({y:197.6,alpha:0.89},0).wait(1).to({y:198.9,alpha:0.922},0).wait(1).to({y:200,alpha:0.948},0).wait(1).to({y:200.8,alpha:0.968},0).wait(1).to({y:201.4,alpha:0.983},0).wait(1).to({y:201.8,alpha:0.993},0).wait(1).to({y:202,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:481.5,y:349.1,alpha:1},0).wait(58));

	// index_tit104
	this.instance_5 = new lib.index_tit104_1();
	this.instance_5.setTransform(407.5,-529.9,1,1,0,0,0,41,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},10).wait(34).to({_off:false},0).wait(1).to({regY:41,y:-554.1},0).wait(1).to({y:-543.2},0).wait(1).to({y:-523.1},0).wait(1).to({y:-492.6},0).wait(1).to({y:-453.3},0).wait(1).to({y:-415.4},0).wait(1).to({regY:68.5,y:-371.9},0).to({scaleY:0.84},2,cjs.Ease.get(1)).to({scaleY:1,y:-404.9},4).to({y:-371.9},4).to({scaleY:0.84},2).to({scaleY:1},4).wait(62));

	// index_tit106
	this.instance_6 = new lib.index_tit106();
	this.instance_6.setTransform(-95.6,-407.7,1,1,0,0,0,127,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},9).wait(20).to({_off:false,x:-115.6,alpha:0},0).wait(1).to({x:-115.5,alpha:0.003},0).wait(1).to({x:-115.3,alpha:0.012},0).wait(1).to({x:-114.9,alpha:0.03},0).wait(1).to({x:-114.4,alpha:0.059},0).wait(1).to({x:-113.5,alpha:0.103},0).wait(1).to({x:-112.2,alpha:0.166},0).wait(1).to({x:-110.4,alpha:0.256},0).wait(1).to({x:-108.1,alpha:0.374},0).wait(1).to({x:-105.4,alpha:0.505},0).wait(1).to({x:-103,alpha:0.625},0).wait(1).to({x:-101.1,alpha:0.722},0).wait(1).to({x:-99.6,alpha:0.796},0).wait(1).to({x:-98.5,alpha:0.853},0).wait(1).to({x:-97.6,alpha:0.896},0).wait(1).to({x:-97,alpha:0.929},0).wait(1).to({x:-96.5,alpha:0.954},0).wait(1).to({x:-96.1,alpha:0.972},0).wait(1).to({x:-95.8,alpha:0.985},0).wait(1).to({x:-95.7,alpha:0.994},0).wait(1).to({x:-95.6,alpha:0.999},0).wait(1).to({alpha:1},0).wait(79));

	// index_tit105
	this.instance_7 = new lib.index_tit105_1();
	this.instance_7.setTransform(7.6,-211.5,1,1,0,0,0,264.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},9).wait(17).to({_off:false,x:27.6,alpha:0},0).wait(1).to({alpha:0.003},0).wait(1).to({x:27.4,alpha:0.012},0).wait(1).to({x:27,alpha:0.03},0).wait(1).to({x:26.5,alpha:0.059},0).wait(1).to({x:25.6,alpha:0.103},0).wait(1).to({x:24.3,alpha:0.166},0).wait(1).to({x:22.5,alpha:0.256},0).wait(1).to({x:20.2,alpha:0.374},0).wait(1).to({x:17.5,alpha:0.505},0).wait(1).to({x:15.1,alpha:0.625},0).wait(1).to({x:13.2,alpha:0.722},0).wait(1).to({x:11.7,alpha:0.796},0).wait(1).to({x:10.6,alpha:0.853},0).wait(1).to({x:9.7,alpha:0.896},0).wait(1).to({x:9.1,alpha:0.929},0).wait(1).to({x:8.6,alpha:0.954},0).wait(1).to({x:8.2,alpha:0.972},0).wait(1).to({x:7.9,alpha:0.985},0).wait(1).to({x:7.8,alpha:0.994},0).wait(1).to({x:7.7,alpha:0.999},0).wait(1).to({x:7.6,alpha:1},0).wait(82));

	// index_tit103
	this.instance_8 = new lib.index_tit103_1();
	this.instance_8.setTransform(274.8,-307.7,1,1,0,0,0,145.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},9).wait(14).to({_off:false,y:-287.7,alpha:0},0).wait(1).to({y:-287.8,alpha:0.003},0).wait(1).to({y:-287.9,alpha:0.012},0).wait(1).to({y:-288.3,alpha:0.03},0).wait(1).to({y:-288.9,alpha:0.059},0).wait(1).to({y:-289.8,alpha:0.103},0).wait(1).to({y:-291,alpha:0.166},0).wait(1).to({y:-292.8,alpha:0.256},0).wait(1).to({y:-295.2,alpha:0.374},0).wait(1).to({y:-297.8,alpha:0.505},0).wait(1).to({y:-300.2,alpha:0.625},0).wait(1).to({y:-302.1,alpha:0.722},0).wait(1).to({y:-303.6,alpha:0.796},0).wait(1).to({y:-304.8,alpha:0.853},0).wait(1).to({y:-305.6,alpha:0.896},0).wait(1).to({y:-306.3,alpha:0.929},0).wait(1).to({y:-306.8,alpha:0.954},0).wait(1).to({y:-307.1,alpha:0.972},0).wait(1).to({y:-307.4,alpha:0.985},0).wait(1).to({y:-307.6,alpha:0.994},0).wait(1).to({y:-307.7,alpha:0.999},0).wait(1).to({alpha:1},0).wait(85));

	// index_tit102
	this.instance_9 = new lib.index_tit102_1();
	this.instance_9.setTransform(15.4,-313.2,1,1,0,0,0,146.5,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},9).wait(11).to({_off:false,y:-333.2,alpha:0},0).wait(1).to({y:-333.1,alpha:0.003},0).wait(1).to({y:-333,alpha:0.012},0).wait(1).to({y:-332.6,alpha:0.03},0).wait(1).to({y:-332,alpha:0.059},0).wait(1).to({y:-331.1,alpha:0.103},0).wait(1).to({y:-329.9,alpha:0.166},0).wait(1).to({y:-328.1,alpha:0.256},0).wait(1).to({y:-325.7,alpha:0.374},0).wait(1).to({y:-323.1,alpha:0.505},0).wait(1).to({y:-320.7,alpha:0.625},0).wait(1).to({y:-318.8,alpha:0.722},0).wait(1).to({y:-317.3,alpha:0.796},0).wait(1).to({y:-316.1,alpha:0.853},0).wait(1).to({y:-315.3,alpha:0.896},0).wait(1).to({y:-314.6,alpha:0.929},0).wait(1).to({y:-314.1,alpha:0.954},0).wait(1).to({y:-313.8,alpha:0.972},0).wait(1).to({y:-313.5,alpha:0.985},0).wait(1).to({y:-313.3,alpha:0.994},0).wait(1).to({y:-313.2,alpha:0.999},0).wait(1).to({alpha:1},0).wait(88));

	// index_tit101
	this.instance_10 = new lib.index_tit101_1();
	this.instance_10.setTransform(-284.7,-368.1,1,1,0,0,0,181,132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},9).wait(8).to({_off:false,y:-348.1,alpha:0},0).wait(1).to({y:-348.2,alpha:0.003},0).wait(1).to({y:-348.3,alpha:0.012},0).wait(1).to({y:-348.7,alpha:0.03},0).wait(1).to({y:-349.3,alpha:0.059},0).wait(1).to({y:-350.2,alpha:0.103},0).wait(1).to({y:-351.4,alpha:0.166},0).wait(1).to({y:-353.2,alpha:0.256},0).wait(1).to({y:-355.6,alpha:0.374},0).wait(1).to({y:-358.2,alpha:0.505},0).wait(1).to({y:-360.6,alpha:0.625},0).wait(1).to({y:-362.5,alpha:0.722},0).wait(1).to({y:-364,alpha:0.796},0).wait(1).to({y:-365.2,alpha:0.853},0).wait(1).to({y:-366,alpha:0.896},0).wait(1).to({y:-366.7,alpha:0.929},0).wait(1).to({y:-367.2,alpha:0.954},0).wait(1).to({y:-367.5,alpha:0.972},0).wait(1).to({y:-367.8,alpha:0.985},0).wait(1).to({y:-368,alpha:0.994},0).wait(1).to({y:-368.1,alpha:0.999},0).wait(1).to({alpha:1},0).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-669.6,-598.4,1303.6,1107.5);


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
p.nominalBounds = new cjs.Rectangle(-380.5,-232,790.6,464);


(lib.FeatureClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":12,"StageInComplete":72,ToDetail:89,ToDetailComplete:105});

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-483.1,299,1,1,0,0,0,0,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},12).wait(36).to({_off:false,x:-453.1,alpha:0},0).wait(1).to({x:-453.2,alpha:0.003},0).wait(1).to({x:-453.5,alpha:0.015},0).wait(1).to({x:-454.2,alpha:0.035},0).wait(1).to({x:-455.1,alpha:0.068},0).wait(1).to({x:-456.6,alpha:0.115},0).wait(1).to({x:-458.5,alpha:0.181},0).wait(1).to({x:-461.1,alpha:0.268},0).wait(1).to({x:-464.4,alpha:0.378},0).wait(1).to({x:-468.2,alpha:0.503},0).wait(1).to({x:-471.9,alpha:0.627},0).wait(1).to({x:-475.2,alpha:0.736},0).wait(1).to({x:-477.8,alpha:0.822},0).wait(1).to({x:-479.7,alpha:0.886},0).wait(1).to({x:-481.1,alpha:0.933},0).wait(1).to({x:-482,alpha:0.965},0).wait(1).to({x:-482.7,alpha:0.985},0).wait(1).to({x:-483,alpha:0.997},0).wait(1).to({x:-483.1,alpha:1},0).wait(62));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(529,308.1,1,1,0,0,0,0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(36).to({_off:false,x:519,alpha:0},0).wait(1).to({alpha:0.003},0).wait(1).to({x:519.1,alpha:0.015},0).wait(1).to({x:519.4,alpha:0.035},0).wait(1).to({x:519.7,alpha:0.068},0).wait(1).to({x:520.2,alpha:0.115},0).wait(1).to({x:520.8,alpha:0.181},0).wait(1).to({x:521.7,alpha:0.268},0).wait(1).to({x:522.8,alpha:0.378},0).wait(1).to({x:524,alpha:0.503},0).wait(1).to({x:525.3,alpha:0.627},0).wait(1).to({x:526.4,alpha:0.736},0).wait(1).to({x:527.2,alpha:0.822},0).wait(1).to({x:527.9,alpha:0.886},0).wait(1).to({x:528.3,alpha:0.933},0).wait(1).to({x:528.6,alpha:0.965},0).wait(1).to({x:528.9,alpha:0.985},0).wait(1).to({x:529,alpha:0.997},0).wait(1).to({alpha:1},0).wait(62));

	// ProgressDot
	this.progressDot = new lib.ProgressDot();
	this.progressDot.setTransform(0,280);
	this.progressDot.alpha = 0;
	this.progressDot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressDot).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// L_Btn
	this.btnLeft = new lib.BtnToRight();
	this.btnLeft.setTransform(-538,-1,1,1,0,0,180);
	this.btnLeft.alpha = 0;
	this.btnLeft._off = true;
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.BtnToRight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// R_Btn
	this.btnRight = new lib.BtnToRight();
	this.btnRight.setTransform(538,-1);
	this.btnRight.alpha = 0;
	this.btnRight._off = true;
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.BtnToRight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnRight).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// DetailClip
	this.detailContainer = new lib.FeatureDetailContainer();
	this.detailContainer.setTransform(-15,-21);
	this.detailContainer.alpha = 0;
	this.detailContainer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.detailContainer).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// BtnBack
	this.btnBack = new lib.FeatureBtnBack();
	this.btnBack.setTransform(0,371);
	this.btnBack.alpha = 0;
	this.btnBack._off = true;
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnBack).wait(90).to({_off:false},0).to({alpha:1},15).wait(23));

	// L_Label
	this.instance_2 = new lib.L_Label();
	this.instance_2.setTransform(-104.6,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},12).wait(33).to({_off:false,x:-64.6,alpha:0},0).wait(1).to({x:-64.8,alpha:0.004},0).wait(1).to({x:-65.3,alpha:0.017},0).wait(1).to({x:-66.2,alpha:0.04},0).wait(1).to({x:-67.7,alpha:0.078},0).wait(1).to({x:-69.9,alpha:0.133},0).wait(1).to({x:-73,alpha:0.209},0).wait(1).to({x:-77,alpha:0.311},0).wait(1).to({x:-82,alpha:0.436},0).wait(1).to({x:-87.4,alpha:0.57},0).wait(1).to({x:-92.3,alpha:0.694},0).wait(1).to({x:-96.4,alpha:0.794},0).wait(1).to({x:-99.4,alpha:0.869},0).wait(1).to({x:-101.5,alpha:0.923},0).wait(1).to({x:-103,alpha:0.96},0).wait(1).to({x:-103.9,alpha:0.984},0).wait(1).to({x:-104.4,alpha:0.996},0).wait(1).to({x:-104.6,alpha:1},0).wait(27).to({alpha:0},15).to({_off:true},1).wait(23));

	// R_Label
	this.instance_3 = new lib.R_Label();
	this.instance_3.setTransform(88,177);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},12).wait(33).to({_off:false,x:48,alpha:0},0).wait(1).to({x:48.1,alpha:0.004},0).wait(1).to({x:48.6,alpha:0.017},0).wait(1).to({x:49.6,alpha:0.04},0).wait(1).to({x:51.1,alpha:0.078},0).wait(1).to({x:53.3,alpha:0.133},0).wait(1).to({x:56.3,alpha:0.209},0).wait(1).to({x:60.4,alpha:0.311},0).wait(1).to({x:65.4,alpha:0.436},0).wait(1).to({x:70.8,alpha:0.57},0).wait(1).to({x:75.7,alpha:0.694},0).wait(1).to({x:79.7,alpha:0.794},0).wait(1).to({x:82.7,alpha:0.869},0).wait(1).to({x:84.9,alpha:0.923},0).wait(1).to({x:86.4,alpha:0.96},0).wait(1).to({x:87.3,alpha:0.984},0).wait(1).to({x:87.8,alpha:0.996},0).wait(1).to({x:88,alpha:1},0).wait(27).to({alpha:0},15).to({_off:true},1).wait(23));

	// DotLine
	this.instance_4 = new lib.BlueDotLine();
	this.instance_4.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},12).wait(27).to({_off:false,scaleY:0.03,alpha:0},0).wait(1).to({scaleY:0.03,alpha:0.003},0).wait(1).to({scaleY:0.04,alpha:0.013},0).wait(1).to({scaleY:0.06,alpha:0.031},0).wait(1).to({scaleY:0.08,alpha:0.06},0).wait(1).to({scaleY:0.12,alpha:0.101},0).wait(1).to({scaleY:0.18,alpha:0.158},0).wait(1).to({scaleY:0.25,alpha:0.233},0).wait(1).to({scaleY:0.35,alpha:0.329},0).wait(1).to({scaleY:0.46,alpha:0.443},0).wait(1).to({scaleY:0.57,alpha:0.563},0).wait(1).to({scaleY:0.68,alpha:0.676},0).wait(1).to({scaleY:0.78,alpha:0.77},0).wait(1).to({scaleY:0.85,alpha:0.844},0).wait(1).to({scaleY:0.9,alpha:0.9},0).wait(1).to({scaleY:0.94,alpha:0.941},0).wait(1).to({scaleY:0.97,alpha:0.969},0).wait(1).to({scaleY:0.99,alpha:0.987},0).wait(1).to({scaleY:1,alpha:0.997},0).wait(1).to({scaleY:1,alpha:1},0).wait(31).to({alpha:0},15).to({_off:true},1).wait(23));

	// L_Bike
	this.leftBike = new lib.L_Bike();
	this.leftBike.setTransform(-262.1,-77);
	this.leftBike.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.leftBike).wait(39).to({x:-222.1,y:-10.5},0).wait(1).to({regX:-16.9,regY:-0.5,x:-239.1,y:-11,alpha:0.003},0).wait(1).to({x:-239.7,alpha:0.013},0).wait(1).to({x:-240.8,alpha:0.031},0).wait(1).to({x:-242.6,alpha:0.06},0).wait(1).to({x:-245,alpha:0.101},0).wait(1).to({x:-248.4,alpha:0.158},0).wait(1).to({x:-252.9,alpha:0.233},0).wait(1).to({x:-258.7,alpha:0.329},0).wait(1).to({x:-265.5,alpha:0.443},0).wait(1).to({x:-272.7,alpha:0.563},0).wait(1).to({x:-279.5,alpha:0.676},0).wait(1).to({x:-285.2,alpha:0.77},0).wait(1).to({x:-289.6,alpha:0.844},0).wait(1).to({x:-293,alpha:0.9},0).wait(1).to({x:-295.4,alpha:0.941},0).wait(1).to({x:-297.1,alpha:0.969},0).wait(1).to({x:-298.2,alpha:0.987},0).wait(1).to({x:-298.8,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:-282.1,y:-10.5,alpha:1},0).wait(31).to({alpha:0},15).to({_off:true},1).wait(23));

	// R_Bike
	this.rightBike = new lib.R_Bike();
	this.rightBike.setTransform(130,-7);
	this.rightBike.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rightBike).wait(40).to({regX:-25.6,regY:0.3,x:104.5,y:-6.7,alpha:0.002},0).wait(1).to({x:105,alpha:0.01},0).wait(1).to({x:105.9,alpha:0.024},0).wait(1).to({x:107.2,alpha:0.046},0).wait(1).to({x:109,alpha:0.077},0).wait(1).to({x:111.5,alpha:0.118},0).wait(1).to({x:114.8,alpha:0.173},0).wait(1).to({x:118.9,alpha:0.242},0).wait(1).to({x:124.1,alpha:0.328},0).wait(1).to({x:130.1,alpha:0.429},0).wait(1).to({x:136.6,alpha:0.537},0).wait(1).to({x:142.9,alpha:0.642},0).wait(1).to({x:148.5,alpha:0.735},0).wait(1).to({x:153.1,alpha:0.812},0).wait(1).to({x:156.8,alpha:0.873},0).wait(1).to({x:159.6,alpha:0.921},0).wait(1).to({x:161.8,alpha:0.956},0).wait(1).to({x:163.3,alpha:0.982},0).wait(1).to({regX:0,regY:0,x:190,y:-7,alpha:1},0).wait(31).to({alpha:0},15).to({_off:true},1).wait(23));

	// product_bg01
	this.instance_5 = new lib.product_bg01_1();
	this.instance_5.setTransform(-157.4,-350.7,1,1,0,0,0,24,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},12).wait(27).to({_off:false,scaleX:0.29,scaleY:0.29,alpha:0},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:1.1,alpha:0.003},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:4.7,alpha:0.013},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:11.3,alpha:0.031},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:21.6,alpha:0.06},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:36.5,alpha:0.101},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:56.9,alpha:0.158},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:84,alpha:0.233},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:118.5,alpha:0.329},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:159.3,alpha:0.443},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:202.7,alpha:0.563},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:243.2,alpha:0.676},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:277.3,alpha:0.77},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:304,alpha:0.844},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:324.1,alpha:0.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:338.7,alpha:0.941},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:348.8,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:355.3,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:358.9,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,alpha:1},0).wait(70));

	// product_bg02
	this.instance_6 = new lib.product_bg02_1();
	this.instance_6.setTransform(-148.6,-350.7,1,1,0,0,0,54,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},12).wait(27).to({_off:false,scaleX:0.44,x:-157.6,alpha:0},0).wait(1).to({scaleX:0.45,alpha:0.003},0).wait(1).to({scaleX:0.45,x:-157.5,alpha:0.013},0).wait(1).to({scaleX:0.46,x:-157.3,alpha:0.031},0).wait(1).to({scaleX:0.48,x:-157.1,alpha:0.06},0).wait(1).to({scaleX:0.5,x:-156.7,alpha:0.101},0).wait(1).to({scaleX:0.53,x:-156.2,alpha:0.158},0).wait(1).to({scaleX:0.57,x:-155.5,alpha:0.233},0).wait(1).to({scaleX:0.63,x:-154.7,alpha:0.329},0).wait(1).to({scaleX:0.69,x:-153.6,alpha:0.443},0).wait(1).to({scaleX:0.76,x:-152.5,alpha:0.563},0).wait(1).to({scaleX:0.82,x:-151.5,alpha:0.676},0).wait(1).to({scaleX:0.87,x:-150.7,alpha:0.77},0).wait(1).to({scaleX:0.91,x:-150,alpha:0.844},0).wait(1).to({scaleX:0.95,x:-149.5,alpha:0.9},0).wait(1).to({scaleX:0.97,x:-149.2,alpha:0.941},0).wait(1).to({scaleX:0.98,x:-148.9,alpha:0.969},0).wait(1).to({scaleX:0.99,x:-148.7,alpha:0.987},0).wait(1).to({scaleX:1,x:-148.6,alpha:0.997},0).wait(1).to({scaleX:1,alpha:1},0).wait(70));

	// product_bg03
	this.instance_7 = new lib.product_bg03_1();
	this.instance_7.setTransform(0,-329.9,1,1,0,0,0,199,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},12).wait(21).to({_off:false,regY:21.8,scaleY:0.14,y:-348.9,alpha:0},0).wait(1).to({regY:22,scaleY:0.14,y:-348.8,alpha:0.002},0).wait(1).to({scaleY:0.14,y:-348.7,alpha:0.01},0).wait(1).to({scaleY:0.16,y:-348.4,alpha:0.023},0).wait(1).to({scaleY:0.17,y:-348,alpha:0.043},0).wait(1).to({scaleY:0.2,y:-347.5,alpha:0.072},0).wait(1).to({scaleY:0.23,y:-346.8,alpha:0.11},0).wait(1).to({scaleY:0.27,y:-345.8,alpha:0.161},0).wait(1).to({scaleY:0.33,y:-344.6,alpha:0.226},0).wait(1).to({scaleY:0.4,y:-343,alpha:0.306},0).wait(1).to({scaleY:0.48,y:-341.2,alpha:0.4},0).wait(1).to({scaleY:0.57,y:-339.2,alpha:0.503},0).wait(1).to({scaleY:0.66,y:-337.2,alpha:0.606},0).wait(1).to({scaleY:0.74,y:-335.5,alpha:0.699},0).wait(1).to({scaleY:0.81,y:-333.9,alpha:0.778},0).wait(1).to({scaleY:0.86,y:-332.7,alpha:0.841},0).wait(1).to({scaleY:0.91,y:-331.7,alpha:0.891},0).wait(1).to({scaleY:0.94,y:-331,alpha:0.929},0).wait(1).to({scaleY:0.96,y:-330.5,alpha:0.958},0).wait(1).to({scaleY:0.98,y:-330.1,alpha:0.977},0).wait(1).to({scaleY:0.99,y:-329.9,alpha:0.991},0).wait(1).to({scaleY:1,y:-329.7,alpha:0.998},0).wait(1).to({scaleY:1,y:-329.9,alpha:1},0).wait(73));

	// product_bg04
	this.instance_8 = new lib.product_bg04_1();
	this.instance_8.setTransform(-128.3,-304.6,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},12).wait(21).to({_off:false,x:-88.3,alpha:0},0).wait(1).to({x:-88.5,alpha:0.002},0).wait(1).to({x:-88.9,alpha:0.01},0).wait(1).to({x:-89.8,alpha:0.024},0).wait(1).to({x:-91.2,alpha:0.044},0).wait(1).to({x:-93.2,alpha:0.074},0).wait(1).to({x:-95.8,alpha:0.114},0).wait(1).to({x:-99.2,alpha:0.167},0).wait(1).to({x:-103.6,alpha:0.234},0).wait(1).to({x:-109.1,alpha:0.317},0).wait(1).to({x:-115.5,alpha:0.414},0).wait(1).to({x:-122.3,alpha:0.519},0).wait(1).to({x:-129.1,alpha:0.621},0).wait(1).to({x:-135.1,alpha:0.713},0).wait(1).to({x:-140.1,alpha:0.789},0).wait(1).to({x:-136.7,alpha:0.849},0).wait(1).to({x:-134.1,alpha:0.896},0).wait(1).to({x:-132.1,alpha:0.932},0).wait(1).to({x:-130.6,alpha:0.959},0).wait(1).to({x:-129.5,alpha:0.978},0).wait(1).to({x:-128.8,alpha:0.991},0).wait(1).to({x:-128.4,alpha:0.998},0).wait(1).to({x:-128.3,alpha:1},0).wait(73));

	// product_bg05
	this.instance_9 = new lib.product_bg05_1();
	this.instance_9.setTransform(129.6,-304.6,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},12).wait(21).to({_off:false,x:89.6,alpha:0},0).wait(1).to({x:89.7,alpha:0.002},0).wait(1).to({x:90.2,alpha:0.01},0).wait(1).to({x:91.1,alpha:0.024},0).wait(1).to({x:92.5,alpha:0.044},0).wait(1).to({x:94.4,alpha:0.074},0).wait(1).to({x:97,alpha:0.114},0).wait(1).to({x:100.5,alpha:0.167},0).wait(1).to({x:104.9,alpha:0.234},0).wait(1).to({x:110.3,alpha:0.317},0).wait(1).to({x:116.7,alpha:0.414},0).wait(1).to({x:123.6,alpha:0.519},0).wait(1).to({x:130.3,alpha:0.621},0).wait(1).to({x:136.3,alpha:0.713},0).wait(1).to({x:141.3,alpha:0.789},0).wait(1).to({x:138,alpha:0.849},0).wait(1).to({x:135.3,alpha:0.896},0).wait(1).to({x:133.3,alpha:0.932},0).wait(1).to({x:131.8,alpha:0.959},0).wait(1).to({x:130.8,alpha:0.978},0).wait(1).to({x:130.1,alpha:0.991},0).wait(1).to({x:129.7,alpha:0.998},0).wait(1).to({x:129.6,alpha:1},0).wait(73));

	// product_bg06
	this.instance_10 = new lib.product_bg06_1();
	this.instance_10.setTransform(0,-316.5,1,1,0,0,0,95,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},12).wait(13).to({_off:false,scaleX:0.16,scaleY:0.16,y:-306.5,alpha:0},0).wait(1).to({scaleX:0.16,scaleY:0.16,alpha:0.001},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:0.1,alpha:0.006},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:0,y:-306.6,alpha:0.015},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:0.1,y:-306.7,alpha:0.027},0).wait(1).to({scaleX:0.2,scaleY:0.2,y:-306.9,alpha:0.045},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-307.1,alpha:0.068},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:0,y:-307.4,alpha:0.098},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:0.1,y:-307.8,alpha:0.135},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:0,y:-308.2,alpha:0.181},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:-308.8,alpha:0.236},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:0.1,y:-309.5,alpha:0.302},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:0,y:-310.2,alpha:0.378},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:-311,alpha:0.46},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:0.1,y:-311.9,alpha:0.545},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-312.7,alpha:0.627},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:0,y:-313.5,alpha:0.702},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-314.1,alpha:0.767},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:0.1,y:-314.7,alpha:0.822},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:0,y:-315.1,alpha:0.867},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:0.1,y:-315.5,alpha:0.904},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-315.8,alpha:0.933},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:0,y:-316,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:0.1,y:-316.2,alpha:0.973},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-316.3,alpha:0.985},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-316.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:0.1,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-316.5,alpha:1},0).wait(76));

	// product_bg07
	this.instance_11 = new lib.product_bg07_1();
	this.instance_11.setTransform(0,-19.7,1,1,0,0,0,481,262);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},12).wait(7).to({_off:false,regX:480.9,regY:262.1,scaleX:0.05,scaleY:0.05,alpha:0},0).wait(1).to({regX:481,regY:262,scaleX:0.06,scaleY:0.06,x:0.1,alpha:0.002},0).wait(1).to({scaleX:0.06,scaleY:0.06,alpha:0.007},0).wait(1).to({scaleX:0.07,scaleY:0.07,alpha:0.017},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:0,alpha:0.032},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:0.1,alpha:0.053},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:0,alpha:0.081},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:0.1,alpha:0.118},0).wait(1).to({scaleX:0.21,scaleY:0.21,alpha:0.163},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.22},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.288},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.368},0).wait(1).to({scaleX:0.49,scaleY:0.49,alpha:0.457},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:0.2,alpha:0.549},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:0.1,alpha:0.637},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:0.2,y:-19.8,alpha:0.716},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.783},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-19.7,alpha:0.839},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.884},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-19.8,alpha:0.947},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.968},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-19.7,alpha:1},0).wait(84));

	// product_bg08
	this.instance_12 = new lib.product_bg08_1();
	this.instance_12.setTransform(0,-56.7,1,1,0,0,0,485,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},12).wait(1).to({_off:false,regX:484.9,scaleX:0.25,scaleY:0.25,alpha:0},0).wait(1).to({regX:485,scaleX:0.25,scaleY:0.25,x:0.1,alpha:0.002},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.007},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.016},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.03},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.049},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.074},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.107},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.148},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.199},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.261},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.333},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.415},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.503},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.59},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.672},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.743},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.804},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.854},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.895},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.927},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.952},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:0.2,alpha:0.971},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.1,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:0,alpha:1},0).wait(89));

	// Layer 2
	this.instance_13 = new lib.product_bg09_1();
	this.instance_13.setTransform(0,391.1,1,1,0,0,0,434.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},12).wait(7).to({_off:false,regX:434.6,regY:31.9,scaleX:0.23,scaleY:0.27,alpha:0},0).wait(1).to({regX:434.5,regY:32,scaleX:0.23,scaleY:0.27,alpha:0.002},0).wait(1).to({scaleX:0.24,scaleY:0.28,alpha:0.007},0).wait(1).to({scaleX:0.24,scaleY:0.28,alpha:0.017},0).wait(1).to({scaleX:0.26,scaleY:0.29,alpha:0.032},0).wait(1).to({scaleX:0.27,scaleY:0.31,alpha:0.053},0).wait(1).to({scaleX:0.29,scaleY:0.33,alpha:0.081},0).wait(1).to({scaleX:0.32,scaleY:0.36,alpha:0.118},0).wait(1).to({scaleX:0.36,scaleY:0.39,alpha:0.163},0).wait(1).to({scaleX:0.4,scaleY:0.43,alpha:0.22},0).wait(1).to({scaleX:0.45,scaleY:0.48,alpha:0.288},0).wait(1).to({scaleX:0.51,scaleY:0.54,y:391.2,alpha:0.368},0).wait(1).to({scaleX:0.58,scaleY:0.6,y:391.1,alpha:0.457},0).wait(1).to({scaleX:0.65,scaleY:0.67,alpha:0.549},0).wait(1).to({scaleX:0.72,scaleY:0.74,alpha:0.637},0).wait(1).to({scaleX:0.78,scaleY:0.79,alpha:0.716},0).wait(1).to({scaleX:0.83,scaleY:0.84,y:391.2,alpha:0.783},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.839},0).wait(1).to({scaleX:0.91,scaleY:0.92,alpha:0.884},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:391.1,alpha:0.92},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.947},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:1,y:391.2,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,y:391.1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-632.1,-374.2,1314.2,852.3);


(lib.DetailClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":11,"StageInComplete":75});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(126));

	// detail_t02
	this.instance = new lib.detail_t02_1();
	this.instance.setTransform(222.2,-19.7,1,1,0,0,0,127,211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},11).wait(45).to({_off:false,alpha:0},0).wait(1).to({regX:134.6,regY:211.3,x:229.8,y:-19.9,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.181},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:127,regY:211.5,x:222.2,y:-19.7,alpha:1},0).wait(52));

	// detail_t01
	this.instance_1 = new lib.detail_t01_1();
	this.instance_1.setTransform(-220.1,-19.7,1,1,0,0,0,125.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},11).wait(45).to({_off:false,alpha:0},0).wait(1).to({regX:128.2,regY:211.7,x:-217.4,y:-18.5,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.181},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:125.5,regY:210.5,x:-220.1,y:-19.7,alpha:1},0).wait(52));

	// DotLine
	this.instance_2 = new lib.BlueDotLine();
	this.instance_2.setTransform(0,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},11).wait(26).to({_off:false,scaleY:0.03,y:-26,alpha:0},0).wait(1).to({scaleY:0.03,alpha:0.003},0).wait(1).to({scaleY:0.04,y:-25.9,alpha:0.013},0).wait(1).to({scaleY:0.06,y:-25.8,alpha:0.031},0).wait(1).to({scaleY:0.08,y:-25.6,alpha:0.06},0).wait(1).to({scaleY:0.12,y:-25.4,alpha:0.101},0).wait(1).to({scaleY:0.18,y:-25,alpha:0.158},0).wait(1).to({scaleY:0.25,y:-24.5,alpha:0.233},0).wait(1).to({scaleY:0.35,y:-23.9,alpha:0.329},0).wait(1).to({scaleY:0.46,y:-23.2,alpha:0.443},0).wait(1).to({scaleY:0.57,y:-22.5,alpha:0.563},0).wait(1).to({scaleY:0.68,y:-21.8,alpha:0.676},0).wait(1).to({scaleY:0.78,y:-21.2,alpha:0.77},0).wait(1).to({scaleY:0.85,y:-20.7,alpha:0.844},0).wait(1).to({scaleY:0.9,y:-20.4,alpha:0.9},0).wait(1).to({scaleY:0.94,y:-20.1,alpha:0.941},0).wait(1).to({scaleY:0.97,y:-19.9,alpha:0.969},0).wait(1).to({scaleY:0.99,y:-19.8,alpha:0.987},0).wait(1).to({scaleY:1,alpha:0.997},0).wait(1).to({scaleY:1,y:-19.7,alpha:1},0).wait(70));

	// L_Bike
	this.leftBike = new lib.L_Bike();
	this.leftBike.setTransform(-538.5,293.6);

	this.timeline.addTween(cjs.Tween.get(this.leftBike).to({_off:true},11).wait(26).to({_off:false,x:-498.5,y:253.6,alpha:0},0).wait(1).to({regX:-16.9,regY:-0.5,x:-515.5,y:253.2,alpha:0.003},0).wait(1).to({x:-515.9,y:253.6,alpha:0.013},0).wait(1).to({x:-516.7,y:254.3,alpha:0.031},0).wait(1).to({x:-517.8,y:255.5,alpha:0.06},0).wait(1).to({x:-519.5,y:257.1,alpha:0.101},0).wait(1).to({x:-521.7,y:259.4,alpha:0.158},0).wait(1).to({x:-524.7,y:262.4,alpha:0.233},0).wait(1).to({x:-528.6,y:266.2,alpha:0.329},0).wait(1).to({x:-533.1,y:270.8,alpha:0.443},0).wait(1).to({x:-537.9,y:275.6,alpha:0.563},0).wait(1).to({x:-542.4,y:280.1,alpha:0.676},0).wait(1).to({x:-546.2,y:283.9,alpha:0.77},0).wait(1).to({x:-549.2,y:286.8,alpha:0.844},0).wait(1).to({x:-551.4,y:289.1,alpha:0.9},0).wait(1).to({x:-553,y:290.7,alpha:0.941},0).wait(1).to({x:-554.2,y:291.8,alpha:0.969},0).wait(1).to({x:-554.9,y:292.5,alpha:0.987},0).wait(1).to({x:-555.3,y:292.9,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:-538.5,y:293.6,alpha:1},0).wait(70));

	// R_Bike
	this.rightBike = new lib.R_Bike();
	this.rightBike.setTransform(469.7,301.1);

	this.timeline.addTween(cjs.Tween.get(this.rightBike).to({_off:true},11).wait(26).to({_off:false,x:429.7,y:261.1,alpha:0},0).wait(1).to({regX:-25.6,regY:0.3,x:404.2,y:261.4,alpha:0.002},0).wait(1).to({x:404.5,y:261.8,alpha:0.01},0).wait(1).to({x:405.1,y:262.3,alpha:0.024},0).wait(1).to({x:405.9,y:263.2,alpha:0.046},0).wait(1).to({x:407.2,y:264.4,alpha:0.077},0).wait(1).to({x:408.8,y:266.1,alpha:0.118},0).wait(1).to({x:411,y:268.3,alpha:0.173},0).wait(1).to({x:413.8,y:271,alpha:0.242},0).wait(1).to({x:417.2,y:274.5,alpha:0.328},0).wait(1).to({x:421.2,y:278.5,alpha:0.429},0).wait(1).to({x:425.6,y:282.8,alpha:0.537},0).wait(1).to({x:429.8,y:287,alpha:0.642},0).wait(1).to({x:433.5,y:290.7,alpha:0.735},0).wait(1).to({x:436.6,y:293.8,alpha:0.812},0).wait(1).to({x:439,y:296.3,alpha:0.873},0).wait(1).to({x:440.9,y:298.2,alpha:0.921},0).wait(1).to({x:442.4,y:299.6,alpha:0.956},0).wait(1).to({x:443.4,y:300.6,alpha:0.982},0).wait(1).to({regX:0,regY:0,x:469.7,y:301.1,alpha:1},0).wait(70));

	// product_bg01
	this.instance_3 = new lib.product_bg01_1();
	this.instance_3.setTransform(-157.4,-350.7,1,1,0,0,0,24,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},11).wait(26).to({_off:false,scaleX:0.29,scaleY:0.29,alpha:0},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:1.1,alpha:0.003},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:4.7,alpha:0.013},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:11.3,alpha:0.031},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:21.6,alpha:0.06},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:36.5,alpha:0.101},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:56.9,alpha:0.158},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:84,alpha:0.233},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:118.5,alpha:0.329},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:159.3,alpha:0.443},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:202.7,alpha:0.563},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:243.2,alpha:0.676},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:277.3,alpha:0.77},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:304,alpha:0.844},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:324.1,alpha:0.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:338.7,alpha:0.941},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:348.8,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:355.3,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:358.9,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,alpha:1},0).wait(70));

	// product_bg02
	this.instance_4 = new lib.product_bg02_1();
	this.instance_4.setTransform(-148.6,-350.7,1,1,0,0,0,54,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},11).wait(26).to({_off:false,scaleX:0.44,x:-157.6,alpha:0},0).wait(1).to({scaleX:0.45,alpha:0.003},0).wait(1).to({scaleX:0.45,x:-157.5,alpha:0.013},0).wait(1).to({scaleX:0.46,x:-157.3,alpha:0.031},0).wait(1).to({scaleX:0.48,x:-157.1,alpha:0.06},0).wait(1).to({scaleX:0.5,x:-156.7,alpha:0.101},0).wait(1).to({scaleX:0.53,x:-156.2,alpha:0.158},0).wait(1).to({scaleX:0.57,x:-155.5,alpha:0.233},0).wait(1).to({scaleX:0.63,x:-154.7,alpha:0.329},0).wait(1).to({scaleX:0.69,x:-153.6,alpha:0.443},0).wait(1).to({scaleX:0.76,x:-152.5,alpha:0.563},0).wait(1).to({scaleX:0.82,x:-151.5,alpha:0.676},0).wait(1).to({scaleX:0.87,x:-150.7,alpha:0.77},0).wait(1).to({scaleX:0.91,x:-150,alpha:0.844},0).wait(1).to({scaleX:0.95,x:-149.5,alpha:0.9},0).wait(1).to({scaleX:0.97,x:-149.2,alpha:0.941},0).wait(1).to({scaleX:0.98,x:-148.9,alpha:0.969},0).wait(1).to({scaleX:0.99,x:-148.7,alpha:0.987},0).wait(1).to({scaleX:1,x:-148.6,alpha:0.997},0).wait(1).to({scaleX:1,alpha:1},0).wait(70));

	// product_bg03
	this.instance_5 = new lib.product_bg03_1();
	this.instance_5.setTransform(0,-329.9,1,1,0,0,0,199,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},11).wait(20).to({_off:false,regY:21.8,scaleY:0.14,y:-348.9,alpha:0},0).wait(1).to({regY:22,scaleY:0.14,y:-348.8,alpha:0.002},0).wait(1).to({scaleY:0.14,y:-348.7,alpha:0.01},0).wait(1).to({scaleY:0.16,y:-348.4,alpha:0.023},0).wait(1).to({scaleY:0.17,y:-348,alpha:0.043},0).wait(1).to({scaleY:0.2,y:-347.5,alpha:0.072},0).wait(1).to({scaleY:0.23,y:-346.8,alpha:0.11},0).wait(1).to({scaleY:0.27,y:-345.8,alpha:0.161},0).wait(1).to({scaleY:0.33,y:-344.6,alpha:0.226},0).wait(1).to({scaleY:0.4,y:-343,alpha:0.306},0).wait(1).to({scaleY:0.48,y:-341.2,alpha:0.4},0).wait(1).to({scaleY:0.57,y:-339.2,alpha:0.503},0).wait(1).to({scaleY:0.66,y:-337.2,alpha:0.606},0).wait(1).to({scaleY:0.74,y:-335.5,alpha:0.699},0).wait(1).to({scaleY:0.81,y:-333.9,alpha:0.778},0).wait(1).to({scaleY:0.86,y:-332.7,alpha:0.841},0).wait(1).to({scaleY:0.91,y:-331.7,alpha:0.891},0).wait(1).to({scaleY:0.94,y:-331,alpha:0.929},0).wait(1).to({scaleY:0.96,y:-330.5,alpha:0.958},0).wait(1).to({scaleY:0.98,y:-330.1,alpha:0.977},0).wait(1).to({scaleY:0.99,y:-329.9,alpha:0.991},0).wait(1).to({scaleY:1,y:-329.7,alpha:0.998},0).wait(1).to({scaleY:1,y:-329.9,alpha:1},0).wait(73));

	// product_bg04
	this.instance_6 = new lib.product_bg04_1();
	this.instance_6.setTransform(-128.3,-304.6,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},11).wait(20).to({_off:false,x:-88.3,alpha:0},0).wait(1).to({x:-88.5,alpha:0.002},0).wait(1).to({x:-88.9,alpha:0.01},0).wait(1).to({x:-89.8,alpha:0.024},0).wait(1).to({x:-91.2,alpha:0.044},0).wait(1).to({x:-93.2,alpha:0.074},0).wait(1).to({x:-95.8,alpha:0.114},0).wait(1).to({x:-99.2,alpha:0.167},0).wait(1).to({x:-103.6,alpha:0.234},0).wait(1).to({x:-109.1,alpha:0.317},0).wait(1).to({x:-115.5,alpha:0.414},0).wait(1).to({x:-122.3,alpha:0.519},0).wait(1).to({x:-129.1,alpha:0.621},0).wait(1).to({x:-135.1,alpha:0.713},0).wait(1).to({x:-140.1,alpha:0.789},0).wait(1).to({x:-136.7,alpha:0.849},0).wait(1).to({x:-134.1,alpha:0.896},0).wait(1).to({x:-132.1,alpha:0.932},0).wait(1).to({x:-130.6,alpha:0.959},0).wait(1).to({x:-129.5,alpha:0.978},0).wait(1).to({x:-128.8,alpha:0.991},0).wait(1).to({x:-128.4,alpha:0.998},0).wait(1).to({x:-128.3,alpha:1},0).wait(73));

	// product_bg05
	this.instance_7 = new lib.product_bg05_1();
	this.instance_7.setTransform(129.6,-304.6,1,1,0,0,0,49.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},11).wait(20).to({_off:false,x:89.6,alpha:0},0).wait(1).to({x:89.7,alpha:0.002},0).wait(1).to({x:90.2,alpha:0.01},0).wait(1).to({x:91.1,alpha:0.024},0).wait(1).to({x:92.5,alpha:0.044},0).wait(1).to({x:94.4,alpha:0.074},0).wait(1).to({x:97,alpha:0.114},0).wait(1).to({x:100.5,alpha:0.167},0).wait(1).to({x:104.9,alpha:0.234},0).wait(1).to({x:110.3,alpha:0.317},0).wait(1).to({x:116.7,alpha:0.414},0).wait(1).to({x:123.6,alpha:0.519},0).wait(1).to({x:130.3,alpha:0.621},0).wait(1).to({x:136.3,alpha:0.713},0).wait(1).to({x:141.3,alpha:0.789},0).wait(1).to({x:138,alpha:0.849},0).wait(1).to({x:135.3,alpha:0.896},0).wait(1).to({x:133.3,alpha:0.932},0).wait(1).to({x:131.8,alpha:0.959},0).wait(1).to({x:130.8,alpha:0.978},0).wait(1).to({x:130.1,alpha:0.991},0).wait(1).to({x:129.7,alpha:0.998},0).wait(1).to({x:129.6,alpha:1},0).wait(73));

	// product_bg06
	this.instance_8 = new lib.product_bg06copy();
	this.instance_8.setTransform(0,-316.5,1,1,0,0,0,95,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},11).wait(12).to({_off:false,scaleX:0.16,scaleY:0.16,y:-306.5,alpha:0},0).wait(1).to({regX:96.5,scaleX:0.16,scaleY:0.16,x:0.3,alpha:0.001},0).wait(1).to({scaleX:0.16,scaleY:0.16,alpha:0.006},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:-306.6,alpha:0.015},0).wait(1).to({scaleX:0.18,scaleY:0.18,y:-306.7,alpha:0.027},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:0.4,y:-306.9,alpha:0.045},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-307.1,alpha:0.068},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:-307.4,alpha:0.098},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:0.5,y:-307.8,alpha:0.135},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-308.2,alpha:0.181},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:0.6,y:-308.8,alpha:0.236},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:0.7,y:-309.5,alpha:0.302},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:0.8,y:-310.2,alpha:0.378},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:0.9,y:-311,alpha:0.46},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:1,y:-311.9,alpha:0.545},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1.1,y:-312.7,alpha:0.627},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1.2,y:-313.5,alpha:0.702},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-314.1,alpha:0.767},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1.3,y:-314.7,alpha:0.822},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1.4,y:-315.1,alpha:0.867},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-315.5,alpha:0.904},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1.5,y:-315.8,alpha:0.933},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-316,alpha:0.956},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-316.2,alpha:0.973},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-316.3,alpha:0.985},0).wait(1).to({scaleX:1,scaleY:1,y:-316.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:1.6,alpha:0.999},0).wait(1).to({regX:95,scaleX:1,scaleY:1,x:0,y:-316.5,alpha:1},0).wait(76));

	// product_bg07
	this.instance_9 = new lib.product_bg07_1();
	this.instance_9.setTransform(0,-19.7,1,1,0,0,0,481,262);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},11).wait(6).to({_off:false,regX:480.9,regY:262.1,scaleX:0.05,scaleY:0.05,alpha:0},0).wait(1).to({regX:481,regY:262,scaleX:0.06,scaleY:0.06,x:0.1,alpha:0.002},0).wait(1).to({scaleX:0.06,scaleY:0.06,alpha:0.007},0).wait(1).to({scaleX:0.07,scaleY:0.07,alpha:0.017},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:0,alpha:0.032},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:0.1,alpha:0.053},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:0,alpha:0.081},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:0.1,alpha:0.118},0).wait(1).to({scaleX:0.21,scaleY:0.21,alpha:0.163},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.22},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.288},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.368},0).wait(1).to({scaleX:0.49,scaleY:0.49,alpha:0.457},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:0.2,alpha:0.549},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:0.1,alpha:0.637},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:0.2,y:-19.8,alpha:0.716},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.783},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-19.7,alpha:0.839},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.884},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-19.8,alpha:0.947},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.968},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:-19.7,alpha:1},0).wait(84));

	// product_bg08
	this.instance_10 = new lib.product_bg08_1();
	this.instance_10.setTransform(0,-56.7,1,1,0,0,0,485,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},11).wait(1).to({_off:false,regX:484.9,scaleX:0.25,scaleY:0.25,alpha:0},0).wait(1).to({regX:485,scaleX:0.25,scaleY:0.25,x:0.1,alpha:0.002},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.007},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.017},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.032},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.053},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.081},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.118},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.163},0).wait(1).to({scaleX:0.41,scaleY:0.41,alpha:0.22},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.288},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.368},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.457},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.549},0).wait(1).to({scaleX:0.73,scaleY:0.73,alpha:0.637},0).wait(1).to({scaleX:0.79,scaleY:0.79,alpha:0.716},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.783},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.839},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.884},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.92},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.947},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:0,alpha:1},0).wait(89));

	// Layer 62
	this.instance_11 = new lib.product_bg09_1();
	this.instance_11.setTransform(0,391.1,1,1,0,0,0,434.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},11).wait(6).to({_off:false,regX:434.6,regY:31.9,scaleX:0.23,scaleY:0.27,alpha:0},0).wait(1).to({regX:434.5,regY:32,scaleX:0.23,scaleY:0.27,alpha:0.002},0).wait(1).to({scaleX:0.24,scaleY:0.28,alpha:0.007},0).wait(1).to({scaleX:0.24,scaleY:0.28,alpha:0.017},0).wait(1).to({scaleX:0.26,scaleY:0.29,alpha:0.032},0).wait(1).to({scaleX:0.27,scaleY:0.31,alpha:0.053},0).wait(1).to({scaleX:0.29,scaleY:0.33,alpha:0.081},0).wait(1).to({scaleX:0.32,scaleY:0.36,alpha:0.118},0).wait(1).to({scaleX:0.36,scaleY:0.39,alpha:0.163},0).wait(1).to({scaleX:0.4,scaleY:0.43,alpha:0.22},0).wait(1).to({scaleX:0.45,scaleY:0.48,alpha:0.288},0).wait(1).to({scaleX:0.51,scaleY:0.54,y:391.2,alpha:0.368},0).wait(1).to({scaleX:0.58,scaleY:0.6,y:391.1,alpha:0.457},0).wait(1).to({scaleX:0.65,scaleY:0.67,alpha:0.549},0).wait(1).to({scaleX:0.72,scaleY:0.74,alpha:0.637},0).wait(1).to({scaleX:0.78,scaleY:0.79,alpha:0.716},0).wait(1).to({scaleX:0.83,scaleY:0.84,y:391.2,alpha:0.783},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.839},0).wait(1).to({scaleX:0.91,scaleY:0.92,alpha:0.884},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:391.1,alpha:0.92},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.947},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:1,y:391.2,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,y:391.1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-734,-374.2,1407.3,889.3);


(lib.WatchClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"StageIn":17,"StageInComplete":70,"ToDetail":89,"ToDetailComplete":105});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(158));

	// Mouse_icon
	this.hintIcon = new lib.mouse_icon_full();
	this.hintIcon.setTransform(0.1,-6,1,1,0,0,0,321.1,321);

	this.timeline.addTween(cjs.Tween.get(this.hintIcon).wait(158));

	// DollLeft
	this.instance = new lib.GameDollLeft();
	this.instance.setTransform(-397.1,299,1,1,0,0,0,0,-175);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},17).wait(32).to({_off:false,x:-377.1},0).wait(1).to({x:-377.2,alpha:0.003},0).wait(1).to({x:-377.3,alpha:0.012},0).wait(1).to({x:-377.7,alpha:0.028},0).wait(1).to({x:-378.2,alpha:0.053},0).wait(1).to({x:-378.9,alpha:0.09},0).wait(1).to({x:-379.9,alpha:0.139},0).wait(1).to({x:-381.2,alpha:0.205},0).wait(1).to({x:-382.9,alpha:0.288},0).wait(1).to({x:-384.9,alpha:0.39},0).wait(1).to({x:-387.2,alpha:0.503},0).wait(1).to({x:-389.4,alpha:0.615},0).wait(1).to({x:-391.4,alpha:0.716},0).wait(1).to({x:-393.1,alpha:0.798},0).wait(1).to({x:-394.4,alpha:0.863},0).wait(1).to({x:-395.3,alpha:0.912},0).wait(1).to({x:-396,alpha:0.947},0).wait(1).to({x:-396.5,alpha:0.972},0).wait(1).to({x:-396.9,alpha:0.988},0).wait(1).to({x:-397,alpha:0.997},0).wait(1).to({x:-397.1,alpha:1},0).wait(89));

	// DollRight
	this.instance_1 = new lib.GameDollRight();
	this.instance_1.setTransform(409,308.1,1,1,0,0,0,0,-170);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},17).wait(32).to({_off:false,x:389},0).wait(1).to({x:389.1,alpha:0.003},0).wait(1).to({x:389.2,alpha:0.012},0).wait(1).to({x:389.6,alpha:0.028},0).wait(1).to({x:390.1,alpha:0.053},0).wait(1).to({x:390.8,alpha:0.09},0).wait(1).to({x:391.8,alpha:0.139},0).wait(1).to({x:393.1,alpha:0.205},0).wait(1).to({x:394.8,alpha:0.288},0).wait(1).to({x:396.8,alpha:0.39},0).wait(1).to({x:399.1,alpha:0.503},0).wait(1).to({x:401.3,alpha:0.615},0).wait(1).to({x:403.3,alpha:0.716},0).wait(1).to({x:405,alpha:0.798},0).wait(1).to({x:406.3,alpha:0.863},0).wait(1).to({x:407.2,alpha:0.912},0).wait(1).to({x:407.9,alpha:0.947},0).wait(1).to({x:408.4,alpha:0.972},0).wait(1).to({x:408.8,alpha:0.988},0).wait(1).to({x:408.9,alpha:0.997},0).wait(1).to({x:409,alpha:1},0).wait(89));

	// BtnBack
	this.btnBack = new lib.FeatureBtnBack();
	this.btnBack.setTransform(0,431);
	this.btnBack.alpha = 0;
	this.btnBack._off = true;
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnBack).wait(90).to({_off:false},0).to({alpha:1},15).wait(53));

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
	this.leftBike.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.leftBike).wait(45).to({regX:-184.1,regY:-8.5,x:-184.1,y:-8.5,alpha:0.003},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(25).to({alpha:0},15).to({_off:true},1).wait(53));

	// R_Bike
	this.rightBike = new lib.WatchRightBike();
	this.rightBike.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rightBike).wait(45).to({regX:163.5,regY:-8.8,x:163.5,y:-8.8,alpha:0.003},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(25).to({alpha:0},15).to({_off:true},1).wait(53));

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
p.nominalBounds = new cjs.Rectangle(-546.1,-432.5,1108.2,910.6);


// stage content:



(lib.AeonOpen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MainScene
	this.instance = new lib.MainScene();
	this.instance.setTransform(960.2,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(613.2,483.8,2612.2,1279.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;