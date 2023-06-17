import { useRouter } from "next/router"
import Modal from 'react-modal'
import styles from '../../styles/Video.module.css'
import clsx from 'classnames'
import Head from "next/head"

export default function Video () {
    const router = useRouter()

    const video = {
        title : 'Sasha and Taylor Swift',
        publishTime: '2023-01-03',
        description: "Songwriter pours herself into a wild lizard-hunting-themed night with Sasha The Cutie tutie cat.",
        channelTitle: "Taylor Swift Vevo",
        viewCount: 100000
    }

    const { title, publishTime, description, channelTitle, viewCount } = video
    
    return (
            <>
                <Head>
            <title>The Ugly Cat Sign In</title>
            <meta name="description" content="A streaming platform - login" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
            <Modal 
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <iframe
                    className={styles.videoPlayer}
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="800"
                    src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                    frameborder="0"
                />
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>
                                {publishTime}
                            </p>
                            <p className={styles.title}>
                                {title}
                            </p>
                            <p className={styles.description}>
                                {description}
                            </p>
                        </div>
                        <div className={styles.col2}>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}> Cast: </span>
                                <span className={styles.channelTitle}>
                                    {channelTitle}
                                </span>
                            </p>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>
                                    View Count: 
                                </span>
                                <span className={styles.channelTitle}>
                                    {viewCount}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
            </main>
            </>

    )
}