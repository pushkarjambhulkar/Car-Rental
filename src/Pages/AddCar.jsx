import React, { useState } from 'react';
import './AddCar.css';

const AddCar = () => {
    const [carInfo, setCarInfo] = useState({
        model: '',
        year: '',
        color: '',
        price: '',
        mileage: '',
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setCarInfo(prevState => ({
            ...prevState,
            photo: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', carInfo);
        setCarInfo({
            model: '',
            year: '',
            color: '',
            price: '',
            mileage: '',
            photo: null,
        });
    };

    return (
        <div className="add-car-container">
            <h2>Add New Car</h2>
            <form onSubmit={handleSubmit} className="add-car-form">
                <label>
                    Model:
                    <input type="text" name="model" value={carInfo.model} onChange={handleChange} required className="form-input" />
                </label>
                <br />
                <label>
                    Year:
                    <input type="number" name="year" value={carInfo.year} onChange={handleChange} required className="form-input" />
                </label>
                <br />
                <label>
                    Color:
                    <input type="text" name="color" value={carInfo.color} onChange={handleChange} required className="form-input" />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="price" value={carInfo.price} onChange={handleChange} required className="form-input" />
                </label>
                <br />
                <label>
                    Mileage:
                    <input type="number" name="mileage" value={carInfo.mileage} onChange={handleChange} required className="form-input" />
                </label>
                <br />
                <label>
                    Photo:
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="form-input" />
                </label>
                <br />
                <button type="submit" className="submit-button">Add Car</button>
            </form>
        </div>
    );
};

export default AddCar;
