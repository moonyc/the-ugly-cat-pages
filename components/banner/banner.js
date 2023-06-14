import cls from 'classnames'
import styles from './banner.module.css'

export default function Banner() {
     const handleOnClick = () => {
        return console.log('clink')
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={cls("glass", styles.glassWrapper)}>
                        <div className={styles.brandNameWrapper}>
                            <p className={styles.article}>The</p>
                            <p className={styles.brandName}> Ugly <br/> Cat</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div 
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url('bannerImg.jpg')`
                }}
            />
        </div>
    )
}