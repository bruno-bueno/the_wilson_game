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
var comida;
var escolha;

var h3Jogador;
var resp1;
var resp2;
var resp3;

var vidaChuck;
var vidaIlha;

var barraChuck;
var barraIlha;

var porcent= "%";

async function main(){
    barraChuck=document.querySelector("#barraVidaChuck");
    barraIlha=document.querySelector("#barraVidaIlha");
    var inicioTela=document.querySelector(".jogo");
    var opp31=document.querySelector("#opp31");
    var opp32=document.querySelector("#opp32");
    var botao3 = document.querySelector("#tres");
    
    inicioTela.style.display='block';
    h3Jogador = document.querySelector('#jogador');
    resp1=document.querySelector("#respLinha1");
    resp2=document.querySelector("#respLinha2");
    resp3=document.querySelector("#respLinha3");
    var vencedor=document.querySelector("#vencedor");
    vidaChuck=document.querySelector("#vidaChuck");
    vidaIlha=document.querySelector("#vidaIlha");
    var jogo=true;
    do{
    comida = gerarNumeroAleatorio(1,50);
    if(quemJoga%2==0){
        h3Jogador.textContent = 'Wilson começa!';
        console.log("Wilson começa!");
        console.log("Voce pode:");
        console.log("1-jogar chuck na ilha, a cada jogada o o seu dano aumenta em +2");
        console.log("2-se defender, o dano da ilha sera cortado pela metade");  
        if(vezesAtacado>5 && comida%2==0){
            opp31.style.display = 'block';
            opp32.style.display = 'block';
            botao3.style.display='inline-block';
            console.log("Caiu uma comida surpresa no campo de batalha! Você tem mais uma opcção");
            console.log("3-comer, você pode comer e recuperar vida de forma levemente aleatoria");   
        }
        //escolha=prompt("Qual sua escolha 1, 2 ou 3:");

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

        await iniciar();
      

    }
    else{
        await ataqueIlha();
        
    }
    if(adversario.vida<=0){
        inicioTela.style.display='none';
        vencedor.innerHTML='You Win';
        console.log("You Win");
        jogo=false;
    }
    if(heroi.vida<=0){
        inicioTela.style.display='none';
        vencedor.innerHTML='Game Over';
        console.log("Game Over");
        jogo=false;
    }
    quemJoga++;
    }while(jogo)
}
async function ataqueHeroi(){
    adversario.vida-=armaHeroi.dano;
    console.log("Wilson jogou chuck na ilha e tirou "+armaHeroi.dano+"de dano!");
    console.log("A ilha ficou com "+adversario.vida+" de vida");
    resp1.innerHTML = "Wilson jogou chuck na ilha e tirou "+armaHeroi.dano+"de dano!";
    resp2.innerHTML = "A ilha ficou com "+adversario.vida+" de vida";
    vidaIlha.innerHTML=adversario.vida;
    barraIlha.style.backgroundSize=adversario.vida+ "%" ;
    await esperarTempo(2000);
    resp1.innerHTML = "";
    resp2.innerHTML = "";
    armaHeroi.dano+=2;
    

}

