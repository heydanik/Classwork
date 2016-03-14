function checkUsername() {                        
  var username = el.value;                        
  if (username.length < 5) {                      
    elMsg.className = 'warning';                 
    elMsg.textContent = 'Not long enough, yet...';
  } else {                                        
    elMsg.textContent = '';                       
  }
}

function tipUsername() {                          
  elMsg.className = 'tip';                       
  elMsg.innerHTML = 'Username must be at least 5 characters'; 
}
var info = document.getElementByClassName('info');
for (var i =0; i < infoElements.length; i++) info.push(infoElements[i].value);
if (info.length < 5){
elMsg.innerHTML = "Stop. Hammertime."} else {
    elMsg.innerHTML = "";}

var el = document.getElementById('username');     
var elMsg = document.getElementById('feedback');  

var button = document.getElementById('submit');
button.onclick = function(){
	alert('Hello' + ' ' + el.value);
}

el.addEventListener('focus', tipUsername, false); 
el.addEventListener('blur', checkUsername, false);
