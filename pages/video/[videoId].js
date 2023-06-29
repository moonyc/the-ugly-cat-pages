import { useRouter } from "next/router"
import { useState } from "react"
import Modal from 'react-modal'
import styles from '../../styles/Video.module.css'
import clsx from 'classnames'
import { getYoutubeVideoById } from "@/lib/videos"
import NavBar from "@/components/navigation/navbar"

import Like from "@/components/icons/like-icons"
import DisLike from "@/components/icons/dislike-icon"

export async function getStaticProps(context) {

    const videoId = context.params.videoId
    const videoArray = await getYoutubeVideoById(videoId)
    return {
        props: {
            video: videoArray.length > 0 ? videoArray[0] : {}
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    const listOfVideos = ["y8kTYCex8RU", "kgrV3_g9rYY", "nl8o9PsJPAQ"]
   
    // Get the paths we want to pre-render based on posts
    const paths = listOfVideos.map((videoId) => ({
      params: { videoId },
    }))
   
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }
   
export default function Video ({video}) {
    const router = useRouter()

    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState (false)
   
    const handleOnClikLike = async () => {
       setLike(!like)
       setDislike(!!like)
    }
    
    const handleOnClikDislike = async () => {
        setDislike(!dislike)
        setLike(!!dislike)

    }
    const { title, publishTime, description, channelTitle, statistics : { viewCount } = { viewCount: 0} } = video
    
    return (
        <div className={styles.container}>
        <NavBar />
            <Modal 
                ariaHideApp={false}
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
                    frameBorder="0"
                />
                <div className={styles.likeDislikeBtnWrapper}>
                    <div className={styles.likeBtnWrapper}>
                        <button 
                            onClick={handleOnClikLike}
                        >
                            <div className={styles.btnWrapper}>
                                <Like selected={like}/>
                            </div>
                        </button>
                    </div>
                    <button
                        onClick={handleOnClikDislike}
                    >
                    <div className={styles.btnWrapper}>
                        <DisLike selected={dislike}/>
                    </div>
                    </button>
                </div>
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
                                <span className={styles.textColor}> Channel: </span>
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
        </div>
    )
}