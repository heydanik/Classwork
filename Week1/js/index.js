
var head = document.getElementsByTagName("h1")
for (var i = 0; i < head.length; i++)
  {

   head[i].style.textAlign = "center";
   head[i].style.marginLeft = "20px";
   head[i].style.marginRight = "20px";
   head[i].style.border = "10px solid #426d86";
   head[i].innerHTML = "<img src='images/spidermon.png'height=\"150\" width=\"250\"marginTop=20%><img src='images/spidermon.png'height=\"150\" width=\"250\"><img src='images/spidermon.png'height=\"150\" width=\"250\"><img src='images/spidernope.jpg'height=\"150\" width=\"250\">";

  }

var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;width:99%;height:70%;background:#9bb6c6;z-index:-1';
document.body.appendChild(elemDiv);

elemDiv.innerHTML = "<img src='images/smoke.gif' height=\"450\" width=\"550\">";
elemDiv.style.fontFamily = "Arial";
elemDiv.style.textAlign = "center";
elemDiv.style.fontSize = "80px";




var body = document.getElementsByTagName("body")
for (var i = 0; i <head.length; i++)
 {
 	body[i].style.backgroundColor = "#6b8aa3";


 }

