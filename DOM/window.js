// console.log(window.innerWidth);
// console.log(outerWidth)


// console.log(localStorage);
// localStorage.setItem('key1', 1000);

// console.log(localStorage.getItem('key1'));


// sessionStorage.setItem('key2', 200);
// console.log(sessionStorage.getItem('key2'));


// console.log(window.location);

// console.log(window.document);

// window.open('http://www.google.com')

//location object

// console.log(location.pathname)


//Document object

// console.log(document.URL);

// console.log(document.body.children);

// console.log(document.body.children[0].
//     textContent = 'changes');

// document.body.children[0].style.backgroundColor = 'red';

// console.log(document.body.children[0].children[0]);

// console.log(document.body.firstChild);

// console.log(document.body.firstElementChild);

// console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);

// console.log(document.body.firstElementChild.firstElementChild.parentElement);

console.log(document.getElementsByTagName('li'));

console.log(document.getElementsByClassName('simple'));

//QuerySelector

// console.log(document.querySelector('h1'))
// console.log(document.querySelector('.simple'))
// console.log(document.querySelectorAll('.simple'))
// console.log(document.querySelector('#head'))
//creating and inserting

// var p = document.createElement('p');
// p.textContent = 'A new paragraph';
// p.style.fontSize = '17px';

// var li = document.querySelector('li');

// li.appendChild(p);

// var a= li.firstElementChild;

// li.insertBefore(p,a);


//delete elements

var a = document.querySelectorAll('a')[1];

//a.parentElement.removeChild(a);


a.remove();

//alerting


alert("hello");


console.log(confirm("are you sure?"));

console.log(prompt('your name?'));
































































