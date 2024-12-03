import styles from "./Form.module.css";
import BackButton from "./BackButton";

const Form = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" type="text" />
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to?</label>
        <input id="date" type="date" />
      </div>
      <div className={styles.row}>
        <label htmlFor="note">Notes about your trip</label>
        <textarea id="note" maxLength={20} placeholder="Notes..." />
      </div>

      <div className={styles.btnContainer}>
        <button>Add</button>
        <BackButton />
      </div>
    </form>
  );
};

export default Form;
