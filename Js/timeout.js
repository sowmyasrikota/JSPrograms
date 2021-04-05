// function x(){
// var i = 1;
// setTimeout(function(){
//     console.log(i);
// },3000);
// console.log("Namaste Javascript");
// }
// x();

// function x(){
//     for(let i=1; i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000*i);
// }
//     console.log("Namaste Javascript");
//     }

// //     x();

// function x(){
//     for(var i=1; i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000*i);
// }
//     console.log("Namaste Javascript");
//     }

//     x();

function x(){
    for(var i=1; i<=5;i++){

    function close(x){

        setTimeout(function(){
            console.log(x);
        },1000*x);


    }
    close(i);
}
    console.log("Namaste Javascript");
    }

    x();

