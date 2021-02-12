
import SearchComponent from '../Search/SearchComponent';
import FavoritesList from '../FavoritesList/FavoritesList';
import FavoritesDetailsWithParams from '../FavoritesDetails/FavoritesDetailsWithParams';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



function App() {
  console.log('App is rendering');
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'FETCH_FAVORITES' })

  }, []);

  return (
    <div className="App">
      <Router>
        <header><h1>Favorites w/ Redux!</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </header>
        <main>
        <Route exact path="/">
            <SearchComponent />
          </Route>
          <Route exact path="/favorites">
            <FavoritesList />
          </Route>
          <Route path="/details/:id">
            <FavoritesDetailsWithParams />
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;