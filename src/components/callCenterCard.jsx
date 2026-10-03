import React from "react";
import { useNavigate } from "react-router-dom";

const CallCenterCard = ({ data, cardIndex }) => {
  const navigate = useNavigate();
  return (
    <>
      {data[cardIndex].map((item) => (
        <>
          <p className="callCenter-grid-heading">{item.heading}</p>
          <p className="callCenter-grid-details">{item.details}</p>
          <button
            onClick={() => {
              navigate("/contact_us");
            }}
            className="callCenter-grid-details-btn"
          >
            Contact Us
          </button>
        </>
      ))}
    </>
  );
};

export default CallCenterCard;
