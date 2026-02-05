import { Pencil, CircleX } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const HabitItem = ({ habit, onDelete }) => {
  const [editingHabit, setEditingHabit] = useState(null);
  const [data, setData] = useState({
    categories: habit.categories,
    description: habit.description,
  });

  const handleHabitEditing = (id) => {
    setEditingHabit(true);
    console.log("Editing", id, habit);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditingHabit(null);
  };

  return (
    <div className="habit-item">
      <div className="habit-title">
        <p>{habit.description}</p>
        <span className="habit-category">{habit.categories.join(" | ")}</span>
      </div>
      <div className="habit-action">
        <span className="date">{habit.date}</span>
        <button
          className="action-button edit"
          onClick={() => handleHabitEditing(habit.id)}>
          <Pencil size={20} />
        </button>
        <button
          className="action-button delete"
          onClick={() => onDelete(habit.id)}>
          <CircleX size={20} />
        </button>
      </div>

      {editingHabit && (
        <div className="modal-overlay" onClick={() => setEditingHabit(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleUpdate}>
              <h3>Edit Habit</h3>
              <label>Date: {habit.date}</label>

              <label>
                <input
                  name="Reading"
                  type="checkbox"
                  value={data.categories}
                  checked={habit.categories.includes('Reading')}
                  // onChange={handleChange}
                  // required={formData.categories.length === 0}
                />
                Reading
              </label>
              <label>
                <input
                  name="Exercise"
                  type="checkbox"
                  value={data.categories}
                  checked={habit.categories.includes('Exercise')}
                  // onChange={handleChange}
                  // required={formData.categories.length === 0}
                />
                Exercise
              </label>
              <label>
                <input
                  name="Meditation"
                  type="checkbox"
                  value={data.categories}
                  checked={habit.categories.includes('Meditation')}
                  // onChange={handleChange}
                  // required={formData.categories.length === 0}
                />
                Meditation
              </label>

              <label htmlFor="description">Short description:</label>
              <input
                name="description"
                type="text"
                value={data.description}
                onChange={(e) => e.target.value}
                placeholder="Enter a short description"
                required
              />

              <div className="form-buttons">
                <button
                  type="button"
                  className="cancel"
                  onClick={() => setEditingHabit(null)}>
                  Cancel
                </button>
                <button type="submit" className="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitItem;
