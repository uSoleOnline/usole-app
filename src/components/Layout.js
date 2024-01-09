import Head from 'next/head'
import NavBar from '../components/Navigation'
import { Footer } from '../components/Navigation'
import styles from '../styles/Layout.module.css'

function Layout({ title, children}) {
    return (
        <div>
            <Head>
                <title>{title ? title + " | " : ""} uSole</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className={styles.main}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout