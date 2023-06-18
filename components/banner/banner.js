import cls from 'classnames'
import styles from './banner.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Banner({title, subTitle, imgUrl, videoId}) {
     const router = useRouter()
     const handleOnPlay = () => {
        router.push(`/video/${videoId}`)
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
                        onClick={handleOnPlay}>
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
                // style={{
                //     backgroundImage: `url(${imgUrl})`
                // }}
            >
            <Image
                className={styles.imageGradient}
                src={imgUrl}
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="banner image"
            />
            </div>
        </div>
    )
}