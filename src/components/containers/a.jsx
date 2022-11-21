import React, { Component } from 'react'
import { Contact } from '../../models/contact.class'
import BComponent from './../pure/b';

class AComponent extends Component {

    constructor(props) {
        super(props)
        
        this.contact = new Contact(
            'Javi',
            'Angulo',
            'javier.angulo@gmail.com',
            this.setOnline
        )

        this.state = {
            online: this.contact.online
        }

    }

    setOnline = () => {
        this.setState(prevState => {
            this.contact.online = !prevState.online
            return { online: !prevState.online }
        })
    }


    render() {
        return (
            <div>
                <h1>Name: { this.contact.lastName }, { this.contact.firstName }</h1>
                <h2>Email: { this.contact.email }</h2>
                <p>Contacto { this.contact.online ? 'En Línea' : 'No Disponible'}</p>
                <BComponent contact={ this.contact }></BComponent>
            </div>
        )
    }
}

export default AComponent
