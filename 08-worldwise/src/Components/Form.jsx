import { useEffect, useState } from "react";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../Contexts/CityContext";
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import ButtonUI from "./ButtonUI";
import Message from "./Message";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://api-bdc.io/data/reverse-geocode-client";

const Form = () => {
  const [lat, lng] = useUrlPosition();
  const { createCity, loading } = useCities();
  const navigate = useNavigate();
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geoCodingError, setGeoCodingError] = useState("");

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setIsLoadingGeoCoding(true);
        setGeoCodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );

        setCity(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (e) {
        console.error(e.message);
        setGeoCodingError(e.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    };

    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city || !date) return;

    const newCity = {
      cityName: city,
      country,
      emoji,
      date,
      note,
      position: {
        lat,
        lng,
      },
    };

    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeoCoding) return <Spinner />;
  if (!lat && !lng)
    return <Message message="Start by clicking somwhere in the map!" />;
  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form
      className={`${styles.form} ${loading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {country}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="note">Notes about your trip</label>
        <textarea
          id="note"
          maxLength={20}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Notes..."
        />
      </div>

      <div className={styles.btnContainer}>
        <ButtonUI type="primary">Add</ButtonUI>
        <BackButton />
      </div>
    </form>
  );
};

export const convertToEmoji = (countryCode) => {
  const codePoint = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoint);
};
export default Form;
