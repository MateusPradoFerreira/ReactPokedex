function BarraPesquisa(props) {
    return (
        <div className="c-barraPesquisa" >
            <input className="c-barraPesquisa__input" id={props.id_busca} placeholder={props.placeholder} onChange={() => props.functionBuscar()} />
            <button className="c-barraPesquisa__button" type="button" value='1' onClick={() => props.functionBuscar()}>
                <img id="pokebolaFiltro" src="https://cdn-icons-png.flaticon.com/512/1068/1068729.png" alt="img" />
            </button>
        </div>
    );
}

export default BarraPesquisa;