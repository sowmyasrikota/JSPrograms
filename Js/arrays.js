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

var names2 = ["oliver","kara","Barry","felicity"];

var myObj = {
    name: "sowmya",
    course: "HTML/CSS/JAVASCRIPT",
    platform: "coursera"
};

for(var prop in myObj){
    console.log(myObj[prop]);
}

for(var name in names2){
    console.log(names2[name]);
}

names2.greetings = "Hi!!";

for(var name in names2){
    console.log(names2[name]);
}