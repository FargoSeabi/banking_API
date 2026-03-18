# 🏦 Banking System API

A simple RESTful Banking System API built with **Node.js**, **Express**, and **MongoDB**.

This project simulates basic banking operations such as account creation, deposits, withdrawals, transfers, and balance checks.

---

## 🚀 Features

- ✅ Create new bank account
- 💰 Deposit money
- 💸 Withdraw money
- 🔄 Transfer money between users
- 📊 Check account balance
- 🔐 Secure password hashing using bcrypt

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- dotenv
- nodemon

---

## 📁 Project Structure

```
banking-api/
│
├── models/
│   └── User.js
│
├── routes/
│   └── bankRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/banking-api.git
cd banking-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment File

Create a `.env` file in the root folder and add:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bankingDB
```

Make sure MongoDB is installed and running locally.

---

## ▶️ Running the Application

Add this inside your `package.json`:

```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

Run development server:

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔹 Register Account
**POST** `/api/bank/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### 🔹 Deposit Money
**POST** `/api/bank/deposit/:id`

```json
{
  "amount": 500
}
```

---

### 🔹 Withdraw Money
**POST** `/api/bank/withdraw/:id`

```json
{
  "amount": 200
}
```

---

### 🔹 Transfer Money
**POST** `/api/bank/transfer`

```json
{
  "fromId": "USER_ID",
  "toId": "RECEIVER_ID",
  "amount": 300
}
```

---

### 🔹 Check Balance
**GET** `/api/bank/balance/:id`

---

## 🧪 Testing the API

You can test using:

- Postman
- Thunder Client (VS Code)
- cURL

Example:

```bash
curl http://localhost:5000/api/bank/balance/USER_ID
```

---

## ⚠️ Disclaimer

This project is built for **educational purposes only**.

It does NOT include:
- Authentication (JWT)
- Input validation middleware
- Atomic database transactions
- Production-level security

Do not use this project in a real banking environment.

---

## 🔮 Future Improvements

- 🔐 Add JWT Authentication
- 🧾 Add transaction history logging
- 🏦 Implement database transactions
- 🛡️ Add input validation (Joi / Zod)
- 🐘 Switch to PostgreSQL
- 🧱 Refactor into MVC architecture
- 🌍 Deploy to cloud (Render / Railway)

---

## 👨🏽‍💻 Author

**Moses Seabi**  
Full Stack Developer  
📧 seabimoses7@gmail.com  

---

⭐ If you found this project useful, consider giving it a star!
