import styles from "./CountryList.module.css";

const CounrtyList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by adding a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((city) => city.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </ul>
  );
};

const Country = ({ country }) => {
  return (
    <li className={styles.country}>
      <span>{country.emoji}</span>
      <p className={styles.name}>{country.country}</p>
    </li>
  );
};

export default CounrtyList;
