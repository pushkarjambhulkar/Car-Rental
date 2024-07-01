import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { FaUserCircle } from 'react-icons/fa';
import HeroPages from "../components/HeroPages";

export default class Profile extends Component {
  state = {
    name: '',
    email: '',
    mobile: '',
    address: '',
    age: '',
    role: '',
    avatar: null,
    avatarPreview: '',
    scale: 1,
    isEditing: false,
  };

  handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar' && files[0]) {
      this.setState({ avatar: files[0], isEditing: true });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleScaleChange = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handleSave = () => {
    if (this.editor) {
      const canvas = this.editor.getImage();
      const avatarPreview = canvas.toDataURL();
      this.setState({ avatarPreview, isEditing: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, e.g., make API calls
    console.log(this.state);
    // Reset form fields or show success message
  };

  setEditorRef = (editor) => (this.editor = editor);

  render() {
    const { name, email, mobile, address, age, role, avatar, scale, isEditing, avatarPreview } = this.state;

    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
      },
      profileContainer: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
        margin: '120px 20px',
      },
      title: {
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '35px',
      },
      formGroup: {
        marginBottom: '20px',
      },
      label: {
        display: 'block',
        marginBottom: '10px',
        fontSize: '16px',
      },
      input: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
      },
      error: {
        color: 'red',
        fontSize: '14px',
        marginTop: '5px',
      },
      button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '18px',
        marginTop: '10px',
      },
      buttonSecondary: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '18px',
        marginTop: '10px',
      },
      avatarGroup: {
        textAlign: 'center',
        marginBottom: '20px',
      },
      avatarLabel: {
        cursor: 'pointer',
      },
      avatarPlaceholder: {
        display: 'inline-block',
        width: '100px',
        height: '100px',
        border: '1px solid #ddd',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        position: 'relative',
      },
      profileAvatar: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      editorControls: {
        marginTop: '10px',
      },
      editorControlsLabel: {
        display: 'block',
        marginBottom: '5px',
      },
      '@media (max-width: 768px)': {
        profileContainer: {
          padding: '20px',
        },
        title: {
          fontSize: '28px',
        },
        button: {
          fontSize: '16px',
        },
        buttonSecondary: {
          fontSize: '16px',
        },
      },
    };

    return (
     <div>
        <HeroPages name="Profile" />
      
      <div style={styles.container}>
        
    
        <div style={styles.profileContainer}>
          
          <form onSubmit={this.handleSubmit}>
            <h2 style={styles.title}>Profile</h2>
            <div style={{ ...styles.formGroup, ...styles.avatarGroup }}>
              {isEditing ? (
                <div>
                  <AvatarEditor
                    ref={this.setEditorRef}
                    image={avatar}
                    width={100}
                    height={100}
                    border={50}
                    borderRadius={50}
                    scale={scale}
                  />
                  <div style={styles.editorControls}>
                    <label style={styles.editorControlsLabel}>
                      Zoom:
                      <input
                        name="scale"
                        type="range"
                        onChange={this.handleScaleChange}
                        min="1"
                        max="2"
                        step="0.01"
                        defaultValue="1"
                      />
                    </label>
                    <button type="button" style={styles.button} onClick={this.handleSave}>
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <label htmlFor="avatar" style={styles.avatarLabel}>
                  <div style={styles.avatarPlaceholder}>
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Avatar Preview" style={styles.profileAvatar} />
                    ) : (
                      <FaUserCircle size={100} color="#ccc" />
                    )}
                  </div>
                </label>
              )}
              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={this.handleChange}
                style={{ display: 'none' }}
              />
            </div>
            {['name', 'email', 'mobile', 'address', 'age'].map((field) => (
              <div className="form-group" style={styles.formGroup} key={field}>
                <label htmlFor={field} style={styles.label}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'age' ? 'number' : 'text'}
                  id={field}
                  name={field}
                  value={this.state[field]}
                  onChange={this.handleChange}
                  style={styles.input}
                />
              </div>
            ))}
            <div className="form-group" style={styles.formGroup}>
              <label htmlFor="role" style={styles.label}>Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={this.handleChange}
                style={styles.input}
              >
                <option value="">Select a role</option>
                <option value="I want to rent a car">I want to rent a car</option>
                <option value="Register Own car for rent">Register Own car for rent</option>
              </select>
             
            </div>
            <button type="submit" style={styles.button}>Update Profile</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}
