import React, { useState } from 'react';

const ProductDetails = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState(0);

  const handleCalculateTotal = () => {
    let totalPrice = parseFloat(price) * parseInt(quantity);
    // Apply discounts based on quantity
    if (parseInt(quantity) >= 10) {
      totalPrice *= 0.9; // 10% discount
    } else if (parseInt(quantity) >= 5) {
      totalPrice *= 0.95; // 5% discount
    }
    setTotal(totalPrice);
  };

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button onClick={handleCalculateTotal}>Calculate Total</button>
      {total > 0 && (
        <div>
          <p>Total Price: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
