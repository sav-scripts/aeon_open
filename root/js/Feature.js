(function ()
{

    var _p = window.Feature = {};

    var NUM_DETAILS = 6;

    var _clip,
        clips = {};

    var _isLock = true,
        _isSwitchDetail = false,
        _isInLeftBikeDetail = false,
        _currentIndex = 0;


    _p.init = function ()
    {
        _clip = new lib.FeatureClip();

        clips.topDetail = _clip.detailContainer.topDetail;
        clips.bottomDetail = _clip.detailContainer.bottomDetail;
        clips.dotGroup = _clip.progressDot;

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

        _clip.btnLeft.addEventListener("mousedown", function()
        {
            if(_isLock || _isSwitchDetail) return;
            var index = _currentIndex - 1;
            if(index < 0) index = NUM_DETAILS-1;

            toDetailIndex(index);
        });

        _clip.btnRight.addEventListener("mousedown", function()
        {
            if(_isLock || _isSwitchDetail) return;
            var index = _currentIndex +1;
            if(index >= NUM_DETAILS) index = 0;

            toDetailIndex(index);
        });

        var i;
        for(i=0;i<NUM_DETAILS;i++){setupDot(i);}

        function setupDot(index)
        {
            var dotClip = clips.dotGroup["dot_" + index];

            //dotClip.mouseEnabled = true;
            dotClip.addEventListener("mousedown", function()
            {
                if(_isLock || _isSwitchDetail || index == _currentIndex) return;

                toDetailIndex(index);
            });
        }

    };

    _p.beforeStageIn = function(options)
    {
        _isLock = true;

        MainScene.addContent(_clip);

        _clip.gotoAndStop("StageIn");
        _clip.playTo("StageInComplete", null, function()
        {
            _isLock = false;
        });
    };

    _p.afterStageIn = function(options)
    {

    };

    _p.beforeStageOut = function(options)
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

    _p.afterStageOut = function(options)
    {

    };

    function toDetailMode(isLeftBike)
    {
        _isInLeftBikeDetail = isLeftBike;

        _isLock = true;

        _clip.gotoAndStop("ToDetail");

        TweenMax.delayedCall(.1, function()
        {
            toDetailIndex(0, 0);
        });

        _clip.playTo("ToDetailComplete", null, function()
        {
            _isLock = false;
        });
    }

    function exitDetailMode()
    {
        _isLock = true;

        _clip.playTo("ToDetail", null, function()
        {
            _isLock = false;
        });
    }

    function toDetailIndex(index, duration)
    {
        if(duration == null) duration = .5;

        var oldIndex = _currentIndex;
        _currentIndex = index;

        updateDotGroup();

        if(duration == 0)
        {
            clips.topDetail.visible = false;
            changeDetailFrame(clips.bottomDetail, _currentIndex);
        }
        else
        {
            _isSwitchDetail = true;
            changeDetailFrame(clips.topDetail, oldIndex);
            changeDetailFrame(clips.bottomDetail, _currentIndex);
            clips.topDetail.visible = true;
            clips.topDetail.alpha = 1;
            var tl = new TimelineMax;
            tl.to(clips.topDetail, duration, {alpha:0});
            tl.add(function()
            {
                clips.topDetail.visible = false;
                _isSwitchDetail = false;
            });
        }
    }

    function updateDotGroup()
    {
        var i;
        for(i=0;i<NUM_DETAILS;i++)
        {
            var dotClip = clips.dotGroup["dot_" + i];
            if(i == _currentIndex)
            {
                dotClip.cursor = "default";
                dotClip.gotoAndStop(1);
            }
            else
            {
                dotClip.cursor = "pointer";
                dotClip.gotoAndStop(0);
            }
        }
    }

    function changeDetailFrame(clip, index)
    {
        clip.gotoAndStop(_isInLeftBikeDetail? index: index+NUM_DETAILS);
    }


    _p.resize = function(width , height)
    {

    };

}());