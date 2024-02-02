const animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];
let gameBoard = document.getElementById('game-board');
let messageElement = document.getElementById('message');
let resetButton = document.getElementById('reset-btn');
let cards = [];
let flippedCards = [];
let attempts = 0;

function initializeGame() {
    attempts = 0;
    flippedCards = [];
    messageElement.classList.add('hidden');
    resetButton.disabled = false;
    generateCards();
    renderBoard();
}

function generateCards() {
    cards = [];
    let allCards = [...animals, ...animals];
    allCards = shuffleArray(allCards);

    for (let animal of allCards) {
        cards.push({ animal, isFlipped: false });
    }
}

function renderBoard() {
    gameBoard.innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = i;
        cardElement.textContent = cards[i].isFlipped ? cards[i].animal : '';

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
}

function flipCard(event) {
    let index = event.target.dataset.index;

    if (!cards[index].isFlipped && flippedCards.length < 2) {
        cards[index].isFlipped = true;
        flippedCards.push(cards[index]);

        renderBoard();

        if (flippedCards.length === 2) {
            attempts++;

            setTimeout(() => {
                if (flippedCards[0].animal !== flippedCards[1].animal) {
                    flippedCards.forEach(card => card.isFlipped = false);
                }
                flippedCards = [];

                renderBoard();

                if (checkGameWin()) {
                    messageElement.textContent = `Parabéns! Você encontrou todos os pares em ${attempts} tentativas.`;
                    messageElement.classList.remove('hidden');
                    resetButton.disabled = true;
                }
            }, 1000);
        }
    }
}

function checkGameWin() {
    return cards.every(card => card.isFlipped);
}

function shuffleArray(array) {
    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function resetGame() {
    initializeGame();
}

initializeGame();
