import React from 'react';
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs
} from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import {compose, withProps, withHandlers} from 'recompose';

const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_MAP_KEY
        }&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{height: `100%`}} />,
        containerElement: <div style={{height: `100vh`}} />,
        mapElement: <div style={{height: `100%`}} />
    }),
    withHandlers({
        onMarkerClustererClick: () => markerClusterer => {
            const clickedMarkers = markerClusterer.getMarkers();
            console.log(
                `Current clicked markers length: ${clickedMarkers.length}`
            );
            console.log(clickedMarkers);
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={3}
        defaultCenter={{lat: -9.1899672, lng: -75.015152}}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker.key}
                    position={marker.position}
                    onClick={marker.onClick}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
));

const Map = props => <MapWithAMarkerClusterer markers={props.markers} />;
export default Map;
