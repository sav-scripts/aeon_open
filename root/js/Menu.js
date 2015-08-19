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
            var $item, $icon, $text, iconAnime;

            var isHover = false;

            $item = $doms.container.find(".menu_item:nth-of-type("+(index+1)+")");
            $icon = $item.find(".menu_icon");

            $item.bind("mousedown", function()
            {
                var hash = _hashList[index];

                Main.toHash(hash);
                hide();
            });

            $item.bind("mouseover", function(event)
            {
                if($item.has(event.relatedTarget).length > 0) return;

                isHover = true;

                iconAnime.restart();

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

                isHover = false;

                //tl.progress(0);
                //tl.pause();

                //console.log("out");
                $doms.dotLine.css("display", "none");

            });

            var tl = iconAnime = new TimelineMax({paused:true});

            if(index == 0)
            {
                tl.set($icon, {transformOrigin:"50% 100%"});
                tl.to($icon,.3,{scaleY:.5});
                tl.to($icon,.45,{scaleY:1, y:-50});
                tl.to($icon,.45,{ease:Power1.easeIn, scaleY:1, y:0});
                //tl.to($icon,.5,{scaleY:1, rotation:0});
                tl.add(function()
                {
                    if(isHover) tl.restart();
                });
                tl.to($icon,.3, {scaleY:.5});
                tl.to($icon,.3, {scaleY:1});
            }
            else if(index == 1)
            {
                tl.set($icon, {transformOrigin:"30% 80%"});
                tl.to($icon,.3,{ease:Power1.easeInOut, rotation:-30});
                tl.to($icon,.3,{ease:Power1.easeInOut, rotation:0});
                //tl.to($icon,.5,{scaleY:1, rotation:0});
                tl.add(function()
                {
                    if(isHover) tl.restart();
                });
            }
            else if(index == 2)
            {
                tl.set($icon, {transformOrigin:"40% 40%"});
                tl.to($icon,.7,{ease:Power1.easeInOut, rotation:-360, x:-80});
                tl.to($icon,.7,{ease:Power1.easeInOut, rotation:0, x:0});
                //tl.to($icon,.5,{scaleY:1, rotation:0});
                tl.add(function()
                {
                    if(isHover) tl.restart();
                });
            }
            else if(index == 3)
            {
                tl.set($icon, {transformOrigin:"40% 50%"});
                tl.to($icon,.3,{scaleY:.5, y:10});
                tl.to($icon,.45,{scaleY:1, y:-40, rotation:-180});
                tl.to($icon,.45,{ease:Power1.easeIn, scaleY:1, y:0, rotation:-360});
                //tl.to($icon,.5,{scaleY:1, rotation:0});
                tl.add(function()
                {
                    if(isHover) tl.restart();
                });
                tl.to($icon,.3, {scaleY:.5, y:10});
                tl.to($icon,.3, {scaleY:1, y:0});
            }
            else if(index == 4)
            {
                tl.set($icon, {transformOrigin:"0% 50%"});
                tl.to($icon,.4,{ease:Power1.easeIn, x:-41});
                tl.to($icon,.3,{ease:Power1.easeOut, scaleX:.5});
                tl.to($icon,.4,{ease:Power1.easeIn, x: 10, scaleX:1});
                tl.to($icon,.3,{ease:Power1.easeOut, x: 29, scaleX:.5});

                //tl.to($icon,.5,{scaleY:1, rotation:0});
                tl.add(function()
                {
                    //if(isHover) tl.restart();
                    if(isHover)
                    {
                        //tl.restart();
                        TweenMax.to($icon,.4,{ease:Power1.easeIn, x: -41, scaleX:1, onComplete:function()
                        {
                            tl.seek(.4);
                            tl.resume();
                        }});
                    }
                    else
                    {
                        TweenMax.to($icon,.4, {x:0, scaleX:1});
                    }
                });
            }
            else if(index == 5)
            {
                tl.set($icon, {transformOrigin:"42% 90%", scaleX:1});
                tl.to($icon,.3,{scaleY:.5});
                tl.to($icon,.45,{ease:Power1.easeOut, scaleY:1, y:-30});
                tl.to($icon,.45,{ease:Power1.easeIn, scaleY:1, y:0});
                tl.to($icon,.9, {ease:Linear.easeNone, x:-40}, "-=.9");
                tl.to($icon,.3,{scaleY:.5});
                tl.set($icon, {scaleX:-1});
                tl.to($icon,.45,{ease:Power1.easeOut, scaleY:1, y:-30});
                tl.to($icon,.45,{ease:Power1.easeIn, scaleY:1, y:0});
                tl.to($icon,.9, {ease:Linear.easeNone, x:0}, "-=.9");
                tl.to($icon,.3,{scaleY:.5});
                tl.set($icon, {scaleX:1});

                //tl.to($icon,.5,{scaleY:1, rotation:0});
                tl.add(function()
                {
                    if(isHover)
                    {
                        tl.seek(.3);
                        tl.resume();
                    }
                });
                //tl.to($icon,.3, {scaleY:.5});
                tl.to($icon,.3, {scaleY:1});
            }
        }


        show();
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