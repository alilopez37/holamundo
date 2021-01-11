import React from 'react'

//Componente de clase
class Hola extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <h1> Hola {this.props.name}</h1>
        )}
}

export default Hola;