import React from 'react';

const CarDetailsPage = (props) => {

    console.log(props)
    const carId = props.params.carId;

    return (
        <div>
            <h2>Car Details {carId}</h2>
            
        </div>
    );
};

export default CarDetailsPage;
