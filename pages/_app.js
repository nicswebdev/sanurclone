import {useEffect, useState} from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 6000);
    // }, []);

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
