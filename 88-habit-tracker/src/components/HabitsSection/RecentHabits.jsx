import HabitItem from "./HabitItem.jsx";

const RecentHabits = ({ habitLogs, onEdit, onDelete }) => {
  return (
    <div className="recent">
      <h2>Recent Habit Completions</h2>

      {habitLogs.length !== 0 ? (
        <ul className="habits">
          {habitLogs.map((item) => (
            <HabitItem
              key={item.id}
              habit={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <div className="no-habit">
          <p>No habit added. Add habit from the above button.</p>
        </div>
      )}
    </div>
  );
};

export default RecentHabits;
