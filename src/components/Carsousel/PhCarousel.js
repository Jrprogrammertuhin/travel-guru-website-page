import React, { useState, useEffect } from 'react';
import {  Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sajak from '../image/Image/Sajek.png';
import serimongol from '../image/Image/Sreemongol.png';
import sundorbon from '../image/Image/sundorbon.png';
import img from '../Carsousel/PhCarousel.css'
import { NavLink } from 'react-router-dom';

const PhCarousel = (props) => {
    const { name, key, description } = props.data;
    return (
        <div>
        <div className="carousel-twin">
            <div className="carousel-item1">
                <h1>{name}</h1>
                <p>{description}</p>
                <NavLink to="/destination" id="bookingBtn" class="bookingBtn btn-primary" props={key} >Booking {name}</NavLink>
            </div>
            <div className="carousel-item2">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sajak}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{name}</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={serimongol}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>{name}</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sundorbon}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>{name}</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        {/* <footer>
            <div>
                <h1>hello</h1>
            </div>
        </footer> */}
        </div>
    );
};

export default PhCarousel;