import styles from '../styles/Navigation.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useWindowSize from './useWindowSize'

function NavButton({ text, location, style={} }) {
    const router = useRouter()
    return (
        <button className={styles.navButton} style={style} onClick={() => router.push((location))}>
            <span className={styles.text}>{text}</span>
        </button>
    )
}

export function Menu() {
    const soles = {
        pathname: '/shop/[category]',
        query: {category: 'outsoles'}
    }
    const kits = {
        pathname: '/shop/[category]',
        query: {category: 'kits'}
    }
    const menuButton = {
        width: '100%',
        height: '55px',
        paddingLeft: '30px',
        textAlign: 'left'
    }
    return (
        <div className={styles.menu} id='menu'>
            <NavButton style={menuButton} text='About' location='/about'/>
            <NavButton style={menuButton} text='Mission' location='/mission'/>
            <NavButton style={menuButton} text='Impact' location='/impact'/>
            <NavButton style={menuButton} text='Shop' location='/shop'/>
            <NavButton style={menuButton} text='Outsoles' location={soles}/>
            <NavButton style={menuButton} text='Kits' location={kits}/>
        </div>
    )
}

function openMenu() {
    var menu = document.getElementById('menu')
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function Navbar() {
    const router = useRouter()
    const {width} = useWindowSize()
    const soles = {
        pathname: '/shop/[category]',
        query: {category: 'outsoles'}
    }
    const kits = {
        pathname: '/shop/[category]',
        query: {category: 'kits'}
    }
    if (width < 700) {
        return (
            <div className={styles.navbar}>
                <button className={styles.logo} onClick={() => openMenu()}>
                    <Image
                        width={30}
                        height={30}
                        layout='intrinsic'
                        src='/icons/menu.svg'
                        alt='menu'
                        style={{objectFit: 'contain', position: 'absolute', left: '5%', cursor: 'pointer'}}
                    />
                </button>
                <button className={styles.logo} onClick={() => router.push(('/home'))}>
                    <Image
                        priority
                        width={100}
                        height={50}
                        layout='intrinsic'
                        src='/icons/logo.png'
                        alt='logo'
                        style={{objectFit: 'contain'}}
                    />
                </button>
            </div>
        )
    } else {
        return (
            <div className={styles.navbar}>
                <div className={styles.section} style={{justifyContent: 'flex-start'}}>
                    <NavButton text='About' location='/aboutUs'/>
                    <NavButton text='Mission' location='/mission'/>
                    <NavButton text='Impact' location='/impact'/>
                </div>
                <div className={styles.section}>
                    <button className={styles.logo} onClick={() => router.push(('/home'))}>
                        <Image
                            priority
                            width={250}
                            height={500}
                            layout='intrinsic'
                            src='/icons/logo.png'
                            alt='logo'
                            style={{maxHeight: '110%', objectFit: 'contain'}}
                        />
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
        <div>Footer</div>
    )
}

export default Navbar