import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";

// 🚩 My location: lat: 12.978385, long: 77.623645 (Halasuru, Bangalore)

const Map = () => {
  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[12.978385, 77.623645]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
