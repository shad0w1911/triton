import React from "react";
import { useNavigate } from "react-router-dom";

const ChatSupportCard = ({ data, cardIndex }) => {
  const navigate = useNavigate();
  return (
    <>
      {data[cardIndex].map((item) => (
        <div className="chatSupport-grid-card">
          <p className="chatSupport-grid-card-heading">{item.heading}</p>
          <p className="chatSupport-grid-card-details">{item.details}</p>
          <button
            onClick={() => navigate("/contact_us")}
            className="chatSupport-grid-card-btn"
          >
            Contact Us
          </button>
        </div>
      ))}
    </>
  );
};

export default ChatSupportCard;
