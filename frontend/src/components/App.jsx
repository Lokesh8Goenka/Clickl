import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tools from "./Tools";
// import Features from "./Features";
import Home from "./Home";


function App(){
    return (
        <div>
            <Navbar />
            <Home />
            <Tools />
            {/* <Features /> */}
            <Footer />
        </div>
    );
    
}

export default App;