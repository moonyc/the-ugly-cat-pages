import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import styles from './navbar.module.css'

export default function NavBar() {
    const router = useRouter()
    const [dropdown, setDropdown] = useState(false)

    const handleOnClickDropDown = (e) => {
        e.preventDefault()
        return setDropdown(!dropdown)
    }
    const handleOnClickSignOut = (e) => {
        e.preventDefault()
        return router.push('/login')
    }
    const handleOnClickHome = (e) => {
        e.preventDefault()
        return router.push('/')
    }
    const handleOnClickMyList = (e) => {
        e.preventDefault()
        return router.push('/browse/mylist')
    }
    
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
                        <p className={styles.theUglyCat}> 
                            The Ugly Cat
                        </p>
                    </div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
                </ul>
                <nav className={styles.navContainer}>
                    <button className={styles.usernameBtn} onClick={handleOnClickDropDown}>
                        <p className={styles.username}>sasha@email.com</p>
                    </button>
                    {
                        dropdown && (
                            <div className={styles.navDropdown}>
                                <p className={styles.linkName} onClick={handleOnClickSignOut}> Sign Out</p>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        )
                    }
                </nav>
            </div>
        </div>
    )
}