/**
 * Created by sav on 2015/8/7.
 */
(function(){

    var _p = window.CardGame = {};

    _p.scale = 1;

    var _clip,
        _centerCard,
        $doms = {},
        _cardList = [],
        _cardDoms = [];

    var NUM_COMBOS = 4,
        NUM_CARDS = NUM_COMBOS * 2,
        CARD_WIDTH = 225,
        CARD_HEIGHT = 227,
        COL_GAP = CARD_WIDTH - 10,
        ROW_GAP = CARD_HEIGHT - 10;

    //var GAME_WIDTH = CARD_WIDTH * 3,
    //    GAME_HEIGHT = CARD_HEIGHT * 3;

    var DURATION = 30;
    var WIN_COUNT = 2;

    /*
     readyStart
     shuffling
     playing
     end
     */

    var CardGameStates =
    {
        READY_START: "readyStart",
        SHUFFLING: "shuffling",
        PLAYING: "playing",
        WIN: "win",
        FAIL: "fail",
        IDLE: "idle"
    };

    var _states = CardGameStates.IDLE;

    var _cardPosition =
        [
            {x:-1, y:-1}, {x:0, y:-1}, {x:1, y:-1},
            {x:-1, y: 0},              {x:1, y: 0},
            {x:-1, y: 1}, {x:0, y: 1}, {x:1, y: 1}
        ];


    var _cardShuffleRotation =
        [
            -30,  0,  30,
            0,       0,
            30,  0, -30
        ];

    var _flipStartHistory = [];
    var _flipEndHistory = [];
    var _completeCount = 0;

    var _countDownTimer;

    _p.time = DURATION;

    _p.init = function()
    {
        $(".card_picture").detach();

        $doms.container = $("#card_game");

        $doms.container.css("width", "auto").css("height", "auto");

        $doms.gameContainer = $(".game_container");

        $doms.gameContainer.css("display", "none");

        GameTimer.init();

        for(var i=0;i<NUM_CARDS;i++){ createCard(i); }

        function createCard(index)
        {
            var card = _cardList[index] = new Card(index, onCardFlipStart, onCardFlipEnd);
            _cardDoms[index] = card.domElement;

            $doms.gameContainer.append(card.domElement);

            card.setFace(parseInt(index/2) + 1);
        }

        _centerCard = new Card(10);
        _centerCard.setFace(5);
        _centerCard.isCover = false;
        _centerCard.flipProgress = 1;
        $doms.gameContainer.append(_centerCard.domElement);

        _clip = new lib.CardGameClip();

    };



    _p.beforeStageIn = function(options)
    {
        //$doms.container.css("display", "block");
        //$doms.gameContainer.css("display", "block");

        changeTimeText(DURATION);

        MainScene.addContent(_clip);

        //_clip.gotoAndStop("ReadyPlay");

        _clip.gotoAndStop("StageIn");
        _clip.playTo("StageInComplete");
    };

    _p.afterStageIn = function(options)
    {
        GameTimer.show();
        restart();
    };

    _p.beforeStageOut = function(options)
    {
        GameTimer.hide();

        if(_states == CardGameStates.PLAYING)
        {
            _countDownTimer.pause();
        }

        _states = CardGameStates.IDLE;

        var tl = new TimelineMax;
        tl.to(_clip,.4, {alpha:0});
        tl.to($doms.gameContainer,.4, {autoAlpha:0}, 0);
        tl.add(function()
        {
            TweenMax.set($doms.gameContainer, {autoAlpha:1});
            $doms.gameContainer.css("display", "none");
            MainScene.removeContent(_clip);
            _clip.alpha = 1;
        });
    };

    _p.afterStageOut = function(options)
    {
    };


    function restart()
    {

        _clip.btnStart.addEventListener("mousedown", function()
        {
            _clip.playTo("ReadyPlay", null, function()
            {
                cardIn();
            });
        });

    }

    function cardIn()
    {
        $doms.gameContainer.css("display", "block");

        _states = CardGameStates.SHUFFLING;

        setCardsActive(false);



        var i, card;
        for(i=0;i<_cardList.length;i++)
        {
            card = _cardList[i];
            card.shuffleProgress = 0;
            card.toCover();

            $(card.domElement).css("display", "none");
            updateCardPosition(card);
        }


        var tl = new TimelineMax();
        tl.set(_centerCard.domElement, {scale:0});
        tl.to(_centerCard.domElement,.4, {ease:Back.easeOut.config(4), scale:1});



        //tl.staggerTo(_cardList,.6, {ease:Power1.easeInOut, shuffleProgress:0, onUpdate:onShuffle, onUpdateParams:["{self}"]},.05, 0);

        tl.add(shuffleCards);
        tl.staggerTo(_cardList,.6, {ease:Power1.easeInOut, shuffleProgress:1, onUpdate:onShuffle, onUpdateParams:["{self}"]},.05, "-=.2");

        //tl.to($doms.timeValue,.2, {autoAlpha:1});

        tl.add(function()
        {
            gameStart();
        });

        function onShuffle(tweenObj)
        {
            var card = tweenObj.target;
            $(card.domElement).css("display", "block");
            updateCardPosition(card);
        }

        function gameStart()
        {
            if(_states == CardGameStates.IDLE) return;

            _p.time = DURATION;

            _countDownTimer = new TimelineMax;
            _countDownTimer.to(_p, DURATION, {time:0, ease:Linear.easeNone, onUpdate:function()
            {
                //changeTimeText(Math.ceil(_p.time));
                changeTimeText(_p.time);
            }, onComplete:function()
            {
                //console.log("time out");

                setCardsActive(false);

                gameFail();
            }});

            _flipStartHistory = [];
            _flipEndHistory = [];
            _completeCount = 0;

            setCardsActive(true);
            _states = CardGameStates.PLAYING;
        }
    }

    function onCardFlipStart(card, wasCover)
    {
        //console.log("was cover = " + wasCover);
        //_flip
    }

    function onCardFlipEnd(card, isCover)
    {
        //console.log("is cover = " + isCover);
        if(isCover == false)
        {
            _flipEndHistory.push(card);
            if(_flipEndHistory.length % 2 == 0)
            {
                var lastCard = _flipEndHistory[_flipEndHistory.length - 2];

                //console.log("last face: " + lastCard.faceIndex);
                //console.log("now face: " + card.faceIndex);

                if(lastCard.faceIndex == card.faceIndex)
                {
                    if(_states == CardGameStates.PLAYING)
                    {
                        console.log("matched");

                        lastCard.playMatched(true);
                        card.playMatched(false);

                        _completeCount ++;
                        if(_completeCount >= WIN_COUNT)
                        {
                            _countDownTimer.pause();
                            setCardsActive(false);
                            gameWin();
                        }
                    }
                }
                else
                {
                    console.log("not match");

                    lastCard.playUnMatched(true);
                    card.playUnMatched();

                    var tl = new TimelineMax();
                    tl.add(function()
                    {
                        lastCard.flip(function()
                        {
                            if(_states == CardGameStates.PLAYING) lastCard.setActive(true);
                        });
                        card.flip(function()
                        {
                            if(_states == CardGameStates.PLAYING) card.setActive(true);
                        });
                    },.8);
                }
            }

        }
    }

    function gameWin()
    {
        _states = CardGameStates.WIN;
        //changeTimeText("WIN");
    }

    function gameFail()
    {
        _states = CardGameStates.FAIL;
        //changeTimeText("TIME OUT");

    }

    function shuffleCards()
    {
        var i, index, card, array = [];
        for(i=0;i<NUM_COMBOS;i++)
        {
            array.push(i+1);
            array.push(i+1);
        }

        for(i=0;i<_cardList.length;i++)
        {
            index = array.splice(parseInt(Math.random()*array.length), 1)[0];
            card = _cardList[i];
            card.setFace(index);
        }
    }

    function setCardsActive(isActive)
    {
        for(var i=0;i<_cardList.length;i++)
        {
            var card = _cardList[i];
            card.setActive(isActive);
        }
    }

    function changeTimeText(v)
    {
        //$doms.timeValue.text(v);
        GameTimer.changeValue(v);
    }

    function updateAllCardPosition()
    {
        var i, card;
        for(i=0;i<_cardList.length;i++)
        {
            card = _cardList[i];
            updateCardPosition(card);
        }

        _centerCard.update();
    }

    function updateCardPosition(card)
    {
        var position, $dom, x, y, rotation, progress, rotateProgress;

        progress = card.shuffleProgress;

        $dom = $(card.domElement);
        position = _cardPosition[card.index];

        x = position.x*COL_GAP*CardGame.scale * progress;
        y = position.y*ROW_GAP*CardGame.scale * progress;

        rotateProgress = 1 - Math.abs(progress - .5) / .5;
        rotation = _cardShuffleRotation[card.index] * rotateProgress;

        TweenMax.set($dom[0], {left:x, top:y, rotationZ:rotation});

        card.update();
    }

    _p.resize = function(width, height, scale)
    {
        //_clip.x = width * .5;
        //_clip.y = height * .5;

        //width = 225*3;
        //height = 227*3;

        var boundWidth = 800,
            boundHeight = 1040;


        //var bound = Helper.getSize_contain(width, height, boundWidth, boundHeight);

        //CardGame.scale = bound.ratio;
        //_clip.scaleX = bound.ratio;
        //_clip.scaleY = bound.ratio;

        CardGame.scale = scale;

        updateAllCardPosition();

        GameTimer.update();
    };

}());

