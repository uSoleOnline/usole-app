import Layout from '../components/Layout'
import styles from '../styles/General.module.css'
import Image from 'next/image'
import { SectionImage, Header, Heading, Description, Button } from '../components/Utilities'
import { useRouter } from 'next/router'

function Profile({ name, position, img, children }) {
    return (
        <div className={styles.profile}>
            <Image
                priority
                width={250}
                height={500}
                src={img}
                alt={name}
                style={{width: '100%', objectFit: 'cover'}}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
            <p className={styles.description}>{children}</p>
        </div>
    )
}

function About() {
    const router = useRouter()
    return (
        <Layout title='About'>
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/covers/cover006.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)'}}
                />
            </div>
            <div className={styles.cover} style={{textAlign: 'right'}}>
                <p className={styles.caption}>Our story</p>
                <p className={styles.title}>Who<br/>we are</p>
                <p className={styles.subtitle}>get to know our team <span style={{color: '#00C455'}}>personally.</span></p>
            </div>
            <div className={styles.section}>
                <Header>Our foundation</Header>
                <Description>
                    Our team, initially formed by Jacob Lee and Yash Pandit, arose from a shared concern for the environment and the duo's love for basketball. Their shared hobbie forced them to address the glaring problem of degrading outsoles. Realizing the environmental and financial implications of this problem, Jacob Lee took the role of designing the outsole and formulating the adhesive for uSole.
                </Description>
            </div>
            <div className={styles.section} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <Header>Our purpose</Header>
                <div className={styles.block}>
                    <div className={styles.blockSection}>
                        <Heading style={{width: '80%', backgroundColor: '#FFFFFF', color: '#000000'}}>The environment</Heading>
                        <Description>
                            Produce environmentally friendly replaceable shoe soles with innovative, eco-friendly, and biodegradable materials, fostering a sustainable future for our planet.
                        </Description>
                    </div>
                    <div className={styles.blockSection}>
                        <Heading style={{width: '80%', backgroundColor: '#FFFFFF', color: '#000000'}}>The community</Heading>
                        <Description>
                            Provide affordable and durable replaceable shoe soles and assembly kits to low-income athletes, ensuring their access to quality footwear that enhances performance.
                        </Description>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <Header style={{marginBottom: '-50px'}}>Meet the team</Header>
                <div className={styles.block} style={{padding: '0%', justifyContent: 'center'}}>
                    <Profile name='Jacob Lee' position='Primary Researcher' img='/members/jacoblee.png'>
                        I am an avid basketball player and part of Poolesville High School's varsity team. My hobbies include playing the cello, listening to music, and hanging out with friends.
                    </Profile>
                    <Profile name='Yash Pandit' position='Team Manager' img='/members/yashpandit.png'>
                        I am passionate about the environment and using engineering and technology to combat pressing issues. I aspire to pursue an education in engineering and a career in business management.
                    </Profile>
                    <Profile name='Shreyas Kasam' position='Finance Specialist' img='/members/shreyaskasam.png'>
                        I am interested in business and finance, and took on this project after seeing that it could help others. For fun, I enjoy playing football with friends, going on runs, and practicing boxing.
                    </Profile>
                </div>
                <div className={styles.block} style={{padding: '0%', justifyContent: 'center'}}>
                    <Profile name='Lorraine Niaba' position='Website Developer' img='/members/lorraineniaba.png'>
                        I am a passionate web designer and programmer and enjoy using my skills to benefit others. My hobbies include reading, listening to philosophical debates, and developing websites.
                    </Profile>
                    <Profile name='Flavia Martinez' position='Product Engineer' img='/members/flaviamartinez.png'>
                        My passion lies in engineering, 3D printing, and programming. Beyond the classroom, I explore diverse interests, including spending time with friends, community service, and sports. 
                    </Profile>
                </div>
            </div>
            <div className={styles.section} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <Header>Our roles</Header>
                <div className={styles.imageSection} style={{paddingTop: '0%', paddingBottom: '0%', backgroundColor: '#000000', color: '#FFFFFF'}}>
                    <SectionImage src='/members/candid002.jpg' webWidth='280%' mobileWidth='100%'/>
                    <Description>
                        Jacob's progressive thinking, thoroughness, and multimedia design skills combined with Yash's experience in materials science and entrepreneurship competitions set the foundation. They added like-minded individuals to the team who shared the motivation and vision to create an innovative, environmentally-conscious product that we are proud to present. 
                    </Description>
                </div>
                <div className={styles.imageSection} style={{paddingBottom: '0%', backgroundColor: '#000000', color: '#FFFFFF'}}>
                    <Description>
                        Shreyas Kasam, with his passion for finance, ensures our business is financially successful and sustainable. Lorraine Niaba, skilled in website development and research, ensures our online presence is top-notch. Flavia Martinez, adept in CAD Design, 3D printing, and physical prototyping, infuses innovative engineering design into our project.
                    </Description>
                    <SectionImage src='/members/candid004.jpg' webWidth='280%' mobileWidth='100%'/>
                </div>
            </div>
            <div className={styles.section}>
                <Header style={{fontSize: '5.725vw'}}>Together, we present <span style={{color: '#00C455'}}>uSole.</span></Header>
                <Description style={{marginTop: '-5%'}}>
                    Our diverse team of aspiring entrepreneurs from different backgrounds blend creative thinking, business decision-making, and design innovation, to produce an exemplary product.
                </Description>
                <Button style={{marginTop: '2.5%'}} onClick={() => router.push('/mission')}>View our product</Button>
            </div>
        </Layout>
    )
}

export default About
