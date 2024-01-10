import styles from '../../styles/Shop.module.css'
import { ShopSoles } from '../../components/Layout'
import { Product } from '../../components/Utilities'

export async function getServerSideProps(context) {
    var category = context.params.category
    category = category.substring(0, 1).toUpperCase() + category.substring(1)
    const data = {
        CATEGORY: category,
        DEALS: ['75% off Clearance', '20% off Sports Soles'],
        PRODUCTS: {
            uniqueID1: {
                NAME: 'Nike Air Jordan Soles',
                IMAGE: '/shoe1.jpg',
                PRICE: 9.99,
                COLORS: ['orange', 'blue', 'coral'],
                SIZES: [8, 9, 10, 12]
            }, uniqueID2: {
                NAME: 'Nike Air Jordan Soles',
                IMAGE: '/shoe1.jpg',
                PRICE: 9.99,
                COLORS: ['orange', 'blue', 'coral'],
                SIZES: [8, 9, 10, 12]
            }
        }
    }
    return {
        props: data
    }
}

function Category(props) {
    const product = {
        NAME: 'Nike Air Jordan Soles',
        IMAGE: '/shoe1.jpg',
        PRICE: 9.99,
        COLORS: ['orange', 'blue', 'coral'],
        SIZES: [8, 9, 10, 12]
    }
    return (
        <ShopSoles category={props.CATEGORY} deals={props.DEALS}>
            <p className={styles.category}>Shopping</p>
            <div className={styles.products}>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
            </div>
        </ShopSoles>
    )
}

export default Category