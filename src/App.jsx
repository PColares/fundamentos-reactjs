import Post from './components/post/Post'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post />
          <Post />
        </main>
      </div>


    </>
  )
}

export default App