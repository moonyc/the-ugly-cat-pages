import { useRouter } from "next/router"
import Modal from 'react-modal'
import styles from '../../styles/Video.module.css'

export default function Video () {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Modal 
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <div>Modal Body</div>
            </Modal>
        </div>
    )
}