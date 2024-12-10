import { useEffect, useState } from "react";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import ButtonUI from "./ButtonUI";
import Message from "./Message";
import Spinner from "./Spinner";

const BASE_URL = "https://api-bdc.io/data/reverse-geocode-client";

const Form = () => {
  const [lat, lng] = useUrlPosition();
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
        setCountry(data.continent);
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

  if (isLoadingGeoCoding) return <Spinner />;
  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="note">Notes about your trip</label>
        <textarea
          id="note"
          maxLength={20}
          value={note}
          onChange={(e) => setNote(e, tyarget.value)}
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
