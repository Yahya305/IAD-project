import { create } from "zustand";
import apiClient from "../config/apiClient";

const useUserStore = create((set) => ({
    user: null, // Initial user state is null
    isLoading: false, // Loading state for initialization

    // Method to set the user
    setUser: (user) => set({ user }),

    // Method to clear the user (logout)
    clearUser: () => {
        localStorage.removeItem("token"); // Remove the token
        set({ user: null });
    },

    // Automatically initialize the user when the store is created
    fetchUser: async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            return; // No token, skip initialization
        }

        set({ isLoading: true, error: null });

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return;
            }
            // Fetch user data using the decoded token (e.g., user ID)
            const res = await apiClient.get(`/user`, {
                headers: {Authorization:`Bearer ${token}`},
            });
            const user = res.data;

            // Store the user in the Zustand store
            set({ user, isLoading: false });

            console.log("Fetched User:", user);
        } catch (error) {
            set({ user: null, isLoading: false });
        }
    },
}));

export default useUserStore;