(function(){

    window.Card = Card;

    var CARD_WIDTH = 225,
        CARD_HEIGHT = 227;

    function Card(index, _cb_onFlipStart, _cb_onFlipEnd)
    {
        var _p = window.Card.prototype = this;

        _p.faceIndex = 0;
        _p.isCover = true;

        _p.index = index;

        _p.flipProgress = 0;
        _p.flipAble = false;

        _p.shuffleProgress = 1;


        var $container, $picture, $noPicture, $yesPicture, $twinklePicture;

        init();

        function init()
        {
            var dom = _p.domElement = document.createElement("div");
            dom.className = "card_container";
            $container = $(dom);

            dom = document.createElement("div");
            dom.className = "card_picture";
            $picture = $(dom);
            $container.append($picture);

            dom = document.createElement("div");
            dom.className = "card_correct";
            $yesPicture = $(dom);
            $yesPicture.css("display", "none");
            $container.append($yesPicture);

            dom = document.createElement("div");
            dom.className = "card_wrong";
            $noPicture = $(dom);
            $noPicture.css("display", "none");
            $container.append($noPicture);

            dom = document.createElement("div");
            dom.className = "card_twinkle";
            $twinklePicture = $(dom);
            $twinklePicture.css("display", "none");
            $container.append($twinklePicture);



            TweenMax.set($picture[0], {transformPerspective:800});



            $container.bind("click", function()
            {
                if(_p.flipAble)
                {
                    _p.setActive(false);
                    _p.flip();
                }
            });


        }

        _p.setActive = function(isActive)
        {
            _p.flipAble = isActive;

            $container.css("cursor", _p.flipAble? "pointer": "default");
        };

        _p.setFace = function(index)
        {
            _p.faceIndex = index;

            _p.update();
        };

        _p.flip = function(cb)
        {
            if(_cb_onFlipStart) _cb_onFlipStart.apply(null, [_p, _p.isCover]);

            var duration = .8;
            var tl = new TimelineMax();
            if(_p.isCover)
            {
                tl.to(_p, duration, {flipProgress:1, ease:Power1.easeInOut, onUpdate:updateFlip, onComplete:flipComplete});
            }
            else
            {
                tl.to(_p, duration, {flipProgress:2, ease:Power1.easeInOut, onUpdate:updateFlip, onComplete:flipComplete});
            }

            if(cb) tl.add(cb);

            _p.isCover = !_p.isCover;
        };

        _p.toCover = function()
        {
            _p.isCover = true;
            _p.flipProgress = 0;
            updateFlip();

            $noPicture.css("display", "none");
            $yesPicture.css("display", "none");
            $twinklePicture.css("display", "none");
        };

        function updateFlip()
        {
            var progress = _p.flipProgress % 1;
            var rotation = progress * 180;
            if(rotation > 90) rotation -= 180;

            if(progress > .5) progress = 1-progress;
            var offsetX = progress * CardGame.scale * -140;
            //var offsetY = progress * CardGame.scale * -30;

            TweenMax.set($picture[0], {rotationY: rotation, x:offsetX});

            _p.update();
        }

        function flipComplete()
        {
            $picture.css("transform", "none");

            _p.flipProgress = _p.flipProgress % 2;

            if(_cb_onFlipEnd) _cb_onFlipEnd.apply(null, [_p, _p.isCover]);

            //_p.setActive(true);
        }

        _p.update = function()
        {
            var scale = CardGame.scale;
            var isCover = (_p.flipProgress <= .5 || _p.flipProgress >= 1.5);

            var offsetIndex = isCover? 0: _p.faceIndex;
            //console.log(Card.globalScale);
            var offset = -offsetIndex * CARD_WIDTH * scale,
                width = CARD_WIDTH*scale,
                height = CARD_HEIGHT*scale;

            $picture.css("background-position", offset + "px 0").css("left", -width *.5).css("top", -height *.5)
                .css("background-size", "cover").css("width", width).css("height", height);

            resizePic($noPicture);
            resizePic($yesPicture);
            resizePic($twinklePicture);

            function resizePic($dom)
            {
                var width = 207*scale,
                    height = 209*scale;
                $dom.css("width", width).css("height", height).css("background-size", "cover").css("left", -width *.5).css("top", -height *.5);
            }
        };

        _p.playMatched = function(isFirst)
        {
            /*
            var i, gap = .1, times = 6;

            var tl = new TimelineMax();
            for(i=0;i<times;i++)
            {
                tl.set($picture, {autoAlpha:i%2==0?.5: 1}, i*gap);
            }
            */

            var flip = isFirst? 1: -1;

            var twinkleTimes = 4,
                gap = .2, i;


            $yesPicture.css("display", "block");
            $twinklePicture.css("display", "block");
            var tl = new TimelineMax;
            tl.set($yesPicture, {autoAlpha:1});
            tl.set($twinklePicture, {autoAlpha:1});

            for(i=0;i<twinkleTimes;i++)
            {
                tl.set($twinklePicture, {scaleX:flip},i*gap*2);
                tl.set($twinklePicture, {scaleX:-1*flip},"+=" + gap);
            }


            //tl.set($yesPicture, {autoAlpha:0});
            tl.to($yesPicture,.4, {autoAlpha:0}, "-=.4");
            tl.to($twinklePicture,.4, {autoAlpha:0}, "-=.4");
            tl.add(function()
            {
                $yesPicture.css("display", "none");
                $twinklePicture.css("display", "none");
            });
        };

        _p.playUnMatched = function()
        {
            $noPicture.css("display", "block");
            var tl = new TimelineMax;
            tl.set($noPicture, {autoAlpha:1});
            tl.set($noPicture, {autoAlpha:0},.8);
            tl.add(function()
            {
                $noPicture.css("display", "none");
            });
        };
    }

}());

