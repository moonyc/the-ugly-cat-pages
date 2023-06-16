import styles from './loading.module.css'
import Image from 'next/image'

export default function Loading() {
    return (
        <main className={styles.mainLoading}>
            <div className={styles.logoWrapper}>
                    <Image
                        src="/the-ugly-cat.svg"
                        width={50}
                        height={50}
                        alt="the ugly cat logo"
                    />
                    <p className={styles.theUglyCat}>
                                The Ugly Cat
                    </p>
             </div>
            <div className={styles.container}>
                <div className={styles.Loading}></div>
            </div>
        </main>
        
    )
}