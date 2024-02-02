const nezuko = document.querySelector('.nezuko');

const pulo = () => {
    nezuko.classList.add('pulo');

    setTimeout(() => {
        nezuko.classList.remove('pulo');
    }, 800);
}

document.addEventListener('keydown', pulo);