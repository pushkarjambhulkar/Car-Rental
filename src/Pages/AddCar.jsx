import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import HeroPages from "../components/HeroPages";
const AddCar = () => {
    const [carInfo, setCarInfo] = useState({
        model: '',
        year: '',
        color: '',
        price: '',
        mileage: '',
        mark: '',
        doors: '',
        air: '',
        transmission: '',
        fuel: '',
    });
    const [photo, setPhoto] = useState(null); // State to store uploaded photo

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        // For demonstration, you can set the photo state directly
        setPhoto(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', carInfo, 'Photo:', photo);
        // Perform form submission logic, including sending carInfo and photo to backend
        setCarInfo({
            model: '',
            year: '',
            color: '',
            price: '',
            mileage: '',
            mark: '',
            doors: '',
            air: '',
            transmission: '',
            fuel: '',
        });
        setPhoto(null); // Reset photo state after submission
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
            fontFamily: 'Arial, sans-serif',
        },
        formContainer: {
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '800px',
            margin: ' 20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', // Two columns for larger screens
            gap: '20px',
        },
        title: {
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '35px',
        },
        formGroup: {
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            marginBottom: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
        },
        input: {
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            marginTop: '5px',
            width: '100%', // Ensure input fields take full width
        },
        uploadArea: {
            border: '2px dashed #ccc',
            borderRadius: '4px',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: 'span 2', // Span across both columns
        },
        uploadIcon: {
            fontSize: '24px',
            marginBottom: '10px',
        },
        uploadedPhoto: {
            maxWidth: '100%',
            maxHeight: '200px',
            marginTop: '10px',
            borderRadius: '4px',
        },
        buttonContainer: {
            gridColumn: 'span 2', // Span across both columns
            textAlign: 'center',
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
        },
        '@media (max-width: 768px)': {
            formContainer: {
                gridTemplateColumns: '1fr', // Single column for smaller screens
                padding: '20px',
            },
            title: {
                fontSize: '28px',
            },
            button: {
                fontSize: '16px',
            },
        },
    };

    return (
         <div>
          <HeroPages name="Add Car"/>
       
        <div style={styles.container}>
           
            <div style={styles.formContainer}>
                <div>
                    <form onSubmit={handleSubmit} className="add-car-form">
                        {['model', 'year', 'color', 'price', 'mileage'].map((field) => (
                            <div className="form-group" style={styles.formGroup} key={field}>
                                <label htmlFor={field} style={styles.label}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={field === 'year' || field === 'price' || field === 'mileage' ? 'number' : 'text'}
                                    id={field}
                                    name={field}
                                    value={carInfo[field]}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>
                        ))}
                    </form>
                </div>
                <div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="mark" style={styles.label}>Mark</label>
                        <input
                            type="text"
                            id="mark"
                            name="mark"
                            value={carInfo.mark}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="doors" style={styles.label}>Doors</label>
                        <input
                            type="text"
                            id="doors"
                            name="doors"
                            value={carInfo.doors}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="air" style={styles.label}>Air</label>
                        <input
                            type="text"
                            id="air"
                            name="air"
                            value={carInfo.air}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="transmission" style={styles.label}>Transmission</label>
                        <input
                            type="text"
                            id="transmission"
                            name="transmission"
                            value={carInfo.transmission}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="fuel" style={styles.label}>Fuel</label>
                        <input
                            type="text"
                            id="fuel"
                            name="fuel"
                            value={carInfo.fuel}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                </div>
                <div style={styles.uploadArea}>
                    {/* Drag and Drop Area for Photo Upload */}
                    <label htmlFor="photo" style={{ marginBottom: '10px' }}>
                        {photo ? 'Photo Uploaded' : 'Drag & Drop or Click to Upload Photo'}
                    </label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        style={{ display: 'none' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <label htmlFor="photo" style={{ cursor: 'pointer' }}>
                            <FaCloudUploadAlt style={styles.uploadIcon} />
                        </label>
                        {photo && (
                            <img src={URL.createObjectURL(photo)} alt="Uploaded" style={styles.uploadedPhoto} />
                        )}
                    </div>
                    {/* End of Drag and Drop Area */}
                </div>
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>Add Car</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddCar;
