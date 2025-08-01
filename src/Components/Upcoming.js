import React from "react";
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../context/global.context";
import styled from "styled-components";

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext()

    const conditionalRender = () => {
        const animeList = !isSearch && rendered === 'upcoming' ? upcomingAnime : searchResults;

        return animeList?.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </Link>
        ));
    }

    return (
        <UpcomingStyled>
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
        </UpcomingStyled>
    )
}

const UpcomingStyled = styled.div`
    display: flex;
    .upcoming-anime{
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 5rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        background-color: #fff;
        border-top: 5px solid #e5e7eb;
        
        a{
            height: 500px;
            border-radius: 7px;
            border: 5px solid #e5e7eb;
        }

        a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`;

export default Upcoming;