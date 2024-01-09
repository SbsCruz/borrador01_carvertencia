import { Container, Typography, TextField, Avatar } from '@mui/material'
import photo from '../../resources/photo.png'
import {CustomBtn}  from '../Comunes/CustomBtn'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export const FormAdd = () => {
    return (
        <>
            <Container maxWidth={false} sx={{
                bgcolor: "secondary.main",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant="h3" fontWeight={"bold"} textAlign={'center'} marginTop={5}> AÑADE UN BRIGADISTA</Typography>
                <Typography variant="h4" fontWeight={"light"} textAlign={'center'}> COMUNIDAD B</Typography>

                <Container sx={{
                    bgcolor: "secondary.main",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    my:"2rem"
                }}>
                    <div>NOMBRE</div>
                    <TextField id="name" placeholder="Nombre" variant='standard'
                        sx={{ bgcolor: "white", width: "30%", borderBlockColor: "primary.main", my:"1rem" }}
                    />

                    <div>CÉDULA</div>
                    <TextField id="ced" placeholder="Cédula" variant='standard'
                        sx={{ bgcolor: "white", width: "30%", borderBlockColor: "primary.main", my:"1rem" }}
                    />

                    <div>DIRECCIÓN</div>
                    <TextField id="dir" placeholder="Dirección" variant='standard'
                        sx={{ bgcolor: "white", width: "30%", borderBlockColor: "primary.main", my:"1rem" }}
                    />

                    <div>SECTOR O BARRIO</div>
                    <TextField id="sec" placeholder="Sector/Barrio" variant='standard'
                        sx={{ bgcolor: "white", width: "30%", borderBlockColor: "primary.main", my:"1rem" }}
                    />

                    <div className='photoDiv'>FOTOGRAFÍA</div>
                    <img src={photo} style={{width:"10%"}} />
                </Container>
                <CustomBtn texto={"AÑADIR BRIGADISTA"}/>
                <u style={{ marginBottom:"10rem" }}/>
            </Container>

        </>
    )
}
