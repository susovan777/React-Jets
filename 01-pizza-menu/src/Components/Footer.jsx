import React from "react";

const Footer = () => {
  const time = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = time >= open && time <= close;

  // console.log(time,isOpen);
  return (
    <footer className="footer">
      <div className="order">
        <p>We are currently {isOpen ? "open" : "close"}.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

export default Footer;
