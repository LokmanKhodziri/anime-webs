import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AnimeItem(props) {

    const { id } = useParams()

    //state
    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    //destrusture anime item
    const { title, synopsis, trailer,
        duration, aired, season, images,
        rank, score, scored_by, popularity,
        status, rating, source } = anime;

    //fetch anime base on ID
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="images">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details">
                        <p><span>Aired: </span><span>{aired?.string}</span></p>
                        <p><span>Rating: </span><span></span>{rating}</p>
                        <p><span>Rank: </span><span></span>{rank}</p>
                        <p><span>Score: </span><span></span>{score}</p>
                        <p><span>Scored By: </span><span></span>{scored_by}</p>
                        <p><span>Popularity: </span><span></span>{popularity}</p>
                        <p><span>Status: </span><span></span>{status}</p>
                        <p><span>Source </span><span></span>{source}</p>
                        <p><span>Season </span><span></span>{season}</p>
                        <p><span>Duration: </span><span></span>{duration}</p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less' : 'Read More'}</button>
                </p>
            </div>
            <h3 className="title">Trailer</h3>
            <div className="trailer-container">
                {trailer?.embed_url &&
                    <iframe
                        src={trailer?.embed_url}
                        title="Inline Frame Example"
                        width="800"
                        height="450"
                        allow="accelerometer; autoplay; clipboard-write; encypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                }
            </div>
        </div>
    )
}

export default AnimeItem
