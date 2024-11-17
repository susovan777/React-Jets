import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className={styles.map}>
      Map
      <p>
        Position: {lat}, {lng}
      </p>
    </div>
  );
};

export default Map;
