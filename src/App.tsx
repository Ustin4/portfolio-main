import React from 'react';
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";
import {AboutMe} from "./skills/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            {/*<MyProjects/>*/}
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
