import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Colors from "../constants/colors";
import { convertAllDataToWeekDays } from "../utils/convertAllDatatoWeekDays";


// data == alldata 
export default function WeekBarChart({ data = [] }) {

  const [chartData, setChartData] = useState({
    labels: [],
    buy: [],  
    sell: [],
  });

  useEffect(() => {

    const converted = convertAllDataToWeekDays(data);

    const todayIndex = new Date().getDay();

    const orderedDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const labels = [];
    const buy = [];
    const sell = [];

    orderedDays.slice(0, todayIndex + 1).forEach((day) => {

      const dayBuy = converted[day]?.buy || 0;
      const daySell = converted[day]?.sell || 0;

      labels.push(day);
      buy.push(dayBuy);
      sell.push(daySell);

    });

    setChartData({ labels, buy, sell });

  }, [data]);

  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: chartData.labels,
        },
      ]}
      series={[
        {
          label: "Buy",
          data: chartData.buy,
          color: Colors.warning || "#ed6c02",
        },
        {
          label: "Sell",
          data: chartData.sell,
          color: Colors.success || "#1976d2",
        },
      ]}
      sx={{
        "& .MuiBarElement-root": {
          borderRadius: 6,
        },
      }}
    />
  );
}