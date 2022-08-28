'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';




let h1 = document.createElement('h1');
h1.innerHTML = 'Hi there';

const myDiv = document.createElement('div')


const pokemonsLink = document.createElement('a');
console.log(pokemonsLink);
//pokemonsLink.setAttribute('href', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/');


let titleImage = document.querySelector('.pokemon-logo');

let total = 0;

for (let i = 0; i <= 150; i++ ){ 

total += 1;
let myLink =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${total}.png`;
const myImage = document.createElement('img');
myImage.setAttribute('src', myLink);
myImage.classList.add('pokemon-image');
 console.log('hello');
 document.body.append(myImage.cloneNode(true));

}

// for (i = 0; i<100; i++){
//     div.appendChild(allButtons.cloneNode(true))
//   }