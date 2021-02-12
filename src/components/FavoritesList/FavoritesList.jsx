import { useState, useEffect } from 'react';
import axios from 'axios';

function FavoritesList() {

    let [favoritesList, setFavoritesList] = useState([]);

    const getFavorites = () => {
        axios.get('/api/favorite')
            .then((response) => {
                setFavoritesList(response.data);
                console.log('Store updated');
            }).catch((err) => {
                console.log('Error in getFavorites function', err);
            })
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <section>
            <h2>All Favorites</h2>
            <ul>
                {favoritesList.map(favorite => (
                    <li key={favorite.id}>{favorite.title} 
                    <p><img src={favorite.url} alt="GIF broken"/></p>
                        {/* {/* <button onClick={() => setFavoritesDetails(favorite)}>View Details 1</button> */}
                        <button>Unfavorite</button> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FavoritesList;