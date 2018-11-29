const btnStart = document.querySelector('.btnStart');
const gameOverEle = document.getElementById('gameOverEle');
const container = document.getElementById('container');
const box = document.querySelector('.box');
const boxCenter = [box.offsetLeft + (box.offsetWidth / 2)
                  , box.offsetTop + (box.offsetHeight / 2)];
let gamePlay = false;
let player;
let animateGame;
btnStart.addEventListener('click', startGame);
container.addEventListener('mousedown', mouseDown);
container.addEventListener('mousemove', movePostion);

function movePostion(e) {
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

function degRad(deg) {
    return deg * (Math.PI / 180);
}

function mouseDown(e) {
    if (gamePlay) {
        let div = document.createElement('div');
        let deg = getDeg(e);
        div.setAttribute('class', 'fireme');
        div.moverx = 5 * Math.sin(degRad(deg));
        div.movery = -5 * Math.cos(degRad(deg));
        div.style.left = (boxCenter[0] - 5) + 'px';
        div.style.top = (boxCenter[1] - 5) + 'px';
        div.style.width = 10 + 'px';
        div.style.height = 10 + 'px';
        container.appendChild(div);
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

function moveShots() {
    let tempShots = document.querySelectorAll('.fireme');
    for (let shot of tempShots) {
        if (shot.offsetTop > 600 || shot.offsetTop < 0 || shot.offsetLeft > 800 || shot.offsetLeft < 0) {
            shot.parentNode.removeChild(shot);
        }
        else {
            shot.style.top = shot.offsetTop + shot.movery + 'px';
            shot.style.left = shot.offsetLeft + shot.moverx + 'px';
        }
    }
}

function playGame() {
    if (gamePlay) {
        moveShots();
        //update dashboard
        //move enemy
        animateGame = requestAnimationFrame(playGame);
    }
}