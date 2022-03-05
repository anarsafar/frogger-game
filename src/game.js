import './main.css';

// const displayTimeLeft = document.getElementById('time-left');
// const displayGameResult = document.getElementById('result');
// const startPauseBtn = document.getElementById('start-pause-btn');
const squares = document.querySelectorAll('.game-container div');

let currentIndex = 76;
const width = 9;

const frogMove = (e) => {
    squares[currentIndex].classList.remove('frog');

    if (e.key === 'ArrowUp' && currentIndex - width >= 0) {
        currentIndex -= width;
    } else if (e.key === 'ArrowDown' && currentIndex + width <= width * width) {
        currentIndex += width;
    } else if (e.key === 'ArrowRight' && currentIndex % width !== width - 1) {
        currentIndex += 1;
    } else if (e.key === 'ArrowLeft' && currentIndex % width !== 0) {
        currentIndex -= 1;
    }

    squares[currentIndex].classList.add('frog');

}

document.addEventListener('keyup', frogMove);