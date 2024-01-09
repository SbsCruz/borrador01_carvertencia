import { Container, Typography, TextField, Link } from '@mui/material'
import { CustomBtn } from '../Comunes/CustomBtn'


export const Register = () => {
    return (
        <>
            <Container maxWidth={false} sx={{
                bgcolor: "secondary.main",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
                padding: "0 20rem"

            }}>
                <Typography variant="h2" fontWeight={"bold"} textAlign={"left"}> <u>ADMINISTRADOR</u></Typography>
                <Typography variant="h4" fontWeight={"light"} margin={"1rem 28rem"} textAlign={"left"} > Regístrate o Inicia Sesión para cuidar de tu comunidad!</Typography>
                <div className="registro">
                    <Typography margin={"1rem 0"} variant="body1">Ingresa tu usuario</Typography>
                    <TextField margin={"1rem 0"} type="text" id="userName" placeholder="username" sx={{bgcolor: "white"}} />

                    <Typography margin={"1rem 0"} variant="body1">Ingresa tu contraseña</Typography>
                    <TextField margin={"1rem 0 2rem"} type="password" id="passwd" placeholder="password"  sx={{bgcolor: "white"}} />
                </div>
                <u style={{margin:"0 0 2rem"}}></u>

                <CustomBtn texto={"INGRESA"}/>
                <u style={{margin:"1rem 0 0"}}></u>

                <div className="etc">
                    <Link href="#" sx={{ color: "white", fontSize:10}}>¿Haz olvidado tu contraseña?</Link>
                    <Typography variant="body2" fontSize={10} sx={{marginBottom:"10rem"}}>
                        Revisa los términos y condiciones <Link href="#" sx={{ color: "white" , fontSize:10}}>aquí</Link>
                    </Typography>
                </div>
            </Container>
        </>
    )
}
