import photo from '../../resources/photo.png'
import { BtnAdd } from '../ListaBrig/BtnAdd'
export const FormAdd = () => {
    return (
        <>
        <h2>AÑADE UN BRIGADISTA</h2>
        <h3>COMUNIDAD B</h3>

        <div className="data">
            <div>NOMBRE</div>
            <input type="text" name="name" id="name" placeholder='nombre'/>
            <div>CÉDULA</div>
            <input type="text" name="ced" id="ced" placeholder='cedula'/>
            <div>DIRECCIÓN</div>
            <input type="text" name="dir" id="dir" placeholder='direccion'/>
            <div>SECTOR O  BARRIO</div>
            <input type="text" name="sec" id="sec" placeholder='sector'/>
            <div className='photoDiv'>FOTOGRAFÍA</div>
            <img src={photo} alt="default Picture" />
        </div>

        <BtnAdd/>
        </>
    )
}
