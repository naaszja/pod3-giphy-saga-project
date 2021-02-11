import React from "react";
import ReactDOM from "react-dom";
import ReactGiphySearchbox from "react-giphy-searchbox";

const App = () => (
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);