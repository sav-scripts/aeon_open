(function ()
{

    var _p = window.Detail = {};

    var _clip,
        _isLock = true;

    _p.init = function ()
    {

        _clip = new lib.DetailClip();

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


    _p.resize = function(width , height)
    {

    };

}());