// Componente de Búsqueda y Visualización de Birgadistas

import { CustomBtn } from '../Comunes/CustomBtn'
import Typography from '@mui/material/Typography'
import { Banner } from '../Comunes/Banner'
import { Container, Link } from '@mui/material'

export const QRCar = () => {
    return (
        <>
            <Banner />
            {/* Definimos un Container que albergue todo el componente */}
            <Container maxWidth={false} sx={{
                bgcolor: "secondary.main",          // Fondo de color navy blue
                color: "white",                     // letras blancas
                display: "flex",                    // usaremos flex
                flexDirection: "column",            // la direcicón del flex será vertical
                height: "100vh",                     // para que el fondo se complete
                alignItems: "center",               // items alineado al centro
                p: 2,                               // padding general de 16 pixeles
                m: 0                                // sin margen
            }}>
                {/* Titulo y subtitulo */}
                {/* Definimos un h3 en negrita, alineado al centro el título del componente */}
                <Typography variant="h3" fontWeight={"bold"} textAlign={'center'}> QR DE SU AUTOMÓVIL</Typography>


                {/* Se tiene el componete botón, el cual es customizable dado que se usa en varias interfaces y tiene el mismo estilo */}
                <CustomBtn texto={"AGREGAR AUTOMÓVIL"} ruta={"/addCar"} />


            </Container>
        </>
    )
}

