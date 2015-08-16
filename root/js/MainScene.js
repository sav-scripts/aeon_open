/**
 * Created by sav on 2015/8/15.
 */
(function(){

    var _p = window.MainScene = {};

    var _clip;

    _p.init = function()
    {
        _clip = _p.clip = new lib.MainScene();
        Main.stage.addChild(_clip);
    };

    _p.addContent = function(contentClip)
    {
        _clip.contentContainer.addChild(contentClip);
    };

    _p.removeContent = function(contentClip)
    {
        _clip.contentContainer.removeChild(contentClip);
    };

    _p.toLabel = function(label, instantPlay, cb)
    {
        var duration = instantPlay? 0: 1;
        _clip.playTo(label, duration, cb);
    };

    _p.resize = function(width, height, scale)
    {
        _clip.scaleX = _clip.scaleY = scale;

        _clip.x = width * .5;
        _clip.y = height * .5;
    };

}());