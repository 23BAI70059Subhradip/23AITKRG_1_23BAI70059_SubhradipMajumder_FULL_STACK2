import { Box } from '@mui/material'
import React from 'react'
import DayTable from '../components/dayTable'

export default function DailyPage({alldata = []}) {
  return (
    <Box style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <DayTable data={alldata} limit={10}/> 
    </Box>
  )
}
