import { createContext, useContext } from "react";

import { useMeetups } from "../hooks/useMeetups";

const MeetupsContext = createContext({
  meetups: [],
  favorites: [],
  favoritesCount: 0,
  addMeetup: () => {},
  removeMeetup: () => {},
  toggleFavorite: () => {},
});

const MeetupsProvider = ({ children }) => {
  const { meetups, favorites, favoritesCount, addMeetup, toggleFavorite } =
    useMeetups();

  return (
    <MeetupsContext.Provider
      value={{
        meetups,
        favorites,
        favoritesCount,
        addMeetup,
        toggleFavorite,
      }}
    >
      {children}
    </MeetupsContext.Provider>
  );
};

const useMeetupsContext = () => {
  return useContext(MeetupsContext);
};

export { MeetupsProvider, useMeetupsContext };
