import React, { useState } from "react";

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating the payment processing
    const isValid = validatePaymentInfo();
    if (!isValid) {
      setPaymentStatus("Payment Failed. Invalid details.");
      return;
    }

    // Simulate payment processing
    setPaymentStatus("Processing...");
    setTimeout(() => {
      // Simulating a success or failure response from the payment gateway
      const success = Math.random() > 0.3; // 70% chance of success
      if (success) {
        setPaymentStatus("Payment Successful! Thank you for your purchase.");
      } else {
        setPaymentStatus("Payment Failed. Please try again.");
      }
    }, 2000);
  };

  const validatePaymentInfo = () => {
    // Basic validation for payment details
    return (
      cardNumber.length === 16 &&
      expiryDate.length === 5 &&
      cvv.length === 3 &&
      !isNaN(amount) &&
      parseFloat(amount) > 0
    );
  };

  return (
    <div className="container my-5">

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">Payment Information</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength="16"
                    placeholder="Enter 16-digit card number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maxLength="5"
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength="3"
                    placeholder="Enter 3-digit CVV"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Amount ($)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Pay Now
                </button>
              </form>
            </div>
          </div>

          {paymentStatus && (
            <div className="mt-3">
              <div
                className={`alert ${paymentStatus.includes("Failed") ? "alert-danger" : "alert-success"}`}
                role="alert"
              >
                {paymentStatus}
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default PaymentGateway;
