import ReactGiphySearchbox from "react-giphy-searchbox";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

function SearchComponent(props) {
    console.log('Search Component is rendering');
    const dispatch = useDispatch();
    //const [setFavorite, setFavoriteGif] = useState('')

    // useEffect(() => {
    //   dispatch({ type: 'FETCH_FAVORITES' })

    // }, []);



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
                            url: item.url,
                            title: item.title,
                        }
                    })}

                    masonryConfig={[
                        { columns: 2, imageWidth: 110, gutter: 5 },
                        { mq: "700px", columns: 10, imageWidth: 120, gutter: 5 }
                    ]}

                />
            </div>

        </>
    );
}

export default SearchComponent;