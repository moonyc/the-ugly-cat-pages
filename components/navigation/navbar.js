
import Image from 'next/image'
import styles from './navbar.module.css'

export default function NavBar() {
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink}>
                    <div className={styles.heading}>
                        <Image
                            src="/the-ugly-cat.svg"
                            width={50}
                            height={50}
                            alt="thte ugly cat logo"
                        />
                        <h3 className={styles.TheUglyCat}> 
                            The Ugly Cat
                        </h3>
                    </div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem2}>My Link</li>
                </ul>
            </div>
        </div>
    )
}