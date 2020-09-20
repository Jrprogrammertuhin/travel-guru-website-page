import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData';
import PhCarousel from '../Carsousel/PhCarousel';

const Booking = (props) => {
    console.log(props.key)
    // const {key} = props.data;
    // const [booking ,setBooking] = useState();
    // const boo=props.key.find(bk => bk.key === console.log(bk));
    // console.log(boo)
    // if(key === 1){
    //     const title ="ddd";
    //     setBooking(title)
    // }
    // const {key} =useParams();
    // const book = fakeData.find(bk => bk.key === key);
    return (
        <div>
            <h1>Is booking{}</h1>
            {/* <PhCarousel book={book}></PhCarousel> */}
        </div>
    );
};

export default Booking;