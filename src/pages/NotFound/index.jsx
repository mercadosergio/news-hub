import './not-found.css'
import notFoundImg from './../../assets/images/page-not-found.svg'
import Header from '../../components/Header/header'
import { Link } from 'react-router-dom'
import useScreen from '../../hooks/useScreen'

function NotFound() {
  const { screenWidth } = useScreen()

  return (
    <main className='notfound'>
      <Header screenWidth={screenWidth} />
      <div className='notfound__content'>
        <img
          className='notfound__img'
          src={notFoundImg}
          alt='Página no encontrada'
          width={500}
        />
        <span className='notfound__text'>
          Página no encontrada{' '}
          <Link className='home__link' to='/'>
            Volver la vista principal
          </Link>
        </span>
      </div>
    </main>
  )
}

export default NotFound
