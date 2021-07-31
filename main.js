canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

player1_width = 40;
player1_height = 60;
player1_image = "player1.png";
player1_x = 10;
player1_y = 300;

player2_width = 40;
player2_height = 60;
player2_image = "player2.png";
player2_x = 750;
player2_y = 300;

ball_width = 15;
ball_height = 15;
ball_image = "ball.png";
ball_x = 400;
ball_y = 300;

background_image = "court.gif";

ball_status = "none";


function add(){  
   
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    addball();

    addplayer1();

    addplayer2();

    
}

function addplayer1(){
    player1_imgTag = new Image();
    player1_imgTag.onload = uploadplayer1;
    player1_imgTag.src = player1_image;
}
function addplayer2(){
    player2_imgTag = new Image();
    player2_imgTag.onload = uploadplayer2;
    player2_imgTag.src = player2_image;
}
function addball(){
    ball_imgTag = new Image();
    ball_imgTag.onload = uploadball;
    ball_imgTag.src = ball_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);

}

function uploadplayer1(){
    ctx.drawImage(player1_imgTag, player1_x, player1_y, player1_width, player1_height);
}

function uploadplayer2(){
    ctx.drawImage(player2_imgTag, player2_x, player2_y, player2_width, player2_height);
}

function uploadball(){
    ctx.drawImage(ball_imgTag, ball_x, ball_y, ball_width, ball_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

        if(keyPressed == '38'){
            player1_up();
            console.log("up arrow key")
        }
        if(keyPressed == '40'){
            player1_down();
            console.log("down arrow key")
        }
        if(keyPressed == '37'){
            player1_left();
            console.log("left arrow key")
        }
        if(keyPressed == '39'){
            player1_right();
            console.log("right arrow key")
        }
        if(keyPressed == '87'){
            player2_up();
            console.log("key w")
        }
        if(keyPressed == '83'){
            player2_down();
            console.log("key s")
        }
        if(keyPressed == '65'){
            player2_left();
            console.log("key a")
        }
        if(keyPressed == '68'){
            player2_right();
            console.log("key a")
        }
        if(keyPressed == '77'){
            throw1();
            console.log("key m")
        }
        if(keyPressed == '81'){
            throw2();
            console.log("key q")
        }
        
}
function check2(){
    
    if(player2_x == ball_x && player2_y == ball_y){
         ball_x = player2_x;
         ball_y = player2_y;
         ball_image = "ballclear.png";
         player2_image = "player2ball.png"; 
         addplayer2();
         uploadBackground();
         uploadplayer1();
         uploadplayer2();
         uploadball()
         localStorage.setItem("ball_status", ball_status);
         ball_status = "player2";

    }
    else{
     player2_image = "player2.png"; 
     addplayer2();
     uploadBackground();
     uploadplayer1();
     uploadplayer2();
     uploadball() 
     ball_status = "none";
     localStorage.setItem("ball_status", ball_status);   
    }
 }
 
 function check(){
     
     if(player1_x == ball_x && player1_y == ball_y){
          ball_x = player1_x;
          ball_y = player1_y;
          player1_image = "player1ball.png"; 
          ball_image = "ballclear.png";
          addplayer1();
          uploadBackground();
          uploadplayer1();
          uploadplayer2();
          uploadball()
          ball_status = "player1";
          localStorage.setItem("ball_status", ball_status);
     }
     else{
      player1_image = "player1.png"; 
      addplayer1();
      uploadBackground();
      uploadplayer1();
      uploadplayer2();
      uploadball();   
      ball_status = "none"; 
      localStorage.setItem("ball_status", ball_status);
     }
 }
 
function throw1(){
    check();

    if(player1_x == ball_x && player1_y == ball_y){
        ball_x = ball_x + 140; 
        ball_image = "ball.png";
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball();
        ball_status = "none";
        ball_check();
    }
    else{
        ball_x = ball_x; 
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball();   
    }
    
}

function throw2(){
    check2();
    
    if(player2_x == ball_x && player2_y == ball_y){
        ball_x = ball_x - 140; 
        ball_image = "ball.png";
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball();
        ball_status = "none";
        ball_check2();
    }
    else{
        ball_x = ball_x; 
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball();   
    }
}
function player1_up(){
    if(ball_status == "player1"){
    if(player1_y >= 0){
        player1_y = player1_y - 10;
        ball_y = ball_y - 10;
        ball_image = "ballclear.png";
        console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
        console.log("When up arrow is pressed, x =" + ball_x + " | y =" + ball_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball();
        check();
    } 
    }
    else{
        player1_y = player1_y - 10;
        console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball();
        check();  
    }
}

function player1_down(){

    if(ball_status == "player1"){
        if(player1_y <= 500){
            player1_y = player1_y + 10;
            ball_y = ball_y + 10;
            ball_image = "ballclear.png";
            console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
            console.log("When up arrow is pressed, x =" + ball_x + " | y =" + ball_y);
            uploadBackground();
            uploadplayer1();
            uploadplayer2();
            uploadball();
            check();
        } 
        }
        else{
            player1_y = player1_y + 10;
            console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
            uploadBackground();
            uploadplayer1();
            uploadplayer2();
            uploadball();
            check();  
        }
}
function player1_left(){
    if(ball_status == "player1"){
        if(player1_y >= 0){
            player1_x = player1_x - 10;
            ball_image = "ballclear.png";
            ball_x = ball_x - 10;
            console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
            console.log("When up arrow is pressed, x =" + ball_x + " | y =" + ball_y);
            uploadBackground();
            uploadplayer1();
            uploadplayer2();
            uploadball();
            check();
        }
    }
    else{
        player1_x = player1_x - 10;
            console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
            console.log("When up arrow is pressed, x =" + ball_x + " | y =" + ball_y);
            uploadBackground();
            uploadplayer1();
            uploadplayer2();
            uploadball();
            check();
    }
}
    function player1_right(){
        if(ball_status == "player1"){
            if(player1_y >= 0){
                player1_x = player1_x + 10;
                ball_image = "ballclear.png";
                ball_x = ball_x + 10;
                console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
                console.log("When up arrow is pressed, x =" + ball_x + " | y =" + ball_y);
                uploadBackground();
                uploadplayer1();
                uploadplayer2();
                uploadball();
                check();
            }
        }
        else{
            player1_x = player1_x + 10;
                console.log("When up arrow is pressed, x =" + player1_x + " | y =" + player1_y);
                console.log("When up arrow is pressed, x =" + ball_x + " | y =" + ball_y);
                uploadBackground();
                uploadplayer1();
                uploadplayer2();
                uploadball();
                check();
        }
    }

function player2_up(){
if(ball_status == "player2")
    if(player2_y >= 0){
        player2_y = player2_y - 10;
        ball_image = "ballclear.png";
        ball_y = ball_y - 10; 
        console.log("When up arrow is pressed, x =" + player2_x + " | y =" + player2_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball()
        check2()
    }

else{
    player2_y = player2_y - 10; 
    console.log("When up arrow is pressed, x =" + player2_x + " | y =" + player2_y);
    uploadBackground();
    uploadplayer1();
    uploadplayer2();
    uploadball()
    check2()
}
}


function player2_down(){
if(ball_status =="player2")
    if(player2_y <= 500){
        player2_y = player2_y + 10;
        ball_y = ball_y + 10;
        ball_image = "ballclear.png";
        console.log("When down arrow is pressed, x =" + player2_x + " | y =" + player2_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball()
        check2()
    }
    else{
        player2_y = player2_y + 10;
        console.log("When down arrow is pressed, x =" + player2_x + " | y =" + player2_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball()
        check2()  
    }
}
function player2_left(){
    if (ball_status == "player2"){
    if(player2_x >=0){
        player2_x = player2_x - 10;
        ball_image = "ballclear.png";
        ball_x = ball_x - 10;
        console.log("When left arrow is pressed, x =" + player2_x + " | y =" + player2_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball()
        check2()
    }
}
    else{
        player2_x = player2_x - 10;
        console.log("When left arrow is pressed, x =" + player2_x + " | y =" + player2_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball()
        check2()
    }
}
function player2_right(){
    if(ball_status == "player2"){
    if(player2_x <= 790){
        player2_x = player2_x + 10;
        ball_image = "ballclear.png";
        ball_x = ball_x + 10;
        console.log("When right arrow is pressed, x =" + player2_x + " | y =" + player2_y);
        uploadBackground();
        uploadplayer1();
        uploadplayer2();
        uploadball()
        check2()
    }
}
else{
    player2_x = player2_x + 10;
    console.log("When right arrow is pressed, x =" + player2_x + " | y =" + player2_y);
    uploadBackground();
    uploadplayer1();
    uploadplayer2();
    uploadball()
    check2()    
}
}
function ball_check(){
    if (player2_x == ball_x && player2_y == ball_y){
        ctx.clearRect(player2_x, player2_y, 40, 60);
        uploadBackground();
    }
}
function ball_check2(){
    if (player1_x == ball_x && player1_y == ball_y){
        ctx.clearRect(player1_x, player1_y, 40, 60);
        uploadBackground();
    }
}

function ball_remove(){
    ctx.clearRect(ball_x, ball_y, 15, 15);
    uploadBackground();    
}
