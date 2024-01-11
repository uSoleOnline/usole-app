import Layout from '../components/Layout'
import styles from '../styles/Impact.module.css'
import Image from 'next/image'

function Impact() {
    return (
        <Layout>
            <div className={styles.cover}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src='/cover15.jpg'
                    alt='image'
                    style={{width: '100%', objectFit: 'cover', filter: 'brightness(50%)'}}
                />
                <p className={styles.caption}>Our impact</p>
                <p className={styles.title}>Aiding millions</p>
                <p className={styles.subtitle}>in lowering their carbon footprint and pursuing their dreams.</p>
            </div>
        </Layout>
    )
}

export default Impact