import styles from '../styles/Utilities.module.css'
import Image from 'next/image'

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

export function Cover({ images }) {
    return (
        <div className={styles.cover}>
            <CoverImage src={images[0]}/>
            <CoverImage src={images[1]}/>
            <CoverImage src={images[2]}/>
        </div>
    )
}

export function Section({ orient='center', img='', background='#FFFFFF', children }) {
    if (orient == 'center' && img == '') {
        return (
            <div className={styles.section} style={{backgroundColor: background, color: background == '#000000' && '#FFFFFF'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {children}
                </div>
            </div>
        )
    } else if (orient == 'center' && img != '') {
        return (
            <div className={styles.section} style={{backgroundColor: background, color: background == '#000000' && '#FFFFFF'}}>
                <div className={styles.sectionImage} style={{width: '90%'}}>
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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {children}
                </div>
            </div>
        )
    } else if (orient == 'left') {
        return (
            <div className={styles.section} style={{backgroundColor: background, color: background == '#000000' && '#FFFFFF'}}>
                <div style={{width: '45%', textAlign: 'center'}}>
                    {children}
                </div>
                <div className={styles.sectionImage} style={{marginLeft: '10%', marginRight: '0px'}}>
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
            </div>
        )
    } else if (orient == 'right') {
        return (
            <div className={styles.section}  style={{backgroundColor: background, color: background == '#000000' && '#FFFFFF'}}>
                <div className={styles.sectionImage} style={{marginRight: '10%', marginLeft: '0px'}}>
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
                <div style={{width: '45%', textAlign: 'center'}}>
                    {children}
                </div>
            </div>
        )
    }
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

function slide(id, scrollFactor) {
    const slider = document.getElementById(id)
    slider.scrollBy({
        top: 0,
        left: scrollFactor,
        behavior: 'smooth'
    })
}

export function Slider({ id, scrollFactor }) {
    return (
        <div className={styles.slider} id={id}>
            <div className={styles.arrowLeft} onClick={() => slide(id, -scrollFactor)}></div>
            <SliderImage src='/shoe1.jpg'/>
            <SliderImage src='/shoe2.jpg'/>
            <SliderImage src='/shoe3.jpg'/>
            <SliderImage src='/shoe4.jpg'/>
            <SliderImage src='/shoe5.jpg'/>
            <div className={styles.arrowRight} onClick={() => slide(id, scrollFactor)}></div>
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
        <p className={styles.header} style={style}>{children}</p>
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
        <button className={styles.button} style={style} onClick={onClick}>
            {children}
        </button>
    )
}