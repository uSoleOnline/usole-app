import Layout from '../components/Layout'
import styles from '../styles/Shop.module.css'
import Image from 'next/image'
import { Annoucement, Section, Header, SeeMore, Arrow, slide } from '../components/Utilities'

function Slideshow({ images }) {
    return (
        <div className={styles.slideshow} id='slideshow'>
            <Arrow side='left' onClick={() => slide('slideshow', -1100)}/>
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
            <Arrow side='right' onClick={() => slide('slideshow', 1100)}/>
        </div>
    )
}

function Colors({ colors }) {
    return (
        <div style={{display: 'inline-flex', marginTop: '5px'}}>
            {colors.map((color) => 
                <div className={styles.color} style={{backgroundColor: color}}></div>
            )}
        </div>
    )
}

function Product({ product }) {
    return (
        <div style={{width: '100%'}}>
            <div className={styles.productImage}>
                <Image
                    priority
                    width={250}
                    height={500}
                    layout='intrinsic'
                    src={product.IMAGE}
                    alt='image'
                    style={{width: '100%', objectFit: 'cover'}}
                />
            </div>
            <Colors colors={product.COLORS}/>
            <p className={styles.name}>{product.NAME}</p>
            <p className={styles.price}>${product.PRICE}</p>
        </div>
    )
}

function Category({ title, id }) {
    const product = {
        NAME: 'Nike Air Jordan Soles',
        IMAGE: '/shoe1.jpg',
        PRICE: 9.99,
        COLORS: ['orange', 'blue', 'coral'],
        SIZES: [8, 9, 10, 12]
    }
    return (
        <div>
            <p className={styles.category}>{title}</p>
            <div className={styles.products} id={id}>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
            </div>
            <SeeMore/>
        </div>
    )
}

function Shop() {
    return (
        <Layout title='Shop'>
            <Annoucement location='/shop'>
                Start the New Year with 60% on all kits in the holiday bundles!
            </Annoucement>
            <Section orient='center'>
                <Slideshow images={['/cover4.jpg', '/cover2.jpg', '/cover1.jpg']}/>
            </Section>
            <Section orient='center'>
                <Header style={{margin: '0px'}}>
                    Put your best foot forward.
                </Header>
            </Section>
            <Section orient='center'>
                <Category title="Holiday Bundles" id='holidayBundles'/>
            </Section>
            <Section orient='center'>
                <Category title="New In Men's" id='newInMen'/>
            </Section>
            <Section orient='center'>
                <Category title="New In Women's" id='newInWomen'/>
            </Section>
            <Section orient='center'>
                <Category title="New In Teen's" id='newInTeen'/>
            </Section>
        </Layout>
    )
}

export default Shop