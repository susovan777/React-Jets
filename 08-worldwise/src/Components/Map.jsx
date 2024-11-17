import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className={styles.map} onClick={() => navigate("form")}>
      Map
      <p>
        Position: {lat}, {lng}
      </p>
    </div>
  );
};

export default Map;
