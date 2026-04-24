import React from 'react'
import MonthlyTable from '../components/montlyTable'
import { Box } from '@mui/material'

export default function MonthlyPage({alldata=[]}) {
  return (
    <Box style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <MonthlyTable data={alldata} limit={10}/> 
    </Box>
  )
}
