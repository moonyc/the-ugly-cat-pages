import Image from 'next/image'
import styles from './Login.module.css'
import cls from 'classnames'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { magic } from '@/lib/magic'


export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [userMsg, setUserMsg] = useState("")
    
    const handleOnChangeEmail = (e) => {
        setUserMsg("")
        const email = e.target.value
        setEmail(email)
    }
    const handleLoginWithEmail = async (e) => {
        e.preventDefault()
        if(email) {
            if(email === "municfara@gmail.com") {
                try {
                    const didToken = await magic.auth.loginWithEmailOTP({ email })
                    console.log(didToken)
                    if(didToken) {
                        router.push('/')
                    }

                } catch (error) {
                    console.error("Something went wrong in the login", error)
                }

            } else {
                setUserMsg("Something went wrong 😿")
            }
        } else {
            setUserMsg("Can you enter a valid email address? 😿")
        }

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
                    className={styles.emailInput}
                    onChange={handleOnChangeEmail}
                    >

                    </input>
                    <p className={styles.userMsg}>{userMsg}</p>
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