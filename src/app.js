'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



const myDiv = document.createElement('div')



const pokemonsLink = document.createElement('a');
//pokemonsLink.setAttribute('href', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/');


let titleImage = document.querySelector('.pokemon-logo');

let total = 0;

for (let i = 0; i <= 150; i++ ){ 

total += 1;
let myLink =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${total}.png`;
const myImage = document.createElement('img');
myImage.setAttribute('src', myLink);
myImage.classList.add('pokemon-image');
 myDiv.classList.add('myDiv');  
 myDiv.innerText = "";
 myDiv.appendChild(myImage.cloneNode(true)); 
 const p = document.createElement('p');
p.innerHTML = `#${total}`
myDiv.appendChild(p.cloneNode(true));
document.body.append(myDiv.cloneNode(true));

}

let num = Math.floor(Math.random() * 151);

let pokemonLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
randomPokemon = document.querySelector('.random-pokemon');

randomPokemon.setAttribute('src', pokemonLink)

const myFooter = document.createElement('div');
myFooter.setAttribute('class', 'my-footer' );
myFooter.innerHTML = 'Open Source Code by Jenny Glover Saunders';
console.log("Is this working")
document.body.append(myFooter.cloneNode(true));

// for (i = 0; i<100; i++){
//     div.appendChild(allButtons.cloneNode(true))
//   }