import Layout from '../components/Layout'
import styles from '../styles/General.module.css'
import Image from 'next/image'
import { SectionImage, Header, Description, Button } from '../components/Utilities'
import useWindowSize from '../components/useWindowSize'

function Impact() {
    const {width} = useWindowSize()
    return (
        <Layout title='Impact'>
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
            <div className={styles.cover}>
                <p className={styles.caption}>Our impact</p>
                <p className={styles.title}>Evoking change</p>
                <p className={styles.subtitle}>in the <span style={{color: '#00C455'}}>earth</span> and low-income <span style={{color: '#00C455'}}>communities.</span></p>
            </div>
            <div className={styles.section}>
                <Header>Preserving {(width < 700) && <br/>} our earth</Header>
                <div className={styles.imageSection} style={{paddingTop: '0%'}}>
                    <SectionImage src='/covers/cover007.jpg' webWidth='320%' mobileWidth='100%'/>
                    <Description>
                        Every year, 22 billion pairs of shoes are discarded, 1.1 billion of which are basketball shoes. One pair of shoes generates around 30 pounds of carbon dioxide emissions throughout the manufacturing process, with 13% attributable to the rubber outsoles. This contributes to over 105,000,000 metric tons of greenhouse gasses globally.
                    </Description>
                </div>
                <div className={styles.imageSection} style={{paddingBottom: '0%'}}>
                    <SectionImage src='/product/kit001.jpg' webWidth='250%' mobileWidth='100%'/>
                    <Description>
                        Our attachable shoe outsole and assembly kit extends the life of existing shoes, effectively diverting the amount of shoe waste going into landfills by up to 75% and reducing harmful environmental impact. This means we could decrease the number of basketball shoes going to waste by 825 million.
                    </Description>
                </div>
            </div>
            <div className={styles.section} style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
                <Header>Aiding {(width < 700) && <br/>} communities</Header>
                <div className={styles.imageSection} style={{paddingTop: '0%', backgroundColor: '#000000', color: '#FFFFFF'}}>
                    <Description>
                        Our product targets low-income consumers, as our product aims to immensely decrease the cost of pursuing sports. Research demonstrates that middle-class families experience greater pressure compared to upper-class families when it comes to their children playing sports, often forcing them to discontinue their passion.
                    </Description>
                    <SectionImage src='/covers/cover008.jpg' webWidth='320%' mobileWidth='100%'/>
                </div>
                <div className={styles.imageSection} style={{paddingBottom: '0%', backgroundColor: '#000000', color: '#FFFFFF'}}>
                    <Description>
                        Replacing soles instead of entire shoes translates to potential annual savings of around $335 for each customer, based on average basketball shoe costs and uSole's estimated $32.88 kit price. By saving customers money, we make basketball shoes more accessible to a wider demographic, especially those with lower incomes.
                    </Description>
                    <SectionImage src='/covers/cover009.jpg' webWidth='320%' mobileWidth='100%'/>
                </div>
            </div>
            <div className={styles.section}>
                <Header>Your best {(width < 700) && <br/>} performance</Header>
                <Description style={{marginTop: '-5%'}}>
                    Beyond sustainability and cost-effectiveness, our outsoles boast a 15% weight reduction compared to traditional soles, enhancing agility and athletic movement. 
                </Description>
                <div className={styles.imageSection} style={{paddingTop: '4%', paddingBottom: '0%'}}>
                    <SectionImage src='/product/sole001.png' webWidth='300%' mobileWidth='100%'/>
                    <Description>
                        Additionally, the meticulously designed 2.0mm treads and herringbone tread pattern maximize traction and durability for superior court control and confidence. The varying patterns in the forefoot, midfoot, and heel sections target the most important characteristics for each portion. 
                    </Description>
                </div>
                <div className={styles.imageSection} style={{paddingBottom: '0%'}}>
                    <Description>
                        The tread design in the forefoot substantially amplifies the coefficient of friction, generating enhanced traction. The forefoot also includes a flex groove to promote natural foot movement. Lastly, the midfoot portion includes stabilizing bridges to ensure lateral stability and arch support.
                    </Description>
                    <SectionImage src='/product/sole005.gif' webWidth='320%' mobileWidth='100%'/>
                </div>
            </div>
        </Layout>
    )
}

export default Impact