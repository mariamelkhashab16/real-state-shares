import React from 'react';

const PaymentPlan = ({ paymentplan }) => {
  return (
    <div className="card">
      <p><strong>Down Payment:</strong> {paymentplan.down_payment} %</p>
      <p><strong>Number of Years:</strong> {paymentplan.num_years}</p>
    </div>
  );
};

export default PaymentPlan;
