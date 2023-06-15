import cls from 'classnames'
import styles from './banner.module.css'

export default function Banner({title, subTitle, imgUrl}) {
     const handleOnClick = () => {
        return console.log('clink')
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={cls("glass", styles.glassWrapper)}>
                        <div className={styles.brandNameWrapper}>
                            <h3 className={styles.article}>The</h3>
                            <h3 className={styles.brandName}> Ugly <br/> Cat</h3>
                        </div>
                        <h1 className={styles.title}>
                            {title}
                        </h1>
                        <p className={styles.subTitle}>
                            {subTitle}
                        </p>
                    </div>
                    <div className={styles.playBtnWrapper}>
                        <button 
                        className={styles.button}
                        onClick={handleOnClick}>
                            <span>
                                Play
                            </span>
                            <i></i>
                        </button>
                    </div>
                </div>
            </div>
            <div 
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            />
        </div>
    )
}