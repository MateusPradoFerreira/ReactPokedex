// Components

import BarraPesquisa from "../components/BarraPesquisa";

function Movimentos() {

    function BuscarMovimento () {

    }

    return (
        <>
            <main className="l-main">
                <div className='l-topHed'>
                    <h1 className='c-title__topPage'>Movimentos Pokemon</h1>

                    <div className='c-filtro' >
                    <BarraPesquisa placeholder={'Procure por Movimentos Pokemon'} functionBuscar={BuscarMovimento} id_busca={'Busca'} />
                </div>
                </div>
            </main>
        </>
    );
}

export default Movimentos;