import React from "react";
import { MapPinHouse, Phone, Mail, Clock, Siren } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="contactDetails">
      <h3 className="contactTitle">Contact Information</h3>

      <div className="infoBlock">
        <MapPinHouse size={18} />
        <p>
          Harmony Family Clinic<br />
          123 Main Street, City, State – 123456
        </p>
      </div>

      <div className="infoBlock">
        <Phone size={18} />
        <p>+91 94789 22753</p>
      </div>

      <div className="infoBlock">
        <Mail size={18} />
        <p>contact@harmonyfamily.com</p>
      </div>

      <div className="divider" />

      <div className="infoBlock">
        <Clock size={18} />
        <p>
          <strong>Clinic Hours</strong><br />
          Mon – Sat: 9:00 AM – 9:00 PM<br />
          Sunday: Emergency Only
        </p>
      </div>

      <div className="divider" />

      <div className="emergencyBlock">
        <Siren size={20} />
        <div>
          <strong>Emergency Support</strong>
          <p>24/7 Helpline Available</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;