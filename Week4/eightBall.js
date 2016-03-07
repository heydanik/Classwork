var answers = [
'Maybe. Idk.', 'Why the hell not?', 'Not with that attitude.', 'Ask nicely.', 'Go ask your mom. Tell her I said hi.', 'I certainly hope not.', 'Abso-tively.', 'Does it matter? Does anything really matter?'];

document.getElementById('answerButton').onclick = function (){
    var answer = answers[Math.floor(Math.random()* answers.length)];
<<<<<<< HEAD
    document.getElementById('eightBall').innerHTML = answer;
    document.getElementById('eightBall').effect("shake");
=======
    document.getElementById('span').innerHTML = answer;

>>>>>>> origin/master
};


