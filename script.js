let hexagons = [];
function setup() {
    createCanvas(600, 600);
    hexagons.push(new Hexagon(100, 0, 0));
    hexagons.push(new Hexagon(100, 3 * 100 / 2, + sqrt(3) * 100 / 2));
}

function draw() {
    background(120);

    for (let hexagon of hexagons) {
        hexagon.show();
    }

}