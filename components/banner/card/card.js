import styles from './card.module.css'
import { motion } from 'framer-motion'
import cls from 'classnames'
import { useState } from 'react'
import Image from 'next/image'

export default function Card (props) {
    const {
        imgUrl = "/cardDefaultImg.jpg",
        size = "medium",
        id
    } = props
    const [imgSrc, setImgSrc] = useState(imgUrl)
    
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem
    }

    const handleOnError = () => {
        console.log('error: card image')
        setImgSrc("/cardDefaultImg.jpg")
    }
    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1}
    return (
        <div className={styles.container}>
            <motion.div className={cls(styles.imgMotionWrapper,classMap[size])} whileHover={{ ...scale}}>
                <Image
                src={imgSrc}
                alt="image"
                fill
                className={styles.cardImg}
                onError={handleOnError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
        </div>
    )
}