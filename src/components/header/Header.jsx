import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo do ignite" />
            <strong>Ignite</strong>
        </header>
    )
}

export default Header;