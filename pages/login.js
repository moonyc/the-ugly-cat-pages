import Image from 'next/image'
import styles from './Login.module.css'
import cls from 'classnames'
import { useRouter } from 'next/router'


export default function Login() {
    const router = useRouter()
    const handleLoginWithEmail = (e) => {
        e.preventDefault()
        return router.push('/')

    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <a className={styles.logoLink}>
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
                    </a>        
                </div>
            </header>
            <main className={styles.main}>
                <div className={cls('glass', styles.mainWrapper)}>
                    <h3 className={styles.signinHeader}>
                        Welcome
                    </h3>
                    <input 
                    type='text'
                    placeholder='diderot@thecat.pow'
                    className={styles.emailInput}>

                    </input>
                    <p className={styles.userMsg}>oh no 😿</p>
                    <button 
                    onClick={handleLoginWithEmail}
                    className={styles.loginBtn}>
                        Sign In
                    </button>
                </div>
            </main>
        </div>
    )
    }