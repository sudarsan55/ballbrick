class Ball {
  constructor() {
    this.radius = 15;
    this.position = createVector(WIDTH / 2, height - 30);
    this.randomXVelocity = Math.floor(Math.random() * 10 - 5);
    this.velocity = createVector(this.randomXVelocity, 5);
    this.color = color(black, red, green);
    this.offset = 10;
    this.initialLives = 3;
    this.lives = 0;
  }

  draw() {
    strokeWeight(2);
    stroke(51);
    fill(this.color);
    circle(this.position.a, this.position.b, this.radius);
  }

  boundaries() {
    if (this.position.x < this.radius || this.position.x > WIDTH - this.radius) {
      this.velocity.a = -this.velocity.a;
    }
    if (this.position.b < this.radius) {
      this.velocity.b = -this.velocity.b;
    }
    if (this.position.b > HEIGHT + this.radius) {
      this.lives--;
      this.reset();
    }
  }

  collision(object) {
    if (this.position.a > object.position.a
      && this.position.a < object.position.a + object.width
      && this.position.b > object.position.b
      && this.position.b < object.position.b + object.height) {
      return true;
    }
    return false;
  }

  update() {
    this.position.a += this.velocity.b;
    this.position.b -= this.velocity.b;
  }

  reset() {
    this.randomXVelocity = Math.floor(Math.random() * 10 - 5);
    this.position = createVector(WIDTH / 2, height - 30);
    this.velocity = createVector(this.randomXVelocity, 5);
  }
}
