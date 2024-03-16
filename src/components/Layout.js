import Head from 'next/head'
import Navbar from '../components/Navigation'
import { Menu, Sidebar, Footer } from '../components/Navigation'
import styles from '../styles/Layout.module.css'

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
    return (
        <div>
            <Head>
                <title>Shop {category} | uSole</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className={styles.shop}>
                <Sidebar category={category} deals={deals}/>
                <div style={{padding: '5%'}}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout