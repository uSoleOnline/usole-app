import styles from '@/styles/General.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import { SectionImage, Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'
import useWindowSize from '../components/useWindowSize'

function Mission() {
    const router = useRouter()
    const {width} = useWindowSize()

    return (
        <Layout title='Mission'>
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/covers/cover002.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)'}}
                />
            </div>
            <div className={styles.cover}>
                <p className={styles.caption}>Our mission</p>
                <p className={styles.title}>Protect <br/>the earth</p>
                <p className={styles.subtitle}>one <span style={{color: '#00C455'}}>eco-friendly</span> shoe <br/>sole at a time.</p>
            </div>
            <div className={styles.section}>
                <Header>The product</Header>
                <div className={styles.block}>
                    <div className={styles.blockSection}>
                        <Heading style={{width: '80%'}}>Shoe outsole</Heading>
                        <Description>
                            Purchase a variety of shoe soles designed for specific brand models, all 3D printed using flexible, <span style={{color: '#00C455', textDecoration: 'underline'}}>biodegradable</span> material, and guaranteed to improve performance.
                        </Description>
                    </div>
                    <div className={styles.blockSection}>
                        <Heading style={{width: '80%'}}>Assembly kit</Heading>
                        <Description>
                            Select <span style={{color: '#00C455', textDecoration: 'underline'}}>affordable</span> kits to assemble the soles to your worn-out shoes. Featuring a sanding tool, adhesive, and complementary outsole, it has all you need for success.
                        </Description>
                    </div>
                </div>
            </div>
            <div className={styles.singleImageSection} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <SectionImage src='/product/sole005.gif' webWidth='90%' mobileWidth='100%'/>
                <div style={{width: '100%'}}>
                    <Header>The outsole</Header>
                    <Description>
                        uSole revolutionizes basketball footwear with replaceable outsoles crafted from bio-TPU, an eco-friendly and durable material. uSole employs a 95% ESTANE® ECO 12T90E 5% colophony split to enhance durability and improve performance.
                    </Description>
                    <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/impact')}>
                        Learn more
                    </Button>
                </div>
            </div>
            <div className={styles.singleImageSection}>
                <div style={{width: '100%'}}>
                    <Header>The DIY kit</Header>
                    <Description>
                        The uSole DIY kit allows anyone to revive their worn-out shoes for more use. The sanding apparatus is specifically designed to remove any unevenness in the remaining shoe sole, ensuring a seamless and secure bond using our specially formulated waterborne urethane adhesive.
                    </Description>
                    <Button onClick={() => router.push('/product')}>
                        Learn more
                    </Button>
                </div>
                <SectionImage src='/product/kit002.jpg' webWidth='90%' mobileWidth='100%'/>
            </div>
            <div className={styles.section} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <Header>How to use</Header>
                <Description>
                    Read detailed instructions how to use the uSole Kit in five easy steps.
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/impact')}>
                    Learn more
                </Button>
            </div>
            <div className={styles.singleImageSection}>
                <div style={{width: '100%'}}>
                    <Header>Protect<br/>our earth.</Header>
                    <Description>
                        All outsoles are 3D printed with bio-TPU, a biodegradable and sustainable filament that ensures minimal carbon footprint and an eco-friendly manufacturing process. 
                    </Description>
                    <Button onClick={() => router.push('/impact')}>
                        Learn more
                    </Button>
                </div>
                <SectionImage src='/product/kit003.jpg' webWidth='90%' mobileWidth='100%'/>
            </div>
            <div className={styles.section} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <Header>Power {(width < 700) && <br/>} in every step.</Header>
                <Description>
                    Reach greater heights this New Year's with a curated collection of new,<br/>customizeable shoe soles for all of your favorite models.
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/shop')}>
                    Shop Now
                </Button>
            </div>
        </Layout>
    )
}

export default Mission