import Card from "./card";
import styles from './section-cards.module.css'


export default function Section(props) {
    const {title, videos = [], size} = props
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, idx) => {
                    return (
                        <Card imgUrl={video.imgUrl} id={idx} key={idx} size={size}/>
                    )
                })}
            </div>
        </div>
    )
}