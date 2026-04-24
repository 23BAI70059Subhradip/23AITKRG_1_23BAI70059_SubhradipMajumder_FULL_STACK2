
export function convertAllDataToWeekDays(data) {
  const weekDays = {
    Monday: { buy: 0, sell: 0, total: 0 },
    Tuesday: { buy: 0, sell: 0, total: 0 },
    Wednesday: { buy: 0, sell: 0, total: 0 },
    Thursday: { buy: 0, sell: 0, total: 0 },
    Friday: { buy: 0, sell: 0, total: 0 },
    Saturday: { buy: 0, sell: 0, total: 0 },
    Sunday: { buy: 0, sell: 0, total: 0 },
  };

  data.forEach((item) => {
    const date = new Date(item.created_at);
    const dayOfWeek = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Add total revenue
    weekDays[dayOfWeek].total += item.revenue;

    // Check type
    if (item.Type === "Buy") {
      weekDays[dayOfWeek].buy += item.revenue;
    }

    if (item.Type === "Sell") {
      weekDays[dayOfWeek].sell += item.revenue;
    }
  });
  return weekDays;
}
