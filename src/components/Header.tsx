import styles from './Header.module.css'
import logo from '../../public/images/rocket.svg'
export function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} />
            <h1>to<span>do</span></h1>
        </header>
    )
}