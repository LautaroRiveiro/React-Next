export default (props) => {
    return (
        <div className="equipo">
            <h2>Equipo</h2>
            <ul>
            {
                props.personas.map( (persona)=>(
                    <li key={ persona.id }>
                        <img src={persona.img} alt=""/>
                        <span>{persona.first_name} {persona.last_name}</span>
                    </li>
                ) )
            }
            </ul>

            <style jsx>
                {`
                    ul {
                        list-style-type: none;
                        padding-left: 0px;
                    }
                    li {
                        font-family: Calibri;
                        text-shadow: 1px 1px ${ props.color };
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    li span{
                        padding-left: 10px;
                    }
                    li img{
                        border: 0.5px ${ props.color } dashed;
                        border-radius: 100%;
                        padding: 3px;
                    }
                `}
            </style>

            <style jsx>
                {`
                    div{
                        background: orange;
                        border: 1px solid black;
                    }

                    .equipo{
                        padding: 0px 50px;
                    }

                    h2{
                        text-align: center;
                    }
                `}
            </style>
        </div>
    )
}