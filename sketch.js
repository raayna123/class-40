var database;
var gameState = 0;
var playerCount, form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var track, car1Img, car2Img, car3Img, car4Img, groundImg;

function preload() {
    track = loadImage("images/track.jpg");
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    groundImg = loadImage("images/ground.png");
}

function setup(){
    database = firebase.database();

    createCanvas(displayWidth - 20,displayHeight - 30);

    game = new Game();
    game.getState();
    game.start();

}  

function draw(){
    background("white");
    if(playerCount == 4) {
        game.update(1);
    }
    if(gameState == 1) {
        game.play();
    }
    if(gameState == 2) {
        game.end();
    }
}




