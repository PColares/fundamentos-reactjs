import Post from './components/post/Post'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/PColares.png',
      name: 'Pedro Colares',
      role: 'web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'pedro.design/igniteFeed' },
    ],
    publishedAt: new Date('2022-07-21 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/PColares.png',
      name: 'Pedro Colares',
      role: 'web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 pedro.design/igniteFeed' },
      { type: 'hashtag', content: '#novoprojeto ' },
      { type: 'hashtag', content: '#NLW ' },
      { type: 'hashtag', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-07-20 10:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>


    </>
  )
}

export default App