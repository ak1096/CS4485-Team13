import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../AuthContext';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { userId } = useContext(UserContext);
  
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`http://localhost:8080/auth/get-favorites?userId=${userId}`);
        const data = await response.json();
        setFavorites(data);
        console.log('favorites: ' + data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      {favorites && favorites.length > 0 ? (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite._id}>
              <h3>{favorite.firstName} {favorite.lastName}</h3>
              <p>{favorite.subjects.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites found</p>
      )}
    </div>
  );
  
};

export default Favorites;