// Componente CustomBtn que se muestra en varias interfaces

import { Button } from '@mui/material'
import React from 'react'

export const CustomBtn = ({ texto }) => {
    // enviamos texto como prop, para usar varias veces el botón según corresponda


    return (
        // El botón es importado de MUI, del color vino definido en el theme y es contained para que tenga fondo
        // el texto es el prop desestructurado
        <Button bgcolor='primary.main' variant='contained'>{texto}</Button>
    )
}
