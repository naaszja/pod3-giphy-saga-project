import React from 'react';
// import './App.css';
import ReactGiphySearchbox from "react-giphy-searchbox";

function App(props) {
  
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
            onSelect={(item) => console.log(item)}
            masonryConfig={[
              { columns: 2, imageWidth: 150},
              { mq: "900px", columns: 10, imageWidth: 120, gutter: 5 }
            ]}
            
          />
      </div>
    </>
  );
}

export default App;
