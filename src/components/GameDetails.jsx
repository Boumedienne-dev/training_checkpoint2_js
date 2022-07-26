import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react';
import axios from 'axios';

const GameDetails = () => {

    let {id} = useParams ();
    const [data1, setData1] = useState([]);

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            // .then(response => response.data)
            .then(data => setData1(data.data))
    }, [])

    return (
        <div>
            {data1}
            <Link to='/'>Lien vers Game List</Link>
            
        </div>
    );
};

export default GameDetails;