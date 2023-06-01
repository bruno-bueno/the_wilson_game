var heroi ={
    nome: "Wilson",
    vida: 100,
    defesa: 0
}
var armaHeroi={
    nome:"Chuck",
    dano: 10,
}
var adversario ={
    nome: "ilha",
    vida: 50,
}
var armaAdversario={
    nome:"fome",
    dano: 5,
}
var vezesAtacado=0;

function main(){
    let jogo=true;
    let quemJoga=gerarNumeroAleatorio(1, 2);
    do{
    let comida = gerarNumeroAleatorio(1,50);
    if(quemJoga%2==0){
        console.log("Wilson começa!");
        console.log("Voce pode:");
        console.log("1-jogar chuck na ilha, a cada jogada o o seu dano aumenta em +2");
        console.log("2-se defender, o dano da ilha sera cortado pela metade");  
        if(vezesAtacado>5 && comida%2==0){
            console.log("Caiu uma comida surpresa no campo de batalha! Você tem mais uma opcção");
            console.log("3-comer, você pode comer e recuperar vida de forma levemente aleatoria");   
        }
        let escolha=prompt("Qual sua escolha 1, 2 ou 3:");

        if(escolha==1){
            ataqueHeroi();
        }
        if(escolha==2){
            defesaHeroi();
        }
        if(escolha==3){
            recuperarVida(comida);
        }
    }
    else{
        console.log("A ilha começa!");
        ataqueIlha();
    }
    quemJoga++;
    }while(jogo)
}
function ataqueHeroi(){
    adversario.vida-=armaHeroi.dano;
    armaHeroi.dano+=2;
    console.log("Wilson jogou chuck na ilha e tirou "+armaHeroi.dano+"de dano!");
    console.log("A ilha ficou com "+adversario.vida+"de vida");
}

function defesaHeroi(){
    heroi.vida-=(armaAdversario.dano/2);
    console.log("Você se defendeu! no fim das contas...")
    console.log("A ilha te deu "+armaAdversario.dano+"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+"de vida");
}

function ataqueIlha(){
    heroi.vida-=armaAdversario.dano;
    armaAdversario.dano+=1.5;
    console.log("A ilha te deu "+armaAdversario.dano+"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+"de vida");
    vezesAtacado++;
}

function recuperarVida(comida){
    if(comida>=25){
        heroi.vida+5;
        console.log("Wilson comeu uma banana, e recuperou 5 de vida, agora esta com "+heroi.vida);
    }
    else if(comida>10 && comida<25){
        heroi.vida+15;
        console.log("Wilson comeu uma melancia, e recuperou 15 de vida, agora esta com "+heroi.vida);
    }
    else{
        heroi.vida+30;
        console.log("Wilson comeu um bife enorme, e recuperou 30 de vida, agora esta com "+heroi.vida);
    }
    return heroi.vida;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

