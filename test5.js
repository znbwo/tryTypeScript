function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare = createSquare({colour: "black"});
var mySquare = createSquare({ width: 100, opacity: 0.5 });
var mySquare2 = createSquare({ width: 100, opacity: 0.5 });
var mySquare3 = createSquare({ colour: "red", width: 100 });
var squareOptions = { colour: "red", width: 100 };
var mySquare4 = createSquare(squareOptions);
