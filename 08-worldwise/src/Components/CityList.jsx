import { Link } from "react-router-dom";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { useCities } from "../Contexts/CityContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityList = () => {
  const { cities, loading } = useCities();

  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by adding a city on the map" />
    );

  return (
    <ul className={styles.citylist}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
};

const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const position = city.position;

  return (
    <li>
      <Link
        className={`${styles.city} ${
          city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <p className={styles.date}>({formatDate(city.date)})</p>
        <button className={styles.deleteBtn}>&#10006;</button>
      </Link>
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
