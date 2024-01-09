import pfp from '../../resources/pfp.png'
import { CustomBtn } from '../Comunes/CustomBtn'
import Typography from '@mui/material/Typography'
import ListSubheader from '@mui/material/ListSubheader'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { List, Grid, ListItem, ListItemText, Avatar, Container, IconButton, TextField } from '@mui/material'

export const ListaBrig = () => {
    return (
        <>
            <Container maxWidth={false} sx={{
                bgcolor: "secondary.main",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                p: 2,
                m: 0
            }}>
                <Typography variant="h3" fontWeight={"bold"} textAlign={'center'}> BRIGADISTAS</Typography>
                <Typography variant="h4" fontWeight={"light"} textAlign={'center'}> COMUNIDAD B</Typography>

                <TextField
                    id="1"
                    label="Busca Brigadistas"
                    variant='standard'
                    sx={{bgcolor:"white", width:"30%", borderBlockColor:"primary.main"}}
                />
                <List>
                    <ListItem>
                        <Avatar />
                        <ListItemText sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            mx: 6,
                        }}
                            primary="Nombre Brigadista A"
                        />
                        <MoreVertIcon />
                    </ListItem>
                    <ListItem>
                        <Avatar />
                        <ListItemText sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            mx: 6,
                        }}
                            primary="Nombre Brigadista B"
                        />
                        <MoreVertIcon />
                    </ListItem>
                    <ListItem>
                        <Avatar />
                        <ListItemText sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            mx: 6,
                        }}
                            primary="Nombre Brigadista C"
                        />
                        <MoreVertIcon />
                    </ListItem>
                </List>

                <CustomBtn texto={"AÑADIR BRIGADISTA"}/>

                <u style={{margin:"3rem 0 10rem 0", fontSize:"10px"}}>O selecciona de otra comnunidad</u>

            </Container>
        </>
    )
}

