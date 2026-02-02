import { Pencil, CircleX } from "lucide-react";

const HabitItem = ({ habit, onDelete, onEdit }) => {
  return (
    <div className="habit-item">
      <div className="habit-title">
        <p>{habit.description}</p>
        <span className="habit-category">{habit.categories.join(" | ")}</span>
      </div>
      <div className="habit-action">
        <span className="date">{habit.date}</span>
        <button className="action-button edit" onClick={() => onEdit(habit.id)}>
          <Pencil size={20} />
        </button>
        <button
          className="action-button delete"
          onClick={() => onDelete(habit.id)}>
          <CircleX size={20} />
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
