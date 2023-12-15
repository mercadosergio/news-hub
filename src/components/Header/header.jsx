import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.svg'
import hamburgerIcon from './../../assets/images/icon-menu.svg'
import './header.css'
import { routes } from '../../data'

function Header({ menuOpen, setMenuOpen, isDesktop }) {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='Logo' width={65} />
          </Link>
        </div>
        {!isDesktop ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='hamburger__button'>
            <img
              className='hamburger__icon'
              src={hamburgerIcon}
              alt='Menú'
              width={40}
            />
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
