import { Link } from 'react-router-dom'
import './quick-post.css'

function QuickPost({ post }) {
  return (
    <div className='quick__post'>
      <img className='quick__post__img' src={post.srcImg} alt={post.title} />
      <div className='quick__post__body'>
        <span className='post__num'>{post.num}</span>
        <Link to='xyz'>
          <span className='post__title'>{post.title}</span>
        </Link>
        <p className='post__text'>{post.description}</p>
      </div>
    </div>
  )
}

export default QuickPost
