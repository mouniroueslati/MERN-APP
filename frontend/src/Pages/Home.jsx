import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styling/Styles.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <h1>KPI's Consulting COMPANY</h1>
      <h1>Bienvenue sur notre site</h1>
      <img
        src="https://mo-jo.fr/img/a1ffafd0f174f73529386398b7e921b9b01e32ad.png"
        alt="notre logo"
        style={{ maxWidth: '100%', height: '300px', marginTop: '10px' }}
      />
      <div className="about-us" style={{ marginTop: '20px' }}>
        <h2>À propos de nous</h2>
        <p>
        <h3>
          Our project, 'Company Performance Tracker,' is a comprehensive web application designed to help businesses monitor and manage their key performance indicators (KPIs). With our user-friendly platform, companies can easily track and analyze their monthly performance data across various metrics, enabling informed decision-making.
        </h3>
        </p>
        <p>
        <h3>
        Users can input and save their KPI data, view historical performance, and generate insightful reports to identify trends and make strategic improvements
        </h3>
        </p>
        <p>
        <h3>
        Our website provides a seamless experience for users, offering intuitive data entry forms and informative data visualization tools. Whether it's sales figures, financial metrics, or other vital indicators, our platform empowers businesses to take control of their performance and drive success. Join us in optimizing your company's performance, one KPI at a time!
        </h3>
        </p>

      
      </div>
    </div>
  );
};

export default Home;