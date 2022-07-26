import React from 'react';
import {Link} from 'react-router-dom';      

const Game = (game) => {
        return (
            <div>
                
                <h2>{game.title}</h2>
                <Link to={`/games/${game.id}`}>
                <img src={game.image} width={"150px"}/>
                </Link>
                <video src={game.clip}/>
                <p>{game.rating}</p>
                <button>MORE INFORMATION</button>
            </div>
        );
    }


export default Game;