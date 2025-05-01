🛍️ ByteMart - MERN Stack E-commerce Platform
ByteMart is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with separate interfaces for users and admins. It supports features like user authentication, product listing, cart management, and admin product uploads.

📁 Project Structure
bytemart/ │

├── admin/ # Admin dashboard (Vite + React)
├── backend/ # Node.js + Express backend connected to MongoDB Atlas
├── frontend/ # Main frontend (React app for customers)
└── README.md # Project documentation ---
🚀 Features - User authentication (signup/login with JWT)
Product listing with categories (women, men, etc.)
Image upload via Multer
Cart management synced with MongoDB
Admin dashboard to add/remove products
MongoDB Atlas integration ---
⚙️ Tech Stack
Frontend: React.js, CSS
Admin Panel: Vite + React
Backend: Node.js, Express.js, JWT, Multer
Database: MongoDB Atlas
Tools: Git, Postman, VS Code
🛠️ Installation & Setup Instructions ### Prerequisites - Node.js (v14 or above) - MongoDB Atlas account
Git ---
1. Clone the repository ```bash git clone https://github.com/Risb7970/ECommerce cd bytemart
2. Backend Setup (Express + MongoDB) cd backend npm install Runs the backend on: http://localhost:4000
3. Frontend Setup (Customer Site - React) cd ../frontend npm install npm start Runs frontend on: http://localhost:3000
4. Admin Dashboard Setup (Vite + React) cd ../admin npm install npm run dev Runs admin panel on: http://localhost:5173
5. 📦 API Endpoints Method Endpoint Description
   POST /signup Register a new user POST
  -/login Login user and get JWT GET
  -/allproducts Fetch all products POST
  -/addproduct Add a new product (admin) POST
  -/removeproduct Remove product (admin) POST
  -/upload Upload product image POST
  -/addtocart Add product to cart POST
  -/removefromcart Remove product from cart POST
  -/getcart Get user's cart
📸 Screenshots!
https://github.com/user-attachments/assets/1fef99cf-9d2a-4ca4-b92e-f021a5d2072d
https://github.com/user-attachments/assets/9adbc835-8d5a-44b6-a706-8fc1ee20efcb
https://github.com/user-attachments/assets/7e7e2634-333d-4644-8801-baa1b6773446
https://github.com/user-attachments/assets/83c367b5-a3c3-4387-b5ce-4f96ef7c6b60
https://github.com/user-attachments/assets/6841cda6-1cc7-4069-80af-e2425a64bc9b
