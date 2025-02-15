* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f6d365, #fda085);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.container {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

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

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #333;
}

input[type="text"],
input[type="tel"],
select {
  width: 100%;
  height: 40px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

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

#orderSummary {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
}

