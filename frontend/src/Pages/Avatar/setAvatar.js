import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import spinner from "../../assets/gg.gif";
import "./avatar.css";
import { Button } from "react-bootstrap";
import { setAvatarAPI } from "../../utils/ApiRequest.js";

const { uniqueNamesGenerator, animals, colors, countries, names, languages } =
  require("unique-names-generator");

const SetAvatar = () => {
  const sprites = [
    "adventurer",
    "micah",
    "avataaars",
    "bottts",
    "initials",
    "adventurer-neutral",
    "big-ears",
    "big-ears-neutral",
    "big-smile",
    "croodles",
    "identicon",
    "miniavs",
    "open-peeps",
    "personas",
    "pixel-art",
    "pixel-art-neutral",
    "identicon",
  ];

  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [navigate]);

  const randomName = () => {
    return uniqueNamesGenerator({
      dictionaries: [animals, colors, countries, names, languages],
      length: 2,
    });
  };

  const [imgURL, setImgURL] = useState(
    Array(4)
      .fill()
      .map(() => `https://api.dicebear.com/7.x/${sprites[0]}/svg?seed=${randomName()}`)
  );

  const handleSpriteChange = (e) => {
    const newSprite = e.target.value;
    if (newSprite) {
      setLoading(true);
      

      setImgURL(
        Array(4)
          .fill()
          .map(() => `https://api.dicebear.com/7.x/${newSprite}/svg?seed=${randomName()}`)
      );

      setLoading(false);
    }
  };

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", { position: "bottom-right", autoClose: 2000 });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    const { data } = await axios.post(
      `${setAvatarAPI}/${user.id}`,
      { image: imgURL[selectedAvatar] },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (data.isSet) {
      user.isAvatarImageSet = true;
      user.avatarImage = data.image;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", data.token);
      toast.success("Avatar selected successfully");
      navigate("/");
    } else {
      toast.error("Error Setting avatar, Please Try again");
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        

        {loading ? (
          <div className="container containerBox">
            <div className="avatarBox">
              <img src={spinner} alt="Loading" />
            </div>
          </div>
        ) : (
          <div className="container containerBox">
            <div className="avatarBox">
              <h1 className="text-center text-white mt-5">Choose Your Avatar</h1>

              <div className="container">
                <div className="row">
                  {imgURL.map((image, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-6">
                      <img
                        src={image}
                        alt=""
                        className={`avatar ${selectedAvatar === index ? "selected" : ""} img-circle imgAvatar mt-5`}
                        onClick={() => setSelectedAvatar(index)}
                        width="100%"
                        height="auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <select onChange={handleSpriteChange} className="form-select mt-5">
                {sprites.map((sprite, index) => (
                  <option value={sprite} key={index}>
                    {sprite}
                  </option>
                ))}
              </select>

              <Button 
                onClick={setProfilePicture} 
                className="mt-5"
                style={{ 
                  zIndex: 1000, 
                  position: 'relative',
                  backgroundColor: '#007bff',
                  borderColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Set as Profile Picture
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SetAvatar;
