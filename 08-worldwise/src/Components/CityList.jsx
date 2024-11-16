import styles from "./CityList.module.css";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by adding a city on the map" />
    );

  return (
    <ul className={styles.citylist}>
      {cities.map((city) => {
        return <City city={city} key={city.id} />;
      })}
    </ul>
  );
};

const City = ({ city }) => {
  return (
    <li className={styles.city}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <p className={styles.date}>({formatDate(city.date)})</p>
      <button className={styles.deleteBtn}>&#10006;</button>
    </li>
  );
};

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default CityList;
