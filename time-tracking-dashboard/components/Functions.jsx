const SwitchActivity = (menu, activity) => {
  const timeframes = {
    daily: {
      current: activity.timeframes.daily.current,
      previous: activity.timeframes.daily.previous,
      text: "Yesterday",
    },
    weekly: {
      current: activity.timeframes.weekly.current,
      previous: activity.timeframes.weekly.previous,
      text: "Last Week",
    },
    monthly: {
      current: activity.timeframes.monthly.current,
      previous: activity.timeframes.monthly.previous,
      text: "Last Month",
    },
  };
  return timeframes[menu];
};
export { SwitchActivity };
