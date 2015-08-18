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

        $doms.container.css("visibility", "visible").css("display", "none");

        //_p.show("rule");

        $doms.btnShare.bind("click", function()
        {
            if(_isLock) return;
           //_p.toMode("form");

            _p.tryShare(function()
            {
                _p.toMode("form");
            });
        });

        $doms.btnExit.bind("click", function()
        {
            if(_isLock) return;
            _p.hide();
            CardGame.backToStart();
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

    _p.isLocking = function()
    {
        return _isLock;
    };

    _p.show = function(mode, cb)
    {
        if(!_isHiding) return;
        _isHiding = false;

        _isLock = true;

        ShareForm.clearForm();

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

    _p.tryShare = function(cb)
    {
        SimplePreloading.show();

        var urlPath = Utility.getPath();

        var url = urlPath + "misc/fb_share.jpg";

        console.log(url);

        var params =
        {
            method: 'feed',
            name: "Aeon 3D-350 匹配你的閱歷非凡",
            picture: url,
            caption: "AEON 3D350",
            description: "Aeon 3D-350新上市！欲搶先試乘體驗3D-350騎乘感受，速上新車官網登錄！",
            link: urlPath
        };

        FB.ui(params, function(response)
        {
            //console.log("response = " + JSON.stringify(response));
            if (response && response.post_id)
            {
                if(cb) cb.apply();
            }
            else
            {
                alert("您必須要分享才能參加活動喔.");
            }

            SimplePreloading.hide();
        });

        //if(cb) cb.apply();
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
        $doms.checkBox = $("#rule_check_box");

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
            if(GameWin.isLocking()) return;
            trySend();

            //clearForm();
        });

        $doms.ruleTrigger.bind("mousedown", function()
        {
            if(GameWin.isLocking()) return;
           GameWin.toMode("rule");
        });
    };

    function trySend()
    {
        var formObj = checkForm();

        if(formObj) execute(formObj);

        function execute(params)
        {
            SimplePreloading.show();

            if(Main.isLocal)
            {
                SimplePreloading.hide();
                alert("您的參加資料已送出成功, 感謝您的參予.");
                clearForm();

                GameWin.hideAndStartNewGame();
            }
            else
            {
                var url = "/api/send_form.ashx";
                var method = "POST";

                //SimplePreloading.setProgress("");
                //SimplePreloading.show();

                $.ajax
                ({
                    url: url,
                    type: method,
                    data: params,
                    dataType: "json"
                })
                    .done(function (response)
                    {
                        //if(closeLoading || (closeLoading == null && _defaultCloseLoading)) SimplePreloading.hide();

                        console.log("response = " + JSON.stringify(response));

                        if (response.res == "ok")
                        {
                            alert("您的參加資料已送出成功, 感謝您的參予.");
                            clearForm();

                            GameWin.hideAndStartNewGame();
                        }
                        else
                        {
                            alert(response.res);
                        }
                        SimplePreloading.hide();

                    })
                    .fail(function ()
                    {
                        alert("無法取得伺服器資料");
                        SimplePreloading.hide();
                    });
            }
        }
    }

    _p.clearForm = clearForm;
    function clearForm()
    {
        $doms.selectCounty.prop('selectedIndex', 0);
        FormHelper.completeZone($doms.selectCounty, $doms.selectZone);

        $doms.checkBox.attr("checked", false);

        $doms.field_name.val("");
        $doms.field_phone.val("");
        $doms.field_addressDetail.val("");
    }

    function checkForm()
    {
        if(!$doms.checkBox.is(":checked")){ alert('您必須先閱讀並同意個人資料告知事項'); return; }

        var formObj={};
        var dom;

        dom = $doms.field_name[0];
        if(PatternSamples.onlySpace.test(dom.value))
        {
            alert('請輸入您的名稱'); dom.focus(); return;
        }else formObj.name = dom.value;

        dom = $doms.field_phone[0];
        if(!PatternSamples.phone.test(dom.value))
        {
            alert('請輸入正確的手機號碼'); dom.focus(); return;
        }
        else formObj.phone = dom.value;


        dom = $doms.field_addressDetail[0];
        if(PatternSamples.onlySpace.test(dom.value))
        {
            alert('請輸入您的地址'); dom.focus(); return;
        }
        else formObj.address_detail = dom.value;

        var addressObj = FormHelper.getAddressValue($doms.selectCounty, $doms.selectZone);

        if(addressObj.county && addressObj.zone)
        {
            formObj.address_county = addressObj.county;
            formObj.address_zone = addressObj.zone;
        }
        else
        {
            alert('請選擇您居住的區域'); return;
        }


        return formObj;
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
        $doms.container = $(".fail_container");
        $doms.title = $doms.container.find(".fail_title");
        $doms.btnAgain = $doms.container.find(".fail_btn_again");
        $doms.btnExit = $doms.container.find(".fail_btn_exit");

        var w = $doms.container.width(),
            h = $doms.container.height();

        var dic =
        {
            "w":true,
            "h":false,
            "margin-left": true,
            "margin-top": false
        };

        Helper.pxToPercent($doms.title[0],w,h,dic);
        Helper.pxToPercent($doms.btnAgain[0],w,h,dic);
        Helper.pxToPercent($doms.btnExit[0],w,h,dic);

        Helper.getInitValue($doms.container[0]);

        $doms.container.css("visibility", "visible").css("display", "none");

        //_p.show();

        $doms.btnAgain.bind("click", function()
        {
            _p.hide();
            CardGame.startFromShuffle();
        });

        $doms.btnExit.bind("click", function()
        {
            _p.hide();
            CardGame.backToStart();
        });

    };

    _p.isShow = function()
    {
        return !_isHiding;
    };

    _p.show = function()
    {
        if(!_isHiding) return;
        _isHiding = false;

        $doms.container.css("display", "block");
        var tl = new TimelineMax;
        tl.set($doms.container, {autoAlpha:0});
        tl.to($doms.container,.4, {autoAlpha:1});
    };

    _p.hide = function()
    {
        if(_isHiding) return;
        _isHiding = true;

        var tl = new TimelineMax;
        tl.to($doms.container,.4, {autoAlpha:0});
        tl.add(function()
        {
            $doms.container.css("display", "none");
        });
    };

    _p.resize = function(width, height, scale)
    {

        Helper.applyTransform($doms.container[0], scale, ["ml", "mt", "w", "h"]);
        $doms.container.css("border-radius", scale * 7 + "px");
    };



}());