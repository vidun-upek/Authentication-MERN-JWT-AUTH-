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
