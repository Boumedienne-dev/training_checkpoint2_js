import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';


const GameList = (props) => {

    const [games, setGames] = useState ([]);
    const [ratingFilter, setRatingFilter] =useState(false);
        
    

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/`)
            .then(response => response.data)
            .then(data => setGames(data))
    }, [])


const handleRatingFilter = () => {
    setRatingFilter(!ratingFilter);
}

    return (
        <>
        <button onClick={handleRatingFilter}>
            {
                ratingFilter
                    ? "Afficher la liste complète"
                    : "Afficher les meilleurs jeux"
            }
            </button>
        
            {games
            .filter ((game => !ratingFilter || game.rating > 4.5))           
            .map((game) =>
            <Game
            title={game.name}
            image={game.background_image}
            rating={game.rating}
            clip={game.clip}
            id={game.id}
            />
            )
            
        }
        </>
    );
};

export default GameList;