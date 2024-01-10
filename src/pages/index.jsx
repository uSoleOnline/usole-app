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
            <Cover images={['/cover4.jpg', '/cover2.jpg', '/cover1.jpg']}/>
            <Section orient='center'>
                <Header>Power in every step.</Header>
                <Description>
                    Reach greater heights this New Year's with a curated collection of new,<br/>customizeable shoe soles for all of your favorite models.
                </Description>
                <Button style={{marginBottom: '75px'}} onClick={() => router.push('/shop')}>
                    Shop Now
                </Button>
            </Section>                                                                
            <Section orient='left' img='/cover8.jpg' background='#000000'>
                <Header>Robust design.</Header>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
            </Section>
            <Section orient='right' img='/cover7.jpg'>
                <Header>Protect<br/>our earth.</Header>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
            </Section>
            <Section orient='left' img='/cover5.jpg' background='#000000'>
                <Header>Boost strength.</Header>
                <Description>
                    Designs are intended to enhance performace, increase comfort, and decrease your carbon footprint, and looking good doing it.
                </Description>
            </Section>
            <Section orient='center'>
                <Header style={{marginTop: '75px', marginBottom: '-15px'}}>All your favorite models.</Header>
                <Description style={{marginBottom: '50px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
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