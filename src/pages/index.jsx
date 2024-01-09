import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

function Cover() {
    return (
        <div className={styles.cover}>
            <Image
                fill
                src='/cover.jpg'
            />
        </div>
    )
}

function Home() {
    return (
        <Layout title='Home'>
            <p>home page</p>
        </Layout>
    )
}

/*
To do list:
- decide website color scheme
- create usole logo
- landing page vs home shopping page
- about us & sustainability page
- category pages w dynamic loading (serversideprops/staticprops)
- login, signup, and customize pages
- create google & github acc
- setup firebase storage, auth, and firestore
- setup github repo and vercel production
*/

export default Home