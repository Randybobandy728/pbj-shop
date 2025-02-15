/* Reset some basic elements */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Body styling with a pleasant gradient background */
body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f6d365, #fda085);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

/* Container for centering content with a subtle shadow */
.container {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Headings and paragraph styling */
h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

p {
  text-align: center;
  margin-bottom: 2rem;
  color: #555;
}

/* Form layout */
form {
  display: flex;
  flex-direction: column;
}

/* Form group spacing */
.form-group {
  margin-bottom: 1.5rem;
}

/* Label styling */
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #333;
}

/* Input and select styling */
input[type="text"],
input[type="tel"],
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

/* Button styling */
button {
  padding: 0.75rem;
  background-color: #ff8c00;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e07b00;
}

/* Order summary styling */
#orderSummary {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
}
