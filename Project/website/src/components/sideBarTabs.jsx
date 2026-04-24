import { Button } from '@mui/material'
import React from 'react'
import Colors from '../constants/colors'
import { Link } from 'react-router-dom'

export default function SideBarTabs({title, path}) {

    return (
    <Button component={Link} to={path || '#'} sx={{
        '&:hover': {
            backgroundColor: Colors.primary_light,
            color: 'white'
        }, 
        mx: 1,
        textTransform: 'none'
    }}>
        {title}
    </Button>
  )
}
