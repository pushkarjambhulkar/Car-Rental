import React, { useState } from 'react';
import './History.css';
import BenzImage from '../images/cars-big/benz.jpg'; // Import the image
import HeroPages from "../components/HeroPages";

const BookingHistory = () => {
    // Sample data with integrated owner information and image paths
    const initialBookingHistory = [
        {
            id: 1,
            brand: 'Mercedes-Benz',
            model: 'E-Class',
            year: 2023,
            color: 'Black',
            price: '$50,000',
            owner: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                mobile: '+1 123 456 7890',
                address: '123 Main Street, Anytown, USA'
            },
            pickup: 'Downtown',
            dropoff: 'Airport',
            image: BenzImage // Import image path
        },
        {
            id: 2,
            brand: 'BMW',
            model: 'X5',
            year: 2022,
            color: 'White',
            price: '$60,000',
            owner: {
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
                mobile: '+1 234 567 8901',
                address: '456 Elm Street, Anytown, USA'
            },
            pickup: 'Suburb',
            dropoff: 'City Center',
            image: BenzImage // Import image path
        }
        // Add more car objects as needed
    ];

    const [bookingHistory, setBookingHistory] = useState(initialBookingHistory);

    const removeBooking = (id) => {
        setBookingHistory(bookingHistory.filter(booking => booking.id !== id));
    };

    return (
        <div>

        <HeroPages name="History"/>
        <div className="booking-history-container">
            {bookingHistory.map((booking) => (
                <div key={booking.id} className="booking-item">
                    <div className="booking-details">
                        <p><strong>ID:</strong> {booking.id}</p>
                        <p><strong>Brand:</strong> {booking.brand}</p>
                        <p><strong>Model:</strong> {booking.model}</p>
                        <p><strong>Year:</strong> {booking.year}</p>
                        <p><strong>Color:</strong> {booking.color}</p>
                        <p><strong>Price:</strong> {booking.price}</p>
                        <p><strong>Pickup Location:</strong> {booking.pickup}</p>
                        <p><strong>Drop-off Location:</strong> {booking.dropoff}</p>
                        <div>
                            <p><strong>Owner Name:</strong> {booking.owner.name}</p>
                            <p><strong>Email:</strong> {booking.owner.email}</p>
                            <p><strong>Mobile:</strong> {booking.owner.mobile}</p>
                            <p><strong>Address:</strong> {booking.owner.address}</p>
                        </div>
                    </div>
                    <div className="car-image">
                        <img src={booking.image} alt={`${booking.brand} ${booking.model}`} />
                    </div>
                    <button className="remove-button" onClick={() => removeBooking(booking.id)}>Remove History</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default BookingHistory;
