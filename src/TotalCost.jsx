import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  const totalAmount = totalCosts.av + totalCosts.meals + totalCosts.venue;

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Total cost for the event</h3></p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
           ${totalAmount}
          </h2>
         
            <div>
             <ItemsDisplay />
            </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