(function(){

    var _p = window.GameTimer = {};

    var _value = 0;
    var _chars = [];

    var CHAR_WIDTH = 80,
        CHAR_GAP = 68,
        CHAR_HEIGHT = 82;

    var $doms = {};

    var _isHiding = false;

    _p.init = function()
    {
        $doms.container = $(".game_timer");
        $doms.timeText = $(".time_text");
        $doms.numberContaier = $(".number_container");

        var dom = document.createElement("div");
        dom.className = "dot_char";

        $doms.dot = $(dom);

        //_p.changeValue(0);
        _p.hide(0);
    };

    _p.show = function(duration)
    {
        if(!_isHiding) return;
        _isHiding = false;

        if(duration == null) duration = .4;

        if(duration == 0)
        {
            $doms.container.css("display", "block");
        }
        else
        {
            $doms.container.css("display", "block");
            var tl = new TimelineMax;
            tl.set($doms.container, {autoAlpha:0});
            tl.to($doms.container, duration, {autoAlpha:1});

        }
    };

    _p.hide = function(duration)
    {
        if(_isHiding) return;
        _isHiding = true;

        if(duration == null) duration = .4;

        if(duration == 0)
        {
            $doms.container.css("display", "none");
        }
        else
        {
            var tl = new TimelineMax;
            tl.to($doms.container, duration, {autoAlpha:0, onComplete:function()
            {
                $doms.container.css("display", "none");
            }});
        }

    };

    _p.changeValue = function(newValue)
    {
        _value = newValue;
        _p.update();
    };

    _p.update = function()
    {
        $doms.numberContaier.empty();

        var string = String(parseInt(_value*100));

        if(string.length == 1) string = "00" + string;
        else if(string.length == 2) string = "0" + string;

        var i, v, charDom, startX = 0, offset = -8, width = 0;
        for(i=0;i<string.length;i++)
        {
            //console.log(string.charAt(i));
            v = parseInt(string.charAt(i));

            if(!_chars[i]) _chars[i] = createChar();
            charDom = _chars[i];
            $doms.numberContaier.append(charDom);

            if(i == string.length-2)
            {
                $doms.numberContaier.append($doms.dot);
                $doms.dot.css("left", startX + offset);
                startX += 9;
            }

            if(i >= string.length-2)
            {
                var smallRate = .25;
                $(charDom).width(smallRate*CHAR_WIDTH).height(smallRate*CHAR_HEIGHT).css("background-position", -CHAR_WIDTH*v*smallRate).css("background-size", "cover").css("left", startX + offset);
                startX += smallRate * CHAR_GAP;
            }
            else
            {
                $(charDom).width(CHAR_WIDTH).height(CHAR_HEIGHT).css("background-position", -CHAR_WIDTH*v).css("left", startX + offset);
                startX += CHAR_GAP;
                width += CHAR_GAP;
            }
        }

        $doms.numberContaier.width(width).css("left", -width *.5);

        TweenMax.set($doms.container, {scale:CardGame.scale});
    };

    function createChar()
    {
        var dom = document.createElement("div");
        dom.className = "number_char";

        return dom;
    }

}());