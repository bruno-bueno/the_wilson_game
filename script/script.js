var h3Opcao=document.getElementById("opcao");
var opp1=document.getElementById("opp1");
var opp2=document.getElementById("opp2");
var jogoTela=document.getElementById("jogo");

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
var quemJoga=gerarNumeroAleatorio(0, 2);

function main(){
    var h3Jogador = document.getElementById('jogador');
    var opp3=document.getElementById("opp3");
    var botao1 = document.getElementById("um");
    var botao2 = document.getElementById("dois");
    var botao3 = document.getElementById("tres");
    let jogo=true;
    do{
    let comida = gerarNumeroAleatorio(1,50);
    if(quemJoga%2==0){
        h3Jogador.textContent = 'Wilson começa!';
        console.log("Wilson começa!");
        console.log("Voce pode:");
        console.log("1-jogar chuck na ilha, a cada jogada o o seu dano aumenta em +2");
        console.log("2-se defender, o dano da ilha sera cortado pela metade");  
        if(vezesAtacado>5 && comida%2==0){
            opp3.style.display = 'block';
            console.log("Caiu uma comida surpresa no campo de batalha! Você tem mais uma opcção");
            console.log("3-comer, você pode comer e recuperar vida de forma levemente aleatoria");   
        }
        //let escolha=prompt("Qual sua escolha 1, 2 ou 3:");

        /*if(escolha==1){
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
        }*/

      

    }
    else{
        h3Jogador.innerHTML = 'A ilha começa!';
        console.log("A ilha começa!");
        ataqueIlha();
    }
    if(adversario.vida<=0){
        console.clear();
        console.log("You Win");
        jogo=false;
    }
    if(heroi.vida<=0){
        console.log("Game Over");
        jogo=false;
    }
    quemJoga++;
    }while(jogo)
}
function ataqueHeroi(){
    adversario.vida-=armaHeroi.dano;
    console.log("Wilson jogou chuck na ilha e tirou "+armaHeroi.dano+"de dano!");
    console.log("A ilha ficou com "+adversario.vida+" de vida");
    armaHeroi.dano+=2;
}

function defesaHeroi(){
    armaAdversario.dano/=2;
    heroi.vida-=armaAdversario.dano;
    console.log("Você se defendeu! no fim das contas...")
    console.log("A ilha te deu "+armaAdversario.dano +"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+" de vida");
    quemJoga++
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
    console.log("E Wilson ficou com "+heroi.vida+" de vida");
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
        console.log("Wilson comeu um bife enorme, e recuperou 30 de vida, agora esta com "+heroi.vida);
    }
    else{
        heroi.vida+=65;
        armaHeroi.dano*=armaHeroi.dano;
        console.log("Wilson comeu um XIS RAFAO, e recuperou 65 de vida, agora esta com "+heroi.vida);
        console.log("E agora seu dano foi dobrado e o adversario não joga");
        quemJoga++;
    }

    return heroi.vida;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

