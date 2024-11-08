import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import ChatWidget from './Components/ChatWidget'; // Import the new ChatWidget component

function App() {
  const [country, setCountry] = useState(0);

  return (
    <>
      <Header setCountry={setCountry} country={country} />
      <Body />
      <Footer />
      <ChatWidget /> {/* Add the ChatWidget component */}
    </>
  );
}

export default App;
