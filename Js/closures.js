// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// function x(){
//     var a = 7;
//     function y(){
//         console.log("a is: "+a);
//     }
//    return y;
// }
// var p = x();
// console.log(p);
// p();

// function x(){
//     var a = 7;
//     function y(){
//         console.log("a is: "+a);
//     }

//    a = 100;
//    return y;

// }
// var p = x();
// console.log(p);
// p();


// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var close = outer();
// close();

function Outer(){
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.drecrementCounter = function(){
        count--;
        console.log(count);
    }
}

var coun = new Outer();
coun.drecrementCounter();
coun.incrementCounter();


let c= 10;
{
    console.log(c);
}




