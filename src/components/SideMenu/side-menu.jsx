import { Link } from 'react-router-dom'
import { routes } from '../../data'
import closeIcon from './../../assets/images/icon-menu-close.svg'
import './side-menu.css'

function SideMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`back__sidemenu ${menuOpen ? 'back__sidemenu--active' : ''}`}>
      <aside className={`sidemenu ${menuOpen ? 'sidemenu--active' : ''}`}>
        <div className='sidemenu__head'>
          <button
            className='sidemenu__close'
            onClick={() => setMenuOpen(!menuOpen)}>
            <img src={closeIcon} alt='Cerrar menú' />
          </button>
        </div>
        <ul className='sidemenu__list'>
          {routes.map((route) => (
            <li className='sidemenu__item' key={route.key}>
              <Link className='sidemenu__link' to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default SideMenu
