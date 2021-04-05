var string = "Hello";
string += " World";
console.log(string + "!");

//Nan +

console.log((5+4)/3);
console.log(undefined/5);

function test1(a)
{
    console.log(a/5);
}

test1();

var x = 4 , y = 4;
if(x == y)
{
    console.log("x=4 is equal to y=4");
}

x = "4";

if(x == y)
{
    console.log("x = '4' is equal to y=4");
}

if(x ===y )
{
    console.log("strict:x='4' is EQUAL to y = 4");
}
else{
    console.log("strict:x='4' is NOT EQUAL to y=4");
}
