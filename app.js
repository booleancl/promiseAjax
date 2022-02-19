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
    
    const request = new XMLHttpRequest();
    
    return new Promise(function (resolve, reject) {
      
      request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          });
        }
      };
      
      request.open(method || 'GET', url, true);
      request.send();
    });
  },

  getPokemon(name){
    this.makeRequest(`${this.baseURL}pokemon/${name}`)
    .then(pokemon => { 
      return {
        name,
        image: JSON.parse(pokemon).sprites.front_default
      }
    })
    .then(pokeInfo => this.renderCard(pokeInfo))
  },

  async getAllPokemon(event){
    event.preventDefault()
    const response = await this.makeRequest(`${this.baseURL}pokemon?limit=50`)
    const pokemons = JSON.parse(response).results
    pokemons.forEach( poke => { this.getPokemon(poke.name) })
  },
  
  init(){
    this.button = document.getElementById(this.buttonId)
    this.button.addEventListener('click', async (event) => this.getAllPokemon(event))
  }
}

document.addEventListener('DOMContentLoaded', () => PokeApp.init())