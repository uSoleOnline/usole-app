import Head from 'next/head'
import Navbar from '../components/Navigation'
import { Menu, Sidebar, Footer } from '../components/Navigation'
import styles from '../styles/Layout.module.css'
import useWindowSize from './useWindowSize'

function Layout({ title, style={}, children}) {
    return (
        <div>
            <Head>
                <title>{title ? title + " | " : ""} uSole</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <Navbar/>
            <div className={styles.main} style={style}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export function ShopSoles({ category, deals, children }) {
    const {width} = useWindowSize()
    return (
        <div>
            <Head>
                <title>Shop {category} | uSole</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu style={{right: '0'}}/>
            <Navbar/>
            <div className={styles.shop} style={{backgroundColor: '#FFFFFF', color: '#000000'}}>
                {(width > 700) && <Sidebar category={category} deals={deals}/>}
                <div style={{width: '100%', padding: '3%'}}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout