import { Component } from 'react';

// Axios

import ApiItens from '../api/ApiItens'

// Components

import BarraPesquisa from '../components/BarraPesquisa';
import CardItem from '../components/CardItem';

class Itens extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    state = {
        itensList: []
    }

    BuscarIten () {

    };

    async componentDidMount () {

        var i = 1;
        var itensList = [];

        while (i <= 1658) { //1658 

            const response = await ApiItens.get(String(i));

            itensList.push(response.data);

            i++;

            this.setState({
                itensList: itensList
            });
        }

        // Reseta o State ( loading )
        

    };

    render() { 
        return ( 
            <main className="l-main">
                <div className='l-topHed'>
                    <h1 className='c-title__topPage'>Itens</h1>
                </div>

                <div className='c-filtro' >
                    <BarraPesquisa placeholder={'Procure por itens Pokemon'} functionBuscar={this.BuscarIten} id_busca={'Busca'} />
                </div>

                <div className='l-cardBoxItens' >
                    {this.state.itensList.map(item => (
                        <CardItem dadosItem={item} />
                    ))}
                </div>

            </main>
         );
    }
}

export default Itens;