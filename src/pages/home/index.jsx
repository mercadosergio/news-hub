import './home.css'
import Featured from '../../components/Featured/featured'
import Header from '../../components/Header/header'
import New from '../../components/New/new'
import QuickPost from '../../components/QuickPost/quick-post'
import { listedNews } from '../../data'

function Home() {
  return (
    <main className='main__page'>
      <Header />
      <section className='home'>
        <div className='featured__grid'>
          <Featured />
        </div>
        <div className='new__grid'>
          <New />
        </div>
        {listedNews.map((post) => (
          <QuickPost key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}

export default Home
