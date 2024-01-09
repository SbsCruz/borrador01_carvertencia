import { Button, createTheme } from '@mui/material'
import React from 'react'

export const CustomBtn = ({texto}) => {

    
    return (
        <Button bgcolor='#8d3133' variant='contained'>{texto}</Button>
    )
}
