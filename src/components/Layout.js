import Head from 'next/head'
import Navbar from '../components/Navigation'
import { Sidebar } from '../components/Navigation'
import { Footer } from '../components/Navigation'
import styles from '../styles/Layout.module.css'

function Layout({ title, children}) {
    return (
        <div>
            <Head>
                <title>{title ? title + " | " : ""} uSole</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className={styles.main}>
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