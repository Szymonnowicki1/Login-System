# 🔐 Login & Registration System (Fullstack Project)

## 🚀 Live Demo

Frontend (Vercel):  

https://login-system-zpb7.vercel.app/

Backend (Render):  

https://login-system-ty4c.onrender.com/

## 📌 About the project

This is a fullstack web application that allows users to:

- Register a new account (email, login, password)
  
- Login with existing credentials
  
- Validate input data on frontend and backend
  
- Store users securely in a MongoDB database


The project simulates a real authentication system used in modern web applications.

## 🧠 Features

### Frontend (React + Vite)

- React functional components
  
- React Router (navigation between pages)
  
- useState for state management
  
- Form validation (email, password length, required fields)
  
- API communication with backend (fetch)
  
- Conditional rendering of error messages
  
- Redirect after successful login (useNavigate)

### Backend (Node.js + Express)

- REST API (register/login routes)
  
- Express server
  
- MongoDB integration (Mongoose)
  
- Password hashing with bcrypt
  
- User validation (duplicate email/login check)
  
- Input validation (email format, password length)
  
- CORS configuration for frontend communication
  

### Database (MongoDB Atlas)

- Cloud database (MongoDB Atlas)
  
- User schema with:
  
  - email
    
  - login
    
  - hashed password


## 🛠 Tech Stack

**Frontend:**

- React
  
- Vite
  
- React Router
  
- JavaScript (ES6+)
  
- CSS

**Backend:**

- Node.js
  
- Express.js
  
- MongoDB + Mongoose
  
- bcrypt
  
- dotenv
  
- cors

**Deployment:**

- Vercel (frontend)
  
- Render (backend)
  
- MongoDB Atlas (database)


## 🔐 Authentication Flow

1. User registers via frontend form
   
2. Data is sent to Express API
   
3. Backend validates input
   
4. Password is hashed using bcrypt
   
5. User is saved in MongoDB
    
6. During login:
    
   - backend checks user
     
   - compares hashed password
     
   - returns success response





## 📡 API Endpoints

### Register user

POST /register


### Login user

POST /login

