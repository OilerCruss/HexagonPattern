class Hexagon {
    constructor(size, x, y) {
        this.size = size;
        this.x = x;
        this.y = y;
    }
    show() {
        push();
        translate(this.x, this.y);
        fill(100, 100, 200, 120);
        beginShape();
        vertex(-this.size, 0);
        vertex(-this.size / 2, -sqrt(3) * this.size / 2);
        vertex(this.size / 2, -sqrt(3) * this.size / 2);
        vertex(this.size, 0);
        vertex(this.size / 2, sqrt(3) * this.size / 2);
        vertex(-this.size / 2, sqrt(3) * this.size / 2);
        endShape(CLOSE);
        pop();
    }
}