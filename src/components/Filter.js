// Components

import Select from './Select';

var typeList = [
    'Bug',
    'Dark',
    'Dragon',
    'Electric',
    'Fairy',
    'Fighting',
    'Fire',
    'Flying',
    'Ghost',
    'Grass',
    'Ground',
    'Ice',
    'Normal',
    'Poison',
    'Psychic',
    'Rock',
    'Steel',
    'Water'
]

var classList = [
    'baby',
    'legendary',
    'mythical'
]

function Filter(props) {

    function resetaFiltro() {
        document.getElementById('busca').value = '';
        document.getElementById('type').value = '';
        document.getElementById('orderInicio').value = '';
        document.getElementById('orderFim').value = '';
        document.getElementById('class').value = '';

        document.getElementById('reset').style.animation = 'pokebola 0.5s ease-in-out';

        setTimeout(() => {
            document.getElementById('reset').style.animation = 'none';
        }, "500");

        props.functionBuscar()
    }

    var i = 0;

    function abreSelect(ev, setinha) {
        if (i % 2 == 0) {
            document.getElementById(ev).style.display = 'block'
            document.getElementById(setinha).style.rotate = '90deg'

        } else {
            document.getElementById(ev).style.display = 'none'
            document.getElementById(setinha).style.rotate = '0deg'
        }

        i++
    }

    function selecionaOp(ev, select) {
        document.getElementById(select).value = ev;
        props.functionBuscar();
    }

    return (
        <div className='l-filtro'>
            <div className="c-barraPesquisa" >
                <input className="c-barraPesquisa__input" id="busca" placeholder="Procure pelo seu Pokemon" onChange={() => props.functionBuscar()} />
                <button className="c-barraPesquisa__button" type="button" value='1' onClick={() => props.functionBuscar()}>
                    <img id="pokebolaFiltro" src="https://cdn-icons-png.flaticon.com/512/1068/1068729.png" alt="img" />
                </button>
            </div>

            <div className="c-filtro" >

                <Select
                    placeholder={'type'}
                    optionsList={typeList}
                    icone={'https://cdn-icons-png.flaticon.com/512/3405/3405802.png'}
                    selecionaOp={selecionaOp}
                    functionBuscar={props.functionBuscar}
                />

                <Select
                    placeholder={'class'}
                    optionsList={classList}
                    icone={'https://cdn-icons-png.flaticon.com/512/3281/3281218.png'}
                    selecionaOp={selecionaOp}
                    functionBuscar={props.functionBuscar}
                />

                <input className='c-filtro__input' id='orderInicio' min={0} max={898} type={'number'} placeholder='Inicio' onChange={() => props.functionBuscar()}/>
                <input className='c-filtro__input' id='orderFim' min={0} max={898}  type={'number'} placeholder='Fim' onChange={() => props.functionBuscar()}/>

                <button type="button" className="c-filtro__reset" onClick={() => resetaFiltro()} >
                    <img id='reset' src="https://cdn-icons-png.flaticon.com/512/2546/2546743.png" alt="reset" className="resetButton" />
                </button>
            </div>



        </div>
    );
}

export default Filter;