async function defesaHeroi(){
    armaAdversario.dano/=2;
    heroi.vida-=armaAdversario.dano;
    armaAdversario.dano*=2;
    console.log("Você se defendeu! no fim das contas...")
    console.log("A ilha te deu "+armaAdversario.dano +"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+" de vida");
    resp1.innerHTML = "Você se defendeu! no fim das contas...";
    resp2.innerHTML = "A ilha te deu "+armaAdversario.dano +"de dano!";
    resp3.innerHTML = "E Wilson ficou com "+heroi.vida+" de vida";
    vidaChuck.innerHTML=heroi.vida;
    barraChuck.style.backgroundSize=heroi.vida+"%";
    await esperarTempo(2000);
    resp1.innerHTML = "";
    resp2.innerHTML = "";
    resp3.innerHTML = "";
    quemJoga++;
    vezesAtacado++;
}

async function ataqueIlha(){
    if(adversario.vida<=50){
        armaAdversario.dano*=2;
        heroi.vida-=armaAdversario.dano;
    }
    else{
        heroi.vida-=armaAdversario.dano;
    }
    console.log("A ilha te deu "+armaAdversario.dano+"de dano!");
    console.log("E Wilson ficou com "+heroi.vida+" de vida");
    h3Jogador.innerHTML = 'A ilha começa!';
    console.log("A ilha começa!");
    resp1.innerHTML = "A ilha te deu "+armaAdversario.dano+" de dano!";
    resp2.innerHTML = "E Wilson ficou com "+heroi.vida+" de vida";
    vidaChuck.innerHTML=heroi.vida;
    barraChuck.style.backgroundSize=heroi.vida+"%";
    await esperarTempo(2000);
    resp1.innerHTML = "";
    resp2.innerHTML = "";
    armaAdversario.dano+=1.5;
    vezesAtacado++;
}

async function recuperarVida(comida){
    if(comida>=25){
        heroi.vida+=5;
        console.log("Wilson comeu uma banana, e recuperou 5 de vida, agora esta com "+heroi.vida);
        resp1.innerHTML = "Wilson comeu uma banana, e recuperou 65 de vida, agora esta com "+heroi.vida;
        vidaChuck.innerHTML=heroi.vida;
        barraChuck.style.backgroundSize=heroi.vida+"%";
        await esperarTempo(2000);
        resp1.innerHTML = "";
    }
    else if(comida>=10 && comida<25){
        heroi.vida+=15;
        console.log("Wilson comeu uma melancia, e recuperou 15 de vida, agora esta com "+heroi.vida);
        resp1.innerHTML = "Wilson comeu uma melancia, e recuperou 65 de vida, agora esta com "+heroi.vida;
        vidaChuck.innerHTML=heroi.vida;
        barraChuck.style.backgroundSize=heroi.vida+"%";
        await esperarTempo(2000);
        resp1.innerHTML = "";
    }
    else if(comida>=2 && comida<10){
        heroi.vida+=30;
        console.log("Wilson comeu um bife enorme, e recuperou 30 de vida, agora esta com "+heroi.vida);
        resp1.innerHTML = "Wilson comeu um bife enorme, e recuperou 65 de vida, agora esta com "+heroi.vida;
        vidaChuck.innerHTML=heroi.vida;
        barraChuck.style.backgroundSize=heroi.vida+"%";
        await esperarTempo(2000);
        resp1.innerHTML = "";
    }
    else{
        heroi.vida+=65;
        armaHeroi.dano*=armaHeroi.dano;
        console.log("Wilson comeu um XIS RAFAO, e recuperou 65 de vida, agora esta com "+heroi.vida);
        console.log("E agora seu dano foi dobrado e o adversario não joga");
        resp1.innerHTML = "Wilson comeu um XIS RAFAO, e recuperou 65 de vida, agora esta com "+heroi.vida;
        resp2.innerHTML = "E agora seu dano foi dobrado e o adversario não joga";
        vidaChuck.innerHTML=heroi.vida;
        barraChuck.style.backgroundSize=heroi.vida+"%";
        await esperarTempo(2000);
        resp1.innerHTML = "";
        resp2.innerHTML = "";
        quemJoga++;
    }
    return heroi.vida;
}

      
function aguardarBotao() {
    return new Promise(function(resolve, reject) {
      var botao1 = document.querySelector("#um");
      var botao2 = document.querySelector("#dois");
      var botao3 = document.querySelector("#tres");
  
      botao1.addEventListener("click", async function() {
        await ataqueHeroi();
        resolve();
      });
      botao2.addEventListener("click", async function() {
        await defesaHeroi();
        resolve();
      });
      botao3.addEventListener("click", async function() {
        await recuperarVida(comida);
        resolve();
      });
    });
  }

  async function iniciar() {
    console.log("Aguardando o botão ser pressionado...");
    await aguardarBotao();
    console.log("O botão foi pressionado!");
    
    
}
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function esperarTempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
