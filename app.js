const PokeApp = {

  baseURL: 'https://pokeapi.co/api/v2/',

  buttonId: 'getPokemons',

  button: null,

  renderCard(info){
    const card = `<div class="card">
                   <img src="${info.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${info.name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>`
    
    const elem = document.createElement('div')
    elem.innerHTML = card
    document.body.appendChild(elem)
  },
  
  makeRequest(url, method) {
    //...
  },

  getPokemon(name){
    //...
  },

  async getAllPokemon(event){
    //...
  },
  
  init(){
    this.button = document.getElementById(this.buttonId)
    this.button.addEventListener('click', (event) => this.getAllPokemon(event))
  }
}

document.addEventListener('DOMContentLoaded', () => PokeApp.init())