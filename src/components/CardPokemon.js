import React, { Component } from 'react';

// Main component

class CardPokemon extends Component {

    state = {
        dadosPokemon: this.props.dadosPokemon
    }

    render() {
        return (
            // Card
            <div
                key={this.props.dadosPokemon.order}
                className='c-card__pokemon' 
                onClick={() => this.props.selecionaPokemon(this.state.dadosPokemon)}
            >
                {/* sprite do pokemon */}
                <img src={this.state.dadosPokemon.pokemon.sprites.front_default} alt={this.state.dadosPokemon.pokemon.name} />

                {/* informaçoes do pokemon */}
                <div className='c-card__pokemon__infos'>
                    <p className='c-card__pokemon__infos__order'>#{this.props.dadosPokemon.order}</p>
                    <p className='c-card__pokemon__infos__name'>{this.state.dadosPokemon.pokemon.name}</p>

                    {/* tipos do pokemon */}
                    <div className='c-card__pokemon__infos__types'>
                        {this.state.dadosPokemon.pokemon.types.map((type) => (
                            <p key={type.type.name} className={'c-card__pokemon__infos__types type ' + type.type.name}>{type.type.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPokemon;