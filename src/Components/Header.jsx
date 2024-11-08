import React from "react";
import logo from '../assets/logo.jpeg'

const Header = ({ country, setCountry }) => {

    const handleChange = (e) => {
        e.preventDefault();
        const newCountry = e.target.value;
        console.log(newCountry);
        setCountry(newCountry);
    }

  return (
    <div id="header">
      <img src={logo} id="logo" />
      <h2>Macroeconomic Researcher Food Security Time Series and Large Language Chat GPT Dashboard</h2>
      <label>
        Country
        <select value={country} onChange={handleChange}>
          <option value="China">China</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </label>
    </div>
  );
};

export default Header;
