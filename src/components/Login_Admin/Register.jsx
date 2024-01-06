import { BtnIngresa } from "./BtnIngresa"

export const Register = () => {
    return (
        <>
            <div className="container_body">
                <h2 className='titleApp'>
                    ADMINISTRADOR
                </h2>
                <div className="adviser">Regístrate o Inicia Sesión para cuidar de tu comunidad! </div>
                <div className="registro">
                    <p>Ingresa tu usuario</p>
                    <input type="text" name="userName" id="userName" placeholder="username" />
                    <p>Ingresa tu contraseña</p>
                    <input type="text" name="passwd" id="passwd" placeholder="password" />
                </div> 
                <BtnIngresa />
                <div className="etc">
                    <a href="#">¿Haz olvidado tu contraseña?</a>
                    <p>
                        Revisa los términos y condiciones <a href="#">aquí</a>
                    </p>
                </div>
            </div>
        </>
    )
}
