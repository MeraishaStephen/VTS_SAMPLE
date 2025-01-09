import React from "react";
import './Refund.css';

const Refund = () => {
  return (
    <div className="refund-page">
      <h1 className="refund-heading">Refund and Returns Policy</h1>
      <p className="refund-paragraph">
        Welcome to Vetri Technology Solutions. Below are the details:
      </p>
      <ul className="refund-list">
        <li className="refund-list-item">Refund requests must be made within 30 days of purchase.</li>
        <li className="refund-list-item">Products must be returned in original packaging.</li>
        <li className="refund-list-item">Refunds will be processed within 5-7 business days.</li>
        <li className="refund-list-item">Shipping charges are non-refundable.</li>
      </ul>
    </div>
  );
};

export default Refund;
