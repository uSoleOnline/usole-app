import styles from '../styles/Navigation.module.css'
import { useRouter } from 'next/navigation'

function NavButton({ text, location }) {
    const router = useRouter()
    return (
        <button className={styles.navButton} onClick={() => router.push((location))}>
            {text}
        </button>
    )
}

function NavBar() {
    const router = useRouter()
    return (
        <div className={styles.navBar}>
            <div className={styles.section} style={{justifyContent: 'flex-start'}}>
                <NavButton text='Shop' location='/shop'/>
                <NavButton text='Soles' location='/shop'/>
                <NavButton text='Kits' location='/shop'/>
            </div>
            <div className={styles.section}>
                <button className={styles.logo} onClick={() => router.push(('/'))}>
                    USOLE
                </button>
            </div>
            <div className={styles.section} style={{justifyContent: 'flex-end'}}>
                <NavButton text='About Us' location='/aboutus'/>
                <NavButton text='Sustainability' location='/sustainability'/>
                <NavButton text='Log in' location='/login'/>
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <div className={styles.footer}>
            <p>footer links and logo</p>
        </div>
    )
}
export default NavBar