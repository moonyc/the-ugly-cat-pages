import Card from "./card";
import styles from './section-cards.module.css'


export default function Section() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                New York
            </h2>
            <div className={styles.cardWrapper}>
                <Card />
                <Card />
            </div>
        </div>
    )
}