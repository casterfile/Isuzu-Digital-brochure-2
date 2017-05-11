var isReferencesShow = false;

var Model = {

	score : 0,
	touch : false,
	tempArr : [],
	summaryBoolean : true,
	prevP : null,
	nextP : null,
	

	addImage : function(path, id, x, y, dur, props) {
		var img = document.createElement('img');
		$(img).hide();
		img.id = id;
		img.src = path;
		setTimeout(function(evt){
			$(img).show();
		}, 100);
		$(img).load(function(evt){
			$(img).css({"left":(x - (this.width / 2)) + "px", "top":(y - (this.height / 2)) + "px"});
			if(dur) {
				Model.addTweenFrom(img, dur, props);
			}
		});
		$("#container").append(img);
	},

	addText : function(txt, id, clss, x, y, dur, props) {
		var p = document.createElement('p');
		$(p).text(txt);
		p.id = id;
		$(p).hide();
		setTimeout(function(){
			$(p).show();
		}, 100);
		$(p).addClass(clss);
		$(p).css({"left":(x - 250) + "px", "top":y + "px"});
		if(dur) {
			Model.addTweenFrom(p, dur, props);
		}
		$("#container").append(p);
	},

	addDiv : function(id, clss, x, y, dur, props) {
		var div = document.createElement('div');
		div.id = id;
		$(div).addClass(clss);
		$(div).hide();
		setTimeout(function(){
			$(div).show();
		}, 100);
		$(div).css({"left":(x - 10) + "px", "top":(y - 10) + "px"});
		if(dur) {
			Model.addTweenFrom(div, dur, props);
		}
		$("#container").append(div);
	},

	addButton : function(id, x, y, w, h) {
		var btn = document.createElement('div');
		btn.id = id;
		$(btn).css({"left":x+"px", "top":y+"px", "width":w+"px", "height":h+"px"});
		$("#container").append(btn);
	},

	addTweenFrom : function(obj, dur, props) {
		TweenMax.from(obj, dur, props);
	},

	addTweenTo: function(obj, dur, props) {
		TweenMax.to(obj, dur, props);
	},

	insertLineTransition : function(path, x, y, w, h, dur, trans){
		var div = document.createElement('div');
		div.style.visibility = "hidden";
		setTimeout(function(){
			div.style.visibility = "visible";
		}, 100);
		div.style.overflow = "hidden";
		div.style.left = x + "px";
		div.style.top = y + "px";
		div.style.width = w + "px";
		div.style.height = h + "px";
		if((dur) && (trans)){
			Model.addTweenFrom(div, dur, trans);
		}
		var img = document.createElement("img");
		img.src = path;
		$(div).append(img);
		$("#container").append(div);
	}

}

function swipePage(prevPage, nextPage){
	Model.prevP = prevPage;
	Model.nextP = nextPage;
}

var View = {

	page1 : function() {
		Controller.removePage();
		Model.addImage("images/Scene1/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene1/track.png", "", 512, 384, 5, {delay:3,alpha:0, ease:Power2.easeOut});
		Model.addImage("images/Scene1/logo.png", "", 822, 150,1, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Scene1/buttons1.png", "NextPage", 822, 400,1, {delay:1.5, alpha:0, y:200, ease:Power2.easeIn});
		Model.addImage("images/Scene1/buttons2.png", "", 822, 570,1, {delay:2, alpha:0, y:200, ease:Power2.easeIn});
		Controller.page1Handler();
	},

	page2 : function() {
		Controller.removePage();
		Model.addImage("images/Scene2/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene1/logo.png", "homepage", 840, 120,1, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Scene2/textinfo.png", "", 832, 384, .5, {delay:1.5,alpha:0, ease:Power2.easeOut});
		Model.addImage("images/Scene2/buttonBg.png", "", 516,  680, 680, .5, {delay:1, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Model.addImage("images/Scene2/button1.png", "NextPage", 120, 680, .3, {delay:1, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Model.addImage("images/Scene2/button2.png", "", 320, 680, .3, {delay:1.3, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Model.addImage("images/Scene2/button3.png", "", 470, 680, .3, {delay:1.6, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Model.addImage("images/Scene2/button4.png", "", 650, 680, .3, {delay:1.9, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Model.addImage("images/Scene2/button5.png", "", 870, 680, .3, {delay:2.2, alpha:0, scaleX:1.5, scaleY:1.5,ease:Power2.easeOut});
		Controller.page2Handler();
		Controller.homapage();
	},

	page3 : function() {
		Controller.removePage();
		Model.addImage("images/Scene3/bg.png", "", 512, 384, .5, {scaleX:1.5, scaleY:1.5});
		Model.addImage("images/Scene1/logo.png", "homepage", 840, 120,1, {delay:1, scaleX:0, scaleY:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/textinfo.png", "", 832, 330, 1, {delay:1.5, alpha:0, ease:Power2.easeIn});
		Model.addImage("images/Scene3/button1.png", "", 822, 550,1, {delay:2, alpha:0, y:200, ease:Power2.easeIn});
		Model.addImage("images/Scene3/button2.png", "", 822, 670,1, {delay:2.5, alpha:0, y:200, ease:Power2.easeIn});
		Controller.homapage();
	}

}

var Controller = {

	initialize : function() {
		document.addEventListener('touchmove', function(e){ e.preventDefault(); });
		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		if (isiPad) {
			Model.touch = true;
		}
		View.page1();
		Controller.gestureHandler()
	},

	removePage : function() {
		while(parent.document.getElementById("container").childNodes.length > 0) {
			parent.document.getElementById("container").removeChild(parent.document.getElementById("container").childNodes[0]);
		}
	},

	homapage : function() {
		if(Model.touch) {
			$("#homepage").bind("touchend", function(evt){
				View.page1();
			});
		}else{
			$("#homepage").bind("mouseup", function(evt){
				View.page1();
			});
		}
	},

	page1Handler : function() {
		if(Model.touch) {
			$("#NextPage").bind("touchend", function(evt){
				View.page2();
			});
		}else{
			$("#NextPage").bind("mouseup", function(evt){
				View.page2();
			});
		}
	},

	page2Handler : function() {
		if(Model.touch) {
			$("#NextPage").bind("touchend", function(evt){
				View.page3();
			});
		}else{
			$("#NextPage").bind("mouseup", function(evt){
				View.page3();
			});
		}
	},
	


	lastPageHandler : function() {
		var eventStr = "mouseup";
		if(Model.touch) {
			eventStr = "touchend";
		}
		$("#gsk_btn").bind(eventStr, function(){
			View.page5();
			document.getElementById("click").play();
		});
		$("#syn_btn1").bind(eventStr, function(){
			View.page6();
			document.getElementById("click").play();
		});
		$("#syn_btn2").bind(eventStr, function(){
			View.page7();
			document.getElementById("click").play();
		});
		$("#syn_btn3").bind(eventStr, function(){
			View.page1();
			document.getElementById("click").play();
		});
	}

}






