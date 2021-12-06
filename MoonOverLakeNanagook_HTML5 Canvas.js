(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MoonOverLakeNanagook_HTML5 Canvas_atlas_1", frames: [[0,306,161,245],[0,0,2030,304]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["MoonOverLakeNanagook_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["MoonOverLakeNanagook_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Trees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// needles
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-2.95,-1.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fir
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#003333","#001111"],[0,1],50.4,97.6,-21.4,108).s().p("AmYIGIGaxDIGXQwQjKBLjcAAQi+AAjNg4g");
	this.shape.setTransform(40.875,57.3551);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// trunk
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#660000","#1A0000"],[0,1],25.4,121.9,3.7,124.7).s().p("AAADSQhAgVAAi6IAAhsQAKhqAyAAQBBAAAEFSQAAApgUAZQgPATgTAAQgFAAgGgCg");
	this.shape_1.setTransform(41.5,125.7129);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-1,84.7,148);


(lib.star2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AggAhQghghguAAQAuAAAhggQAgghAAguQAAAuAhAhQAhAgAuAAQguAAghAhQghAhAAAuQAAguggghg");
	this.shape.setTransform(11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star2, new cjs.Rectangle(0,0,22.4,22.4), null);


(lib.Mountains = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#090000").s().p("A7knuIFUDSIFeigIFACYIAKgMIGGhkIDmDSIE1iMIEPDIIGZjIIGGDaIFzkqIHqFyIC9IHMhIBAAUg");
	this.shape.setTransform(230.55,49.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mountains, new cjs.Rectangle(0,0,461.1,99), null);


(lib.Moon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,255,0.357)").s().p("AksFvQgOhAAAhGQAAj4CwivQCuiwD5gBIAQABQAOBAAABGQAAD4ivCwQivCwj5AAIgQgBg");
	this.shape.setTransform(31.5,36.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#C4DDEE","#93BDE0"],[0,1],0,0,0,0,0,60.6).s().p("AmnGoQiwiwAAj4QAAj3CwiwQCviwD4AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj4AAiviwg");
	this.shape_1.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Moon, new cjs.Rectangle(0,0,120,120), null);


(lib.Lake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BED9EC","#265F84"],[0,1],118,-85.2,0,118,-85.2,159.9).s().p("Egx1AGxQ0ni0AAj9QAAj9UnizQUoizdNAAQJNAAIXAPQIKATHvAmIA8AEQINAoHLA/QUsCzAAD9QAAD90sC0Q0oCz9JAAQ9NAA0oizg");
	this.shape.setTransform(450.925,61.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lake, new cjs.Rectangle(0,0,901.9,122.4), null);


(lib.Grass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-6.3,-8.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grass, new cjs.Rectangle(-6.3,-8,1015,152), null);


(lib.Gradient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,150,0,-150).s().p("A/PXcMAAAgu3MA+fAAAMAAAAu3g");
	this.shape.setTransform(200,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gradient, new cjs.Rectangle(0,0,400,300), null);


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// diamond2
	this.instance = new lib.star2();
	this.instance.setTransform(11.3,11.4,1,1,0,0,0,11.3,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:11.2,regY:11.2,rotation:6.1017,x:11.15,y:11.55},0).wait(1).to({rotation:12.2034,y:11.5},0).wait(1).to({rotation:18.3051,y:11.45},0).wait(1).to({rotation:24.4068,x:11.1},0).wait(1).to({rotation:30.5085},0).wait(1).to({rotation:36.6102},0).wait(1).to({rotation:42.7119,x:11.15,y:11.4},0).wait(1).to({rotation:48.8136,x:11.1},0).wait(1).to({rotation:54.9153,x:11.15,y:11.35},0).wait(1).to({rotation:61.0169},0).wait(1).to({rotation:67.1186,y:11.25},0).wait(1).to({rotation:73.2203,x:11.2},0).wait(1).to({rotation:79.322},0).wait(1).to({rotation:85.4237},0).wait(1).to({rotation:91.5254,x:11.15,y:11.15},0).wait(1).to({rotation:97.6271,x:11.2},0).wait(1).to({rotation:103.7288},0).wait(1).to({rotation:109.8305},0).wait(1).to({rotation:115.9322,x:11.3,y:11.1},0).wait(1).to({rotation:122.0339,x:11.25},0).wait(1).to({rotation:128.1356,x:11.35},0).wait(1).to({rotation:134.2373},0).wait(1).to({rotation:140.339,y:11.15},0).wait(1).to({rotation:146.4407,y:11.1},0).wait(1).to({rotation:152.5424,x:11.4},0).wait(1).to({rotation:158.6441,x:11.35,y:11.15},0).wait(1).to({rotation:164.7458,x:11.45},0).wait(1).to({rotation:170.8475,y:11.2},0).wait(1).to({rotation:176.9492,y:11.15},0).wait(1).to({rotation:183.0508},0).wait(1).to({rotation:189.1525,x:11.5,y:11.2},0).wait(1).to({rotation:195.2542},0).wait(1).to({rotation:201.3559},0).wait(1).to({rotation:207.4576,y:11.25},0).wait(1).to({rotation:213.5593},0).wait(1).to({rotation:219.661,x:11.55,y:11.35},0).wait(1).to({rotation:225.7627},0).wait(1).to({rotation:231.8644,y:11.4},0).wait(1).to({rotation:237.9661,y:11.35},0).wait(1).to({rotation:244.0678,x:11.5,y:11.4},0).wait(1).to({rotation:250.1695,x:11.55},0).wait(1).to({rotation:256.2712},0).wait(1).to({rotation:262.3729,x:11.5,y:11.45},0).wait(1).to({rotation:268.4746},0).wait(1).to({rotation:274.5763,y:11.5},0).wait(1).to({rotation:280.678,y:11.55},0).wait(1).to({rotation:286.7797,x:11.45},0).wait(1).to({rotation:292.8814},0).wait(1).to({rotation:298.9831},0).wait(1).to({rotation:305.0847,x:11.4},0).wait(1).to({rotation:311.1864,x:11.45},0).wait(1).to({rotation:317.2881,x:11.4},0).wait(1).to({rotation:323.3898,x:11.35,y:11.5},0).wait(1).to({rotation:329.4915},0).wait(1).to({rotation:335.5932,x:11.3},0).wait(1).to({rotation:341.6949,y:11.55},0).wait(1).to({rotation:347.7966,x:11.25,y:11.5},0).wait(1).to({rotation:353.8983},0).wait(1).to({rotation:360,x:11.2},0).wait(1));

	// diamond
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AggAhQghgggugBQAuAAAhggQAgghAAguQABAuAgAhQAhAgAuAAQguABghAgQggAhgBAuQAAguggghg");
	this.shape.setTransform(11.35,11.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.7,22.7);


// stage content:
(lib.MoonOverLakeNanagook_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		playSound("Nanagook");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Star
	this.instance = new lib.star();
	this.instance.setTransform(230.45,53.35,0.5804,0.5804,0,0,0,19.8,19.6);
	this.instance.shadow = new cjs.Shadow("rgba(147,189,224,1)",0,0,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// lake
	this.instance_1 = new lib.Lake();
	this.instance_1.setTransform(168.9,335.1,1,1,0,0,0,450.9,61.1);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,906,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:61.2,y:335.2},0).wait(59));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(1,1,1,1,-250.52631579,-250.52631579,-250.52631579,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-246.05263158,-246.05263158,-246.05263158,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-241.57894737,-241.57894737,-241.57894737,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-237.10526316,-237.10526316,-237.10526316,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-232.63157895,-232.63157895,-232.63157895,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-228.15789474,-228.15789474,-228.15789474,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-223.68421053,-223.68421053,-223.68421053,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-219.21052632,-219.21052632,-219.21052632,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-214.73684211,-214.73684211,-214.73684211,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-210.26315789,-210.26315789,-210.26315789,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-205.78947368,-205.78947368,-205.78947368,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-201.31578947,-201.31578947,-201.31578947,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-196.84210526,-196.84210526,-196.84210526,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-192.36842105,-192.36842105,-192.36842105,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-187.89473684,-187.89473684,-187.89473684,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-183.42105263,-183.42105263,-183.42105263,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-178.94736842,-178.94736842,-178.94736842,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-174.47368421,-174.47368421,-174.47368421,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-170,-170,-170,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-165.52631579,-165.52631579,-165.52631579,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-161.05263158,-161.05263158,-161.05263158,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-156.57894737,-156.57894737,-156.57894737,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-152.10526316,-152.10526316,-152.10526316,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-147.63157895,-147.63157895,-147.63157895,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-143.15789474,-143.15789474,-143.15789474,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-138.68421053,-138.68421053,-138.68421053,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-134.21052632,-134.21052632,-134.21052632,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-129.73684211,-129.73684211,-129.73684211,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-125.26315789,-125.26315789,-125.26315789,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-120.78947368,-120.78947368,-120.78947368,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-116.31578947,-116.31578947,-116.31578947,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-111.84210526,-111.84210526,-111.84210526,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-107.36842105,-107.36842105,-107.36842105,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-102.89473684,-102.89473684,-102.89473684,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-98.42105263,-98.42105263,-98.42105263,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-93.94736842,-93.94736842,-93.94736842,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-89.47368421,-89.47368421,-89.47368421,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-85,-85,-85,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-80.52631579,-80.52631579,-80.52631579,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-76.05263158,-76.05263158,-76.05263158,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-71.57894737,-71.57894737,-71.57894737,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-67.10526316,-67.10526316,-67.10526316,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-62.63157895,-62.63157895,-62.63157895,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-58.15789474,-58.15789474,-58.15789474,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-53.68421053,-53.68421053,-53.68421053,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-49.21052632,-49.21052632,-49.21052632,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-44.73684211,-44.73684211,-44.73684211,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-40.26315789,-40.26315789,-40.26315789,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-35.78947368,-35.78947368,-35.78947368,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-31.31578947,-31.31578947,-31.31578947,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-26.84210526,-26.84210526,-26.84210526,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-22.36842105,-22.36842105,-22.36842105,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-17.89473684,-17.89473684,-17.89473684,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-13.42105263,-13.42105263,-13.42105263,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-8.94736842,-8.94736842,-8.94736842,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-4.47368421,-4.47368421,-4.47368421,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1));

	// Grass
	this.instance_2 = new lib.Grass();
	this.instance_2.setTransform(195.3,337,1,1,0,0,0,501.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// Tree2
	this.instance_3 = new lib.Trees("synched",0);
	this.instance_3.setTransform(110.35,222.5,0.8318,0.837,0,0,0,41.3,73.5);
	var instance_3Filter_2 = new cjs.ColorFilter(0.75,0.75,0.75,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-5,-3,89,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:39.4,regY:72.9,x:108.7,y:221.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(1).to(new cjs.ColorFilter(0.75438596,0.75438596,0.75438596,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.75877193,0.75877193,0.75877193,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.76315789,0.76315789,0.76315789,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.76754386,0.76754386,0.76754386,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.77192982,0.77192982,0.77192982,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.77631579,0.77631579,0.77631579,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.78070175,0.78070175,0.78070175,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.78508772,0.78508772,0.78508772,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.78947368,0.78947368,0.78947368,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.79385965,0.79385965,0.79385965,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.79824561,0.79824561,0.79824561,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.80263158,0.80263158,0.80263158,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.80701754,0.80701754,0.80701754,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.81140351,0.81140351,0.81140351,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.81578947,0.81578947,0.81578947,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.82017544,0.82017544,0.82017544,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.8245614,0.8245614,0.8245614,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.82894737,0.82894737,0.82894737,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.83333333,0.83333333,0.83333333,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.8377193,0.8377193,0.8377193,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.84210526,0.84210526,0.84210526,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.84649123,0.84649123,0.84649123,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.85087719,0.85087719,0.85087719,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.85526316,0.85526316,0.85526316,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.85964912,0.85964912,0.85964912,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.86403509,0.86403509,0.86403509,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.86842105,0.86842105,0.86842105,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.87280702,0.87280702,0.87280702,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.87719298,0.87719298,0.87719298,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.88157895,0.88157895,0.88157895,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.88596491,0.88596491,0.88596491,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.89035088,0.89035088,0.89035088,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.89473684,0.89473684,0.89473684,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.89912281,0.89912281,0.89912281,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.90350877,0.90350877,0.90350877,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.90789474,0.90789474,0.90789474,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.9122807,0.9122807,0.9122807,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.91666667,0.91666667,0.91666667,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.92105263,0.92105263,0.92105263,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.9254386,0.9254386,0.9254386,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.92982456,0.92982456,0.92982456,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.93421053,0.93421053,0.93421053,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.93859649,0.93859649,0.93859649,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.94298246,0.94298246,0.94298246,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.94736842,0.94736842,0.94736842,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.95175439,0.95175439,0.95175439,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.95614035,0.95614035,0.95614035,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.96052632,0.96052632,0.96052632,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.96491228,0.96491228,0.96491228,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.96929825,0.96929825,0.96929825,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.97368421,0.97368421,0.97368421,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.97807018,0.97807018,0.97807018,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.98245614,0.98245614,0.98245614,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.98684211,0.98684211,0.98684211,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.99122807,0.99122807,0.99122807,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.99561404,0.99561404,0.99561404,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1));

	// Tree1
	this.instance_4 = new lib.Trees("synched",0);
	this.instance_4.setTransform(81,244.6,0.795,0.7145,0,0,0,51.6,92.5);
	var instance_4Filter_3 = new cjs.ColorFilter(0.6,0.6,0.6,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_3];
	this.instance_4.cache(-5,-3,89,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:39.4,regY:72.9,scaleX:0.7951,x:71.25,y:230.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_3).wait(1).to(new cjs.ColorFilter(0.60701754,0.60701754,0.60701754,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.61403509,0.61403509,0.61403509,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.62105263,0.62105263,0.62105263,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.62807018,0.62807018,0.62807018,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.63508772,0.63508772,0.63508772,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.64210526,0.64210526,0.64210526,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.64912281,0.64912281,0.64912281,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.65614035,0.65614035,0.65614035,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.66315789,0.66315789,0.66315789,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.67017544,0.67017544,0.67017544,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.67719298,0.67719298,0.67719298,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.68421053,0.68421053,0.68421053,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.69122807,0.69122807,0.69122807,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.69824561,0.69824561,0.69824561,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.70526316,0.70526316,0.70526316,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.7122807,0.7122807,0.7122807,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.71929825,0.71929825,0.71929825,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.72631579,0.72631579,0.72631579,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.73333333,0.73333333,0.73333333,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.74035088,0.74035088,0.74035088,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.74736842,0.74736842,0.74736842,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.75438596,0.75438596,0.75438596,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.76140351,0.76140351,0.76140351,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.76842105,0.76842105,0.76842105,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.7754386,0.7754386,0.7754386,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.78245614,0.78245614,0.78245614,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.78947368,0.78947368,0.78947368,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.79649123,0.79649123,0.79649123,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.80350877,0.80350877,0.80350877,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.81052632,0.81052632,0.81052632,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.81754386,0.81754386,0.81754386,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.8245614,0.8245614,0.8245614,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.83157895,0.83157895,0.83157895,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.83859649,0.83859649,0.83859649,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.84561404,0.84561404,0.84561404,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.85263158,0.85263158,0.85263158,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.85964912,0.85964912,0.85964912,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.86666667,0.86666667,0.86666667,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.87368421,0.87368421,0.87368421,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.88070175,0.88070175,0.88070175,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.8877193,0.8877193,0.8877193,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.89473684,0.89473684,0.89473684,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.90175439,0.90175439,0.90175439,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.90877193,0.90877193,0.90877193,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.91578947,0.91578947,0.91578947,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.92280702,0.92280702,0.92280702,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.92982456,0.92982456,0.92982456,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.93684211,0.93684211,0.93684211,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.94385965,0.94385965,0.94385965,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.95087719,0.95087719,0.95087719,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.95789474,0.95789474,0.95789474,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.96491228,0.96491228,0.96491228,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.97192982,0.97192982,0.97192982,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.97894737,0.97894737,0.97894737,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.98596491,0.98596491,0.98596491,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.99298246,0.99298246,0.99298246,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1));

	// Mountains
	this.instance_5 = new lib.Mountains();
	this.instance_5.setTransform(196.6,252.5,1,1,0,0,0,230.6,49.5);
	var instance_5Filter_4 = new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,24.99,24.99,0);
	this.instance_5.filters = [instance_5Filter_4];
	this.instance_5.cache(-2,-2,465,103);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_4).wait(60));

	// Moon
	this.instance_6 = new lib.Moon();
	this.instance_6.setTransform(290,365,1,1,0,0,0,60,60);
	this.instance_6.shadow = new cjs.Shadow("rgba(147,189,224,1)",0,0,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:287.25,y:360.6},0).wait(1).to({x:284.65,y:356.2},0).wait(1).to({x:282.15,y:351.85},0).wait(1).to({x:279.75,y:347.45},0).wait(1).to({x:277.45,y:343.05},0).wait(1).to({x:275.25,y:338.65},0).wait(1).to({x:273.15,y:334.25},0).wait(1).to({x:271.15,y:329.9},0).wait(1).to({x:269.25,y:325.5},0).wait(1).to({x:267.45,y:321.1},0).wait(1).to({x:265.8,y:316.7},0).wait(1).to({x:264.2,y:312.3},0).wait(1).to({x:262.7,y:307.9},0).wait(1).to({x:261.35,y:303.5},0).wait(1).to({x:260.05,y:299.05},0).wait(1).to({x:258.9,y:294.65},0).wait(1).to({x:257.8,y:290.25},0).wait(1).to({x:256.85,y:285.85},0).wait(1).to({x:255.95,y:281.4},0).wait(1).to({x:255.2,y:277},0).wait(1).to({x:254.55,y:272.6},0).wait(1).to({x:253.95,y:268.15},0).wait(1).to({x:253.5,y:263.75},0).wait(1).to({x:253.15,y:259.3},0).wait(1).to({x:252.9,y:254.9},0).wait(1).to({x:252.75,y:250.45},0).wait(1).to({x:252.7,y:246},0).wait(1).to({x:252.75,y:241.6},0).wait(1).to({x:252.9,y:237.15},0).wait(1).to({x:253.15,y:232.7},0).wait(1).to({x:253.5,y:228.25},0).wait(1).to({x:253.95,y:223.85},0).wait(1).to({x:254.5,y:219.4},0).wait(1).to({x:255.2,y:214.95},0).wait(1).to({x:255.95,y:210.5},0).wait(1).to({x:256.8,y:206.05},0).wait(1).to({x:257.8,y:201.6},0).wait(1).to({x:258.85,y:197.1},0).wait(1).to({x:260,y:192.65},0).wait(1).to({x:261.3,y:188.2},0).wait(1).to({x:262.65,y:183.75},0).wait(1).to({x:264.15,y:179.25},0).wait(1).to({x:265.75,y:174.8},0).wait(1).to({x:267.4,y:170.35},0).wait(1).to({x:269.2,y:165.85},0).wait(1).to({x:271.1,y:161.4},0).wait(1).to({x:273.1,y:156.9},0).wait(1).to({x:275.2,y:152.45},0).wait(1).to({x:277.4,y:147.95},0).wait(1).to({x:279.7,y:143.45},0).wait(1).to({x:282.1,y:138.95},0).wait(1).to({x:284.6,y:134.5},0).wait(1).to({x:287.2,y:130},0).wait(1).to({x:289.9,y:125.5},0).wait(1).to({x:292.7,y:121},0).wait(1).to({x:295.6,y:116.5},0).wait(1).to({x:298.65,y:112},0).wait(1).to({x:301.75,y:107.5},0).wait(1).to({x:305,y:103},0).wait(1));

	// Gradient
	this.instance_7 = new lib.Gradient();
	this.instance_7.setTransform(200,150,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:3, endFrame:3, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:4, endFrame:4, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:5, endFrame:5, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:6, endFrame:6, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:7, endFrame:7, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:8, endFrame:8, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:9, endFrame:9, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:10, endFrame:10, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:11, endFrame:11, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:12, endFrame:12, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:13, endFrame:13, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:14, endFrame:14, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:15, endFrame:15, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:16, endFrame:16, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:17, endFrame:17, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:18, endFrame:18, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:19, endFrame:19, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:20, endFrame:20, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:21, endFrame:21, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:22, endFrame:22, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:23, endFrame:23, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:24, endFrame:24, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:25, endFrame:25, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:26, endFrame:26, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:27, endFrame:27, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:28, endFrame:28, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:29, endFrame:29, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:30, endFrame:30, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:31, endFrame:31, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:32, endFrame:32, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:33, endFrame:33, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:34, endFrame:34, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:35, endFrame:35, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:36, endFrame:36, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:37, endFrame:37, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:38, endFrame:38, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:39, endFrame:39, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:40, endFrame:40, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:41, endFrame:41, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:42, endFrame:42, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:43, endFrame:43, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:44, endFrame:44, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:45, endFrame:45, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:46, endFrame:46, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:47, endFrame:47, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:48, endFrame:48, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:49, endFrame:49, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:50, endFrame:50, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:51, endFrame:51, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:52, endFrame:52, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:53, endFrame:53, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:54, endFrame:54, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:55, endFrame:55, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:56, endFrame:56, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:57, endFrame:57, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:58, endFrame:58, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_1, startFrame:59, endFrame:59, x:-2, y:-2, w:906, h:126});
	this.filterCacheList.push({instance: this.instance_3, startFrame:1, endFrame:1, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:2, endFrame:2, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:3, endFrame:3, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:4, endFrame:4, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:5, endFrame:5, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:6, endFrame:6, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:7, endFrame:7, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:8, endFrame:8, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:9, endFrame:9, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:10, endFrame:10, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:11, endFrame:11, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:12, endFrame:12, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:13, endFrame:13, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:14, endFrame:14, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:15, endFrame:15, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:16, endFrame:16, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:17, endFrame:17, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:18, endFrame:18, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:19, endFrame:19, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:20, endFrame:20, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:21, endFrame:21, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:22, endFrame:22, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:23, endFrame:23, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:24, endFrame:24, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:25, endFrame:25, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:26, endFrame:26, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:27, endFrame:27, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:28, endFrame:28, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:29, endFrame:29, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:30, endFrame:30, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:31, endFrame:31, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:32, endFrame:32, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:33, endFrame:33, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:34, endFrame:34, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:35, endFrame:35, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:36, endFrame:36, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:37, endFrame:37, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:38, endFrame:38, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:39, endFrame:39, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:40, endFrame:40, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:41, endFrame:41, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:42, endFrame:42, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:43, endFrame:43, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:44, endFrame:44, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:45, endFrame:45, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:46, endFrame:46, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:47, endFrame:47, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:48, endFrame:48, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:49, endFrame:49, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:50, endFrame:50, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:51, endFrame:51, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:52, endFrame:52, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:53, endFrame:53, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:54, endFrame:54, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:55, endFrame:55, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:56, endFrame:56, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:57, endFrame:57, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:58, endFrame:58, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_3, startFrame:59, endFrame:59, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:1, endFrame:1, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:2, endFrame:2, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:3, endFrame:3, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:4, endFrame:4, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:5, endFrame:5, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:6, endFrame:6, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:7, endFrame:7, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:8, endFrame:8, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:9, endFrame:9, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:10, endFrame:10, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:11, endFrame:11, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:12, endFrame:12, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:13, endFrame:13, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:14, endFrame:14, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:15, endFrame:15, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:16, endFrame:16, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:17, endFrame:17, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:18, endFrame:18, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:19, endFrame:19, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:20, endFrame:20, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:21, endFrame:21, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:22, endFrame:22, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:23, endFrame:23, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:24, endFrame:24, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:25, endFrame:25, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:26, endFrame:26, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:27, endFrame:27, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:28, endFrame:28, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:29, endFrame:29, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:30, endFrame:30, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:31, endFrame:31, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:32, endFrame:32, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:33, endFrame:33, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:34, endFrame:34, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:35, endFrame:35, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:36, endFrame:36, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:37, endFrame:37, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:38, endFrame:38, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:39, endFrame:39, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:40, endFrame:40, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:41, endFrame:41, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:42, endFrame:42, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:43, endFrame:43, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:44, endFrame:44, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:45, endFrame:45, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:46, endFrame:46, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:47, endFrame:47, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:48, endFrame:48, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:49, endFrame:49, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:50, endFrame:50, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:51, endFrame:51, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:52, endFrame:52, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:53, endFrame:53, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:54, endFrame:54, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:55, endFrame:55, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:56, endFrame:56, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:57, endFrame:57, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:58, endFrame:58, x:-5, y:-3, w:89, h:152});
	this.filterCacheList.push({instance: this.instance_4, startFrame:59, endFrame:59, x:-5, y:-3, w:89, h:152});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-112.9,150,815,311);
// library properties:
lib.properties = {
	id: 'DD8E829A909FDF45AD2556AE53873FC7',
	width: 400,
	height: 300,
	fps: 12,
	color: "#000066",
	opacity: 1.00,
	manifest: [
		{src:"images/MoonOverLakeNanagook_HTML5 Canvas_atlas_1.png?1638766975195", id:"MoonOverLakeNanagook_HTML5 Canvas_atlas_1"},
		{src:"sounds/Nanagook.mp3?1638766975305", id:"Nanagook"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DD8E829A909FDF45AD2556AE53873FC7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;