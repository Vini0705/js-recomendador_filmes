// Lista de Filmes:

// Idade 18 anos;
// comédia >>> Todo mundo em pânico 1
// romance >>> 50 tons de cinza 
// ação >>> Bastardos Inglórios


// Idade 14 anos;
// comédia >>> Ela é Demais
// romance >>> Depois do Universo
// ação >>> Maze Runner 


// Idade Livre;
// comédia >>> Alvin e os Esquilos 
// romance >>> Diario de uma Princesa 
// ação >>> Karate Kid 

let filme;
let campoIdade;
let campoAcao;
let campoRomance;
let campoComedia;

function setup() {
  createCanvas(600, 400);
  createElement('h2', 'Recomendador de Filmes');
  createSpan("Idade:  ")
  campoIdade = createInput();
  createElement('h3' , 'Selecione somente Um genero de filme');
  campoAcao = createCheckbox('Ação');
  campoAcao = createCheckbox('Romance');
  campoAcao = createCheckbox('Comédia');
}

function draw() {
  background(220);
  textSize(40);
  textAlign( CENTER, CENTER);
  
  
  let idade = campoIdade. value()
  if(idade >=18){
    filme = 'Bastardos Inglórios';
  }else if(idade >= 14){
    filme = 'Maze Runner';
  }else {
    filme = 'Karatê Kid'
  }
  text(filme, width/2, height/2);
}

function geraRecomendacao(idade, acao, comedia, romance){
  if(idade >= 18){
    if(acao){
    return 'BastardosInglorios';
  }else if(romance){
    return '50 tons de cinza'
  }else if(comedia){
    return 'Todo mundo em pânico'
  }else{
    return 'Bastardos Englórios'; 
  }
  }else if(idade >= 14){
    if(ação){
      return 'Maze Runner';
    }else if(romance){
      return 'Depois do Universo';
    }else if(comedia)
      return 'Karate Kid';
  }else if(romance){
    return 'Diario de uma Princesa'
  }else if(comedia){
    return 'Alvin e os Esquilos'
  }else{
  }
}


  
  
  




