import { Trash, ThumbsUp } from 'phosphor-react';
import Avatar from '../avatar/Avatar';
import styles from './Comment.module.css'

function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/PColares.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Colares</strong>
                            <time title="20 de julho às 08:10" dateTime="2022-07-20 08:09:30">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment;