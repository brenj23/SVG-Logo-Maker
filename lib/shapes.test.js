const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="blue" />');
});

test('Circle render', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
});

test('Square render', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
});