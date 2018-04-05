import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Calculadora from '../components/Calculadora';

export default ()=>(
    <div>
        <Head titulo="Calculadora"/>
        <Navbar/>
        <h3>Calculadora</h3>
        <hr/>
        
        <Calculadora/>

    </div>
)