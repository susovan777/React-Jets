import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

const City = () => {
  const { id } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className={styles.city}>
      <h1>City {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </div>
  );
};

export default City;
