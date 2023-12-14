import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.svg'
import './header.css'

const routes = [
  {
    key: 1,
    name: 'Home',
    path: '/'
  },
  {
    key: 2,
    name: 'New',
    path: '/'
  },
  {
    key: 3,
    name: 'Popular',
    path: '/'
  },
  {
    key: 4,
    name: 'Trending',
    path: '/'
  },
  {
    key: 5,
    name: 'Categories',
    path: '/'
  }
]

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
        <ul className='menu'>
          {routes.map((route) => (
            <li className='menu__item' key={route.key}>
              <Link className='menu__link' to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
