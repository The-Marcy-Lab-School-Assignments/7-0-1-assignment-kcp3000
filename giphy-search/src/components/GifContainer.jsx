import { useEffect, useState } from "react"
import API_KEY from "../config"
import { handleFetch } from "../utils"


function GifContainer({ gifs, setGifs, setError }) {

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`)
            if (data) setGifs(data)
            if (error) setError(error)

            // console.log(data)
        }

        doFetch();

    }, [])

    // if (error) return <p>{error.message}</p>

    return (
        <ul>
            {
                gifs?.data?.map((gif) => (
                    <li key={gif.id}>
                        <img src={gif.images.original.url} alt="" />
                    </li>
                ))
            }
        </ul>
    )
}

export default GifContainer
