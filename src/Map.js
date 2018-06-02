import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {GoogleApiWrapper} from 'google-maps-react';
import './css/main.css';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentLocation: this.props.initialCenter}
    }

    componentDidMount() {
        this.props.eventLocation(this.props.initialCenter);
        this.loadMap();
    }

    loadMap() {
        if (this.props) {
            const maps = window.google.maps;

            const mapRef = this.refs.map;
            const boxRef = this.refs.place;
            const nodeMap = ReactDOM.findDOMNode(mapRef);

            let {zoom} = this.props;
            const {lat, lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            });
            this.map = new maps.Map(nodeMap, mapConfig);

            let marker = {
                setMap: () => {
                }
            };
            marker.setMap(null);
            marker = new maps.Marker({map: this.map});

            marker.setVisible(true);
            marker.setPosition(center);

            if (this.props.forCreate) {
                let searchBox = new google.maps.places.SearchBox(boxRef);

                searchBox.addListener('places_changed', () => {
                    let places = searchBox.getPlaces();
                    if (places.length < 1)
                        return;
                    let place = places[0];
                    marker.setMap(null);
                    marker = new maps.Marker({map: this.map});
                    this.map.setZoom(zoom);
                    this.map.setCenter(place.geometry.location);

                    marker.setPlace({
                        placeId: place.place_id,
                        location: place.geometry.location
                    });
                    marker.setVisible(true);

                    let location = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    };
                    this.props.eventLocation(location);
                });
            }
        }
    }

    render() {
        // const style = {
        //     width: '350px',
        //     height: '200px'
        // };
        return (
            <div className='outer'>
                <p className='inner'>Location:</p>
                <input className='mapsInput inner' name='place' ref='place' style={{display: this.props.forCreate ? 'block' : 'none'}}/>
                <div className='map inner' ref='map'>loading</div>
            </div>
        )
    }
}

Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
};

Map.defaultProps = {
    zoom: 13,
    // Kiev, by default
    initialCenter: {
        lat: 50.4501,
        lng: 30.523400000000038
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBtsuNnTp3gDbi2b36116DsLA3OAwZm9g4'
})(Map)