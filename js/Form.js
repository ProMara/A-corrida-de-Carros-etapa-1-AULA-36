class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    this.greeting = createElement("h2");
  }

  definirPosicao() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  definirEstilo() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  esconder() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //criar o método que define o que ocorre quando clica no botão


 
  mostrar(){
    this.definirPosicao();
    this.definirEstilo();
    //chamar o método dessa classe que define o que ocorre no clique do botao
    
  }

}
