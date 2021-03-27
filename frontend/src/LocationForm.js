import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LocationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.autocomplete = null
    }

    componentDidMount() {
        //this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        //this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        console.log(this.state.address)
        return (
            <Form>
                <Form.Control 
                name={'address'}
                value={this.state.address} 
                placeholder="Your starting location" 
                onChange={this.handleChange}/>
            </Form>
        );
    }
    
}

export default LocationForm;