import HabitItem from "./HabitItem.jsx";

const RecentHabits = () => {
  return (
    <div className="recent">
      <h2>Recent Habit Completions</h2>
      <ul className="habits">
        <HabitItem />
      </ul>
    </div>
  );
};

export default RecentHabits;
