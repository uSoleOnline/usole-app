import styles from '@/styles/General.module.css'
import Layout from '../components/Layout'
import { SectionImage, Cover, Annoucement, Slider, Header, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'
import useWindowSize from '../components/useWindowSize'

function Home() {
    const router = useRouter()
    const {width} = useWindowSize()
    return (
        <Layout title='Home' style={{backgroundColor: '#FFFFFF'}}>
            <Annoucement location='/shop'>
                Happy New Years! Come and see our holiday sales events!
            </Annoucement>
            <Cover images={['/product/sole003.png', '/product/sole005.gif', '/product/sole004.png']}/>
            <div className={styles.section}>
                <Header>Power {(width < 700) && <br/>} in every step.</Header>
                <Description>
                    Reach greater heights this New Year's with a curated collection of new,<br/>customizeable shoe soles for all of your favorite models.
                </Description>
                <Button onClick={() => router.push('/shop')}>
                    Shop Now
                </Button>
            </div>
            <div className={styles.singleImageSection} style={{paddingTop: '0%', backgroundColor: '#000000', color: '#FFFFFF'}}>
                <SectionImage src='/product/sole006.gif' webWidth='50%' mobileWidth='100%'/>
                <div style={{width: '100%', marginTop: '-20%'}}>
                    <Header>Boosts<br/>strength</Header>
                    <Description>
                        Our designs increase ankle support and traction and provide cushioning for the foot, generally enhancing performance and comfort, all while guaranteeing success at any sport.
                    </Description>
                    <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/mission')}>Learn more</Button>
                </div>
            </div>                                                         
            <div className={styles.singleImageSection}>
                <div style={{width: '100%'}}>
                    <Header>Robust<br/>design</Header>
                    <Description>
                        The outsole design is backed by extensive research on the herringbone tread pattern, which enhances our design's flexibility and durability. With our product, all shoes improve from worn-out to wearable with our kit and outsole.
                    </Description>
                </div>
                <SectionImage src='/product/sole001.png' webWidth='90%' mobileWidth='100%'/>
            </div>
            <div className={styles.singleImageSection} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <SectionImage src='/product/sole005.gif' webWidth='90%' mobileWidth='100%'/>
                <div style={{width: '100%'}}>
                    <Header>Protect<br/>our earth</Header>
                    <Description>
                        All outsoles are 3D printed with bio-TPU, a biodegradable and sustainable filament that ensures minimal carbon footprint and an eco-friendly manufacturing process. 
                    </Description>
                    <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/impact')}>Learn more</Button>
                </div>
            </div>
            <div className={styles.section}>
                <Header style={{marginBottom: '-3%'}}>All your favorite {(width < 700) && <br/>} models.</Header>
                <Description>
                    Unique outsoles crafted for every popular shoe model, across all your favorite brands.
                </Description>
                <Slider id='homePageSlider' scrollFactor={500}/>
            </div>
        </Layout>
    )
}

export default Home