import { Link } from 'react-router-dom';

console.log(window.location.href)

function MenuItem(props) {

    return (
        <Link to={props.infos.link} >
            <li className={'c-menu__item'}>
                <img src={props.infos.photo} alt={props.infos.name} />
                <p>{props.infos.name}</p>
            </li>
        </Link>
    );
}

export default MenuItem;