//Database functions- .ref(), .on()-referring a location in database
//.ref()--> used to refer to the location of the database value we care about
//.on()---> creates a listener which keeps listening to the changes in database.

var ball;
var database;
var ballPositionRef;
var position;
function setup(){
    database=firebase.database;
    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballPositionRef= database.ref('ball/position');
    ballPositionRef.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref('ball/position').set({
       'x': position.x+x,
       'y': position.y+y
   })
}

function readPosition(){
position=data.val();
ball.x=position.x;
ball.y=position.y;
}
