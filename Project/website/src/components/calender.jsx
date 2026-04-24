import { Button } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'

// export default function Calender() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs} style={{margin: 0}}>
//         <DateCalendar />
//     </LocalizationProvider>
//   )
// }


export default function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar/>
    </LocalizationProvider>
  );
}
