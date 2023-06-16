import styles from './loading.module.css'

export default function Loading() {
    return (
        <main className={styles.mainLoading}>
            <div className={styles.container}>
                <div className={styles.Loading}></div>
            </div>
        </main>
        
    )
}