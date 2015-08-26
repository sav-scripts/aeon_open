/**
 * Created by sav on 2015/8/15.
 */
(function(){

    var _p = window.Index = {};

    var _clip;

    var clips = {},
        $doms = {};

    var _viewPort = {width:0, height:0, customed:false};

    _p.init = function()
    {
        $doms.container = $("#index");

        _clip = new lib.IndexClip();

        if(_clip.vp)
        {
            _viewPort.width = Main.settings.width * _clip.vp.scaleX;
            _viewPort.height = Main.settings.height * _clip.vp.scaleY;
            _clip.vp.visible = false;
            _viewPort.customed = true;
        }
        else
        {
            _viewPort.width = Main.settings.width;
            _viewPort.height = Main.settings.height;
        }


        clips.btnStart = _clip.startClip.startButton;

        clips.btnStart.addEventListener("mousedown", function()
        {
            Main.toHash("/CardGame");
        });
    };

    _p.beforeStageIn = function(options)
    {
        MainScene.addContent(_clip);

        _clip.gotoAndStop("StageIn");
        _clip.playTo("StageInComplete");
    };

    _p.afterStageIn = function(options)
    {

    };

    _p.beforeStageOut = function(options)
    {
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

    _p.resize = function(width, height, scale)
    {
        if(_viewPort.customed)
        {
            var bound = Helper.getSize_contain(width, height, _viewPort.width, _viewPort.height);
            _clip.scaleX = _clip.scaleY = bound.ratio / scale;
        }
    };

}());