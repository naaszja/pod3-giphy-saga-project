import React from 'react';
// import './App.css';
import ReactGiphySearchbox from "react-giphy-searchbox";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Favorites() {
 
//     // favoritiesReducer
// const favoritesReducer = (state = [], action) => {
//     console.log(action, state);
//     if (action.type === 'SET_FAVORITES') {
//       return action.payload;
//     } else if (action.type === 'CLEAR_FAVORITES') {
//       return []
//     }
//     return state;
//   }

    const favorites = useSelector(store => store.favoritesReducer)

    useEffect(() => {
        dispatchEvent({type: 'ADD_FAVORITES'})
    }, []);
 
    return (
        <ul>
            {favorites.map((favorite) => {
                return (
                <div>{favorite.url}</div>
                    );
            })}
        </ul>
    )
}

export default Favorites;