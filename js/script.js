function calculateDiscount() {
  // Grabbing Form Elements
  const fullName = document.getElementById('fullName').value;
  const age = parseInt(document.getElementById('age').value);
  const totalBill = parseFloat(document.getElementById('totalBill').value);

  // Validate inputs
  if (!fullName || isNaN(age) || isNaN(totalBill) || age < 0 || totalBill < 0) {
      alert('Please fill in all fields with valid values.');
      return;
  }
  // Calculate discount based on age
  let discountRate = 0;

  if (age >= 0 && age <= 12) {
      discountRate = 0; // No discount
  } else if (age >= 13 && age <= 18) {
      discountRate = 0.5; // 50% discount
  } else if (age >= 19 && age <= 40) {
      discountRate = 0.05; // 5% discount
  } else if (age >= 41 && age <= 60) {
      discountRate = 0.1; // 10% discount
  } else if (age > 60) {
      discountRate = 0.4; // 40% discount
  }

const discountAmount = totalBill * discountRate;
  const finalBill = totalBill - discountAmount;

  // Display the results
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <h3>Discount Details</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Total Bill:</strong> &#8358;${totalBill.toFixed(2)}</p>
      <p><strong>Discount Rate:</strong> ${(discountRate * 100).toFixed(0)}%</p>
      <p><strong>Discount Amount:</strong> &#8358;${discountAmount.toFixed(2)}</p>
<p><strong>Final Bill:</strong> &#8358;${finalBill.toFixed(2)}</p>
  `;
}