
import styles from './banner.module.css'

export default function Banner() {
     const handleOnClick = () => {
        return console.log('clink')
    }
    return (
        <div className={styles.container}>
            <div 
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url('bannerImg.jpg')`
                }}
            />
        </div>
    )
}