import React from 'react';

const Game = (props) => {
        return (
            <div>
                <h2>{props.title}</h2>
                <img src={props.image} width={"150px"}/>
                <p>{props.rating}</p>

            </div>
        );
    }


export default Game;