import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hire from "./hire/Hire";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>

            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
