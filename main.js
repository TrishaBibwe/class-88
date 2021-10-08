var canvas=new fabric.Canvas('myCanvas');
block_image_width= 42 ;
block_image_height= 42;
player_x = 12;
player_y= 20;
var player_object= "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y, left:player_x
    });
    canvas.add(player_object);
    });
}
function new_Image(get_image){
    fabric.Image.fromURL(get_image, function(Img){block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y, left:player_x
    });
    canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed= e.keycode;
    console.log(keypressed);
    if (e.shiftkey==true && keypressed=='80')
    {
        console.log("p and shift pressed together");
        block_image_width= block_image_width+10;
        block_image_height= block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }
    if (e.shiftkey==true && keypressed=='77')
    {
        console.log("m and shift pressed together");
        block_image_width= block_image_width-10;
        block_image_height= block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }
    if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='87'){
        new_Image('wall.jpg');
        console.log("w");
    }
    if (keypressed=='71'){
        new_Image('ground.png');
        console.log("g");
    }
    if (keypressed=='76'){
        new_Image('light_green.png');
        console.log("l");
    }
    if (keypressed=='84'){
        new_Image('trunk.jpg');
        console.log("t");
    }
    if (keypressed=='82'){
        new_Image('roof.jpg');
        console.log("r");
    }
    if (keypressed=='89'){
        new_Image('yellow_wall.png');
        console.log("y");
    }
    if (keypressed=='68'){
        new_Image('dark_green.png');
        console.log("d");
    }
    if (keypressed=='85'){
        new_Image('unique.png');
        console.log("u");
    }
    if (keypressed=='67'){
        new_Image('cloud.jpg');
        console.log("c");
    }
  
}
function up(){
    if(player_y>=0){
        player_y= player_y-block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("When up arrow is pressed, x=" + player_x + ", y=" player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=558){
        player_y= player_y+block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("When down arrow is pressed, x=" + player_x + ",y=" player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When left arrow is pressed, x=" + player_x + ",y=" player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<=958){
        player_x=player_x+block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When right arrow is pressed, x=" + player_x + ",y=" player_y);
        canvas.remove(player_object);
        player_update();
    }
}