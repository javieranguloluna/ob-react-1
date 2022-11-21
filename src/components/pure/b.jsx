import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';

const BComponent = ({contact}) => {
    return (
        <div>
            <button onClick={contact.setOnline}>Change State</button>
        </div>
    )
}

BComponent.protoTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default BComponent