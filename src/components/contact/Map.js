import React from "react";

const Map = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254176.1280427806!2d-4.109340434558382!3d5.492201505211929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eba131366553%3A0xbb6747e85334c6ea!2sPlateau%2C%20Abidjan!5e0!3m2!1sen!2sci!4v1671551171144!5m2!1sen!2sci"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
