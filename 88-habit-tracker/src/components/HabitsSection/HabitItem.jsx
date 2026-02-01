import { Pencil, CircleX } from "lucide-react";

const HabitItem = ({ habit }) => {
  return (
    <div className="habit-item">
      <div className="habit-title">
        <p>{habit.description}</p>
        <span className="habit-category">{habit.habits.map((i) => `${i} `)}</span>
      </div>
      <div className="habit-action">
        <span className="date">{habit.date}</span>
        <button className="action-button edit">
          <Pencil size={20} />
        </button>
        <button className="action-button delete">
          <CircleX size={20} />
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
