import './featured.css'
import featuredImgMobile from './../../assets/images/image-web-3-mobile.jpg'
import featuredImgDesktop from './../../assets/images/image-web-3-desktop.jpg'
import { Link } from 'react-router-dom'

function Featured({ screenWidth }) {
  return (
    <article className='featured'>
      <div className='featured__img'>
        {screenWidth < 420 ? (
          <img
            className='featured__img__mobile'
            src={featuredImgMobile}
            alt='Featured new'
            height={360}
          />
        ) : (
          <img
            className='featured__img__desktop'
            src={featuredImgDesktop}
            alt='Featured new'
            height={320}
          />
        )}
      </div>
      <div className='featured__body'>
        <span className='featured__title'>The Bright Future of Web 3.0?</span>
        <div className='featured__content'>
          <p className='featured__text'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Link className='read_more' to='xyz'>
            Read More &#8594;
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Featured
