let res = document.querySelector('section#result');
let computador;
let jogador;

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random(); // Corrected here
    computador = min + Math.trunc(dif * aleatorio);
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'));
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`;
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`;
    } else if (jogador === computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`;
        document.getElementById('botao').style.visibility = 'hidden';
    }
}

// Call sortear when you start the game
sortear();
