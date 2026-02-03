import { enqueueSnackbar } from "notistack";
import { useState } from "react";

const Form = ({ title, setIsOpen, onAdd }) => {
  const [formData, setFormData] = useState({
    date: "",
    categories: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handling checkbox
      setFormData((prev) => {
        const updateHabits = checked
          ? [...prev.categories, name]
          : prev.categories.filter((habit) => habit !== name);

        return { ...prev, categories: updateHabits };
      });
    } else {
      // Handling for date and description
      setFormData((prev) => ({
        ...prev,
        id: Date.now(),
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh on submit
    setIsOpen(false); // close modal

    // update added data to ActionCard -> Dashboard -> App component
    onAdd(formData);
    enqueueSnackbar("Habit added successfully", { variant: "success" });
    console.log("Form Data", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <label htmlFor="date">
        Date:{" "}
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        <input
          name="Reading"
          type="checkbox"
          value={formData.categories}
          onChange={handleChange}
          required={formData.categories.length === 0}
        />
        Reading
      </label>
      <label>
        <input
          name="Exercise"
          type="checkbox"
          value={formData.categories}
          onChange={handleChange}
          required={formData.categories.length === 0}
        />
        Exercise
      </label>
      <label>
        <input
          name="Meditation"
          type="checkbox"
          value={formData.categories}
          onChange={handleChange}
          required={formData.categories.length === 0}
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
        required
      />

      <div className="form-buttons">
        <button
          type="button"
          className="cancel"
          onClick={() => setIsOpen(false)}>
          Cancel
        </button>
        <button type="submit" className="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
