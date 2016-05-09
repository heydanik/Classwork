$(document).ready(function(){
   
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
    var h = $("#canvas").height();
	var w = $("#canvas").width();
    var food;
    var cw = 20;
	var d;
	var snakeArray;
    
    var lose = [];
	lose[0] = "You lose";
	lose[1] = "The wall is better than you";
	lose[2] = "Buy some glasses";
	lose[3] = "Ouch";
    
	function init()
	{
		d = "";
		makeSnake();
		makeFood(); 
        if(typeof game_loop != "undefined") clearInterval(game_loop);  
        game_loop = setInterval(color, 55);
	}
	init();
    
    function gameover() {
         clearInterval(game_loop);
         var text = document.getElementById("msg");
          text.innerHTML = 
         lose[Math.floor(Math.random() * lose.length)];
        
    }
    
    function makeFood()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
	}
	
	function makeSnake()
	{  snakeArray = []; 
		var length = 4; 
            for(var i = length-1; i>=0; i--)
		{
			snakeArray.push({x: i, y:0});
		}
	}

	function color()
	{  
        var nx = snakeArray[0].x;
		var ny = snakeArray[0].y;
        
		ctx.fillStyle = "#ad9d9d";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";		
		
		if(d == "right") nx++;
        else if(d == "up") ny--;
		else if(d == "left") nx--;		
		else if(d == "down") ny++;
		
		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snakeArray))
		{   init();
			
            
			return;
          
		}

		if(nx == food.x && ny == food.y)
		{
			var tail = {x: nx, y: ny};
			

			makeFood();
		}
		else
		{
			var tail = snakeArray.pop();
			tail.x = nx; tail.y = ny;
     
		}

		
		snakeArray.unshift(tail); 
		
		for(var i = 0; i < snakeArray.length; i++)
		{
			var c = snakeArray[i];
			
			paint_cell(c.x, c.y);
		}

		paint_cell(food.x, food.y);

	
	}

	function paint_cell(x, y)
	{
		ctx.fillStyle = "green";
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "black";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}
	
	function check_collision(x, y, array)
	{

		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
            
		}
		return false;
  
	}
	

	$(document).keydown(function(e){
		var key = e.which;
		
		if(key == "37" && d != "right") d = "left";
		else if(key == "38" && d != "down") d = "up";
		else if(key == "39" && d != "left") d = "right";
		else if(key == "40" && d != "up") d = "down";
		
	})
			
})