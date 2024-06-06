

# Mini Tweet Backend System

## Assignment Overview

This assignment involves building a simplified Twitter-like backend system using Node.js and MongoDB. The backend system includes user registration, tweet posting, fetching user timelines, and basic authentication using JWT tokens. The goal is to demonstrate proficiency in designing and implementing a scalable backend system following Domain-Driven Design (DDD) principles.

## How to Run the Application

To run the application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shivakumar1090/MiniTweet.git
   cd MiniTweet
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project with the following contents:

   ```
   PORT= 5000
   MONGODB_URI= mongodb+srv://chshivakumar491:BKim6i8v9HX0JsDW@cluster0.ot1qwcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with a secure secret key for JWT token encryption.

4. **Start the server:**

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:5000`.

## Dependencies

- Node.js
- Express.js
- Mongoose
- jsonwebtoken
- bcryptjs
- Nodemon
- dotenv

## Installation Instructions

1. **Node.js and npm:**

   Make sure Node.js (which comes with npm) is installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

2. **Clone the repository:**

   ```bash
   git clone https://github.com/Shivakumar1090/MiniTweet.git
   cd MiniTweet
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory of the project with the following contents:

   ```
   PORT=3000
   MONGODB_URI= mongodb+srv://chshivakumar491:BKim6i8v9HX0JsDW@cluster0.ot1qwcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with a secure secret key for JWT token encryption.

6. **Start the server:**

   ```bash
   npm start
   ```

## Configuration

- The application uses environment variables to configure the server port, MongoDB connection URI, and JWT secret key. Ensure these variables are correctly set in the `.env` file.


## Contact Information

For any queries or assistance during the evaluation, please reach out to:

- Email: ch.shivakumar491@gmail.com
- Mobile: 7396959754

---
