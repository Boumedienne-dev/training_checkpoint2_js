import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';


const GameList = (props) => {

    const {name} = {...props.game};
    const [games, setGames] = useState ([]);
        
    

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/`)
            // .then(response => response.data)
            .then(data => setGames(data.data))
    }, [])
    return (
        <div>
            {games.map((game) =>
            <Game
            title={game.name}
            image={game.background_image}
            rating={game.rating}
            key={game.id}
            />
            )
            
        }
        </div>
    );
};

export default GameList;