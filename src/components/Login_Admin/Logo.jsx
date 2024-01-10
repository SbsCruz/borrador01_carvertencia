// Componente Logo que se usa en el Login

import car from '../../resources/carLogo.png'
import { Container } from '@mui/material'

export const Logo = () => {
    return (

        // es la misma configuración del Componente Banner pero del color secundario definido en theme
        <>
            <Container maxWidth={false} sx={{
                bgcolor: "secondary.main",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                p: "1px 2px",
                m: 0
            }}>

                <img src={car} alt="" width={"8%"} />
            </Container>
        </>
    )
}
