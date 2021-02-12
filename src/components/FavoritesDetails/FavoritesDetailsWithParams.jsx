import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function FavoritesDetailsWithParams() {
   let favorites = useSelector(store => store.favoritesDetails);
   let favoritesList = useSelector(store => store.favoritesList);
   let dispatch = useDispatch();
   const params = useParams();

   useEffect(() => {
      // Grab the ID out of the URL
      // Go hunting for the favorites in redux
      // Dispatch that favorites as the details view
      console.log('params are', params);
      const favoritesId = Number(params.id);

      // Look through the favoritesList for a favorites with id 1
      // when found, set that to the 'favorites details' in redux
      console.log(`Searching through ${favoritesList.length}`);
      const foundfavorites = favoritesList.filter((favorites) => favorites.id === favoritesId);
      console.log(`Found favorites with id ${favoritesId}: `, foundfavorites);
      if (foundfavorites.length > 0) {
         dispatch({
            type: 'SET_FAVORITES_DETAILS',
            payload: foundfavorites[0]
         })
      }
   }, [])

   // Dont let an invalid favorites ruin your day
   if (favorites.title === undefined) {
      return <h1>Invalid favorites (No details found)</h1>
   }
   return (
      <>
         <h1>favorites Details (with params)</h1>
         <table>
            <tbody>
               <tr>
                  <td>favorites Title:</td>
                  <td>{favorites.title}</td>
               </tr>
               <tr>
                  <td>url:</td>
                  <td>{favorites.url}</td>
               </tr>
            </tbody>
         </table>
      </>
   );
}

export default FavoritesDetailsWithParams;