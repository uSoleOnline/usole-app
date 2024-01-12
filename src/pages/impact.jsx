import Layout from '../components/Layout'
import styles from '../styles/Impact.module.css'
import Image from 'next/image'
import { Section, Header, Description, Button } from '../components/Utilities'

function Impact() {
    return (
        <Layout>
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
                <p className={styles.caption}>Our impact</p>
                <p className={styles.title}>Evoking change</p>
                <p className={styles.subtitle}>in the earth and low-income communities.</p>
            </div>
            <Section orient='center'>
                <Header style={{marginTop: '-25px', marginBottom: '-100px'}}>Preserving our earth</Header>
            </Section>
            <Section orient='left' img='/covers/cover007.jpg'>
                <Description>
                    Every year, 22 billion pairs of shoes are discarded, 1.1 billion of which are basketball shoes. One pair of shoes generates around 30 pounds of carbon dioxide emissions throughout the manufacturing process, with 13% attributable to the rubber outsoles. This contributes to over 105,000,000 metric tons of greenhouse gasses globally.
                </Description>
            </Section>
            <Section orient='right' img='/product/kit001.jpg'>
                <Description>
                    Our attachable shoe outsole and assembly kit extends the life of existing shoes, effectively diverting the amount of shoe waste going into landfills by up to 75% and reducing harmful environmental impact. This means we could decrease the number of basketball shoes going to waste by 825 million.
                </Description>
            </Section>
            <Section background='#000000'>
                <Header style={{marginTop: '100px', marginBottom: '-50px'}}>Aiding communities</Header>
            </Section>
            <Section orient='right' img='/covers/cover008.jpg' background='#000000'>
                <Description>
                    Our product targets low-income consumers, as our product aims to immensely decrease the cost of pursuing sports. Research demonstrates that middle-class families experience greater pressure compared to upper-class families when it comes to their children playing sports, often forcing them to discontinue their passion.
                </Description>
            </Section>
            <Section orient='left' img='/covers/cover009.jpg' background='#000000'>
                <Description>
                    Replacing soles instead of entire shoes translates to potential annual savings of around $335 for each customer, based on average basketball shoe costs and uSole's estimated $32.88 kit price. By saving customers money, we make basketball shoes more accessible to a wider demographic, especially those with lower incomes.
                </Description>
            </Section>
            <Section>
                <Header style={{marginTop: '100px'}}>Your best performance.</Header>
                <Description style={{marginBottom: '-25px'}}>
                    Beyond sustainability and cost-effectiveness, our outsoles boast a 15% weight reduction compared to traditional soles, enhancing agility and athletic movement. 
                </Description>
            </Section>
            <Section orient='left' img='/product/sole001.png'>
                <Description>
                    Additionally, the meticulously designed 2.0mm treads and herringbone tread pattern maximize traction and durability for superior court control and confidence. The varying patterns in the forefoot, midfoot, and heel sections target the most important characteristics for each portion. 
                </Description>
            </Section>
            <Section orient='right' img='/product/sole005.gif'>
                <Description style={{marginBottom: '50px'}}>
                    The tread design in the forefoot substantially amplifies the coefficient of friction, generating enhanced traction. The forefoot also includes a flex groove to promote natural foot movement. Lastly, the midfoot portion includes stabilizing bridges to ensure lateral stability and arch support.
                </Description>
            </Section>
        </Layout>
    )
}

export default Impact