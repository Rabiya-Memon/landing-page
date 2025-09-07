import React from "react";
import "./App.css"; 
import doctor from "./assets/doctor.png";
import surgery from "./assets/surgery.png";
import patientImg from "./assets/patient.PNG"; 
import logo from "./assets/logo.png";
import img from "./assets/img.png"
import lungs from "./assets/lungs.png"
import brain from "./assets/brain.png"
import cup from "./assets/cup.png"
import name from "./assets/name.PNG"
import location from "./assets/location.PNG"
import search from "./assets/search.png"

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">
          E-<span>sheba</span>
        </h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Application</li>
          <li>History</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn-fill">SignUp</button>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Find & Search <br />
            Your <span className="highlight">Favorite</span> Doctor
          </h1>
          <p>
            Person with a medical degree whose job is to treat people who are
            ill or hurt. Doctor prescribed some medication.
          </p>
          <div className="search-box">
            <div className="input-field">
                            <span><img src={name} alt="name" /></span>
              <input type="text" placeholder="Doctor's Name" />
            </div>
            <div className="input-field">
              <span><img src={location} alt="name" /></span>
              <input type="text" placeholder="Location" />
            </div>
            <button className="search-btn">🔍</button>
          </div>
        </div>
        <div className="hero-img">
          <div className="bg-shape"></div>
          <img src={doctor} alt="Doctor" className="doctorimg" />
        </div>
      </section>
      <section className="stats">
        <div>
          <h2 className="h">24/7</h2>
          <p className="online">Online Support</p>
          <span className="span">|</span>
        </div>
        <div>
          <h2 className="plus">100+</h2>
          <p className="doctors">Doctors</p>
          <span className="span1">|</span>
        </div>
        <div>
          <h2 className="m">1 M+</h2>
          <p className="active">Active Patients</p>
          <span className="span2">|</span>
        </div>
      </section>
      <section className="consulting">
        <h2 className="title">Our Consulting Specialists</h2>
        <div className="cards">
          <div className="card">
            <img src={img} alt="img" className="icon"/>
            <h3>Covid-19 Test</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
          </div>

          <div className="card active">
             <img src={lungs} alt="img" className="icon"/>
            <h3>Heart Lungs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
          </div>

          <div className="card">
            <img src={cup} alt="img" className="icon"/>
            <h3>Suppliment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
          </div>

          <div className="card">
            <img src={brain} alt="img" className="icon"/>
            <h3>Mental Health</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
          </div>
        </div>
        <div className="why-us">
          <div className="image">
            <img src={surgery} alt="Doctors performing surgery" />
          </div>
          <div className="text">
            <h2>Why You Choose Us?</h2>
            <ul>
              <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
        </div>
      </section>
<div className="space"></div>
      <div className="testimonial">
        <div className="left">
          <h2 className="member"> 
            What <span className="highlight">Our Member’s</span > <br /> Saying About Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sem velit
            viverra amet faucibus.
          </p>

          <div className="reviews">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
            </div>
            <p className="review">100+ Reviews</p>
          </div>
        </div>

        <div className="card">
          <div className="user">
            <img
              src="https://randomuser.me/api/portraits/women/5.jpg"
              alt="Jane Cooper"
            />
            <div>
              <h4>Jane Cooper</h4>
              <p className="date">12/4/17</p>
            </div>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nostrum <br />distinctio qui! Nam est nihil, quo sapiente velit quisquam quibusdam vero, <br /> ullam consequatur provident, corrupti exercitationem molestiae assumenda repellendus pariatur.
            
          </p>
        </div>
      </div>
<div className="spacee"></div>
      <section className="future">
        <div className="left">
          <h2>
            The Future <br /> of <span className="highlight">Quality Health</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            volutpat integer vel in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            volutpat integer vel in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            volutpat integer vel in.
          </p>
          <a href="#" className="link">
            Learn More →
          </a>
        </div>

        <div className="image">
          <img src={patientImg} alt="Doctor with patient" />
        </div>
      </section>
      <div className="newsletter">
        <h2>Subscribe To Our Newsletter</h2>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>→</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>E-sheba</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum.
            </p>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            volutpat integer vel in.
            </p>
             <img src={logo} alt="logo" />
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Our Team</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Address</h3>
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=noe%20valley&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="150"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="copyright">
          © 2025 E-sheba. All Rights Reserved.
        </div>
      </div>
    </div>

  );
}

export default App;
