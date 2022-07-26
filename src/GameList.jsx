import React, { useEffect } from 'react';
import axios from 'axios';


const GameList = (props) => {

    const {name} = {...props.game}
        
    }

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games`)
            .then(response => response.data)
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default GameList;