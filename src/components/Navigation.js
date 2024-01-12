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

function Navbar() {
    const router = useRouter()
    const soles = {
        pathname: '/shop/[category]',
        query: {category: 'outsoles'}
    }
    const kits = {
        pathname: '/shop/[category]',
        query: {category: 'kits'}
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.section} style={{justifyContent: 'flex-start'}}>
                <NavButton text='About' location='/aboutUs'/>
                <NavButton text='Mission' location='/'/>
                <NavButton text='Impact' location='/impact'/>
            </div>
            <div className={styles.section}>
                <button className={styles.logo} onClick={() => router.push(('/home'))}>
                    <p style={{fontSize: '27px', marginTop: '30px', marginRight: '2px'}}>u</p><p style={{fontSize: '32px'}}>SOLE</p>
                </button>
            </div>
            <div className={styles.section} style={{justifyContent: 'flex-end'}}>
                <NavButton text='Shop' location='/shop'/>
                <NavButton text='Outsoles' location={soles}/>
                <NavButton text='Kits' location={kits}/>
            </div>
        </div>
    )
}

function Divider() {
    return (
        <hr className={styles.divider}/>
    )
}

function Filter({ children, style, key }) {
    return (
        <p className={styles.filter} style={style} key={key}>{children}</p>
    )
}

function showToggle(id) {
    const options = document.getElementById(id)
    const arrow = document.getElementById(id + 'arrow')
    if (options.style.display == 'none') {
        arrow.className = styles.arrowUp
        options.style.display = 'block'
    } else {
        arrow.className = styles.arrowDown
        options.style.display = 'none'
    }
}

function Dropdown({ id, options, children }) {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Filter>{children}</Filter>
                <div className={styles.arrowDown} id={id + 'arrow'} onClick={() => showToggle(id)}></div>
            </div>
            <div id={id} style={{display: 'none'}}>
                {options.map((option) =>
                    <div className={styles.check}>
                        <input type='checkbox' name={option} id={option} key={option}/>
                        <label for={option}>{option}</label>
                    </div>
                )}
            </div>
        </div>
    )
}

export function Sidebar({ category, deals }) {
    const types = ['Basketball', 'Soccer', 'Tennis', 'Track & Field', 'Hiking']
    return (
        <div className={styles.sidebar}>
            <p className={styles.category}>{category}</p>
            {deals.map((deal) => 
                <Filter style={{color: '#FF0000'}} key={deal}>{deal}</Filter>
            )}
            <Divider/>
            {types.map((type) => 
                <Filter key={type}>{type}</Filter>
            )}
            <Divider/>
            <Dropdown id='price' options={['$0-$10', '$10-$20', '$10-$20', '+$30']}>Shop by Price</Dropdown>
            <Divider/>
            <Dropdown id='brand' options={['Nike', 'Adidas', 'Puma', 'FILA', 'Reebok', 'Converse', 'Vans']}>Brand</Dropdown>
            <Divider/>
        </div>
    )
}

export function Footer() {
    return (
        <div className={styles.footer}>
            <p></p>
        </div>
    )
}

export default Navbar