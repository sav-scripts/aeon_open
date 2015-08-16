/**
 * Created by sav on 2015/8/16.
 */
(function(){

    var _p = window.Menu = {};

    var MENU_WIDTH = null;

    var $doms = {},
        _isHiding = true,
        _isPlaying = false;

    var _hashList =
    [
        "/Index",
        "/Feature",
        "/Watch",
        "/Detail",
        "/Prize",
        "/CardGame"
    ];

    _p.init = function()
    {
        $doms.container = $("#menu");
        $doms.btnOpen = $doms.container.find(".btn_open");
        $doms.btnClose = $doms.container.find(".btn_close");
        $doms.menuContainer = $doms.container.find(".menu_container");
        $doms.dotLine = $doms.container.find(".menu_line");
        $doms.btnInfo = $doms.container.find(".btn_info");

        $doms.container.css("visibility", "visible");


        MENU_WIDTH = $doms.menuContainer.width();

        $doms.dotLine.css("display", "none");

        Helper.getInitValue($doms.dotLine[0]);

        $doms.menuContainer.css("display", "none");
        //$doms.container.css("right", MENU_WIDTH);

        $doms.btnOpen.bind("mousedown", function()
        {
           show();
        });

        $doms.btnClose.bind("mousedown", function()
        {
            hide();
        });

        $doms.btnInfo.bind("mousedown", function()
        {
            console.log("購車資訊");
        });


        var i;
        for(i=0;i<6;i++){ setupButton(i) };

        function setupButton(index)
        {
            var $item, $icon, $text;

            $item = $doms.container.find(".menu_item:nth-of-type("+(index+1)+")");

            $item.bind("mousedown", function()
            {
                var hash = _hashList[index];

                Main.toHash(hash);
                hide();
            });

            $item.bind("mouseover", function(event)
            {
                if($item.has(event.relatedTarget).length > 0) return;

                $doms.dotLine.css("display", "block");
                //console.log("hover");
                //console.log($item.position().top);
                var offset = index == 5? 44: 40;
                $doms.dotLine.css("top", $item.position().top + offset);

                var dom = $doms.dotLine[0];
                TweenMax.killTweensOf(dom);
                TweenMax.set(dom, {width:0});
                TweenMax.to(dom,.5, {width:dom.init.w});

            });

            $item.bind("mouseout", function(event)
            {
                if($item.has(event.relatedTarget).length > 0) return;

                //console.log("out");
                $doms.dotLine.css("display", "none");

            });
        }

    };

    function show()
    {
        if(_isPlaying) return;
        if(!_isHiding) return;
        _isHiding = false;

        _isPlaying = true;

        $doms.menuContainer.css("display", "block");

        var tl = new TimelineMax;
        tl.to($doms.btnOpen,.2, {autoAlpha:0});
        tl.to($doms.container,.9,{ease:Power3.easeInOut, right:MENU_WIDTH}, 0);
        tl.to($doms.btnClose,.2, {autoAlpha:1}, 0);
        tl.add(function()
        {
           _isPlaying = false;
        });
        

    }

    function hide()
    {
        if(_isPlaying) return;
        if(_isHiding) return;
        _isHiding = true;

        _isPlaying = true;

        var tl = new TimelineMax;
        tl.to($doms.btnClose,.2, {autoAlpha:0});
        tl.to($doms.container,.9,{ease:Power3.easeInOut, right:0}, 0);
        tl.to($doms.btnOpen,.2, {autoAlpha:1}, 0);
        tl.add(function()
        {
            $doms.menuContainer.css("display", "none");
            _isPlaying = false;
        });

    }

    _p.resize = function(width, height, scale)
    {

    };

}());