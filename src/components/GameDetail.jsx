import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

const GameDetail = () => {

    let {id} = useParams ();
    const [gameDetails, setGameDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(game => setGameDetails(game.data))
    }, [])

    return (
        <div>
            <Link to='/'>
            {
                gameDetails && <div>
                    <h2>{gameDetails.name}</h2>
                    <img src={gameDetails.background_image} width= '300px'/>
                    <video widht="750" heights="500" controls>
                        <source src={gameDetails.clip} type="video/mp4" />
                    </video>
                    </div>
            }
            
            </Link>
        </div>
    );
};

export default GameDetail;