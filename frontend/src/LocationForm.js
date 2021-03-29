import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const google = window.google;

class LocationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handleChange = this.handleChange.bind(this)
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.autocomplete = null
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    }

    initialState() {
        return {
          name: '',
          street_address: '',
          city: '',
          state: '',
          zip_code: '',
          googleMapLink: ''
        }
      }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components
        this.setState({
          name: addressObject.name,
          street_address: `${address[0].long_name} ${address[1].long_name}`,
          city: address[4].long_name,
          state: address[6].short_name,
          zip_code: address[8].short_name,
          googleMapLink: addressObject.url
        })
      }

    render() {
        console.log(this.state.street_address)
        return (
            <form onSubmit={this.handleSubmit}>
                <input id="autocomplete"
                className="input-field"
                ref="input"
                type="text"/>
            </form>
        );
    }
    
}

export default LocationForm;