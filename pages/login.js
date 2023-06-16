import Image from 'next/image'
import styles from './Login.module.css'
import cls from 'classnames'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { magic } from '@/lib/magic'
import Head from 'next/head'
import Link from 'next/link'


export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [userMsg, setUserMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const signInButton = useRef(null)

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            signInButton.current.click()
            console.log('click')
            event.preventDefault();
            // callMyFunction();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);
    
    const handleOnChangeEmail = (e) => {
        setUserMsg("")
        const email = e.target.value
        setEmail(email)
    }

    const handleLoginWithEmail = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if(email) {
            if(email === "municfara@gmail.com") {
                try {
                    const didToken = await magic.auth.loginWithEmailOTP({ email })
                    console.log(didToken)
                    if(didToken) {
                        router.push('/')
                        setIsLoading(false)
                    }

                } catch (error) {
                    console.error("Something went wrong in the login", error)
                    setIsLoading(false)
                }

            } else {
                setUserMsg("Something went wrong 😿")
                setIsLoading(false)
            }
        } else {
            setUserMsg("Can you enter a valid email address? 😿")
            setIsLoading(false)
        }

    }
    return (
        <div className={styles.container}>
        <Head>
            <title>The Ugly Cat Sign In</title>
        </Head>
            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link className={styles.logoLink} href="/">
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
                    </Link>        
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
                    ref={signInButton}
                    type="submit"
                    onClick={handleLoginWithEmail}
                    className={styles.loginBtn}>
                        { isLoading ? "Loading" : "Sign In"}
                    </button>
                </div>
            </main>
        </div>
    )
    }