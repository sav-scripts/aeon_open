/**
 * Created by sav on 2015/8/7.
 */
(function(){

    var _p = window.GameTest = {};


    _p.init = function()
    {
        CardGame.init();

        _p.onResize();

        $(window).bind("resize", _p.onResize);
    };

    _p.onResize = function()
    {
        var width = $(window).width(),
            height = $(window).height();

        CardGame.onResize(width, height);
    };

}());