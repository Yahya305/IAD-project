import React, { useEffect } from "react";
import useUserStore from "./store/userStore";
import Toaster from "./components/CustomToast/Toaster";
import Router from "./routes/route";

const App = () => {
    const { fetchUser } = useUserStore();
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <Router />
            <Toaster />
        </>
    );
};

export default App;
