# 🍬 Sweet Shop Management System

A simple full-stack **Sweet Shop Management System** built using **Node.js**, **Express**, and **Vanilla JavaScript** with a focus on **Test-Driven Development (TDD)** using **Jest**. Data persistence is handled via a JSON file (`sweets.json`), making it ideal for small-scale inventory management projects.

![Sweet Shop Screenshot](<img width="1900" height="1021" alt="sweet-shop" src="https://github.com/user-attachments/assets/39648721-aca7-45d4-a2c3-cc69881faa7b" />
)

## 🚀 Features

* ✅ Add new sweets with details (name, category, price, quantity)
* ✅ View all sweets in the inventory
* ✅ Update sweet details (quantity, price, etc.)
* ✅ Delete sweets
* ✅ RESTful API using Express
* ✅ Persistent storage using `sweets.json` file
* ✅ Fully tested backend logic with Jest (TDD approach)
* ✅ Simple and interactive frontend with Vanilla JS

---

## 🗂️ Project Structure

```plaintext
SWEET-SHOP-MANAGEMENT-SYSTEM/
│
├── frontend/
│   ├── index.html          # Frontend UI (Dashboard)
│   ├── app.js              # Frontend JavaScript Logic
│   └── sweet-shop.png      # Screenshot for README
│
├── src/
│   ├── sweetShop.js        # Business Logic (SweetShop Class)
│   └── sweets.json         # Data (acts as a Database)
│
├── tests/
│   ├── sweetShop.test.js   # Jest Test Cases
│   └── report/             # Test Report Files (HTML/Text)
│       └── test-report.html
│
├── server.js               # Express Server
├── package.json            # Project Metadata and Dependencies
├── package-lock.json       # Dependency Lock File
└── README.md
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/SujalParmar1812/Sweet-Shop-Management-System.git

# Navigate to the project folder
cd Sweet-Shop-Management-System

# Install dependencies
npm install
```

---

## 🧺 Running Tests

This project follows **TDD principles** with Jest.

```bash
npm test
```

You should see something like:

```
PASS  tests/sweetShop.test.js
✓ should add a sweet (xx ms)
✓ should update a sweet (xx ms)
✓ should delete a sweet (xx ms)
...
```

---

## ▶️ Running the Application

Start the backend server:

```bash
npm start
```

The server runs on **[http://localhost:3000](http://localhost:3000)** by default.

Open `public/index.html` in your browser to access the frontend.

---

## 📖 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | /api/sweets      | Get all sweets  |
| POST   | /api/sweets      | Add a new sweet |
| PUT    | /api/sweets/\:id | Update a sweet  |
| DELETE | /api/sweets/\:id | Delete a sweet  |

---

## 💻 Frontend Features

* Simple UI to **Add**, **Update**, and **Delete** sweets.
* Fetches data from backend via API calls.
* Instant reflection of changes after every operation.

---

## 📌 Future Improvements

* ✅ Pagination support on frontend
* ✅ Category-wise filtering
* ✅ File uploads for sweet images
* ✅ Migrate backend to MongoDB for scalable storage
* ✅ Dockerize the application for easy deployment

---
