let toastId = 0;

const createToastEvent = ({ title, description, variant, duration }) => {
    const event = new CustomEvent('add-toast', {
        detail: {
            id: toastId++,
            title,
            description,
            variant,
            duration,
        },
    });
    window.dispatchEvent(event);
};

const toast = {
    success: ({ title, description, duration = 3000 }) => createToastEvent({ title, description, variant: 'success', duration }),
    error: ({ title, description, duration = 3000 }) => createToastEvent({ title, description, variant: 'error', duration }),
    info: ({ title, description, duration = 3000 }) => createToastEvent({ title, description, variant: 'info', duration }),
};

export default toast; 