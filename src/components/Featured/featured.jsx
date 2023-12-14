import './featured.css'

function Featured() {
  return (
    <article className='featured'>
      <div className='featured__img' />
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
