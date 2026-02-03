export const getWeeklyStats = (logs) => {
  const now = new Date();
  // Calculate the date 7 days ago
  const lastWeekDate = new Date();
  lastWeekDate.setDate(now.getDate() - 7);

  // 1. Filter the logs to get only the last week's data
  const lastWeekLogs = logs.filter((log) => {
    const logDate = new Date(log.date);
    return logDate >= lastWeekDate && logDate <= now;
  });

  // 2. Count the categories from those logs
  const counts = lastWeekLogs.reduce((acc, log) => {
    log.categories.forEach((category) => {
      // If category exists in accumulator, increment; otherwise set to 1
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  return counts;
};
