// function multiply(x,y)
// {
//     return x*y;
// }

// multiply.version = "V.1.0.0";
// console.log(multiply.version);

// function makeMultiplier(multiplier){
//     var myFunc = function(x) {
//         return multiplier * x;
//     }
//     console.log(myFunc);
//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2);
// console.log(100);

// function operation(x,operation){
// return operation(x);
// }
// console.log(operation(5,multiplyBy3));

//Function Constructors

// function Circle (radius){
//     this.radius = radius;
// }

// Circle.prototype.getArea=
// function(){
//     return Math.PI * Math.pow(this.radius,2);
// }

// var mycircle = new Circle(10);
// console.log(mycircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle.getArea());

//literals

var literalCircle = {
    radius: 10,
    getArea: function(){
        var self = this;
        console.log(this);
        var increaseradius = function(){
            self.radius = 20;
        };
        increaseradius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius,2);
    }

};

console.log(literalCircle.getArea());




