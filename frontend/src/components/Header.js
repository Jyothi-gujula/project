// NavbarComponent.js
import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Header = () => {
  
const navigate = useNavigate();

  const handleShowLogin = () =>{
    navigate("/login");
  }

  const [user, setUser] = useState();

  useEffect(() => {
    
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));
        
        setUser(user);
        
      }


    
  }, []);

  const handleShowLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  
  return (
    <header className="header d-flex align-items-center p-3 justify-content-between" style={{ background: "#222", color: "#fff", position: "relative" }}>
      <div className="d-flex align-items-center">
        {user && user.avatarImage && (
          <div style={{ marginRight: 16, display: "flex", alignItems: "center" }}>
            <img
              src={user.avatarImage}
              alt="avatar"
              style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #fff", objectFit: "cover" }}
            />
          </div>
        )}
        <div className="header-title">
          <h3>Personal Finance Manager</h3>
        </div>
      </div>
      {user && (
        <button
          onClick={handleShowLogout}
          style={{
            background: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            padding: '8px 18px',
            fontWeight: 500,
            fontSize: 16,
            cursor: 'pointer',
            marginLeft: 20
          }}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
