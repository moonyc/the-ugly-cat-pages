
// fetch videos

async function fetchVideos(url) {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    try {
        const BASE_URL = `https://youtube.googleapis.com/youtube/v3`

        const response = await fetch(`${BASE_URL}/${url}&videoDefinition=high&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`)
        const data = await response.json()

        if(data?.error) {
            console.log("oh no, the data fetching doesn't work", data.error)
            return []
        } else {
            return data?.items.map((item) => {
                const id = item.id?.videoId || item.id
                const snippet = item.snippet
                return {
                    title: snippet?.title,
                    imgUrl: item.snippet.thumbnails.high.url,
                    id,
                    description: snippet.description,
                    publishTime: snippet.publishedAt,
                    channelTitle: snippet.channelTitle,
                    statistics: item.statistics ? item.statistics : { viewCount: 0 }
                }
            })
        }

    } catch (error) {
        console.log('oh no, youtube api', error)
        return []
    }
}

// fetch popular videos

export const getPopularVideos = () => {
    const URL = "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IT"
    return fetchVideos(URL)
}

 // fetch videos by ids

 export function getYoutubeVideoById (videoId) {
    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
    return fetchVideos(URL)
 }


// get videos

export function getVideos(searchQuery = "New York", coordinates = "40.781977878386904,-73.96625932141691", locationRadius = "5000m") {
    const url = `search?part=snippet&maxResults=25&q=${searchQuery}&location=${coordinates}&locationRadius=${locationRadius}&type=video`
    return fetchVideos(url)
}