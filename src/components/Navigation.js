import styles from '../styles/Navigation.module.css'
import { useRouter } from 'next/navigation'

function NavButton({ text, location }) {
    const router = useRouter()
    return (
        <button
            className={styles.navButton}
            onClick={() => router.push((location))}>
            {text}
        </button>
    )
}

function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavButton text='Men' location='/shop/category'/>
            <NavButton text='Women' location='/shop/category'/>
            <NavButton text='Teen' location='/shop/category'/>
            <NavButton text='USOLE' location='/'/>
            <NavButton text='About Us' location='/aboutUs'/>
            <NavButton text='Sustainability' location='/sustainability'/>
            <NavButton text='Log in' location='/login' />
        </div>
    )

}
export default NavBar