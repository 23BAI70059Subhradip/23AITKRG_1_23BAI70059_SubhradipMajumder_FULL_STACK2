import { Alert } from '@mui/material'
import React from 'react'

export default function AlertMessage({type, title}) {
  return (
    <Alert variant="filled" severity={type}>
      {title}
    </Alert>
  )
}
