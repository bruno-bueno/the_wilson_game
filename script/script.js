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
    vida: 100,
}
var armaAdversario={
    nome:"fome",
    dano: 5,
}
var vezesAtacado=0;

function main(){
    let jogo=true;
    let quemJoga=gerarNumeroAleatorio(0, 2);
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
        else if(escolha==2){
            defesaHeroi();
        }
        else if(escolha==3){
            recuperarVida(comida);
        }
        else{
            jogo=false;
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
    console.log("Wilson jogou chuck na ilha e tirou "+armaHeroi.dano+"de dano!");
    console.log("A ilha ficou com "+adversario.vida+"de vida");
    armaHeroi.dano+=2;
}

function defesaHeroi(){
    armaAdversario.dano/=2
    let dano=armaAdversario.dano;
    heroi.vida-=dano;
    console.log("Você se defendeu! no fim das contas...")
    console.log("A ilha te deu "+armaAdversario.dano+"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+"de vida");
}

function ataqueIlha(){
    if(adversario.vida<=50){
        armaAdversario.dano*=2;
        heroi.vida-=armaAdversario.dano;
    }
    else{
        heroi.vida-=armaAdversario.dano;
    }
    console.log("A ilha te deu "+armaAdversario.dano+"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+"de vida");
    armaAdversario.dano+=1.5;
    vezesAtacado++;
}

function recuperarVida(comida){
    if(comida>=25){
        heroi.vida+=5;
        console.log("Wilson comeu uma banana, e recuperou 5 de vida, agora esta com "+heroi.vida);
    }
    else if(comida>=10 && comida<25){
        heroi.vida+=15;
        console.log("Wilson comeu uma melancia, e recuperou 15 de vida, agora esta com "+heroi.vida);
    }
    else if(comida>=2 && comida<10){
        heroi.vida+=30;
        console.log("Wilson comeu um bife enorme, e recuperou 65 de vida, agora esta com "+heroi.vida);
    }
    else{
        heroi.vida+=65;
        armaHeroi.dano*=armaHeroi.dano;
        console.log("Wilson comeu um XIS RAFAO, e recuperou 65 de vida, agora esta com "+heroi.vida);
        console.log("E agora seu dano foi dobrado");
    }

    return heroi.vida;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

