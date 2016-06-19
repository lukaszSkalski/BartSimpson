
var pos=0;
//add burt
var im = document.createElement("img");
im.setAttribute("src", "burtskate.png");
im.setAttribute("width", "200px");
im.setAttribute("style", "position: absolute");
im.style.bottom= "300px";
im.style.zIndex= "9";
document.getElementById("imgAlign").appendChild(im);
im.style.left=("0px");
im.setAttribute("id", "imag");
im.style.visibility= "hidden";
//add button
var butt = document.createElement("button");
var tbutt = document.createTextNode("Kliknij");
butt.appendChild(tbutt);
butt.setAttribute("id", "butto");
document.querySelector("nav div").appendChild(butt);

document.getElementById("imgAlign").style.position=("relative");

//burt - show and hide function
document.getElementById('butto').onclick = 
function myMove() {im.style.visibility= "visible";
	setTimeout(function(){

  for (i = 0; i < 1140; i++) {
		
			pos=pos+1;
			im.style.left = (pos+"px");
		
		} 

	
 
}, 500, setTimeout(function(){
	
	for (i = 0; i < 1140; i++) {
		
			pos=pos-1;
			im.style.left = (pos+"px");
		
		}pos=0;

}, 1000, setTimeout(function(){
	im.style.visibility= "hidden";
}, 1500)));}
