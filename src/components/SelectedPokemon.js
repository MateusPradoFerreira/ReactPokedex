import axios from 'axios';

import img from '../images/125-1250997_tried-drawing-lapras-from-memory-pokemon-png-draw-removebg-preview.png';

// Components

import Stats from './Stats';

function SelectedPokemon(props) {

    var i = 0;

    function trocaIconePokemon() {

        if (i % 2 == 0) {
            document.getElementById('iconePokemonSelecionado').src = props.dadosPokemon.pokemon.sprites.front_shiny;
            document.getElementById('shiny').src = 'https://cdn-icons-png.flaticon.com/512/1324/1324774.png';

            document.getElementById('shiny').style.animation = 'selecionaPokemon 0.5s ease-in-out';

            setTimeout(() => {
                document.getElementById('shiny').style.animation = 'none';
            }, "500");
        } else {
            document.getElementById('iconePokemonSelecionado').src = props.dadosPokemon.pokemon.sprites.front_default;
            document.getElementById('shiny').src = 'https://cdn-icons-png.flaticon.com/512/1324/1324652.png';

            document.getElementById('shiny').style.animation = 'selecionaPokemon 0.5s ease-in-out';

            setTimeout(() => {
                document.getElementById('shiny').style.animation = 'none';
            }, "500");
        }

        i++;
    }

    async function chamaVariante(ev) {

        const api = axios.create({
            baseURL: ev
        });

        const response = await api.get();

        props.selecionaPokemon({
            pokemon: response.data,
            species: props.dadosPokemon.species,
            order: props.dadosPokemon.order
        })

    }

    if (props.dadosPokemon != '') {
        return (
            <div className="l-selectedPokemon">

                <div className="c-selectedPokemon__imgs">
                    <img className="c-selectedPokemon__imgPokeball" id='selecionaPokemon' src="https://cdn-icons-png.flaticon.com/512/871/871516.png" alt="pokeball" />
                    <img className="c-selectedPokemon__img" id="iconePokemonSelecionado" src={props.dadosPokemon.pokemon.sprites.front_default} />
                </div>

                <div className="c-informaçõesPokemon" >

                    <div className='c-shinyButton' >
                        <button type='button' onClick={props.random} >
                            <img id='random' src='https://cdn-icons-png.flaticon.com/512/3168/3168278.png' alt='' />
                        </button>
                        <button type='button' onClick={() => trocaIconePokemon()} >
                            <img id='shiny' src='https://cdn-icons-png.flaticon.com/512/1324/1324652.png' alt='' />
                        </button>
                    </div>

                    <p
                        className="c-title__order">
                        #{props.dadosPokemon.order < 100 ? props.dadosPokemon.order < 10 ? '00' + props.dadosPokemon.order : '0' + props.dadosPokemon.order : props.dadosPokemon.order}
                    </p>

                    <h2 className="c-title__pokemonName"> {props.dadosPokemon.pokemon.name.replace('-', ' ')} </h2>

                    <div className='c-flexBoxNtPv' >
                        <button onClick={() => props.pokemonAnterior(props.dadosPokemon.order)}> {'<'} </button>
                        <button onClick={() => props.nextPokemon(props.dadosPokemon.order)}> {'>'} </button>
                    </div>

                    <div
                        className='c-card__pokemon__infos__types'>
                        {props.dadosPokemon.pokemon.types.map((type) => (
                            <h5 key={type.type.name} className={'c-card__pokemon__infos__types type ' + type.type.name}>{type.type.name}</h5>
                        ))}
                    </div>

                    <h2 className="c-title__infos"> variantes </h2>

                    <div className='c-flexBox'>
                        {props.dadosPokemon.species.varieties.map((pokemon) => (
                            <button
                                type="button"
                                className='c-variante'
                                key={pokemon.pokemon.name}
                                value={pokemon.pokemon.url}
                                onClick={(ev) => chamaVariante(ev.target.value)}
                            >{pokemon.pokemon.name.replace('-', ' ')}</button>
                        ))}
                    </div>

                    <h2 className="c-title__infos"> habilidades </h2>

                    <div className='c-flexBox'>
                        {props.dadosPokemon.pokemon.abilities.map((ability) => (
                            <div
                                className="c-abilidade"
                                key={ability.ability.name} >
                                {ability.ability.name.replace('-', ' ')}
                            </div>
                        ))}
                    </div>

                    <div className='c-flexBoxStats' >
                        <div className='c-inf' >
                            <h2 className="c-title__infos"> altura </h2>
                            <div className='c-subStatus'> {props.dadosPokemon.pokemon.height / 10}m </div>
                        </div>
                        <div className='c-inf' >
                            <h2 className="c-title__infos"> peso </h2>
                            <div className='c-subStatus'> {props.dadosPokemon.pokemon.weight / 10}kg </div>
                        </div>
                        <div className='c-inf' >
                            <h2 className="c-title__infos"> EXP base </h2>
                            <div className='c-subStatus'> {props.dadosPokemon.pokemon.base_experience} </div>
                        </div>
                        <div className='c-inf' >
                            <h2 className="c-title__infos"> catch rate </h2>
                            <div className='c-subStatus'> {props.dadosPokemon.species.capture_rate} </div>
                        </div>
                    </div>

                    <h2 className="c-title__infos"> estatísticas </h2>

                    <div className='c-stats' >

                        <Stats nameStat={'Hp'} base_stat={ props.dadosPokemon.pokemon.stats[0].base_stat } />
                        <Stats nameStat={'Attack'} base_stat={ props.dadosPokemon.pokemon.stats[1].base_stat } />
                        <Stats nameStat={'Defense'} base_stat={ props.dadosPokemon.pokemon.stats[2].base_stat } />
                        <Stats nameStat={'Special Atk.'} base_stat={ props.dadosPokemon.pokemon.stats[3].base_stat } />
                        <Stats nameStat={'Special Def.'} base_stat={ props.dadosPokemon.pokemon.stats[4].base_stat } />
                        <Stats nameStat={'Speed'} base_stat={ props.dadosPokemon.pokemon.stats[5].base_stat } />

                    </div>

                </div>
            </div>
        );
    } else {
        return <div className="l-selectedPokemon">
            <div className="c-selectedPokemon__imgs">
                <img className="c-selectedPokemon__imgPokeball" id='selecionaPokemon' src="https://cdn-icons-png.flaticon.com/512/871/871516.png" alt="pokeball" />
                <img className="c-selectedPokemon__img" id="iconePokemonSelecionado" src={img} />
            </div>

            <div className="c-informaçõesPokemon" >
                <br />
                <br />
                <br />
                <br />
                <p className="c-title__pokemonName">Escolha Seu Pokemon!</p>
                <br />
            </div>
        </div>
    }

}

export default SelectedPokemon; 