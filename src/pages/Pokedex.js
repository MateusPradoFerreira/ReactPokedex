import React, { Component } from 'react';

// Axios

import ApiPokemon from '../api/ApiPokemon'
import ApiSpecies from '../api/ApiSpecies'

// Components

import CardPokemon from '../components/CardPokemon';
import SelectedPokemon from '../components/SelectedPokemon';
import Filter from '../components/Filter';
import NfPage from '../components/NfPage';

// Main component

class Main extends Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setBusca = this.setBusca.bind(this);
        this.selecionaPokemon = this.selecionaPokemon.bind(this);
        this.surpreendame = this.surpreendame.bind(this);
        this.proximoPokemon = this.proximoPokemon.bind(this);
        this.pokemonAnterior = this.pokemonAnterior.bind(this);
    };

    state = {
        pokedex: [],
        buscaPk: [],
        selectedPokemon: ''
    };

    // async function
    async componentDidMount() {

        var i = 1;
        var pokedex = [];

        while (i <= 151) { //898 

            const responsePokemon = await ApiPokemon.get(String(i));
            const responseSpecies = await ApiSpecies.get(String(i));

            pokedex.push({
                pokemon: responsePokemon.data,
                species: responseSpecies.data,
                order: i
            });

            i++;
        }

        // Reseta o State ( loading )
        this.setState({
            pokedex: pokedex,
            buscaPk: pokedex,
            selectedPokemon: ''
        });

        // end loading
        document.getElementById('loading').style.display = 'none';
    }

    filtrarPokedex(pokemon) {
        // coleta os dados do filtro pelos IDs
        let busca = document.getElementById('busca').value;
        let type = document.getElementById('type').value;
        let classPK = document.getElementById('class').value;
        let inicio = document.getElementById('orderInicio').value;
        let fim = document.getElementById('orderFim').value

        if (inicio != '' && fim == '') {
            document.getElementById('orderFim').value = 151
        }

        if (fim != '' && inicio == '') {
            document.getElementById('orderInicio').value = 1
        }

        if (busca == pokemon.order) {
            return pokemon;
        } else {
            if (classPK == 'legendary') {
                if (pokemon.species.is_legendary == true) {
                    if (type == '') {
                        if (inicio == '' || fim == '') {
                            if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                return pokemon;
                            }
                        } else {
                            if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                console.log(pokemon.order)
                                return pokemon;
                            }
                        }
                    } else {
                        if (pokemon.pokemon.types[1] == undefined) {
                            if (pokemon.pokemon.types[0].type.name == type) {
                                if (inicio == '' || fim == '') {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                        return pokemon;
                                    }
                                } else {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                        return pokemon;
                                    }
                                }
                            }
                        } else {
                            if (pokemon.pokemon.types[0].type.name == type || pokemon.pokemon.types[1].type.name == type) {
                                if (inicio == '' || fim == '') {
                                    if (pokemon.pokemon.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                        return pokemon;
                                    }
                                } else {
                                    if (pokemon.pokemon.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                        return pokemon;
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (classPK == 'baby') {
                if (pokemon.species.is_baby == true) {
                    if (type == '') {
                        if (inicio == '' || fim == '') {
                            if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                return pokemon;
                            }
                        } else {
                            if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                return pokemon;
                            }
                        }
                    } else {
                        if (pokemon.pokemon.types[1] == undefined) {
                            if (pokemon.pokemon.types[0].type.name == type) {
                                if (inicio == '' || fim == '') {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                        return pokemon;
                                    }
                                } else {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                        return pokemon;
                                    }
                                }
                            }
                        } else {
                            if (pokemon.pokemon.types[0].type.name == type || pokemon.pokemon.types[1].type.name == type) {
                                if (inicio == '' || fim == '') {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                        return pokemon;
                                    }
                                } else {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                        return pokemon;
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (classPK == 'mythical') {
                if (pokemon.species.is_mythical == true) {
                    if (type == '') {
                        if (inicio == '' || fim == '') {
                            if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                return pokemon;
                            }
                        } else {
                            if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                return pokemon;
                            }
                        }
                    } else {
                        if (pokemon.pokemon.types[1] == undefined) {
                            if (pokemon.pokemon.types[0].type.name == type) {
                                if (inicio == '' || fim == '') {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                        return pokemon;
                                    }
                                } else {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                        return pokemon;
                                    }
                                }
                            }
                        } else {
                            if (pokemon.pokemon.types[0].type.name == type || pokemon.pokemon.types[1].type.name == type) {
                                if (inicio == '' || fim == '') {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                        return pokemon;
                                    }
                                } else {
                                    if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                        return pokemon;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (type == '') {
                    if (inicio == '' || fim == '') {
                        if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                            return pokemon;
                        }
                    } else {
                        if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                            return pokemon;
                        }
                    }
                } else {
                    if (pokemon.pokemon.types[1] == undefined) {
                        if (pokemon.pokemon.types[0].type.name == type) {
                            if (inicio == '' || fim == '') {
                                if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                    return pokemon;
                                }
                            } else {
                                if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                    return pokemon;
                                }
                            }
                        }
                    } else {
                        if (pokemon.pokemon.types[0].type.name == type || pokemon.pokemon.types[1].type.name == type) {
                            if (inicio == '' || fim == '') {
                                if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1) {
                                    return pokemon;
                                }
                            } else {
                                if (pokemon.pokemon.name.toUpperCase().indexOf(busca.toUpperCase()) != -1 && pokemon.order >= inicio && pokemon.order <= fim) {
                                    return pokemon;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    setBusca() {

        // coleta os dados da pokedex original e da pokedex filtrada
        const pokedexCompleta = this.state.pokedex;

        const pokedexFiltrada = pokedexCompleta.filter(this.filtrarPokedex)

        // seta o valor da busca realizada
        this.setState({
            pokedex: this.state.pokedex,
            buscaPk: pokedexFiltrada,
            selectedPokemon: this.state.selectedPokemon,
        })

        // animação de busca
        document.getElementById('pokebolaFiltro').style.animation = 'pokebola 1s infinite ease-in-out';

        setTimeout(() => {
            document.getElementById('pokebolaFiltro').style.animation = 'none';
        }, "1000");
    }

    // troca os dados do prokemon selecionado
    selecionaPokemon(dadosPokemon) {

        this.setState({
            pokedex: this.state.pokedex,
            buscaPk: this.state.buscaPk,
            selectedPokemon: dadosPokemon
        });

        document.getElementById('iconePokemonSelecionado').style.animation = 'selecionaPokemon 0.5s ease-in-out';

        setTimeout(() => {
            document.getElementById('iconePokemonSelecionado').style.animation = 'none';
        }, "500");

        if (document.getElementById('shiny')) {
            document.getElementById('shiny').src = 'https://cdn-icons-png.flaticon.com/512/1324/1324652.png';
        }

        window.scroll(0, 180)
    }

    // Vai pro proximo pokemon
    proximoPokemon(ev) {
        if (ev < this.state.pokedex.length) {
            this.selecionaPokemon(this.state.pokedex[ev]);
        }
    }

    // Vai pro pokemon anterior
    pokemonAnterior(ev) {

        if (ev > 1) {
            this.selecionaPokemon(this.state.pokedex[ev - 2]);
        }
    }

    // randomiza um pokemon
    surpreendame() {

        var ss = Math.floor(Math.random() * this.state.pokedex.length)

        this.setState({
            pokedex: this.state.pokedex,
            buscaPk: this.state.buscaPk,
            selectedPokemon: this.state.pokedex[ss]
        });

        document.getElementById('iconePokemonSelecionado').style.animation = 'selecionaPokemon 0.5s ease-in-out';
        document.getElementById('shiny').src = 'https://cdn-icons-png.flaticon.com/512/1324/1324652.png';
        document.getElementById('random').style.animation = 'pokebola 0.5s ease-in-out';

        setTimeout(() => {
            document.getElementById('iconePokemonSelecionado').style.animation = 'none';
            document.getElementById('random').style.animation = 'none';
        }, "500");

    }

    render() {

        return (
            <>
                <main className='l-main__pokedex'>

                    {/* Pokemon selecionado */}
                    <SelectedPokemon
                        dadosPokemon={this.state.selectedPokemon}
                        functionBuscar={this.setBusca}
                        selecionaPokemon={this.selecionaPokemon}
                        random={this.surpreendame}
                        nextPokemon={this.proximoPokemon}
                        pokemonAnterior={this.pokemonAnterior}
                    />
                    
                    {/* Filtro de busca */}
                    <Filter functionBuscar={this.setBusca} />

                    {/* Gif de loading */}
                    <div id='loading'  className='l-CardBoxPokemon'>
                        <img className='c-loading' src='https://media3.giphy.com/media/IQebREsGFRXmo/200.gif' alt='teste' />
                    </div>

                    {/* CardBox com todos os pokemons */}
                    <div id='CardBoxPokemon' style={{height: ((this.state.buscaPk.length < 3 ? 3 : this.state.buscaPk.length )  * ((242 / 3) + 21)) + 'px'}} className='l-CardBoxPokemon'>
                        {this.state.buscaPk.map((pokemon) => (
                            <CardPokemon key={pokemon.pokemon.order} dadosPokemon={pokemon} selecionaPokemon={this.selecionaPokemon} />
                        ))}
                        {this.state.buscaPk.length == 0 && this.state.pokedex.length != 0 ? <NfPage /> : <></>}
                    </div>
                </main>
            </>
        );
    }
}

export default Main;
