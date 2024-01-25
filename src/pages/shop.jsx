import Layout from '../components/Layout'
import styles from '../styles/Shop.module.css'
import Image from 'next/image'
import { Annoucement, Section, Header, Product, SeeMore, Arrow, slide } from '../components/Utilities'

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

function Category({ title, id, image }) {
    const product = {
        NAME: 'Nike Air Jordan Soles',
        IMAGE: image,
        PRICE: 9.99,
        COLORS: ['orange', 'blue', 'coral'],
        SIZES: [8, 9, 10, 12]
    }
    return (
        <div>
            <p className={styles.category} style={{marginTop: '-25px'}}>{title}</p>
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
                <Slideshow images={['/product/shoe001.jpg', '/product/shoe002.jpg', '/product/shoe003.jpg']}/>
            </Section>
            <Section orient='center'>
                <Header style={{margin: '0px'}}>
                    Put your best foot forward.
                </Header>
            </Section>
            <Section orient='center'>
                <Category title="Holiday Bundles" id='holidayBundles' image='/product/shoe001.jpg'/>
            </Section>
            <Section orient='center'>
                <Category title="New In Men's" id='newInMen' image='/product/shoe002.jpg'/>
            </Section>
            <Section orient='center'>
                <Category title="New In Women's" id='newInWomen'  image='/product/shoe003.jpg'/>
            </Section>
            <Section orient='center'>
                <Category title="New In Teen's" id='newInTeen'  image='/product/shoe004.jpg'/>
            </Section>
        </Layout>
    )
}

export default Shop