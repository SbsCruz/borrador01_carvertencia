import pfp from '../../resources/pfp.png'
import car from '../../resources/carLogo.png'
import { Avatar, Container, Typography, MenuItem, Button, IconButton } from '@mui/material'
import { FormatUnderlined, TitleOutlined } from '@mui/icons-material'

export const Banner = () => {
    return (
        <>
            <Container maxWidth={false} sx={{
                bgcolor: "primary.main",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                p: 2,
                m: 0
            }}>
                <Container sx={{
                    flex: "1",
                    display:"flex",
                    alignContent: "center",
                    alignItems: "center",
                }}>
                    <img src={car} alt="" width={"8%"} style={{marginRight:"1rem"}} />
                    Hola&nbsp;<u> nombre Admin</u>!
                </Container>
                <Avatar />
            </Container>
        </>
    )
}
