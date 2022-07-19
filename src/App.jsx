import Post from './Post'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside><Sidebar /></aside>
        <main>
          <Post author="Lorem ipsum" content="Veniam commodo aute occaecat reprehenderit aliqua est amet elit sunt." />

          <Post author="Lorem ipsum" content="Veniam commodo aute occaecat reprehenderit aliqua est amet elit sunt." />
        </main>
      </div>


    </>
  )
}

export default App