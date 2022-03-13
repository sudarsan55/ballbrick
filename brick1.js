class Brick {
  constructor(aPos, bPos, color) {
    this.width = 90;
    this.height = 30;
    this.position = createVector(aPos, bPos);
    this.color = color;
    this.scoreValue = 100;
  }

  draw() {
    strokeWeight(2);
    stroke(61);
    fill(this.color);
    rect(this.position.a, this.position.b, this.width, this.height);
  }
}
