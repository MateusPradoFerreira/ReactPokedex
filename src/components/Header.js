import logo from '../images/1068780.png';

// components

import Menu from './MenuHeader_body';
import SocialMediaIcon from './SocialMediaIcon';

function Header(porps) {
    return (
        <header className="l-header">
            <div className="c-header__boxRed">
                <div className="c-header__boxRed__logo">
                    <img src={logo} alt='logo' />
                </div>

                <div className='c-socialBox'>
                    <SocialMediaIcon backgroundColor={'#FF000F'} link={''} icon={'https://cdn-icons-png.flaticon.com/512/1384/1384031.png'} />
                    <SocialMediaIcon backgroundColor={'#FFC700'} link={'https://github.com/MateusPratu'} icon={'https://cdn-icons-png.flaticon.com/512/1051/1051377.png'} />
                    <SocialMediaIcon backgroundColor={'#79DE4F'} link={'https://www.figma.com/file/yB7LoUwnJal4be1ohQsT88/Pokedex?node-id=127%3A2&t=00Wy5giWffNiyB4v-0'} icon={'https://cdn-icons-png.flaticon.com/512/8297/8297918.png'} />
                </div>

            </div>
            <div className="c-header__boxWhite">
                <Menu menuList={porps.menuList} />
            </div>
        </header>
    );
}

export default Header;