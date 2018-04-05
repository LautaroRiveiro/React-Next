import Link from 'next/link';

const menu = [
    {
        id:1,
        url:'/',
        nombre:'Home'
    },
    {
        id:2,
        url:'/calculadora',
        nombre:'Calculadora'
    }
]

export default ()=>(
    <nav>
        <div className="nav-wrapper">
        <Link href="/"><a className="brand-logo">ÇürS0</a></Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            {
                menu.map( (opcion)=>{return(
                    <li key={ opcion.id }>
                        <Link href={ opcion.url }><a> { opcion.nombre } </a></Link>
                    </li>
                )} )
            }
        </ul>
        </div>
    </nav>
)