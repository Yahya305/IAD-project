import React, { useEffect } from "react";
import Router from "./routes/route";
import { Toaster } from "react-hot-toast";
import useUserStore from "./store/userStore";

const App = () => {
    const { fetchUser } = useUserStore();
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <>
            <Router />
            <Toaster position="bottom-right" />
        </>
    );
};

export default App;
