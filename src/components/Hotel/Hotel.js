import React, { Component } from 'react';
import '../Hotel/Hotel.css';
import img1 from '../image/Image/Rectangle 1.png';
import img2 from '../image/Image/Rectangle 26.png';
import img3 from '../image/Image/Rectangle 27.png';
import img4 from '../image/Image/Rectangle 28.png';
import icon from '../image/Icon/star_1_.png';
import { Row, Col } from 'react-bootstrap';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '340px',
    height: '450px',
};

const center = {
    lat: -3.745,
    lng: -38.523
};



const Hotel = () => {


    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div className="container">
            <div className="left">
                <div className="leftImg">
                    <img src={img2} alt="" height="150px" weight="200px" />
                </div>
                <div className="detail">
                    <h1>Light Bright air stylish apt & safe peaceful stay</h1>
                    <h4>4 guests 2 bedrooms 2 beds 2 bath Wifi Air condition fexibility availiable</h4>
                    <div className="icon">
                        <div className="iconImage">
                            <img src={icon} alt="" />
                        </div>
                        <p>4.9(25)</p> <p>$ 34 Night</p> <p>$ 168 Total</p>
                    </div>
                </div>
            </div>
            <div className="left">
                <div className="leftImg">
                    <img src={img3} alt="" height="150px" weight="200px" />
                </div>
                <div className="detail">
                    <h1>Apartment in Lost Panorama</h1>
                    <h4>4 guests 2 bedrooms 2 beds 2 bath Wifi Air condition fexibility availiable</h4>
                    <div className="icon">
                        <div className="iconImage">
                            <img src={icon} alt="" />
                        </div>
                        <p>4.8(10)</p> <p>$ 34 Night</p> <p>$ 150 Total</p>
                    </div>
                </div>
            </div>
            <div className="left">
                <div className="leftImg">
                    <img src={img4} alt="" height="150px" weight="200px" />
                </div>
                <div className="detail">
                    <h1>AR Lounge & Pool (r&r + b&b</h1>
                    <h4>4 guests 2 bedrooms 2 beds 2 bath Wifi Air condition Kitchen Cencellation fexibility availiable</h4>
                    <div className="icon">
                        <div className="iconImage">
                            <img src={icon} alt="" />
                        </div>
                        <p>4.8(25)</p> <p>$ 34 Night</p> <p>$ 168 Total</p>
                    </div>
                </div>
            </div>
            <div className="map">
               <div>
               <LoadScript
                    googleMapsApiKey="AIzaSyAgnOnKORf14jDDL7Y3khi8aBjiAi_Qtrs"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </LoadScript>
               </div>
            </div>
        </div>
    );

};

// export default Hotel;

export default React.memo(Hotel)

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyAgnOnKORf14jDDL7Y3khi8aBjiAi_Qtrs")
//   })(Hotel)

// export default GoogleApiWrapper({
//     apiKey: 'TOKEN HERE'
// })(Hotel);