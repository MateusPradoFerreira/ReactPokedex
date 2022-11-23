import React, { Component } from 'react';

// Main component

class CardPokemon extends Component {

    state = {
        dadosItem: this.props.dadosItem
    }

    render() {
        return (
            // Card
            <div className='c-card__item'>
                {/* sprite do pokemon */}
                <img src={this.state.dadosItem.sprites.default} alt={this.state.dadosItem.name} />

                {/* informaçoes do pokemon */}
                <div className='c-card__item__infos'>
                    <h2 className='c-title__nameItem'>{this.state.dadosItem.name.replace('-', ' ')}</h2>
                    <h3 className='c-title__category'>{this.state.dadosItem.category.name.replace('-', ' ')}</h3>
                    <p className='c-text__descricaoItem'>{this.state.dadosItem.effect_entries[0].short_effect}</p>
                </div>
            </div>
        );
    }
}

export default CardPokemon;