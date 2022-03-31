import { createContext, useState } from "react";


//context blueprint
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) =>{},
    isItemFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandler(meetUpID){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetUpID)
        })
    }

    function isItemFavoriteIHandler(meetUpID){
        return userFavorites.some(meetup => meetup.id === meetUpID)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isItemFavorite: isItemFavoriteIHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext