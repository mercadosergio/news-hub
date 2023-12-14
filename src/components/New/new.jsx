import { recentNews } from '../../data'
import './new.css'

function New() {
  return (
    <div className='new'>
      <h1 className='new__title'>New</h1>
      {recentNews.map((post) => (
        <div key={post.id} className='new__post'>
          <span className='new__post__title'>{post.title}</span>
          <p className='new__post__text'>{post.description}</p>
        </div>
      ))}
    </div>
  )
}

export default New
