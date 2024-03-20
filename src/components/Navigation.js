import styles from '../styles/Navigation.module.css'
import { usePathname, useRouter } from 'next/navigation'
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

export function Menu({ style }) {
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
        <div className={styles.menu} style={style} id='menu'>
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
    const pathname = usePathname()
    const {width} = useWindowSize()
    const soles = {
        pathname: '/shop/[category]',
        query: {category: 'outsoles'}
    }
    const kits = {
        pathname: '/shop/[category]',
        query: {category: 'kits'}
    }
    if (pathname.includes('/shop/')) {
        if (width < 700) {
            return (
                <div className={styles.navbar} style={{justifyContent: 'space-between'}}>
                    <button className={styles.logo} onClick={() => router.push(('/'))}>
                        <Image
                            priority
                            width={100}
                            height={50}
                            layout='intrinsic'
                            src='/icons/logo.png'
                            alt='logo'
                            className={styles.logoImage}
                        />
                    </button>
                    <div style={{display: 'flex', justifyContent: 'center', columnGap: '10px'}}>
                        <button className={styles.logo}>
                            <Image
                                width={18}
                                height={18}
                                layout='intrinsic'
                                src='/icons/profile.svg'
                                alt='profile'
                                className={styles.icon}
                            />
                        </button>
                        <button className={styles.logo}>
                            <Image
                                width={24}
                                height={24}
                                layout='intrinsic'
                                src='/icons/cart.svg'
                                alt='cart'
                                className={styles.icon}
                            />
                        </button>
                        <button className={styles.logo} onClick={() => openMenu()}>
                            <Image
                                width={25}
                                height={25}
                                layout='intrinsic'
                                src='/icons/menu.svg'
                                alt='menu'
                                className={styles.icon}
                            />
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.navbar} style={{justifyContent: 'space-between'}}>
                    <button className={styles.logo} onClick={() => router.push(('/'))}>
                        <Image
                            priority
                            width={100}
                            height={50}
                            layout='intrinsic'
                            src='/icons/logo.png'
                            alt='logo'
                            className={styles.logoImage}
                        />
                    </button>
                    <div style={{display: 'flex', justifyContent: 'center', columnGap: '10px'}}>
                        <NavButton text='Men' location={{pathname: '/shop/[category]', query: {category: "Men's"}}}/>
                        <NavButton text='Women' location={{pathname: '/shop/[category]', query: {category: "Women's"}}}/>
                        <NavButton text='Teen' location={{pathname: '/shop/[category]', query: {category: "Teen's"}}}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', columnGap: '10px'}}>
                        <button className={styles.logo}>
                            <Image
                                width={18}
                                height={18}
                                layout='intrinsic'
                                src='/icons/profile.svg'
                                alt='profile'
                                className={styles.icon}
                            />
                        </button>
                        <button className={styles.logo}>
                            <Image
                                width={24}
                                height={24}
                                layout='intrinsic'
                                src='/icons/cart.svg'
                                alt='cart'
                                className={styles.icon}
                            />
                        </button>
                        <button className={styles.logo} onClick={() => openMenu()}>
                            <Image
                                width={25}
                                height={25}
                                layout='intrinsic'
                                src='/icons/menu.svg'
                                alt='menu'
                                className={styles.icon}
                            />
                        </button>
                    </div>
                </div>
            )
        }
    } else {
        if (width < 700) {
            return (
                <div className={styles.navbar}>
                    <button className={styles.logo} onClick={() => openMenu()}>
                        <Image
                            width={25}
                            height={25}
                            layout='intrinsic'
                            src='/icons/menu.svg'
                            alt='menu'
                            className={styles.menuIcon}
                        />
                    </button>
                    <button className={styles.logo} onClick={() => router.push(('/'))}>
                        <Image
                            priority
                            width={100}
                            height={50}
                            layout='intrinsic'
                            src='/icons/logo.png'
                            alt='logo'
                            className={styles.logoImage}
                        />
                    </button>
                </div>
            )
        } else {
            return (
                <div className={styles.navbar}>
                    <div className={styles.section} style={{justifyContent: 'flex-start'}}>
                        <NavButton text='About' location='/about'/>
                        <NavButton text='Mission' location='/mission'/>
                        <NavButton text='Impact' location='/impact'/>
                    </div>
                    <div className={styles.section}>
                        <button className={styles.logo} onClick={() => router.push(('/'))}>
                            <Image
                                priority
                                width={250}
                                height={500}
                                layout='intrinsic'
                                src='/icons/logo.png'
                                alt='logo'
                                className={styles.logoImage}
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
}

function Divider({ style={} }) {
    return (
        <hr className={styles.divider} style={style}/>
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

export function InlineMenu({ category, deals }) {
    const types = ['Basketball', 'Soccer', 'Tennis', 'Track & Field', 'Hiking']
    return (
        <div style={{}}>
            <p className={styles.category} style={{fontSize: '5vw'}}>{category}</p>
            <div className={styles.inlineMenu}>
                {deals.map((deal) => 
                    <Filter style={{whiteSpace: 'nowrap', fontSize: '3vw'}} key={deal}>{deal}</Filter>
                )}
                {types.map((type) => 
                    <Filter style={{whiteSpace: 'nowrap', fontSize: '3vw'}} key={type}>{type}</Filter>
                )}
            </div>
            <Divider style={{marginBottom: '3%'}}/>
        </div>
    )
}

export function Footer() {
    const router = useRouter()
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '5%', rowGap: '10px'}}>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <div className={styles.footerSection}>
                        <NavButton text='Home' location='/' style={{textAlign: 'left'}}/>
                        <NavButton text='About' location='/about' style={{textAlign: 'left'}}/>
                        <NavButton text='Mission' location='/mission' style={{textAlign: 'left'}}/>
                        <NavButton text='Impact' location='/impact' style={{textAlign: 'left'}}/>
                    </div>
                    <div className={styles.footerSection}>
                        <NavButton text='Shop' location='/shop' style={{textAlign: 'left'}}/>
                        <NavButton text='Kits' location={{pathname: '/shop/[category]', query: {category: 'kits'}}} style={{textAlign: 'left'}}/>
                        <NavButton text='Outsoles' location={{pathname: '/shop/[category]', query: {category: 'outsoles'}}} style={{textAlign: 'left'}}/>
                    </div>
                    <div className={styles.footerSection}>
                        <NavButton text='Contact' location='/' style={{textAlign: 'left'}}/>
                        <NavButton text='@usole.official' location='/about' style={{textAlign: 'left'}}/>
                        <NavButton text='contact.usole@gmail.com' location='/mission' style={{textAlign: 'left'}}/>
                    </div>
                </div>
                <button className={styles.footerLogo} onClick={() => router.push(('/'))}>
                    <Image
                        priority
                        width={100}
                        height={50}
                        layout='intrinsic'
                        src='/icons/logo.png'
                        alt='logo'
                        style={{width: '100%', objectFit: 'contain'}}
                    />
                </button>
            </div>
            <p className={styles.copyright}>© 2024 Copyright uSole. All rights reserved.</p>
        </div>
    )
}

export default Navbar