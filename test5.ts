interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): SquareConfig {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// let mySquare = createSquare({colour: "black"});
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
let mySquare2 = createSquare(<SquareConfig>{ width: 100, opacity: 0.5 });
let mySquare3 = createSquare({ colour: "red", width: 100 })
let squareOptions = { colour: "red", width: 100 };
let mySquare4 = createSquare(squareOptions)

