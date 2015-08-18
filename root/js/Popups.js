/**
 * Created by sav on 2015/8/17.
 */
(function(){

    var _p = window.GameWin = {};

    var $doms = {},
        _isHiding = true,
        _isLock = true,
        _partDic =
        {
            "win": 0,
            "form": "-100%",
            "rule": "-200%"
        };

    _p.init = function()
    {
        $doms.container = $(".win_container");
        $doms.wrapper = $doms.container.find(".win_wrapper");

        Helper.getInitValue($doms.container[0]);

        $doms.ruleContent = $(".rule_content");
        Helper.getInitValue($doms.ruleContent[0]);

        $doms.btnRuleBack = $(".rule_btn_back");
        Helper.getInitValue($doms.btnRuleBack[0]);

        $doms.title = $doms.container.find(".win_title");
        $doms.btnShare = $doms.container.find(".win_btn_share");
        $doms.btnExit = $doms.container.find(".win_btn_exit");

        Helper.getInitValue($doms.title[0]);
        Helper.getInitValue($doms.btnShare[0]);
        Helper.getInitValue($doms.btnExit[0]);

        ShareForm.init();

        $doms.container.css("visibility", "visible").css("display", "none");

        _p.show("win");

        $doms.btnShare.bind("click", function()
        {
            if(_isLock) return;
           _p.toMode("form");
        });

        $doms.btnExit.bind("click", function()
        {
            if(_isLock) return;
            _p.hide();
        });

        $doms.btnRuleBack.bind("click", function()
        {
            if(_isLock) return;
            _p.toMode("form");
        });
    };

    _p.isShow = function()
    {
        return !_isHiding;
    };

    _p.show = function(mode, cb)
    {
        if(!_isHiding) return;
        _isHiding = false;

        _isLock = true;

        if(mode) _p.toMode(mode, 0);

        $doms.container.css("display", "block");

        var tl = new TimelineMax;
        tl.set($doms.container, {autoAlpha:0});
        tl.to($doms.container,.4, {autoAlpha:1});
        tl.add(function()
        {
            _isLock = false;
           if(cb) cb.apply();
        });
    };

    _p.hide = function(cb)
    {
        if(_isHiding) return;
        _isHiding = true;

        _isLock = true;

        var tl = new TimelineMax;
        tl.to($doms.container,.4,{autoAlpha:0});
        tl.add(function()
        {
            $doms.container.css("display", "none");
            _isLock = false;
            if(cb) cb.apply();
        });

    };

    _p.toMode = function(targetMode, duration, cb)
    {
        if(duration == null) duration = .6;

        _isLock = true;

        var mark = _partDic[targetMode];

        var tl = new TimelineMax();
        tl.to($doms.wrapper, duration, {ease:Power1.easeInOut, top:mark});
        tl.add(function()
        {
            _isLock = false;
           if(cb) cb.apply();
        });
    };

    _p.resize = function(width, height, scale)
    {
        Helper.applyTransform($doms.container[0], scale, ["ml", "mt", "w", "h"]);

        Helper.applyTransform($doms.title[0], scale, ["l", "t", "w", "h"]);
        Helper.applyTransform($doms.btnShare[0], scale, ["l", "t", "w", "h"]);
        Helper.applyTransform($doms.btnExit[0], scale, ["l", "t", "w", "h"]);

        Helper.applyTransform($doms.ruleContent[0], scale, ["ml", "w", "h"]);

        Helper.applyTransform($doms.btnRuleBack[0], scale, ["w", "h"]);

        //$doms.btnShare.css("background-size", "cover");

        ShareForm.resize(width, height, scale);

    };

}());

(function(){


    var _p = window.ShareForm = {};

    var $doms = {};

    _p.init = function()
    {
        $doms.container = $("#share_form");
        Helper.getInitValue($doms.container[0]);

        var styleDic =
        {
            "w":true,
            "h":false,
            "l":true,
            "t":false,
            "r":true,
            "b":false,
            "padding": true
        };

        $doms.addressCounty = $doms.container.find(".address_county");
        $doms.selectCounty = $doms.addressCounty.find("select");
        $doms.iconCounty = $doms.addressCounty.find(".drop_down_icon");
        $doms.addressZone = $doms.container.find(".address_zone");
        $doms.selectZone = $doms.addressZone.find("select");
        $doms.iconZone = $doms.addressZone.find(".drop_down_icon");

        $doms.checkRule = $doms.container.find(".check_rule");

        $doms.fieldLabel = $doms.container.find(".field_label");

        $doms.field_name = $doms.container.find(".field_name");
        $doms.field_phone = $doms.container.find(".field_phone");
        $doms.field_addressDetail = $doms.container.find(".address_detail");

        $doms.btnSend = $doms.container.find(".form_btn_send");

        //FormHelper.getInitValue($doms.field_name[0]);
        //FormHelper.getInitValue($doms.field_phone[0]);

        Helper.pxToPercent($doms.fieldLabel[0], 100, 100);
        Helper.pxToPercent($doms.field_name[0], 100, 100, styleDic);
        Helper.pxToPercent($doms.field_phone[0], 100, 100, styleDic);
        Helper.pxToPercent($doms.field_addressDetail[0], 100, 100, styleDic);
        Helper.pxToPercent($doms.btnSend[0], 100, 100);

        Helper.pxToPercent($doms.checkRule[0], 100, 100);

        Helper.pxToPercent($doms.addressCounty[0], 100, 100);
        Helper.pxToPercent($doms.addressZone[0], 100, 100);

        var w = $doms.addressCounty.width(),
            h = $doms.addressCounty.height();

        Helper.pxToPercent($doms.iconCounty[0], w, h);
        Helper.pxToPercent($doms.iconZone[0], w, h);

        $doms.ruleText = $doms.container.find(".rule_text");
        $doms.ruleTrigger = $doms.container.find(".rule_trigger");

        w = $doms.ruleText.width();
        h = $doms.ruleText.height();
        Helper.pxToPercent($doms.ruleTrigger[0], w, h);

        Helper.pxToPercent($doms.ruleText[0], 100, 100);

        FormHelper.completeCounty($doms.selectCounty, $doms.selectZone);

        //$doms.container.css("display", "none");

        //TweenMax.set($doms.container, {scale:.5});

        $doms.btnSend.bind("mousedown", function()
        {
            trySend();
        });

        $doms.ruleTrigger.bind("mousedown", function()
        {
           GameWin.toMode("rule");
        });
    };

    function trySend()
    {
        SimplePreloading.show();
    }

    _p.resize = function(width, height, scale)
    {
        Helper.applyTransform($doms.container[0], scale, ["w", "h"]);

        //console.log($doms.container.find("input, select").length);

        $doms.container.find("input, select").css("font-size", 16*scale + "px");

        /*
        var minScale = .78;
        if(scale < minScale)
        {
            var newScale = scale / minScale;
            TweenMax.set($doms.container, {scale:newScale});
        }
        */
    };

}());

(function(){

    var _p = window.GameFail = {};


    var _isHiding = true,
        $doms = {};

    _p.init = function()
    {

    };

    _p.isShow = function()
    {
        return !_isHiding;
    };

    _p.show = function()
    {
        if(!_isHiding) return;
        _isHiding = false;
    };



}());