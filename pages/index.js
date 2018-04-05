import Saludos from '../components/Saludos';
import {local, visitante} from '../static/data/jugadores';
import Head from '../components/Head';
import Navbar from '../components/Navbar';

export default () => (
    <div>
        <Head titulo="Equipos"/>
        <Navbar/>
        <h1 style={ {textAlign:"center"} }>Equipos</h1>
        <hr/>
        <div style={{ display:"flex", justifyContent: "space-around" }}>
            <Saludos className="equipo" personas={local} color="blue" />
            <Saludos className="equipo" personas={visitante} color="green" />
        </div>

        <style jsx>
            {`
            `}
        </style>
    </div>
)