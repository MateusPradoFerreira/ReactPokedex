import logo from '../images/1068780.png';

import Menu from './MenuHeader_body';

function Header(porps) {
    return ( 
        <header className="l-header">
            <div className="c-header__boxRed">
                <div className="c-header__boxRed__logo">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className="c-header__boxWhite">
                <Menu menuList={porps.menuList} />
            </div>
        </header>
     );
}

export default Header;