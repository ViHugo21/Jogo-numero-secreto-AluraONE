cont_inform = document.querySelector(".container__informacoes");
titulo = document.querySelector("h1");
paragrafo = document.querySelector("p");

chute = 0;
numero_maximo = 50;
numero_certo = parseInt(Math.random() * numero_maximo + 1);
tentativas = 0;
tentativas_palavra = "";

paragrafo.innerHTML = `Escolha um número entre 1 e ${numero_maximo}`;

console.log(numero_certo)

function verificarChute(){
    tentativas += 1;

    chute = document.querySelector("input").value
    paragrafo = document.querySelector("p");

    if(chute == numero_certo){
        tentativas_palavra = tentativas > 1 ? "tentativas" : "tentativa";
        cont_inform.innerHTML = 
        `<div class="container__texto">
            <h1>Parabéns você acertou !!!</h1>
            <p class="texto__paragrafo">
                O número correto era <strong>${numero_certo}</strong>
            </p>
            <p class="texto__paragrafo">
                Você adivinhou em <strong>${tentativas}</strong> ${tentativas_palavra}
            </p>
        </div>
        <div class="chute container__botoes">
            <button onclick="ReiniciarJogo()" id="reiniciar" class="container__botao">Novo jogo</button>
        </div>`;
    }else{
        if(chute > numero_certo){
            paragrafo.innerHTML = `O número certo é menor que ${chute}`;
        }else{
            paragrafo.innerHTML = `O número certo é maior que ${chute}`;
        }
         
        document.querySelector("input").value = null;
    }
}

function ReiniciarJogo(){
    console.log("Entrou na função reiniciar")

    chute = 0;
    numero_maximo = 50;
    numero_certo = parseInt(Math.random() * numero_maximo + 1);
    tentativas = 0;
    tentativas_palavra = "";

    cont_inform.innerHTML = 
    `<div class="container__texto">
        <h1>Jogo do número secreto</h1>
        <p class="texto__paragrafo">Escolha um número entre 1 e ${numero_maximo}</p>
    </div>
    <input type="number" min="1" max="100" value="1" class="container__input">
    <div class="chute container__botoes">
        <button onclick="verificarChute()" class="container__botao">Chutar</button>
        <button onclick="ReiniciarJogo()" id="reiniciar" class="container__botao">Novo jogo</button>
    </div>`
}