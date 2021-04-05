// var array = new Array();
// array[0] = "sowmya";
// array[1] = 2;
// array[2] = function(name){
//     console.log("Hello " + name);

// };
// array[3] = {course: "HTML,css & JS"
// };

// console.log(array[0]);
// array[2](array[0]);
// console.log(array[3].course);

// var names = ["oliver","kara","Barry","felicity"];
// for(var i=0;i<names.length;i++){
//     console.log(names[i]);    
// }

// names[100] = "Klark";
// for(var i=0;i<names.length;i++){
//     console.log("Hello "+names[i]);
// }

// var names2 = ["oliver","kara","Barry","felicity"];

// var myObj = {
//     name: "sowmya",
//     course: "HTML/CSS/JAVASCRIPT",
//     platform: "coursera"
// };

// for(var prop in myObj){
//     console.log(myObj[prop]);
// }

// for(var name in names2){
//     console.log(names2[name]);
// }

// names2.greetings = "Hi!!";

// for(var name in names2){
//     console.log(names2[name]);
// }


//arrays are infinite collection where space not defined remain undefined
//forEach method

var array = [1,2,3,4,];

array.forEach(function(element){
console.log(element*10);
})

//push
//added at the end of array

array.push(4);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift('new');
console.log(array);

array[array.indexOf('new')] = 'old';
console.log(array);

//var newarray = array.splice(2,2);
var newarray = array.slice(2,4);
console.log(newarray);
console.log(array);
//array = [1,2,3,4];
console.log(array.filter(function(value) {
    return value > 2;
}));

console.log(array.map(function(value) {
    return value*2;
}));

console.log(array.reverse());//changes the original one
console.log(array);

var newArray = ['join', 'me'];
console.log(array.concat(newArray));
console.log(array);
console.log(newArray);
console.log(array.join(newArray));
console.log(array.join(', '));

console.log(array.reduce(function(total,value){
    console.log('Total: '+ total + ', Value: ' + value);
    return total + value;
}));







