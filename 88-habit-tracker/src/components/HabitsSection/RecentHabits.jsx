import { CircleAlert } from "lucide-react";
import HabitItem from "./HabitItem.jsx";

const RecentHabits = ({ habitLogs, onDelete }) => {
  return (
    <div className="recent">
      <h2>Recent Habit Completions</h2>

      <div className="recent-list">
        {habitLogs.length !== 0 ? (
          <ul>
            {habitLogs.map((item) => (
              <HabitItem
                key={item.id}
                habit={item}
                // onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </ul>
        ) : (
          <div className="no-habit">
            <CircleAlert size={40} />
            <p>No progress to show.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentHabits;
