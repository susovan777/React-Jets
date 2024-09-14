import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <em className="stats">
        Start adding some items to your packing list! 🚀
      </em>
    );

  const itemCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percentPacked = itemCount
    ? Math.round((packedCount / itemCount) * 100)
    : 0;

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
