import React from 'react';
import {Link} from 'react-router-dom';

const Game = (props) => {
        return (
            <div>
            
                <Link to='/'>
                <h2>{props.title}</h2>
                <img src={props.image} width={"150px"}/>
                <p>{props.rating}</p>
                <button>MORE INFORMATION</button>
                </Link>


            

            </div>
        );
    }


export default Game;