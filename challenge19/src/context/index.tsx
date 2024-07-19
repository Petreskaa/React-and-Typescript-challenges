import React, { createContext, useEffect, useState } from "react";
import { RestaurantInterface } from "../interfaces";

interface Props {
  children: React.ReactNode;
}

interface ContextData {
  restaurants: RestaurantInterface[];
  favorites: RestaurantInterface[];
  handleAddFavorite: (res: RestaurantInterface) => void;
  handleRemoveFavorite: (res: RestaurantInterface) => void;
  handleUpdateRestaurants: () => void;
}

export const Context = createContext<ContextData | null>(null);

export const Provider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<RestaurantInterface[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>();

  useEffect(() => {
    fetch("https://delicate-six-icebreaker.glitch.me/restaurants")
      .then(res => res.json())
      .then(data => setRestaurants(data));
  }, []);

  
  const handleUpdateRestaurants = () => {
    fetch("https://delicate-six-icebreaker.glitch.me/restaurants")
      .then(res => res.json())
      .then(data => setRestaurants(data));
  };

  const handleAddFavorite = (res: RestaurantInterface) => {
    setFavorites([...favorites, res]);
  };


  const handleRemoveFavorite = (res: RestaurantInterface) => {
    setFavorites(favorites.filter(favRes => favRes.id !== res.id));
  };


  useEffect(() => {
    const localFavs: RestaurantInterface[] = JSON.parse(
      localStorage.getItem("currentFavorites") || "[]"
    );

    setFavorites(localFavs);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("currentFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const contextObj: ContextData = {

    restaurants: restaurants && restaurants?.length > 0 ? restaurants : [],
    favorites,
    handleAddFavorite,
    handleRemoveFavorite,
    handleUpdateRestaurants,
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};