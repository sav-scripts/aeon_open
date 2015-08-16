(function ()
{

    var _p = window.Watch = {};

    var _clip;

    var _isLock = true,
        _isInLeftBikeDetail = false,
        _currentIndex = 0,
        _isActive = false;

    var $mouseTrigger;

    _p.init = function ()
    {
        $mouseTrigger = $(window);

        _clip = new lib.WatchClip();

        _clip.leftBike.addEventListener("mousedown", function()
        {
            if(_isLock) return;
            toDetailMode(true);
        });

        _clip.rightBike.addEventListener("mousedown", function()
        {
            if(_isLock) return;
            toDetailMode(false);
        });

        _clip.btnBack.addEventListener("mousedown", function()
        {
            if(_isLock) return;
            exitDetailMode();
        });

        if(BrowserDetect.isMobile && ('DeviceOrientationEvent' in window))
        {
            window.addEventListener('deviceorientation', handleOrientation);
        }
        else
        {
            bindMouseTrigger();
        }
    };

    _p.beforeStageIn = function()
    {
        _isLock = true;

        MainScene.addContent(_clip);

        _clip.gotoAndStop("StageIn");
        _clip.playTo("StageInComplete", null, function()
        {
            _isLock = false;
        });
    };

    _p.beforeStageOut = function()
    {
        _isLock = true;
        var tl = new TimelineMax;
        tl.to(_clip,.4, {alpha:0});
        tl.add(function()
        {
            MainScene.removeContent(_clip);
            _clip.alpha = 1;
        });
    };

    function toDetailMode(isLeftBike)
    {
        _isInLeftBikeDetail = isLeftBike;

        _isLock = true;

        _clip.gotoAndStop("ToDetail");

        //updateFrame(.5);

        TweenMax.delayedCall(.1, function()
        {
            _currentIndex = 3;
            updateProgress();
        });

        _clip.playTo("ToDetailComplete", null, function()
        {
            _isActive = true;
            _isLock = false;
        });
    }

    function exitDetailMode()
    {
        _isLock = true;
        _isActive = false;

        _clip.playTo("ToDetail", null, function()
        {
            _isLock = false;
        });
    }

    function handleOrientation(event)
    {
        //trace(Main.settings.isVerticalMode);

        if(!_isActive) return;

        var v, totalArc, halfArc;

        if(Main.settings.isVerticalMode)
        {
            v = event.gamma;
            totalArc = 60;
        }
        else
        {
            v =  -event.beta;
            totalArc = 60;
        }
        halfArc = totalArc*.5;



        if(v == null)
        {
            bindMouseTrigger();
            window.removeEventListener("deviceorientation", handleOrientation);
        }
        else
        {
            var arc = v;
            if(arc < -halfArc) arc = -halfArc;
            if(arc > halfArc) arc = halfArc;
            updateFrame((totalArc - (arc+halfArc))/totalArc);
        }
    }

    function bindMouseTrigger()
    {
        $mouseTrigger.bind("mousemove", function(event)
        {
            if(!_isActive) return;
            var ratio = event.clientX / $(window).width();
            updateFrame(ratio);

        });
    }

    function updateFrame(ratio)
    {
        if(ratio >= 1) ratio = .99;
        var index = parseInt(ratio * 7);

        index = index % 7;

        if(index != _currentIndex)
        {
            _currentIndex = index;
            updateProgress();
        }
    }

    function updateProgress()
    {
        var i, clip;
        for(i=0;i<7;i++)
        {
            clip = _clip.progressClip["p_" + i];
            clip.visible = _currentIndex == i;
        }

        var targetFrame = _isInLeftBikeDetail? _currentIndex: _currentIndex + 7;
        _clip.detailClip.gotoAndStop(targetFrame);
    }


    _p.
     resize = function(width , height)
    {

    };

}());