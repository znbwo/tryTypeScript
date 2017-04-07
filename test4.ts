class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}


interface NotOkay {
    [x: string]: Animal;
    [x: string]: Dog;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay2 {
    [x: number]: Animal;//[ts] Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    [x: string]: Dog;//[x: string]: Animal
    // [x: number]: Dog;
}

interface Okay {
    [x: string]: Animal;
    [x: number]: Dog;//==[x: string]: Animal
}