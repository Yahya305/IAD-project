import React, { useState, useEffect, useRef } from 'react';
import CustomToast from './CustomToast';

const Toaster = () => {
    const [toasts, setToasts] = useState([]);
    const toastIds = useRef(new Set());

    useEffect(() => {
        const handleAddToast = (event) => {
            const { detail } = event;
            if (!toastIds.current.has(detail.id)) {
                setToasts((prevToasts) => [...prevToasts, detail]);
                toastIds.current.add(detail.id);
            }
        };

        window.addEventListener('add-toast', handleAddToast);

        return () => {
            window.removeEventListener('add-toast', handleAddToast);
        };
    }, []);

    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
        toastIds.current.delete(id);
    };

    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <CustomToast
                    key={toast.id}
                    title={toast.title}
                    description={toast.description}
                    variant={toast.variant}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
};

export default Toaster;