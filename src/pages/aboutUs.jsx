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
    const newstyle = {
        paddingTop: '0px',
        marginTop: '-75px'
    }
    return (
        <Layout title='About Us'>
            <div className={styles.cover}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/covers/cover006.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)', position: 'absolute'}}
                />
                <p className={styles.caption}>Our story</p>
                <p className={styles.title}>Who<br/>we are</p>
                <p className={styles.subtitle}>get to know our team personally.</p>
            </div>
            <Section orient='center'>
                <Header style={{marginTop: '-50px'}}>Our foundation</Header>
                <Description>
                    Our team, initially formed by Jacob Lee and Yash Pandit, arose from a shared concern for the environment and the duo's love for basketball. Their shared hobbie forced them to address the glaring problem of degrading outsoles. Realizing the environmental and financial implications of this problem, Jacob Lee took the role of designing the outsole and formulating the adhesive for uSole.
                </Description>
            </Section>
            <Section orient='center' background='#000000'>
                <Header style={{marginTop: '50px'}}>Our purpose</Header>
                <div className={styles.block}>
                    <div className={styles.section}>
                        <Heading style={{background: '#FFFFFF', color: '#000000'}}>The environment</Heading>
                        <Description>
                            Produce environmentally friendly replaceable shoe soles with innovative, eco-friendly, and biodegradable materials, fostering a sustainable future for our planet.
                        </Description>
                    </div>
                    <div className={styles.section}>
                        <Heading style={{background: '#FFFFFF', color: '#000000'}}>The community</Heading>
                        <Description>
                            Provide affordable and durable replaceable shoe soles and assembly kits to low-income athletes, ensuring their access to quality footwear that enhances performance.
                        </Description>
                    </div>
                </div>
            </Section>
            <Section orient='center'>
                <Header style={{marginTop: '75px'}}>Meet the team</Header>
                <div className={styles.block} style={{columnGap: '7.5%'}}>
                    <Profile name='Jacob Lee' position='Company Founder' img='/members/jacoblee.png'>
                        I am an avid basketball player and part of Poolesville High School's varsity team. My hobbies include playing the cello, listening to music, and hanging out with friends.
                    </Profile>
                    <Profile name='Yash Pandit' position='Company Founder' img='/members/yashpandit.png'>
                        I am passionate about the environment and using engineering and technology to combat pressing issues. I aspire to pursue an education in engineering and a career in business management.
                    </Profile>
                    <Profile name='Shreyas Kasam' position='Finance Specialist' img='/members/shreyaskasam.png'>
                        I am interested in business and finance, and took on this project after seeing that it could help others. For fun, I enjoy playing football with friends, going on runs, and practicing boxing.
                    </Profile>
                </div>
                <div className={styles.block} style={{columnGap: '7.5%'}}>
                    <Profile name='Lorraine Niaba' position='Website Developer' img='/members/lorraineniaba.png'>
                        I am a passionate web designer and programmer and enjoy using my skills to benefit others. My hobbies include reading, listening to philosophical debates, and developing websites.
                    </Profile>
                    <Profile name='Flavia Martinez' position='Product Engineer' img='/members/flaviamartinez.png'>
                        My passion lies in engineering, 3D printing, and programming. Beyond the classroom, I explore diverse interests, including spending time with friends, community service, and sports. 
                    </Profile>
                </div>
            </Section>
            <Section orient='center' background='#000000'>
                <Header style={{marginTop: '50px', marginBottom: '-100px'}}>Our roles</Header>
            </Section>
            <Section orient='left' img='/members/candid002.jpg' background='#000000'>
                <Description>
                    Jacob's progressive thinking, thoroughness, and multimedia design skills combined with Yash's experience in materials science and entrepreneurship competitions set the foundation. They added like-minded individuals to the team who shared the motivation and vision to create an innovative, environmentally-conscious product that we are proud to present. 
                </Description>
            </Section>
            <Section orient='right' img='/members/candid004.jpg' background='#000000' newstyle={newstyle}>
                <Description>
                    Shreyas Kasam, with his passion for finance, ensures our business is financially successful and sustainable. Lorraine Niaba, skilled in website development and research, ensures our online presence is top-notch. Flavia Martinez, adept in CAD Design, 3D printing, and physical prototyping, infuses innovative engineering design into our project.
                </Description>
            </Section>
            <Section orient='center'>
                <Header style={{marginTop: '50px', marginBottom: '0px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                    Together we present, uSole.
                </Header>
                <Description>
                    Our diverse team of aspiring entrepreneurs from different backgrounds blend creative thinking, business decision-making, and design innovation, to produce an exemplary product.
                </Description>
                <Button style={{padding: '20px', marginBottom: '50px'}}  onClick={() => router.push('/')}>View our product</Button>
            </Section>
        </Layout>
    )
}

export default AboutUs
