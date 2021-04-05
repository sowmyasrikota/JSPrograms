var company = new Object();
company.name = "Fb";
company.ceo = new Object();
company.ceo.name = "Mark";
company["stock price"] = "100";
console.log(company["stock price"]);

//this 
var company1 = {
    name: "Fb",
    ceo: {
        name: "Mark",
        favColor: "blue"
    },
    "Stock of price": 100,
    greet : function(){
        console.log("Hello!!, I am "+ this.ceo.name);
        return "Done!!"
    }
}; 
console.log("call function " + company1.greet());
console.log(company);
console.log(company1);
console.log(company1["Stock of price"]);

//object are reference type
var person = {
    name: "sowmya",
    age : 22
    }
var person1 = {
    name: "sowmya"
}

console.log(person == person1);

var anotherPerson = Object.create(null);
anotherPerson.name = 'sowmyasri';
console.log(anotherPerson.name)

var anotherPerson1 = Object.create(person);
anotherPerson.name = 'sowmyasri';
console.log(anotherPerson1.age)

Object.prototype.greet = function(){
    console.log("Hello there! "+this.name +"!!");
};
person.greet();
//prototype
console.log(person.__proto__)


//Prototypes in action
var kota = Object.create(person);
//kota.name = "sowmyasri"
kota.greet()


//constructor functions

function Person(){
this.name = 'Sowmya';
this.greet = function(){
    console.log("Hello, I am ",this.name);
}
}
Person.prototype.greetGeneral = function(){
    console.log("Hello");
}
var person = new Person();
person.name = 'javascript';


person.greet();
var anoPerson = new Person();
anoPerson.greet();
anoPerson.greetGeneral();

//instanceof
console.log(person instanceof Person);






