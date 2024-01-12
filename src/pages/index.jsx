import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import { Section, Slider, Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()
    return (
        <Layout title=''>
            <div className={styles.cover}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/covers/cover002.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)'}}
                />
                <p className={styles.caption}>Our mission</p>
                <p className={styles.title}>Protect the earth</p>
                <p className={styles.subtitle}>one eco-friendly shoe sole at a time.</p>
            </div>
            <Section orient='center'>
                <Header style={{marginTop: '75px'}}>The product</Header>
                <div className={styles.block}>
                    <div className={styles.section}>
                        <Heading>Shoe outsole</Heading>
                        <Description>
                            Purchase a variety of shoe soles designed for specific brand models, all 3D printed using flexible, biodegradable material, and guaranteed to improve performance.
                        </Description>
                    </div>
                    <div className={styles.section}>
                        <Heading>Assembly kit</Heading>
                        <Description>
                            Select affordable kits to assemble the soles to your worn-out shoes. Featuring a sanding tool, adhesive, and complementary outsole, it has all you need for success.
                        </Description>
                    </div>
                </div>
            </Section>
            <Section orient='right' img='/product/sole005.gif' background='#000000'>
                <Header style={{marginTop: '50px'}}>The outsole</Header>
                <Description>
                    uSole revolutionizes basketball footwear with replaceable outsoles crafted from bio-TPU, an eco-friendly and durable material. uSole employs a 95% ESTANE® ECO 12T90E 5% colophony split to enhance durability and improve performance.
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000', marginBottom: '75px'}} onClick={() => router.push('/impact')}>
                    Learn more
                </Button>
            </Section>
            <Section orient='left' img='/product/kit001.jpg'>
                <Header style={{marginTop: '50px'}}>The DIY kit</Header>
                <Description>
                    The uSole DIY kit allows anyone to revive their worn-out shoes for more use. The sanding apparatus is specifically designed to remove any unevenness in the remaining shoe sole, ensuring a seamless and secure bond using our specially formulated waterborne urethane adhesive.
                </Description>
                <Button style={{marginBottom: '75px'}} onClick={() => router.push('/product')}>
                    Learn more
                </Button>
            </Section>
            <Section orient='right' img='/product/sole006.gif' background='#000000'>
                <Header>Protect<br/>our earth.</Header>
                <Description>
                    All outsoles are 3D printed with bio-TPU, a biodegradable and sustainable filament that ensures minimal carbon footprint and an eco-friendly manufacturing process. 
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000', marginBottom: '75px'}} onClick={() => router.push('/impact')}>
                    Learn more
                </Button>
            </Section>
            <Section orient='center'>
                <Header style={{marginTop: '50px'}}>Power in every step.</Header>
                <Description>
                    Reach greater heights this New Year's with a curated collection of new,<br/>customizeable shoe soles for all of your favorite models.
                </Description>
                <Button style={{marginBottom: '75px'}} onClick={() => router.push('/shop')}>
                    Shop Now
                </Button>
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