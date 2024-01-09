import pfp from '../../resources/pfp.png'
import car from '../../resources/carLogo.png'
import { Avatar, Container, Typography, MenuItem, Button, IconButton } from '@mui/material'
import { FormatUnderlined, TitleOutlined } from '@mui/icons-material'

export const Logo = () => {
    return (
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

                    <img src={car} alt="" width={"8%"}  />
            </Container>
        </>
    )
}
