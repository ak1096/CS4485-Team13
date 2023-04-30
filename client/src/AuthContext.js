import React, { createContext, useState } from 'react';

export const UserContext = createContext({
    favorites: [],
    userId: '',
    appointments: [],
    userType: ''
  });

  export const AuthProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [userId, setUserId] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [userType, setUserType] = useState('');

    const contextValue = {
      favorites,
      setFavorites,
      userId,
      setUserId,
      appointments,
      setAppointments,
      userType,
      setUserType
    };
  
    return (
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    );
  };
