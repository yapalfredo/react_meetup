import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

  const favoritesContext = useContext(FavoritesContext)

  let content

  if (favoritesContext.totalFavorites === 0){
    content = <p>You have not favorited any items yet.
      Consider adding some.
    </p>
  }else {
    content = <MeetupList meetups={favoritesContext.favorites}/>
  }

  return (
  <section>
    <h1>Favorites</h1>
    {content}
  </section>)
}

export default FavoritesPage;
