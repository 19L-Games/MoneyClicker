var startI = document.getElementById("start");
var coini = document.getElementById("coin");
var backdrop = document.getElementById("bd");
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var COINAGE = 0;
var idleCoins = 1;

function setup() {
    window.setInterval(start, 1500);
    ctx.drawImage(startI, 0, 0, 640, 480);
    window.setInterval(idleCount, 1000);
    mainCoin = new coin(29, 80);
    window.addEventListener("click", onClick);
}

function start() {
    window.clearInterval(start);
    window.setInterval(loop, 1000 / 60);

}

function clear() {
    ctx.drawImage(backdrop, 0, 0);
}

function loop() {
    clear();
    drawBackdrop();
    mainCoin.draw();

}

function drawBackdrop() {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Arial";
    ctx.fillText(COINAGE, 184, 35);

}

function idleCount() {
    COINAGE += idleCoins;
}

function onClick(e) {
    if (e.clientX > 39 && e.clientX < 129) {
        if (e.clientY > 90 && e.clientY < 180) {
            COINAGE += 1;
        }
    }

}
class coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
		this.size = 1;
    }
    draw() {
        ctx.drawImage(coini, this.x, this.y,this.size*90,this.size*90);
    }
}
