import styles from '../styles/Utilities.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useWindowSize from './useWindowSize'

function CoverImage({ src }) {
    return (
        <div className={styles.coverImage}>
            <Image
                priority
                width={250}
                height={500}
                layout='intrinsic'
                src={src}
                alt='image'
                style={{width: '100%', objectFit: 'cover'}}
            />
        </div>
    )
}

export function SectionImage({ src, mobileWidth, webWidth }) {
    const {width} = useWindowSize()
    var imageWidth = webWidth
    if (width < 700) {
        imageWidth = mobileWidth
    }
    return (
        <Image
            width={250}
            height={500}
            layout='intrinsic'
            src={src}
            alt='image'
            style={{width: imageWidth, objectFit: 'cover'}}
        />
    )
}

export function Cover({ images }) {
    return (
        <div className={styles.cover}>
            <CoverImage src={images[0]}/>
            <CoverImage src={images[1]}/>
            <CoverImage src={images[2]}/>
        </div>
    )
}

export function Annoucement({ location, children }) {
    const router = useRouter()
    return (
        <div className={styles.annoucement}>
            <p onClick={() => router.push(location)}>{children}</p>
        </div>
    )
}

function SliderImage({ src }) {
    return (
        <div className={styles.sliderImage}>
            <Image
                priority
                width={250}
                height={500}
                layout='intrinsic'
                src={src}
                alt='image'
                style={{width: '100%', objectFit: 'cover'}}
            />
        </div>
    )
}

export function slide(id, scrollFactor) {
    const slider = document.getElementById(id)
    slider.scrollBy({
        top: 0,
        left: scrollFactor,
        behavior: 'smooth'
    })
}

export function Arrow({ side, onClick }) {
    var style = styles.arrowLeft
    if (side == 'right') {
        style = styles.arrowRight
    } else if (side =='down') {
        style = styles.arrowDown
    }
    return (
        <div className={style} onClick={onClick}></div>
    )
}

export function Slider({ id, scrollFactor, style }) {
    const {width} = useWindowSize()
    return (
        <div className={styles.slider} id={id} style={style}>
            {(width > 700) && <Arrow side='left' onClick={() => slide(id, -scrollFactor)}/>}
            <SliderImage src='/product/shoe001.jpg'/>
            <SliderImage src='/product/shoe002.jpg'/>
            <SliderImage src='/product/shoe003.jpg'/>
            <SliderImage src='/product/shoe004.jpg'/>
            {(width > 700) && <Arrow side='right' onClick={() => slide(id, scrollFactor)}/>}
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

export function Product({ product }) {
    return (
        <div style={{width: '100%', textAlign:'left'}}>
            <Image
                priority
                width={250}
                height={500}
                layout='intrinsic'
                src={product.IMAGE}
                alt='image'
                className={styles.productImage}
            />
            <Colors colors={product.COLORS}/>
            <p className={styles.name}>{product.NAME}</p>
            <p className={styles.price}>${product.PRICE}</p>
        </div>
    )
}

export function SeeMore({ onClick }) {
    return (
        <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <p className={styles.seeMore}>See more</p>
            <Arrow side='down'/>
        </div>
    )
}

export function Description({ children, style }) {
    return (
        <p className={styles.description} style={style}>{children}</p>
    )
}

export function Header({ children, style }) {
    return (
        <div style={{display: 'flex', width: '100%', marginBottom: '7%', justifyContent: 'center'}}>
            <p className={styles.header} style={style}>{children}</p>
        </div>
    )
}

export function Heading({ children, style }) {
    return (
        <div className={styles.heading} style={style}>
            {children}
        </div>
    )
}

export function Button({ children, onClick, style }) {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <button className={styles.button} style={style} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}