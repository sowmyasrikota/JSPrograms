function orderWith(sideDish)
{
    sideDish = sideDish || "Whatever!!";
    console.log("Order is "+sideDish);

}
orderWith("Noodles");
orderWith();


function a()
{
    return 
    {
        key : "value"
    }
}

function b(){
    return {
        key : "value"
    }
}

console.log(a());
console.log(b());