# Passo 1 - Abra o Visual Studio Code
Crie 3 arquivos, chamados:
index.html
styles.css
scripts.js


# Passo 2 - Estrutura basica do Html
agora abra o index.html e
escreva ! e aperte "Enter"

adicione ao <head> essas duas linhas de comandos, elas serão as responsaveis por conectar nossos arquivos

    <link rel="stylesheet" href="./styles.css">
    <script src="./scripts.js" defer></script>


dentro da tag <body> adicione as seguintes linhas

    <div class="game-board">

    </div>


# Passo 3 - Crie uma tela de jogo
dentro arquivo "styles.css" escreva:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.game-board {
    width: 80%;
    height: 500px;
    border: 1px solid #333;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

# Passo 4 - Adicionando a imagem do tubo na tela do jogo
agora abra o index.html e escreva dentro de <div class="game-board">:

        <img src="./images/tubo.png" class="tubo">


# Passo 5 - Adicionando e animando a imagem do tubo em movimento na tela do jogo
dentro arquivo "styles.css" escreva:

.tubo {
    position: absolute;
    bottom: 0;
    width: 80px;
    animation: tubo-animation 2s infinite linear;
}

@keyframes tubo-animation {
    from {
        right: 0;
    }

    to {
        right: 100%;
    }
}

# Passo 6 - Adicionanco a imagem da "Nezuko" andando
agora abra o index.html e escreva dentro de <div class="game-board">:
<img src="./images/nezuko.gif" class="nezuko">

# Passo 7 - ajustando e explicando as propriedades da "Nezuko"
dentro arquivo "styles.css" escreva:
.nezuko {
    width: 150px;
    position: absolute;
    bottom: 0;
}



# Passo 8 - Animando a "Nezuko" Pulando
dentro arquivo "styles.css" escreva:


.pulo {
    animation: pulo 800ms ease-out;
}

@keyframes pulo {
    0% {
        bottom: 0;
    }

    40% {
        bottom: 180px;
    }

    50% {
        bottom: 180px;
    }

    60% {
        bottom: 180px;
    }

    100% {
        bottom: 0;
    }
}


# Passo 9 - Fazendo um Script em "JS" para associar a propriedade de pulo para a "Nezuko"

const nezuko = document.querySelector('.nezuko');

const pulo = () => {
    nezuko.classList.add('pulo');

    setTimeout(() => {
        nezuko.classList.remove('pulo');
    }, 800);
}

document.addEventListener('keydown', pulo);

# Passo 10 - Programando a hitbox do "tubo"

# Passo 11 - Explicando a logica de HitBox do "Tubo"

# Passo 12 - Explicando a logica de hitbox do "mario"

# Passo 13 - Adicionando a logica "evento" de end game no jogo quando o mario colide com tubo

# Passo 14 - Adicionando ao "Evento" uma  logica  que o "mario"  "pausa" a animação no momento da colisão com o tubo

# Passo 15 - fazendo uma tranzição da imagem do "mario correndo" pro mario "morrendo" quando colide

# Passo 16 - Fazendo uma logica que encerra o "loop' do jogo quando o evento endgame acama

# Passo 17 - Modelando o cenario do jogo "background" e elemento do background "nuvens" e "grama"

https://www.craiyon.com/