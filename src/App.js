import React from "react";
import Header from './Component/Header.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js'; 
import Footer from './Component/Footer.js'; // Import Footer component

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Contact /> 
      </main>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
}

export default App;