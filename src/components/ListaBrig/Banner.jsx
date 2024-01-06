import pfp from '../../resources/pfp.png'
import car from '../../resources/carLogo.png'

export const Banner = () => {
    return (
        <>
        <div className='container'> 

        <div className="info">
        <img id='carLogo' src={car} alt="Logo" />
            <span>
                Hola <span>nombreAdmin</span>!
            </span>

            <img src={pfp} alt="profile picture" />

        </div>
        </div>
        </>
    )
}
