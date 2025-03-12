import React, { useEffect } from 'react';
import './CustomToast.css';

const CustomToast = ({ title, description, variant, duration = 3000, onClose }) => {
    useEffect(() => {
        console.log(`Toast will close in ${duration}ms`);
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`toast ${variant}`}>
            <div className="toast-content">
                <strong className="toast-title">{title}</strong>
                <span className="toast-description">{description}</span>
            </div>
        </div>
    );
};

export default CustomToast; 