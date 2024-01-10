import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import { Section, Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Profile({ name, position, img, children }) {
    return (
        <div className={styles.section} style={{minWidth: '30%', width: '30%'}}>
            <div className={styles.profile}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src={img}
                    alt={name}
                    style={{width: '100%', objectFit: 'cover'}}
                />
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
            <p className={styles.description}>{children}</p>
        </div>
    )
}

function AboutUs() {
    const router = useRouter()
    return (
        <Layout title='About Us'>
            <div className={styles.cover}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/cover11.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)'}}
                />
                <p className={styles.caption}>Our mission</p>
                <p className={styles.title}>Protect the earth,</p>
                <p className={styles.subtitle}>one eco-friendly shoe sole at a time.</p>
            </div>
            <Section orient='center'>
                <Header style={{marginTop: '50px'}}>Our purpose</Header>
                <div className={styles.block}>
                    <div className={styles.section}>
                        <Heading>The environment</Heading>
                        <Description>
                            Produce environmentally friendly replaceable shoe soles with innovative, eco-friendly, and biodegradable materials, fostering a sustainable future for our planet.
                        </Description>
                    </div>
                    <div className={styles.section}>
                        <Heading>The community</Heading>
                        <Description>
                            Provide affordable and durable replaceable shoe soles and assembly kits to low-income athletes, ensuring their access to quality footwear that enhances performance.
                        </Description>
                    </div>
                </div>
            </Section>
            <Section orient='right' img='/product1.png' background='#000000'>
                <Header style={{marginTop: '75px'}}>The product</Header>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
                <Button style={{backgroundColor: '#FFFFFF', color: '#000000', marginBottom: '75px'}} onClick={() => router.push('/sustainability')}>
                    Learn more
                </Button>
            </Section>
            <Section orient='center'>
                <Header style={{marginTop: '75px'}}>Meet the team</Header>
                <div className={styles.block} style={{columnGap: '7.5%'}}>
                    <Profile name='Jacob Lee' position='untitled' img='/person.jpg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                    </Profile>
                    <Profile name='Yash Pandit' position='untitled' img='/person.jpg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                    </Profile>
                    <Profile name='Shreyas Kasam' position='untitled' img='/person.jpg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                    </Profile>
                </div>
                <div className={styles.block} style={{columnGap: '7.5%'}}>
                    <Profile name='Lorraine Niaba' position='Website Developer' img='/person.jpg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                    </Profile>
                    <Profile name='Flavia Martinez' position='Product Engineer' img='/person.jpg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                    </Profile>
                </div>
            </Section>
        </Layout>
    )
}

export default AboutUs
