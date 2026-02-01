import { Pencil, CircleX } from "lucide-react";

const HabitItem = () => {
  return (
    <div className="habit-item">
      <div className="habit-title">
        <p>Reading book</p>
        <span className="habit-category">Meditaion • Reading</span>
      </div>
      <div className="habit-action">
        <span className="date">01-02-2026</span>
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
