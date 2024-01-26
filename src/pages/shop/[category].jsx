import styles from '../../styles/Shop.module.css'
import { ShopSoles } from '../../components/Layout'
import { Product } from '../../components/Utilities'

export async function getServerSideProps(context) {
    var category = context.params.category
    category = category.substring(0, 1).toUpperCase() + category.substring(1)
    const data = {
        CATEGORY: category,
        DEALS: ['75% off Clearance', '20% off Sports Soles'],
        PRODUCTS: [
            {
                NAME: 'Under Armour Curry 11 Soles',
                IMAGE: '/product/shoe001.jpg',
                PRICE: 9.99,
                COLORS: ['orange', 'blue', 'coral'],
                SIZES: [8, 9, 10, 12]
            }, {
                NAME: 'Nike Sabrina 1 Soles',
                IMAGE: '/product/shoe002.jpg',
                PRICE: 9.99,
                COLORS: ['green', 'lightgrey', 'purple', 'black'],
                SIZES: [8, 9, 10, 12]
            }, {
                NAME: 'Adidas Trae Young 3 Soles',
                IMAGE: '/product/shoe003.jpg',
                PRICE: 9.99,
                COLORS: ['cerulean', 'darkblue'],
                SIZES: [8, 9, 10, 12]
            }, {
                NAME: 'Adidas Harden Volume 7 Soles',
                IMAGE: '/product/shoe004.jpg',
                PRICE: 9.99,
                COLORS: ['lightblue', 'cyan', 'teal'],
                SIZES: [8, 9, 10, 12]
            }
        ],
        KITS: [
            {
                NAME: 'Full Starter Kit',
                IMAGE: '/product/kit002.jpg',
                PRICE: 9.99,
                COLORS: ['green'],
                SIZES: [8, 9, 10, 12]
            }, {
                NAME: 'Starter Kit Plus',
                IMAGE: '/product/kit003.jpg',
                PRICE: 9.99,
                COLORS: ['green', 'indigo'],
                SIZES: [8, 9, 10, 12]
            }, {
                NAME: 'Full Starter Kit',
                IMAGE: '/product/kit002.jpg',
                PRICE: 9.99,
                COLORS: ['green'],
                SIZES: [8, 9, 10, 12]
            }, {
                NAME: 'Starter Kit Plus',
                IMAGE: '/product/kit003.jpg',
                PRICE: 9.99,
                COLORS: ['green', 'indigo'],
                SIZES: [8, 9, 10, 12]
            }
        ]
    }
    return {
        props: data
    }
}

function Category(props) {
    var images = props.PRODUCTS
    console.log(props.PRODUCTS)
    if (props.CATEGORY == 'Kits') {
        images = props.KITS
    }
    return (
        <ShopSoles category={props.CATEGORY} deals={props.DEALS}>
            <p className={styles.category}>Shopping</p>
            <div className={styles.products} style={{marginBottom: '15%'}}>
                <Product product={images[0]}/>
                <Product product={images[1]}/>
                <Product product={images[2]}/>
                <Product product={images[3]}/>
                <Product product={images[0]}/>
                <Product product={images[1]}/>
                <Product product={images[2]}/>
                <Product product={images[3]}/>
            </div>
        </ShopSoles>
    )
}

export default Category