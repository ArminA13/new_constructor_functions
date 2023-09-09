// Calculator Constructor
// Create functions for the Calculator class that can do the following:
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.





function Calculator() {
    this.result = 0;

}

Calculator.prototype.add = function(a, b) {
    this.result = a + b;
    return this.result
}

Calculator.prototype.subtract = function(a, b) {
    this.result = a - b;
    return this.result
}

Calculator.prototype.multiply = function(a, b) {
    this.result = a * b;
    return this.result
}

Calculator.prototype.divide= function(a, b) {
    this.result = a / b;
    return this.result
}



const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
