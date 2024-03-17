import Layout from '../components/Layout'
import styles from '../styles/Shop.module.css'
import Image from 'next/image'
import { Annoucement, Header, Product, SeeMore, Arrow, slide } from '../components/Utilities'
import useWindowSize from '../components/useWindowSize'
import { useRouter } from 'next/router'

function Slideshow({ images }) {
    const {width} = useWindowSize()
    return (
        <div className={styles.slideshow} id='slideshow'>
            {(width > 700) && <Arrow side='left' onClick={() => slide('slideshow', -1100)}/>}
            {images.map((img) =>
                <div className={styles.slideshowImage}>
                    <Image
                        priority
                        width={250}
                        height={500}
                        layout='intrinsic'
                        src={img}
                        alt='image'
                        style={{width: '100%', objectFit: 'cover'}}
                    />
                </div>
            )}
            {(width > 700) && <Arrow side='right' onClick={() => slide('slideshow', 1100)}/>}
        </div>
    )
}

function Category({ title, id, image }) {
    const router = useRouter()
    const {width} = useWindowSize()
    const product = {
        NAME: 'Nike Air Jordan Soles',
        IMAGE: image,
        PRICE: 9.99,
        COLORS: ['orange', 'blue', 'coral'],
        SIZES: [8, 9, 10, 12]
    }
    return (
        <div>
            <p className={styles.category} onClick={() => router.push('/shop/' + title)}>
                {(width < 700) ? <span style={{borderBottom: '1.75vw solid #00C455'}}>{title}</span>:<span style={{borderBottom: '1vw solid #00C455'}}>{title}</span>}
            </p>
            <div className={styles.products} id={id}>
                <Product product={product}/>
                <Product product={product}/>
                {(width > 700) && <Product product={product}/>}
            </div>
        </div>
    )
}

function Shop() {
    const {width} = useWindowSize()
    return (
        <Layout title='Shop'>
            <Annoucement location='/shop'>
                Start the New Year with 60% on all kits in the holiday bundles!
            </Annoucement>
            <div className={styles.section}>
                <Slideshow images={['/cover4.jpg', '/cover2.jpg', '/cover1.jpg']}/>
                <Header style={{marginBottom: '-5%'}}>Put your {(width > 700) && <br/>} best {(width < 700) && <br/>} foot forward</Header>
                <Category title="New In Men's" id='newInMen' image='/product/shoe002.jpg'/>
                <Category title="New In Women's" id='newInWomen' image='/product/shoe003.jpg'/>
                <Category title="New In Teen's" id='newInTeen' image='/product/shoe004.jpg'/>
            </div>
        </Layout>
    )
}

export default Shop