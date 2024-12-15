import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const getCity = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const createCity = async (newCity) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setCities((cities) => [...cities, data]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        currentCity,
        getCity,
        createCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

// 🔥 Custom hook
const useCities = () => {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");

  return context;
};

export { CitiesProvider, useCities };
