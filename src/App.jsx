// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <header className="profile-header">
        <img
          src="/static/images/home-image.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2 className="profile-name">
            Elvis Bogsangit Jr.{" "}
            <span className="verified-icon">✔</span>
          </h2>
          <p className="location">Pagadian, Philippines</p>
          <p className="stats">
            350 Following • 647 Followers
          </p>
        </div>
        <div className="profile-actions">
          <button className="btn primary">Make Event</button>
          <button className="btn outlined">Edit Profile</button>
        </div>
      </header>

      <section className="friend-list-section">
        <div className="section-header">
          <h3>Friend List</h3>
          <button className="text-button">See all</button>
        </div>
        <div className="friend-list">
          <img src="/static/images/friendOne.jpg" alt="Friend 1" className="friend-image" />
          <img src="/static/images/friendTwo.jpg" alt="Friend 2" className="friend-image" />
          <img src="/static/images/friendThree.jpg" alt="Friend 3" className="friend-image" />
        </div>
      </section>

      <section className="event-section">
        <div className="section-header">
          <h3>Events</h3>
          <button className="text-button">See all</button>
        </div>
        <div className="event-list">
          <div className="event-card">
            <img src="/static/images/Event.png" alt="Event 1" className="event-image" />
            <div className="event-details">
              <h4 className="event-title">Circuit Mega Festival - 2024</h4>
              <p className="event-location">Makati City</p>
            </div>
          </div>
          <div className="event-card">
            <img src="/static/images/EventTwo.jpg" alt="Event 2" className="event-image" />
            <div className="event-details">
              <h4 className="event-title">Summer Beach Party - 2024</h4>
              <p className="event-location">Boracay, Philippines</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-section">
        <h3>My Bio</h3>
        <div className="bio-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="text-button">Read More</button>
        </div>
      </section>

      <section className="interest-section">
        <div className="section-header">
          <h3>My Interests</h3>
          <button className="icon-button">✎</button>
        </div>
        <div className="interest-list">
          <span className="interest-tag">Online Games</span>
          <span className="interest-tag">Concert</span>
          <span className="interest-tag">Music</span>
          <span className="interest-tag">Art</span>
          <span className="interest-tag">Movie</span>
          <span className="interest-tag">Coffee</span>
        </div>
      </section>

      <footer className="bottom-nav">
        <button className="nav-icon">🏠</button>
        <button className="nav-icon">❤️</button>
        <button className="nav-icon">💬</button>
        <button className="nav-icon">📍</button>
        <button className="nav-icon">👤</button>
      </footer>
    </div>
  );
};

export default App;
