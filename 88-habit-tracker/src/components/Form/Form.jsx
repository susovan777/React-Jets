import { useState } from "react";

const Form = ({ title, setIsOpen }) => {
  const [formData, setFormData] = useState({
    date: "",
    habits: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handling checkbox
      setFormData((prev) => {
        const updateHabits = checked
          ? [...prev.habits, name]
          : prev.habits.filter((habit) => habit !== name);

        return { ...prev, habits: updateHabits };
      });
    } else {
      // Handling for date and description
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    console.log(formData);
  };

  return (
    <form>
      <h3>{title}</h3>
      <label htmlFor="date">
        Date:{" "}
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          name="reading"
          type="checkbox"
          value={formData.habits}
          onChange={handleChange}
        />
        Reading
      </label>
      <label>
        <input
          name="exercise"
          type="checkbox"
          value={formData.habits}
          onChange={handleChange}
        />
        Exercise
      </label>
      <label>
        <input
          name="meditation"
          type="checkbox"
          value={formData.habits}
          onChange={handleChange}
        />
        Meditation
      </label>

      <label htmlFor="">Short description:</label>
      <input
        name="description"
        type="text"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter a short description"
      />

      <div className="form-buttons">
        <button className="cancel">Cancel</button>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
