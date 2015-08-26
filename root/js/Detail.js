(function ()
{

    var _p = window.Detail = {};

    var _clip,
        _isLock = true;

    var _viewPort = {width:0, height:0, customed:false};

    _p.init = function ()
    {

        _clip = new lib.DetailClip();

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


    _p.resize = function(width , height, scale)
    {
        if(_viewPort.customed)
        {
            var bound = Helper.getSize_contain(width, height, _viewPort.width, _viewPort.height);
            _clip.scaleX = _clip.scaleY = bound.ratio / scale;
        }
    };

}());