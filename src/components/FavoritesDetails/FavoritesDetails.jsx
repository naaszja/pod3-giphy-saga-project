// import { useSelector } from 'react-redux';

// function FavoritesDetails(props) {
//    let favorites = useSelector(store => store.favoritesDetails);
//    // Dont let an invalid favorites ruin your day
//    if (favorites.title === undefined) {
//       return <h1>Invalid favorites (No details found)</h1>
//    }
//    return (
//       <>
//          <h1>Favorites Details</h1>
//          <table>
//             <tbody>
//                <tr>
//                   <td>favorites Title:</td>
//                   <td>{favorites.title}</td>
//                </tr>
//                <tr>
//                   <td>url:</td>
//                   <td>{favorites.url}</td>
//                </tr>
//             </tbody>
//          </table>
//       </>
//    );
// }

// export default FavoritesDetails;