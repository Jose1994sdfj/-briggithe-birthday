let corazones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  noStroke();
  for (let i = 0; i < 50; i++) {
    corazones.push({
      x: random(width),
      y: random(-height, 0),
      size: random(10, 30),
      speed: random(1, 3)
    });
  }
}

function draw() {
  background(255, 100, 150);
  fill(255);
  textSize(28);
  text("¡Feliz cumpleaños,", width / 2, height / 2 - 40);
  textSize(36);
  text("Briggithe! 🎉", width / 2, height / 2 + 10);
  textSize(16);
  text("Te deseo un día mágico 💖", width / 2, height / 2 + 50);

  for (let c of corazones) {
    drawHeart(c.x, c.y, c.size);
    c.y += c.speed;
    if (c.y > height) {
      c.y = random(-100, 0);
      c.x = random(width);
    }
  }
}

function drawHeart(x, y, s) {
  push();
  translate(x, y);
  scale(s / 100);
  fill(255, 0, 100, 150);
  beginShape();
  vertex(0, -30);
  bezierVertex(-25, -60, -50, -20, 0, 20);
  bezierVertex(50, -20, 25, -60, 0, -30);
  endShape(CLOSE);
  pop();
}
