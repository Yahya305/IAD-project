import { create } from "zustand";

const useGlobalVarsStore = create((set) => ({
    isSidebarOpen: true,
    setSidebarOpen: (state) => set(() => ({ isSidebarOpen: state })),
}));

export default useGlobalVarsStore;
