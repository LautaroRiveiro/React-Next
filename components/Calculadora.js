export default class Calculadora extends React.Component{
    
    imprimeNumero = (numero) => {
        if(this.respuestaOperador){
            this.respuestaOperador = false;
            this.setState({resultado: numero});    
        }
        else{
            this.setState({resultado: this.state.resultado + numero});
        }
    }

    operador = (op) => {
        this.operandoAuxiliar = this.state.resultado;
        console.info(this.operandoAuxiliar)
        this.operadorElegido = op;
        this.respuestaOperador = true;
    }

    resuelve = () => {
        const cadena = this.operandoAuxiliar + this.operadorElegido + this.state.resultado;
        console.info(cadena);
        this.setState({resultado: String(eval(cadena)) });
        this.respuestaOperador = true;
    }

    state = {
        resultado: ""
    }
    
    operandoAuxiliar;
    operadorElegido;
    respuestaOperador;

    render(){

        const imprimeNumero = ()=>console.info("2")

        return (
            <div>
                <div id="calculadora">
                    <div className="z-depth-1 flow-text white right-align visor"> { this.state.resultado || "0" } </div>
                    <div className="container">
                        <div className="row">
                            <div className="col s7">
                                <div className="row">
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('7') }>7</a>
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('8') }>8</a>
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('9') }>9</a>
                                </div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('4') }>4</a>
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('5') }>5</a>
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('6') }>6</a>
                                </div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('1') }>1</a>
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('2') }>2</a>
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=>this.imprimeNumero('3') }>3</a>
                                </div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn boton" onClick={ ()=> this.state.resultado == "" ? false : this.imprimeNumero('0') }>0</a>
                                    <a className="waves-effect waves-light btn blue boton" onClick={ ()=> this.state.resultado.includes('.') ? false : this.imprimeNumero('.') }>.</a>
                                    <a className="waves-effect waves-light btn blue boton" onClick={ ()=> this.resuelve() }>=</a>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="row" style={{height:"100%"}} id="operadores">
                                    <div className="col s6">
                                        <a className="waves-effect waves-light btn orange boton" onClick={ ()=>this.setState({resultado:""}) }>C</a>
                                        <a className="waves-effect waves-light btn red boton" onClick={ ()=>{this.operador('-')} }>-</a>
                                        <a className="waves-effect waves-light btn red boton" style={{ flexGrow: 100 }} onClick={ ()=>{this.operador('+')} }>+</a>
                                    </div>
                                    <div className="col s6">
                                        <a className="waves-effect waves-light btn red boton" onClick={ ()=>{this.operador('*')} }>*</a>    
                                        <a className="waves-effect waves-light btn red boton" onClick={ ()=>{this.operador('*')} }>*</a>
                                        <a className="waves-effect waves-light btn red boton" onClick={ ()=>{this.operador('/')} }>/</a>
                                        <a className="waves-effect waves-light btn red boton" onClick={ ()=>{this.operador('/')} }>/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    #calculadora{
                        margin: 0 auto;
                        width: 25%;
                        background: silver;
                        border: 2px grey solid;
                    }
                    .visor{
                        padding-right: 5px;
                        padding-left: 5px;
                    }
                    .boton{
                        margin: 2px;
                        flex-grow: 1;
                        text-align: center;
                        padding: 0;
                    }
                    .row{
                        margin: 0;
                        display: flex;
                    }
                    .container{
                        width: 100%;
                        padding: 3px;
                    }
                    .col{
                        padding: 0;
                    }
                    #operadores div{
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                    }
                `}
                </style>
            </div>
        )
    }
}