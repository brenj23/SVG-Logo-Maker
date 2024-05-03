class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        // Abstract method, should be implemented in child classes
    }
}

class Triangle extends Shape {
    render() {
        // Implement rendering for triangle
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}
class Circle extends Shape {
    render() {
        //Rendering for circle
        const radius = 50; // Radius of the circle
        return `<circle cx="150" cy="100" r="${radius}" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    render() {
        //Rendering square
        const size = 100; // Size of the square
        return `<rect x="100" y="50" width="${size}" height="${size}" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Circle, Square};