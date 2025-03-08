import React from "react";
import Router from "./routes/route";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <>
            <Router />
            <Toaster position="bottom-right" />
        </>
    );
};

export default App;
