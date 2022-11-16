//Selectors
const pokeName = document.getElementById('pokeName')
const pokeForm = document.getElementById('pokeForm')
const pokeImage = document.getElementById('pokeImage')
const pokeInfo = document.getElementById('pokeInfo')

const getPokemon = (e) => {
    e.preventDefault()
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName.value.toLowerCase())
        .then(res => res.json())
        .then(data =>  {
            pokeImage.src = data.sprites.other["official-artwork"].front_default
            let name = data.species.name
            pokeInfo.innerHTML = "This is " + name.toUpperCase()
        })
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=493')
    .then(res => res.json())
    .then(data => {
        for(let x of data.results) {
            pokeName.innerHTML += "<option value=" + x.name + ">" + x.name.charAt(0).toUpperCase() + x.name.slice(1) + "</option>"
        }
    })

pokeForm.addEventListener('submit', getPokemon)