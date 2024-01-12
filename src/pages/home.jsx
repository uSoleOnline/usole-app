import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import { Cover, Annoucement, Section, Slider, Header, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()
    return (
        <Layout title='Home'>
            <Annoucement location='/shop'>
                Happy New Years! Come and see our holiday sales events!
            </Annoucement>
            <Cover images={['/product/sole003.png', '/product/sole005.gif', '/product/sole004.png']}/>
            <Section orient='center'>
                <Header>Power in every step.</Header>
                <Description>
                    Reach greater heights this New Year's with a curated collection of new,<br/>customizeable shoe soles for all of your favorite models.
                </Description>
                <Button style={{marginBottom: '75px'}} onClick={() => router.push('/shop')}>
                    Shop Now
                </Button>
            </Section>
            <Section orient='left' img='/product/sole006.gif' background='#000000'>
                <Header>Boost strength</Header>
                <Description>
                    Our designs increase ankle support and traction and provide cushioning for the foot, generally enhancing performance and comfort, all while guaranteeing success at any sport.
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/')}>Learn more</Button>
            </Section>                                                         
            <Section orient='right' img='/product/sole001.png'>
                <Header>Robust build</Header>
                <Description>
                    The outsole design is backed by extensive research on the herringbone tread pattern, which enhances our design's flexibility and durability. With our product, all shoes improve from worn-out to wearable with our kit and outsole.
                </Description>
            </Section>
            <Section orient='left' img='/product/sole005.gif' background='#000000'>
                <Header>Protect<br/>our earth</Header>
                <Description>
                    All outsoles are 3D printed with bio-TPU, a biodegradable and sustainable filament that ensures minimal carbon footprint and an eco-friendly manufacturing process. 
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000'}} onClick={() => router.push('/impact')}>
                    Learn more
                </Button>
            </Section>
            <Section orient='center'>
                <Header style={{marginTop: '75px', marginBottom: '-15px'}}>All your favorite models.</Header>
                <Description style={{marginBottom: '50px'}}>
                    Unique outsoles crafted for every popular shoe model, across all your favorite brands.
                </Description>
                <Slider id='homePageSlider' scrollFactor={500} style={{marginBottom: '75px'}}/>
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