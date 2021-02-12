import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function FavoritesList() {
    const favoritesList = useSelector(store => store.favoritesList);
    const dispatch = useDispatch();
    const history = useHistory();

    const setFavoritesDetails = (favorite) => {
        // alert(`You want to see details for book ${book.title}`);
        // GOAL: Set the 'book details' info to this book
        // Direct the user to the Book Details page
        dispatch({
            type: 'ADD_FAVORITE',
            payload: { url: item.url,
                    title: item.title
            }
        });

        history.push('/details');
    }

    return (
        <section>
            <h2>All Favorites</h2>
            <ul>
                {favoritesList.map((favorite, index) =>
                    <li key={index}>{favorite.title} url {favorite.url}
                        <button onClick={() => setFavoritesDetails(favorite)}>View Details 1</button>
                        <button onClick={() => history.push(`/details/${favorite.id}`)}>View Details 2</button>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default FavoritesList;