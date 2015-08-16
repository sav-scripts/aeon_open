/**
 * Created by sav on 2015/8/7.
 */
(function(){

    var _p = window.CardGame = {};

    _p.scale = 1;

    var $doms = {},
        _cardList = [],
        _cardDoms = [];

    var NUM_COMBOS = 4,
        NUM_CARDS = NUM_COMBOS * 2,
        COL_GAP = 200,
        ROW_GAP = 240;

    var GAME_WIDTH = COL_GAP * 3,
        GAME_HEIGHT = ROW_GAP * 3;

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
        FAIL: "fail"
    };

    var _states = "readyStart";

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
        $doms.container = $(".game_container");

        $doms.btnStart = $doms.container.find(".btn_start");

        //$doms.btnStart.css("left", -$doms.btnStart.width() *.5);

        $doms.btnStart.bind("click", function()
        {
           if(_states == CardGameStates.READY_START) _p.restart();
        });

        $doms.timeValue = $doms.container.find(".time_value");
        $doms.timeValue.css("display", "block");
        TweenMax.set($doms.timeValue, {autoAlpha:0});

        for(var i=0;i<NUM_CARDS;i++){ createCard(i); }

        function createCard(index)
        {
            var card = _cardList[index] = new Card(index, onCardFlipStart, onCardFlipEnd);
            _cardDoms[index] = card.domElement;

            $doms.container.append(card.domElement);

            card.setFace(parseInt(index/2) + 1);
        }
    };

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
                    console.log("matched");

                    lastCard.playMatched(true);
                    card.playMatched(false);

                    _completeCount ++;
                    if(_completeCount >= WIN_COUNT)
                    {
                        _countDownTimer.pause();
                        changeTimeText("WIN");

                        setCardsActive(false);

                        if(_states == CardGameStates.PLAYING)
                        {
                            _states = CardGameStates.WIN;
                            gameWin();
                        }
                    }
                }
                else
                {
                    console.log("not match");

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
                    }, 1);
                }
            }

        }
    }

    function gameWin()
    {

    }

    function gameFail()
    {
    }

    _p.restart = function()
    {
        _states = CardGameStates.SHUFFLING;

        setCardsActive(false);

        changeTimeText(DURATION);


        var tl = new TimelineMax();
        tl.to($doms.btnStart,.1, {autoAlpha:0});
        tl.staggerTo(_cardList,.6, {ease:Power1.easeInOut, shuffleProgress:0, onUpdate:onShuffle, onUpdateParams:["{self}"]},.05, 0);
        tl.add(shuffleCards);
        tl.staggerTo(_cardList,.6, {ease:Power1.easeInOut, shuffleProgress:1, onUpdate:onShuffle, onUpdateParams:["{self}"]},.05, "+=.2");

        tl.to($doms.timeValue,.2, {autoAlpha:1});

        tl.add(function()
        {
            gameStart();
        });

        function onShuffle(tweenObj)
        {
            var card = tweenObj.target;
            updateCardPosition(card);
        }

        function gameStart()
        {
            _p.time = DURATION;

            _countDownTimer = new TimelineMax;
            _countDownTimer.to(_p, DURATION, {time:0, ease:Linear.easeNone, onUpdate:function()
            {
                changeTimeText(Math.ceil(_p.time));
            }, onComplete:function()
            {
                //console.log("time out");

                changeTimeText("TIME OUT");
                setCardsActive(false);

                gameFail();
            }});

            _flipStartHistory = [];
            _flipEndHistory = [];
            _completeCount = 0;

            setCardsActive(true);
            _states = CardGameStates.PLAYING;
        }

    };

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

    _p.onResize = function(width, height)
    {
        var bound = Helper.getSize_contain(width, height, GAME_WIDTH, GAME_HEIGHT);

        //$doms.container.width(bound.width).height(bound.height);

        CardGame.scale = bound.ratio;

        updateAllCardPosition();
    };

    function changeTimeText(v)
    {
        $doms.timeValue.text(v);
        $doms.timeValue.css("top", -$doms.timeValue.height() *.5);
    }

    function updateAllCardPosition()
    {
        var i, card;
        for(i=0;i<_cardList.length;i++)
        {
            card = _cardList[i];
            updateCardPosition(card);
        }
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

}());

(function(){

    window.Card = Card;

    var CARD_WIDTH = 160,
        CARD_HEIGHT = 200;

    function Card(index, _cb_onFlipStart, _cb_onFlipEnd)
    {
        var _p = window.Card.prototype = this;

        _p.faceIndex = 0;
        _p.isCover = true;

        _p.index = index;

        _p.flipProgress = 0;
        _p.flipAble = false;

        _p.shuffleProgress = 1;


        var $container, $picture;

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
        };

        _p.playMatched = function(isFirst)
        {
            var degree = -10;
            if(isFirst) degree *= -1;

            var tl = new TimelineMax();
            tl.set($picture, {rotationZ:degree});
            tl.to($picture, 1.6, {rotationZ:0, ease:Elastic.easeOut.config(1,.15)});

            //tl.to($picture,.3, {rotationZ:10});
            //tl.to($picture,.3, {rotationZ:0});
            //tl.to($picture,.3, {rotationZ:10});
            //tl.to($picture,.3, {rotationZ:0});
        };
    }

}());