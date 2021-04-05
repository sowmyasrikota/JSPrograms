//Execution Context

var message = "in global";
console.log("global:message "+message);

var a = function () {
var message = "in function a";
console.log("a:message "+ message);
function b()
{
    console.log("b:message " + message);
}

b();
}

/*function b()
{
    console.log("b:message " + message);
}*/

a();