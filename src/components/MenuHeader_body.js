// Components

import MenuItem from "./MenuHeader_item";

function Menu(props) {

    return (
        <ul className="c-menu">
            {props.menuList.map((item) => (
                <MenuItem key={item.name} infos={item}/>
            ))}
        </ul>
    );
}

export default Menu;