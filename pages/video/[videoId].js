import { useRouter } from "next/router"
import Modal from 'react-modal'
import styles from '../../styles/Video.module.css'

export default function Video () {
    const router = useRouter()
    return (
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
            </Modal>

    )
}