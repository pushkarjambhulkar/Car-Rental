import React from 'react';
import { CAR_DATA } from '../components/CarData';
import './Cardata.css';

const Cardata = () => {
    const cars = CAR_DATA.flat();

    return (
        <div className="car-data-container">
            {cars.map((car, index) => (
                <div key={index} className="car-item">
                    <img src={car.img} alt={car.model} className="car-image" />
                    <h2>{car.name}</h2>
                    <p><strong>Price:</strong> ${car.price}</p>
                    <p><strong>Year:</strong> {car.year}</p>
                    <p><strong>Doors:</strong> {car.doors}</p>
                    <p><strong>Transmission:</strong> {car.transmission}</p>
                    <p><strong>Fuel:</strong> {car.fuel}</p>
                </div>
            ))}
        </div>
    );
};

export default Cardata;
