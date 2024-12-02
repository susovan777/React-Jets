import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
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
