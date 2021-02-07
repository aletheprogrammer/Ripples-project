class Ripples {

  constructor(_x, _y, _r, _strok) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.strok = 255;
   
  }

  display() {
    noFill();
    stroke(0, this.strok)
    ellipse(this.x, this.y, this.r);
  }

  move() {
    this.r++
    this.strok--
  }
}
  