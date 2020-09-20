import React, { useState } from 'react';
import fakeData from '../FakeData/FakeData';
import PhCarousel from '../Carsousel/PhCarousel';

const Data = () => {
    const allData = fakeData;
    const [data, setData] = useState(allData);

    return (
        <div>
            {
                data.map(data => <PhCarousel data={data}></PhCarousel>)
            }
        </div>
    );
};

export default Data;