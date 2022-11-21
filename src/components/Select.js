function Select(props) {

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

    return (
        <div className="c-filtro__select" onClick={() => abreSelect('options' + props.placeholder, 'setinha' + props.placeholder)}>

            <div className="c-filtro__select__input" >
                <img src={props.icone} alt="icon" />
                <input placeholder={props.placeholder} id={props.placeholder} disabled onChange={() => props.functionBuscar()}></input>
                <img className="setinha" id={"setinha" + props.placeholder} src="https://cdn-icons-png.flaticon.com/512/7718/7718405.png" alt="icon" />
            </div>

            <ul className="c-filtro__select__options" id={"options" + props.placeholder}>
                <li value={''} onClick={() => props.selecionaOp('', props.placeholder)} >n.a</li>
                {props.optionsList.map((type) => (
                    <li key={type} value={type.toLowerCase()} onClick={() => props.selecionaOp(type.toLowerCase(), props.placeholder)}>{type}</li>
                ))}
            </ul>
        </div>
    );
}

export default Select;