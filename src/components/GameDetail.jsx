import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react';
import axios from 'axios';

const GameDetails = () => {

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
                    </div>
            }
            
            </Link>
        </div>
    );
};

export default GameDetails;