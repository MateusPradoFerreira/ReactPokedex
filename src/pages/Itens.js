// Components

import BarraPesquisa from '../components/BarraPesquisa';

function Itens() {

    function BuscarIten() {
        console.log('daads')
    }

    return (
        <>
            <main className="l-main">
                <div className='l-topHed'>
                    <h1 className='c-title__topPage'>Itens</h1>
                </div>

                <div className='c-filtro' >
                    <BarraPesquisa placeholder={'Procure por itens Pokemon'} functionBuscar={BuscarIten} id_busca={'Busca'} />
                </div>

            </main>
        </>
    );
}

export default Itens;