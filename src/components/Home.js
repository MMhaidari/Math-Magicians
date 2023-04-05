import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h2>Math-magicians is a web site where you can do  math practice</h2>
      <div className="home-btn">
        <button className="btns calcultor-btn" type="button" onClick={() => navigate('calculator')}>Get started</button>
        <button className="btns quote-btn" type="button" onClick={() => navigate('quote')}>SeeQuotes</button>
      </div>
      <h4>Definition of Math</h4>
      <article>
        Mathematics is the science and study of quality, structure, space, and change.
      </article>
    </div>

  );
};
export default Home;
