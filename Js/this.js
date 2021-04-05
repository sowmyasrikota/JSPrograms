// function fn(message)
// {
//     console.log(message + this);

// }

// var obj = {
//     obfn:fn
// }
//obj.obfn();
//fn();
//obj.obfn.bind(this)();

// var person = {
//     name :'sowmya'
// }

// obj.obfn.bind(person,'Hello')();
// obj.obfn.call(person,'Hello');
// obj.obfn.apply(person,['Hello']);



var account = {
    cash:1200,
    _name: 'Default',
    withdraw: function(amount){
        this.cash -=amount;
        console.log('withdraw' +
         amount + ', new cash reverse is: ' + this.cash );
   
        }
}


Object.defineProperty(account,'name',{
    get: function(){
        return this._name;
    },
    set: function(name){
        this._name = name;
    }

})

console.log(account.name);
account.name = "abc";
console.log(account.name);
console.log(account._name);
























