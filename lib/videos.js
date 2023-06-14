


export async function getVideos () {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    try {
        const URL = `GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=New%20York&type=video&videoDefinition=high&videoEmbeddable=true&videoLicense=creativeCommon&key=${YOUTUBE_API_KEY}`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    if(data?.error) {
        console.error('Youtube API error', data.error)
    } else {
        return data?.items.map((item) => {
            return {
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id: item?.id?.videoId || item.id
            }
        })
    }
    } catch (error) {
        console.error("Something went wrong with the video library", error)
        return []
    }
}

