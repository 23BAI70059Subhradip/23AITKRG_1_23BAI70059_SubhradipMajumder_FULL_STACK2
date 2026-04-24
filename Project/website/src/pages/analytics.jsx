import { Box, Typography } from '@mui/material'
import React from 'react'
import RevenueCard from '../components/revcard'
import WeeklyPieChart from '../components/weekPie'
import WeekBarChart from '../components/weekBarChart'
import DayTable from '../components/dayTable'
import MonthlyTable from '../components/montlyTable'

export default function AnalyticsPage({alldata = [], totalRevenue = 0, totalProfit = 0, totalExpenses = 0}) {
  return (
    <Box style={{display: "flex", flexDirection: "column", width: "100%"}}>
        {/* Center Content */}
    
    
        <Box style={{display: "flex", flexDirection: "row", gap: 5, marginTop: 10}}>
            <RevenueCard revenue={totalRevenue} title="Total Revenue" type="info"/> 
            <RevenueCard revenue={totalProfit} title="Total Profit" type="warning"/>
            <RevenueCard revenue={totalExpenses} title="Total Expenses" type="error"/>
        </Box>
        
        {/* Charts */}
        <Box style={{display:"flex", flexDirection: "column", margin: 10}}>
            <Typography variant="h6" style={{marginRight:'auto', marginLeft: 'auto'}}>Weekly Overview</Typography>
            <Box style={{display:"flex", flexDirection: "row"}}>
            <WeeklyPieChart data={alldata}/>
            <WeekBarChart data={alldata} />
            </Box>
        </Box>

        <Box style={{display:"grid", margin: 10, gridTemplateColumns: "1fr 1fr", gap: 10}}>
            <DayTable data={alldata}/>
            <MonthlyTable data={alldata}/>
        </Box>

    </Box>
  )
}
