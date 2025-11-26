# Full-Stack MERN Authentication System

A robust, production-ready authentication system built with the MERN stack (MongoDB, Express, React, Node.js). This project features secure login/registration, email verification via OTP, and a complete password reset flow using JSON Web Tokens (JWT) and HttpOnly cookies.

## 🚀 Features

* **User Authentication:** Secure Sign Up and Login functionality.
* **Session Management:** JWT-based authentication using HTTP-only cookies for enhanced security.
* **Email Verification:** OTP (One-Time Password) system to verify user email addresses upon registration.
* **Password Reset:** Secure "Forgot Password" flow with email-based OTP validation.
* **Protected Routes:** Client-side route protection preventing unauthorized access to internal pages.
* **Responsive UI:** Mobile-friendly interface built with Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
* **Framework:** React.js (via Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **HTTP Client:** Axios (configured with interceptors/credentials)
* **Notifications:** React Toastify
* **State Management:** React Context API

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (with Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT)
* **Security:** Bcrypt.js (Password Hashing), CORS, Cookie-Parser
* **Email Services:** Nodemailer (SMTP/Brevo)

---

## ⚙️ Installation and Setup

Follow these steps to get the project running locally.

### 1. Backend Setup

1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` folder and add the following variables:
    ```env
    PORT=4000
    MONGODB_URL='your_mongodb_connection_string'
    JWT_SECRET='your_super_secret_key'
    NODE_ENV='development'
    
    # Email Service Configuration (e.g., Brevo/SendGrid)
    SMTP_USER='your_smtp_user'
    SMTP_PASSWORD='your_smtp_password'
    SENDER_EMAIL='your_sender_email@example.com'
    ```


### 2. Frontend Setup
Navigate to the client directory:

Bash

cd ../client
Install dependencies:

Bash

npm install
Create a .env file in the client folder and add the following variable. This tells the frontend where the backend API is located:

Code snippet

VITE_SERVER_URL='http://localhost:4000/api/v1'
Start the client application:

Bash

npm run dev
The client application will typically start on http://localhost:5173 (or another port specified by Vite).


