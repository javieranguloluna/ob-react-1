export class Contact {
    firstName = ''
    lastName = ''
    email = ''

    setOnline = () => {}
    online = false

    constructor(firstName, lastName, email, setOnline) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.setOnline = setOnline
    }
}