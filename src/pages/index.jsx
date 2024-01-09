import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

function CoverImage({ src }) {
    return (
        <div className={styles.image}>
            <Image
                priority
                width={250}
                height={500}
                layout='intrinsic'
                src={src}
                alt='image'
                style={{width: '100%', objectFit: 'cover'}}
            />
        </div>
    )
}

function Cover() {
    return (
        <div className={styles.cover}>
            <CoverImage src='/cover4.jpg'/>
            <CoverImage src='/cover2.jpg'/>
            <CoverImage src='/cover1.jpg'/>
        </div>
    )
}

function Annoucement({ text }) {
    const router = useRouter()
    return (
        <div className={styles.annoucement}>
            <p onClick={() => router.push('/shop')}>{text}</p>
        </div>
    )
}

function Section({ orient='center', img='', background='#FFFFFF', children }) {
    if (orient == 'center' && img == '') {
        return (
            <div className={styles.section}>
                <div style={{display: 'flex', flexDirection: 'column', backgroundColor: background, color: background == '#000000' && '#FFFFFF'}}>
                    {children}
                </div>
            </div>
        )
    } else if (orient == 'left') {
        return (
            <div className={styles.section} style={{display: 'space-between', alignItems: 'center', backgroundColor: background}}>
                <div style={{width: '40%', color: background == '#000000' && '#FFFFFF'}}>
                    {children}
                </div>
                <div className={styles.sectionImage} style={{marginLeft: '10%'}}>
                    <Image
                        priority
                        width={250}
                        height={500}
                        layout='intrinsic'
                        src={img}
                        alt='image'
                        style={{width: '100%', objectFit: 'cover'}}
                    />
                </div>
            </div>
        )
    } else if (orient == 'right') {
        return (
            <div className={styles.section}  style={{display: 'space-between', alignItems: 'center', backgroundColor: background}}>
                <div className={styles.sectionImage} style={{marginRight: '10%'}}>
                    <Image
                        priority
                        width={250}
                        height={500}
                        layout='intrinsic'
                        src={img}
                        alt='image'
                        style={{width: '100%', objectFit: 'cover'}}
                    />
                </div>
                <div style={{width: '40%', color: background == '#000000' && '#FFFFFF'}}>
                    {children}
                </div>
            </div>
        )
    }
}

function SliderImage({ src }) {
    return (
        <div className={styles.sliderImage}>
            <Image
                priority
                width={250}
                height={500}
                layout='intrinsic'
                src={src}
                alt='image'
                style={{width: '100%', objectFit: 'cover'}}
            />
        </div>
    )
}

function Slider() {
    return (
        <div className={styles.slider}>
            <button className={styles.arrow}>
            </button>
            <SliderImage src='/shoe1.jpg'/>
            <SliderImage src='/shoe2.jpg'/>
            <SliderImage src='/shoe3.jpg'/>
            <SliderImage src='/shoe4.jpg'/>
            <SliderImage src='/shoe5.jpg'/>
        </div>
    )
}

function Home() {
    const router = useRouter()
    return (
        <Layout title='Home'>
            <Annoucement text='Happy New Years! Come and see our holiday sales events!'/>
            <Cover/>
            <Section orient='center'>
                <p className={styles.header}>Power in every step.</p>
                <p className={styles.description}>
                    Reach greater heights this New Year's with a curated collection of new,<br/>customizeable shoe soles for all of your favorite models.
                </p>
                <button className={styles.button} style={{marginBottom: '75px'}}
                    onClick={() => router.push('/shop')}>Shop Now
                </button>
            </Section>
            <Section orient='left' img='/cover8.jpg' background='#000000'>
                <p className={styles.header}>Robust design.</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Section>
            <Section orient='right' img='/cover7.jpg'>
                <p className={styles.header}>Protect<br/>our earth.</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Section>
            <Section orient='left' img='/cover5.jpg' background='#000000'>
                <p className={styles.header}>Boost strength.</p>
                <p className={styles.description}>
                    Designs are intended to enhance performace, increase comfort, and decrease your carbon footprint, and looking good doing it.
                </p>
            </Section>
            <Section orient='center'>
                <p className={styles.header} style={{marginTop: '75px'}}>For all your favorite models.</p>
                <p className={styles.description} style={{margin: '0px'}}>
                    Designs are intended to enhance performace, increase comfort, and decrease your carbon footprint, and looking good doing it.
                </p>
                <Slider/>
            </Section>
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