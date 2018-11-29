const btnStart = document.querySelector('.btnStart');
const gameOverEle = document.getElementById('gameOverEle');
const container = document.getElementById('container');
const box = document.querySelector('.box');
const boxCenter = [box.offsetLeft + (box.offsetWidth / 2)
                  , box.offsetTop + (box.offsetHeight / 2)];
console.log(boxCenter);
let gamePlay = false;
let player;
let animateGame;
btnStart.addEventListener('click', startGame);
container.addEventListener('mousedown', mouseDown);
container.addEventListener('mousemove', movePostion);

function movePostion(e) {
    //console.log(e);
    let deg = getDeg(e);
    box.style.webkitTransform = 'rotate(' + deg + 'deg)';
    box.style.mozTransform = 'rotate(' + deg + 'deg)';
    box.style.msTransform = 'rotate(' + deg + 'deg)';
    box.style.oTransform = 'rotate(' + deg + 'deg)';
    box.style.transform = 'rotate(' + deg + 'deg)';
}

function getDeg(e) {
    let angle = Math.atan2(e.clientX - boxCenter[0], -(e.clientY - boxCenter[1]));
    return angle * (180 / Math.PI);
}

function mouseDown(e) {
    if (gamePlay) {
        console.log('FIRE');
    }
}

function startGame() {
    gamePlay = true;
    gameOverEle.style.display = 'none';
    player = {
            score: 0
            , barwidth: 100
            , lives: 100
        }
        //setup badguys
    animateGame = requestAnimationFrame(playGame);
}

function playGame() {
    if (gamePlay) {
        //move shots
        //update dashboard
        //move enemy
        animateGame = requestAnimationFrame(playGame);
    }
}