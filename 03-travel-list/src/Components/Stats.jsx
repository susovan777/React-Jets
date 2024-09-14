import React from "react";

const Stats = ({ items }) => {
  const itemCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedCount / itemCount) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${itemCount} items on your list, and you already packed ${packedCount} (${percentPacked}%)`}
      </em>
    </footer>
  );
};

export default Stats;
