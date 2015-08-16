/**
 * Created by sav on 2015/8/16.
 */
createjs.MovieClip.prototype.getLabel = function(label)
{
    var labels = this.getLabels();
    var i, obj;
    for(i=0;i<labels.length;i++)
    {
        obj = labels[i];
        if(obj.label == label) return obj;
    }

    return null;
};

createjs.MovieClip.prototype.playTo = function(frameOrLabel, fixDuration, cb, offset)
{
    var clip = this;

    if(typeof (frameOrLabel) == "string")
    {
        var obj = clip.getLabel(frameOrLabel);
        if(!obj)
        {
            console.error("label: " + frameOrLabel + " not exist");
            return;
        }

        frameOrLabel = obj.position;
    }

    if(offset != null) frameOrLabel += offset;

    if(fixDuration == 0)
    {
        clip.gotoAndStop(frameOrLabel);
        if(cb) cb.apply();
    }
    else
    {
        var targetFrame = frameOrLabel,
            currentFrame = this.currentFrame,
            duration = Math.abs(targetFrame - currentFrame) / Main.settings.FPS,
            tweenObj = {frame:currentFrame};

        if(fixDuration != null) duration = fixDuration;

        var tl = new TimelineMax;
        tl.to(tweenObj, duration, {ease:Linear.easeNone, frame:targetFrame, onUpdate:function()
        {
            //_clip.currentFrame = tweenObj.frame;
            clip.gotoAndStop(tweenObj.frame);
        }, onComplete:function()
        {
            if(cb) cb.apply();
        }});
    }
};