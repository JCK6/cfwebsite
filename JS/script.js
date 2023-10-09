window.onload = choosePic;
var pic1 = new Array("./IMG/RIMG/1.png","./IMG/RIMG/2.png","./IMG/RIMG/3.png","./IMG/RIMG/4.png","./IMG/RIMG/5.png","./IMG/RIMG/6.png","./IMG/RIMG/7.png","./IMG/RIMG/8.png");
var pic2 = new Array("./IMG/RIMG/1.png","./IMG/RIMG/2.png","./IMG/RIMG/3.png","./IMG/RIMG/4.png","./IMG/RIMG/5.png","./IMG/RIMG/6.png","./IMG/RIMG/7.png","./IMG/RIMG/8.png");
var pic3 = new Array("./IMG/RIMG/1.png","./IMG/RIMG/2.png","./IMG/RIMG/3.png","./IMG/RIMG/4.png","./IMG/RIMG/5.png","./IMG/RIMG/6.png","./IMG/RIMG/7.png","./IMG/RIMG/8.png");

window.onload = choosePic2;
var pic4 = new Array("./IMG/RIMG/1.png","./IMG/RIMG/2.png","./IMG/RIMG/3.png","./IMG/RIMG/4.png","./IMG/RIMG/5.png","./IMG/RIMG/6.png","./IMG/RIMG/7.png","./IMG/RIMG/8.png");

function choosePic() {
	var rng1 = Math.floor(Math.random() * pic1.length);
	var rng2 = Math.floor(Math.random() * pic2.length);
	var rng3 = Math.floor(Math.random() * pic3.length);
	document.getElementById("mb1").src = pic1[rng1]
	document.getElementById("mb2").src = pic2[rng2];
	document.getElementById("mb3").src = pic3[rng3];
}

function choosePic2(){
	var rng4 = Math.floor(Math.random() * pic4.length);
	document.getElementById("aIMGS").src = pic4[rng4];
}

var addFunctionOnWindowLoad = function(callback){
	if(window.addEventListener){
		window.addEventListener('load',callback,false);
	}else{
		window.attachEvent('onload',callback);
	}
}

addFunctionOnWindowLoad(choosePic);
addFunctionOnWindowLoad(choosePic2);
