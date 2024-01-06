import pfp from '../../resources/pfp.png'
import { BtnAdd } from './BtnAdd'

export const ListaBrig = () => {
    return (
        <>
        <div className='container_body'>

        <h2>BRIGADISTAS</h2>
        <h3>COMUNIDAD B</h3>
        <input className='search' type="search" />
        <ul className='lista_users'>
            <li className='users'>
                <img src={pfp} alt="pfpBrigadista" />
                <h4>Nombre Brigadista A</h4>
                <span class="ham-menu"></span>

            </li>
            <li className='users'>
                <img src={pfp} alt="pfpBrigadista" />
                <h4>Nombre Brigadista B</h4>
                <span class="ham-menu"></span>
            </li>
            <li className='users'>
                <img src={pfp} alt="pfpBrigadista" />
                <h4>Nombre Brigadista C</h4>
                <span class="ham-menu"></span>
            </li>
        </ul>
        <BtnAdd/>
        <a href="#">O seleccionade otra comunidad</a>
        </div>
        </>
    )
}
