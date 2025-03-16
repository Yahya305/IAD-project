import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';

const withAuth = (allowedRoles) => (WrappedComponent) => {
    const WithAuthComponent = (props) => {
        const navigate = useNavigate();
        const { user, isLoading, fetchUser } = useUserStore();

        useEffect(() => {
            const token = localStorage.getItem('token');

            
            if (!token) {
                // No token found, redirect to login
                navigate('/');
                return;
            }
            console.log("here")

            // If no user data but we have a token, try to fetch user data
            if (!user && !isLoading) {
                fetchUser();
            }
        }, [user, isLoading, fetchUser, navigate]);

        useEffect(() => {
            // If we have user data, check role authorization
            if (user && !isLoading) {
                const userType = user.userType;

                console.log(user,"----")
                
                if (!allowedRoles.includes(userType)) {
                    // User's role is not in the allowed roles list
                    if (userType === 'STUDENT') {
                        navigate('/student/dashboard');
                    } else if (userType === 'INSTRUCTOR') {
                        console.log("yahahhahahah")
                        navigate('/teacher/dashboard');
                    } else {
                        navigate('/');
                    }
                    return;
                }
            }
        }, [user, isLoading, navigate]);

        // Show loading state while checking authentication
        if (isLoading) {
            return (
                <div className="loading-container">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            );
        }

        // If no user and not loading, don't render anything (will redirect in useEffect)
        if (!user && !isLoading) {
            return null;
        }

        // If we have a user and they're authorized, render the component
        return <WrappedComponent {...props} />;
    };

    // Display name for debugging purposes
    WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
    
    return WithAuthComponent;
};

// Helper function to get the display name of a component
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;

/*
Usage examples:

// For student-only routes:
export default withAuth(['STUDENT'])(StudentDashboard);

// For teacher-only routes:
export default withAuth(['INSTRUCTOR'])(TeacherDashboard);

// For routes accessible by both:
export default withAuth(['STUDENT', 'INSTRUCTOR'])(SharedComponent);
*/
