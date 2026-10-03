import "./maintenance.css";
import logo from "../assets/icon.png";

const Maintenance = () => (
  <main className="maintenance-page">
    <div className="maintenance-card">
      <img
        className="maintenance-icon"
        src={logo}
        alt="Triton Consultancy logo"
      />
      <span className="maintenance-status">Triton Consultancy</span>
      <p className="maintenance-eyebrow">WE’LL BE BACK SOON</p>
      <h1>We’re making things better.</h1>
      <p className="maintenance-message">
        Our website is temporarily unavailable while we carry out scheduled
        maintenance. Thank you for your patience.
      </p>
      <div className="maintenance-divider" />
      <p className="maintenance-note">
        For urgent inquiries, please contact us through our usual channels.
      </p>
    </div>
  </main>
);

export default Maintenance;
