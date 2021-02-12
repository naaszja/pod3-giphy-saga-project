import ReactGiphySearchbox from "react-giphy-searchbox";
import { useDispatch } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';

function SearchComponent(props) {
    console.log('Search Component is rendering');
    const dispatch = useDispatch();
    const history = useHistory();



    return (
        <>
            <header>
                <h1>Giphy Search</h1>
                <p>
                    Select a gif (clicking on it)
            </p>
            </header>
            <div className="searchboxWrapper">
                <ReactGiphySearchbox
                    apiKey="Z1gSUoqXSaGAFhnFmTWCVpg9uBRoAdXk"
                    // onSelect={(event) => setFavoriteGif(event.target.value)}
                    onSelect={(item) => dispatch({
                        type: 'ADD_FAVORITE',
                        payload: {
                            src: item.images.original.url,
                            title: item.title,
                        }
                    })}

                    masonryConfig={[
                        { columns: 2, imageWidth: 110, gutter: 5 },
                        { mq: "700px", columns: 10, imageWidth: 120, gutter: 5 }
                    ]}
                    
                />
                <button onClick={() => history.push('./favorites')}>Favorites Page</button>
                </div>

        </>
    );
}

export default SearchComponent;