/**
 * Created by sav on 2015/8/15.
 */
(function(){

    var _settings =
    {
        isVerticalMode: false,
        FPS: 30,
        width: 1920,
        height: 1040,
        scale: 1
    };

    var _p = window.Main = {};

    _p.init = init;
    _p.settings = _settings;
    _p.isLocal = false;

    var _hashDic,
        _contentList;

    var _isPlaying = false,
        _currentHash = null,
        _cbAfterToContent = null,
        _defaultHash = "/Index";

    var canvas, stage;

    function init()
    {
        //alert("canvas support = " + Modernizr.canvas + ",\n audio support = " + Modernizr.audio);


        if(Modernizr.canvas) init_execute();
        else
        {
            $("#no_support").css("display", "block");
        }


    }

    function init_execute()
    {
        //var v = "?v=2";
        var v = "?v=" + new Date().getTime();

        SimplePreloading.init();
        SimplePreloading.show();

        if($(window).width() < $(window).height())
        {
            _settings.isVerticalMode = true;
            _settings.width = 720;
            _settings.height = 1280;
        }




        if(window.location.host == "local.savorks.com" || window.location.host == "socket.savorks.com")
        {
            _p.isLocal = true;
        }

        var appId = "948770988512734";
        if(window.location.host == 'local.savorks.com') appId = '948775455178954';

        FBHelper.init(appId, function()
        {
        });

        //var wgLibs = ["js/lib/three.min.js", "js/MyThreeHelper.js", "js/WireGraphic.js"+s];

        Modernizr.load
        ({
            test:_settings.isVerticalMode,
            nope:["AeonOpen.js"+v],
            yep:["AeonOpenMobile.js"+v],
            complete:flaDataLoaded
        });

    }

    function flaDataLoaded()
    {
        SoundPlayer.initSound();

        if(Utility.urlParams.use_compress == "1") useCompressed();


        _p.canvas = canvas = document.getElementById("canvas");
        if(!window.images) window.images = {};

        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(lib.properties.manifest);
    }

    function useCompressed()
    {
        var array = lib.properties.manifest, i, src;
        for(i=0;i<array.length;i++)
        {
            array[i].src = array[i].src.replace("images/", "images_compressed/");
        }
    }

    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function handleComplete()
    {
        $("#logo").bind("click", function()
        {
            window.open("http://www.aeonmotor.com.tw/", "_blank");
        });

        _p.stage = stage = new createjs.Stage(canvas);
        stage.enableMouseOver(10);

        createjs.Ticker.setFPS(_settings.FPS);
        createjs.Ticker.addEventListener("tick", stage);

        Menu.init();
        MainScene.init();
        Index.init();
        Feature.init();
        Watch.init();
        Detail.init();
        Prize.init();
        CardGame.init();
        GameWin.init();
        ShareForm.init();
        GameFail.init();

        handleContentAndLink();

        buildMainInteractive();

        $(window).bind("resize", onResize);
        onResize();

        toFirstHash();

        SimplePreloading.hide();

        //SoundPlayer.playBGM();

        //GameWin.show("rule");
    }

    function handleContentAndLink()
    {
        _hashDic = {};
        _contentList = [];

        var obj, hash, i, $dom, $scrollBlocks = $(".content_block");
        for(i=0;i<$scrollBlocks.length;i++)
        {
            $dom = $($scrollBlocks[i]);

            $dom.css("visibility", "visible").css("display", "none");

            hash = $dom.attr("hash");
            obj = {block:$dom, hash:hash, index:i, stageClass: window[hash.replace("/", "")]};

            _hashDic[hash] = obj;
            _contentList.push(obj);
        }

        Utility.onHashChange(function(hashName)
        {
            if(hashName == "") hashName = "/Index";

            if(_hashDic[hashName])
            {
                ga("send", "pageview", hashName);
                if(_isPlaying)
                {
                    _cbAfterToContent = function()
                    {
                        _p.toContent(hashName);
                    };
                }
                else _p.toContent(hashName);
            }
        });
    }

    function buildMainInteractive()
    {
        $(window).mousewheel(function(event)
        {
            (event.deltaY > 0)? scrollContent(-1): scrollContent(1);
        });

        var mc = new Hammer(window, {drag_lock_to_axis: true});

        mc.on("swipe", function(event)
        {
            var minRange = 10;
            if(event.gesture.deltaY < -minRange )
            {
                scrollContent(1);
            }
            else if(event.gesture.deltaY > minRange)
            {
                scrollContent(-1);
            }
        });


        function scrollContent(direction)
        {
            if(_isPlaying) return;
            if(GameWin.isShow()) return;

            var obj = _hashDic[_currentHash];


            var isScrolled = false;

            //if(obj.stageClass && obj.stageClass.requestScroll) isScrolled = obj.stageClass.requestScroll(direction);

            if(isScrolled == false)
            {
                if(direction == 1)
                {
                    if(obj.index < (_contentList.length-1))
                    {
                        _p.toHash(_contentList[obj.index+1].hash);
                    }
                }
                else
                {
                    if(obj.index > 0)
                    {
                        _p.toHash(_contentList[obj.index-1].hash);
                    }
                }
            }
        }
    }

    function toFirstHash()
    {
        var firstHash = Utility.getHash();
        if(!_hashDic[firstHash]) firstHash = _defaultHash;
        ga("send", "pageview", firstHash);
        _p.toContent(firstHash);
    }

    _p.toHash = function(hashName)
    {
        if(Utility.getHash() != hashName)
        {
            Utility.setHash(hashName);
        }
        else
        {
            _p.toContent(hashName);
        }
    };

    _p.toContent = function(hashName)
    {
        if(_isPlaying) return;

        if(hashName == "") hashName = _defaultHash;
        if(_currentHash == hashName) return;

        var targetObj, currentObj;
        var options =
        {
            firstIn: false
        };

        _isPlaying = true;


        if(_currentHash == null)
        {
            options.isFirstIn = true;
            //options.onComplete = firstTimeCompleted;


            _currentHash = hashName;
            targetObj = _hashDic[hashName];

            MainScene.toLabel(hashName, true, function()
            {
                if(targetObj.stageClass && targetObj.stageClass.beforeStageIn) targetObj.stageClass.beforeStageIn(options);
                if(targetObj.stageClass && targetObj.stageClass.afterStageIn) targetObj.stageClass.afterStageIn(options);

                toContentComplete();
            });

        }
        else if(_hashDic[_currentHash] && _hashDic[hashName])
        {
            currentObj = _hashDic[_currentHash];
            targetObj = _hashDic[hashName];

            GameWin.hide();
            GameFail.hide();

            _currentHash = hashName;

            if(currentObj.stageClass && currentObj.stageClass.beforeStageOut) currentObj.stageClass.beforeStageOut(options);
            if(currentObj.stageClass && currentObj.stageClass.afterStageOut) currentObj.stageClass.afterStageOut(options);

            TweenMax.delayedCall(.4, function()
            {
                if(targetObj.stageClass && targetObj.stageClass.beforeStageIn) targetObj.stageClass.beforeStageIn(options);
                if(targetObj.stageClass && targetObj.stageClass.afterStageIn) targetObj.stageClass.afterStageIn(options);
            });

            MainScene.toLabel(hashName, false, function()
            {

                toContentComplete();

            });

        }

        function toContentComplete()
        {
            _isPlaying = false;
            if(_cbAfterToContent != null)
            {
                _cbAfterToContent.apply();
                _cbAfterToContent = null;
            }
        }

    };

    function onResize()
    {
        var width = $(window).width(),
            height = $(window).height();

        _p.settings.isVerticalMode = height > width;

        $(canvas).attr("width", width).attr("height", height).css("left", 0).css("top", 0);

        var bound = Helper.getSize_cover(width, height, _settings.width, _settings.height);
        var bound2 = Helper.getSize_contain(width, height, _settings.width, _settings.height);

        var scale = _settings.scale = bound.ratio,
            scale2 = bound2.ratio;

        Menu.resize(width, height, scale);
        MainScene.resize(width, height, scale);
        Index.resize(width, height, scale);
        Feature.resize(width, height, scale, scale2);
        Watch.resize(width, height, scale);
        Detail.resize(width, height, scale);
        Prize.resize(width, height, scale);
        CardGame.resize(width, height, scale);
        GameWin.resize(width, height, scale);
        ShareForm.resize(width, height, scale);
        GameFail.resize(width, height, scale);

        stage.update();
    }

}());