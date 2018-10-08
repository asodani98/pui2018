function Monkey(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Monkey"
    this.image = "monkey.png"
}

function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Elephant"
    this.image = "elephant.png"
}

function Giraffe(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Giraffe"
    this.image = "giraffe.png"
}

var animal = [new Monkey(), new Elephant(), new Giraffe()];
