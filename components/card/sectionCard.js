import Card from "./card";
import Link from "next/link";
import styles from './section-cards.module.css'


export default function Section(props) {
    const {title, videos = [{imgUrl: '/cardDefaultImg.jpg'}], size} = props
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, idx) => {
                    return (
                        <Link key={idx} href={`/video/${video.id}`}>
                            <Card imgUrl={video.imgUrl} id={idx} key={idx} size={size}/>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}