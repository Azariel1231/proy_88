// Crea la variable de canvas 
var canvas = new fabric.Canvas('myCanvas');
//Establece las posiciónes para la pelota y el agujero.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

// escribe el código para subir la imagen de golf al canvas

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		});
	new_image();
}

// escribe el código para subir la imagen de la pelota al canvas

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
		top:ball_y,
		left:ball_x
	});
	canvas.add(ball_obj);
	});
}

/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "TERMINÓ EL JUEGO"
	y haz que el borde del canvas sea 'rojo'.*/
window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="¡Lo lograste!";
	document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	// Escribe el código para mover la pelota hacia arriba.

	function up()
	{
		if(ball_y <=400)
		 {
			ball_y = ball_y - block_image_height;
			console.log("altura de la image =" +block_image_height);
			console.log("cuando se presiona la fecha hacia arriba, X= " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	// Escribe el código para mover la pelota hacia abajo.

	function down()
	{
		 if(ball_y <=450)
		 {
			ball_y = ball_y + block_image_height;
			console.log("altura de la image =" +block_image_height);
			console.log("cuando se presiona la fecha hacia abajo, X= " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	// Escribe el código para mover la pelota hacia la izquierda.
	
	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_height;
			console.log("altura de la image =" +block_image_height);
			console.log("cuando se presiona la fecha hacia la izquierda, X= " + ball_y + " , Y = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	// Escribe el código para mover la pelota hacia la derecha.

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
			console.log("altura de la image =" +block_image_height);
			console.log("cuando se presiona la fecha hacia la derecha, X= " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();	
		}
	}
	
}

