JWT AUTH SETUP
1. Backend Setup
Navigate to the server directory.

Install Dependencies:

cd server
npm install
Environment Configuration: Create a .env file in the server root and add your credentials:

PORT=4000
MONGODB_URL="your_mongodb_connection_string"
JWT_SECRET="your_super_secret_key"
NODE_ENV="development"

# Email Service (e.g., Brevo/SMTP)
SMTP_USER="your_smtp_user"
SMTP_PASSWORD="your_smtp_password"
SENDER_EMAIL="your_sender_email@example.com"
Start Server:

npm run server
# Server runs on http://localhost:4000
2. Frontend Setup
Navigate to the client directory.

Install Dependencies:

cd client
npm install
Environment Configuration: Create a .env file in the client root:

VITE_BACKEND_URL=http://localhost:4000
Start Application:

npm run dev
# App runs on http://localhost:5173
