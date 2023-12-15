import './featured.css'
import featuredImgMobile from './../../assets/images/image-web-3-mobile.jpg'
import featuredImgDesktop from './../../assets/images/image-web-3-desktop.jpg'

function Featured({ isMobile }) {
  return (
    <article className='featured'>
      <div className='featured__img'>
        {isMobile ? (
          <img
            className='featured__img__mobile'
            src={featuredImgMobile}
            alt='Featured new'></img>
        ) : (
          <img
            className='featured__img__desktop'
            src={featuredImgDesktop}
            alt='Featured new'></img>
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
          <a className='read_more' href=''>
            Read More &#8594;
          </a>
        </div>
      </div>
    </article>
  )
}

export default Featured
