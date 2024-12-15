import { createContext, useContext, useEffect, useReducer } from 'react';

const CitiesContext = createContext();

const BASE_URL = 'http://localhost:8000';
const initialState = {
  cities: [],
  loading: false,
  currentCity: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };

    case 'city/loaded':
      return { ...state, loading: false, currentCity: action.payload };

    case 'cities/loaded':
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };

    case 'cities/created':
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
      };

    case 'cities/deleted':
      return {
        ...state,
        loading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    default:
      console.log(action.type);
      throw new Error('Unknown action type!');
  }
};

const CitiesProvider = ({ children }) => {
  const [{ cities, loading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch (e) {
        console.error(e);
      }
    };

    fetchCities();
  }, []);

  const getCity = async (id) => {
    dispatch({ type: 'loading' });
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      dispatch({ type: 'city/loaded', payload: data });
    } catch (e) {
      console.error(e);
    }
  };

  const createCity = async (newCity) => {
    dispatch({ type: 'loading' });
    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      dispatch({ type: 'cities/created', payload: data });
    } catch (e) {
      console.error(e);
      alert('There was an error creating city!');
    }
  };

  const deleteCity = async (id) => {
    dispatch({ type: 'loading' });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      dispatch({
        type: 'cities/deleted',
        payload: id,
      });
    } catch (e) {
      console.error(e);
      alert('There was an error deleting city!');
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
        deleteCity,
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
    throw new Error('CitiesContext was used outside CitiesProvider');

  return context;
};

export { CitiesProvider, useCities };
