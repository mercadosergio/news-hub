import './home.css'
import Featured from '../../components/Featured/featured'
import Header from '../../components/Header/header'
import New from '../../components/New/new'
import QuickPost from '../../components/QuickPost/quick-post'
import { listedNews } from '../../data'
import { useState } from 'react'
import SideMenu from '../../components/SideMenu/side-menu'
import useScreen from '../../hooks/useScreen'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isDesktop = useScreen('(min-width: 420px)')

  return (
    <main className='main__page'>
      <Header
        isDesktop={isDesktop}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <section className='home'>
        <div className='featured__grid'>
          <Featured isDesktop={isDesktop} />
        </div>
        <div className='new__grid'>
          <New />
        </div>
        {listedNews.map((post) => (
          <QuickPost key={post.id} post={post} />
        ))}
      </section>
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </main>
  )
}

export default Home
