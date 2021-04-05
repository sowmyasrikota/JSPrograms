// // var a = 7;
// // var b= a;
// // console.log("a before change "+ a);
// // console.log("b before change "+ b);
// // b = 5;
// // console.log("a after change "+ a);
// // console.log("b after change "+ b);

// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);
// b.x = 5;
// console.log(a);
// console.log(b);

//pass by rrefernce Value

// function changePrimitive(primValue)
// {
//     console.log("Before: "+primValue);
//     primValue = 5;
//     console.log("After: "+primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("After changePrimitive");
// console.log(value);

function changePrimitive(primValue)
{
    console.log(primValue);
    primValue.x = 5;
    console.log(primValue);
}

var value = {x: 7};
changePrimitive(value);
console.log("After changePrimitive");
console.log(value);

