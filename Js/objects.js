var company = new Object();
company.name = "Fb";
company.ceo = new Object();
company.ceo.name = "Mark";
company["stock price"] = "100";
console.log(company["stock price"]);


var company1 = {
    name: "Fb",
    ceo: {
        name: "Mark",
        favColor: "blue"
    },
    "Stock of price": 100
}; 

console.log(company);
console.log(company1);
console.log(company1["Stock of price"]);