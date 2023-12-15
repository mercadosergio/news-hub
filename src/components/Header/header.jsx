import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.svg'
import hamburgerIcon from './../../assets/images/icon-menu.svg'
import './header.css'
import { routes } from '../../data'

function Header({ menuOpen, setMenuOpen, isMobile }) {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='hamburger__button'>
            <img className='hamburger__icon' src={hamburgerIcon} alt='Menú' />
          </button>
        ) : (
          <ul className='menu'>
            {routes.map((route) => (
              <li className='menu__item' key={route.key}>
                <Link className='menu__link' to={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
