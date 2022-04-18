
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import '../../assests/watch.jpg'
export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-heading">
          Breaking the time into smaller chunks for an effective Time Management, is what we call as a Pomodoro Technique. You can set your target time as 25 min an after that take 5 min break. These breaks are called Pomodoros.Continue this process. Here we have provided a Pomodoro Tracker to help you manage your time with pomodoro Technique{" "}.
        </h1>
     
          <Link to='/todo' className="home-btn">See your tasks here!</Link>
       
      </div>
      <img
        className="home-clock"
        src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
        alt="clock"
      />
    </div>
  );
};