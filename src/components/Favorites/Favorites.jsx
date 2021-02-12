import React from 'react';
// import './App.css';
// import ReactGiphySearchbox from "react-giphy-searchbox";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Favorites() {
 
    const favorites = useSelector(store => store.favoritesReducer)

    useEffect(() => {
        dispatchEvent({type: 'FETCH_FAVORITES'})
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