import { useEffect, useMemo, useState } from "react";

import { useFetch } from "../util-hooks/useFetch";
const useMeetups = () => {
  const { data } = useFetch({
    url: "/data.json",
  });
  const [meetups, setMeetups] = useState([]);
  const favorites = useMemo(
    () => meetups?.filter((m) => m.isFavorite),
    [meetups]
  );
  const favoritesCount = useMemo(() => favorites?.length, [favorites]);

  const addMeetup = (meetup) => {
    setMeetups((meetups) => [...meetups, { ...meetup, isFavorite: false }]);
  };

  const toggleFavorite = (id) => {
    setMeetups((meetups) =>
      meetups?.map((meetup) =>
        id === meetup.id
          ? { ...meetup, isFavorite: !meetup.isFavorite }
          : meetup
      )
    );
  };

  useEffect(() => {
    setMeetups(addFavoriteProp(data));
  }, [data]);

  return {
    meetups,
    favorites,
    favoritesCount,
    addMeetup,
    toggleFavorite,
  };
};

const addFavoriteProp = (meetups) =>
  meetups?.map((meetup) => ({
    ...meetup,
    isFavorite: meetup.isFavorite ?? false,
  }));

export { useMeetups };
