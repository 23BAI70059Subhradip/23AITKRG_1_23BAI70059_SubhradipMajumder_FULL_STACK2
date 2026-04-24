import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Colors from "../constants/colors";
import { convertAllDataToWeekDays } from "../utils/convertAllDatatoWeekDays";

export default function WeeklyPieChart({ data = [] }) {

  const [weeklyData, setWeeklyData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

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

    const formatted = orderedDays
      .slice(0, todayIndex + 1)
      .map((day, index) => ({
        id: index,
        value: converted[day]?.total || 0,
        label: day,
        fullData: converted[day] || { buy: 0, sell: 0, total: 0 },
      }));

    setWeeklyData(formatted);
  }, [data]);

  const handleClick = (event, item) => {
    const clicked = weeklyData[item.dataIndex];
    setSelectedDay(clicked);
    console.log("Clicked on:", clicked);
  };

  return (
    <Box>
      <PieChart
        series={[
          {
            data: weeklyData,
            innerRadius: 50,
            outerRadius: 90,
            paddingAngle: 3,
            cornerRadius: 5
          },
        ]}
        colors={[
          Colors.primary,
          Colors.success,
          Colors.warning,
          Colors.info,
          Colors.secondary,
          "#ac52faff",
          "#25ffc1ff",
        ]}
        width={350}
        height={300}
        onItemClick={handleClick}
      />
    </Box>
  );
}
