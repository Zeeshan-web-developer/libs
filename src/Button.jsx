import React from 'react';

function Button({ title, onClick, variant = 'primary' }) {
  const styles = {
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    primary: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white'
    }
  };

  return (
    <button 
      style={{...styles.button, ...styles[variant]}}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;