export default function ConvertAllDatatoMonthly(
  data
) {

  const res = {
    "January": 0,
    "February": 0,
    "March": 0,
    "April": 0,
    "May": 0,
    "June": 0,
    "July": 0,
    "August": 0,
    "September": 0,
    "October": 0,
    "November": 0,
    "December": 0,
  };

  const monthMap= {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  data.forEach((item) => {
    const createdMonth = item.created_at.split("-")[1];
    const monthName = monthMap[createdMonth];

    if (monthName) {
      res[monthName] += item.revenue;
    }
  });

  return res;
}
