/**
 * Created by sav on 2015/8/15.
 */
(function(){

    var _p = window.Index = {};

    var _clip;

    var clips = {},
        $doms = {};

    _p.init = function()
    {
        $doms.container = $("#index");

        _clip = new lib.IndexClip();


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

    };

}());