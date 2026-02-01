import HabitItem from "./HabitItem.jsx";

const RecentHabits = ({ habitLogs }) => {
  return (
    <div className="recent">
      <h2>Recent Habit Completions</h2>
      <ul className="habits">
        {habitLogs.map((item) => (
          <HabitItem key={item.id} habit={item} />
        ))}
      </ul>
    </div>
  );
};

export default RecentHabits;
