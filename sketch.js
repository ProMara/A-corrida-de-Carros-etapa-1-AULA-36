var canvas;
var cenario, form;
var database, gameState;


function preload() {
  cenario = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //1º) criar o objeto jogo da classe Game

  //2º) chamar o método start do objeto jogo
  

}

function draw() {
  background(cenario);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
