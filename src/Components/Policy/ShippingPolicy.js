import React from "react";
import { FaTruck } from "react-icons/fa";
import './ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-icon-heading">
        <FaTruck className="shipping-page-icon" />
        <h1 className="shipping-heading">Shipping and Delivery Policy</h1>
      </div>
      <p className="shipping-paragraph">
        Below are the details of our shipping and delivery policy:
      </p>
      <ul className="shipping-list">
        <li className="shipping-list-item">Orders are processed within 1-2 business days.</li>
        <li className="shipping-list-item">Shipping timelines depend on your location.</li>
        <li className="shipping-list-item">Tracking details will be shared once the order is dispatched.</li>
      </ul>
    </div>
  );
};

export default ShippingPolicy;
