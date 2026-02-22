* Task Management API

A RESTful Task Management API built using Node.js, Express, Prisma ORM, PostgreSQL, and JWT Authentication.

🚀 Live Demo

🌐 Live API:
https://task-management-api-twna.onrender.com

📘 Swagger Documentation:
https://task-management-api-twna.onrender.com/api-docs

🛠 Tech Stack

Node.js

Express.js

PostgreSQL

Prisma ORM

JWT Authentication

bcrypt (Password Hashing)

Swagger (API Documentation)

✨ Features
🔐 Authentication

User Registration

User Login

JWT-based authentication

Password hashing using bcrypt

📋 Task Management

Authenticated users can:

Create a task

Get all their tasks (with pagination)

Get a single task by ID

Update a task

Delete a task

Filter tasks by status

📌 Task Fields

Each task contains:

id

title

description

status (pending | in-progress | completed)

dueDate

createdAt

✅ Business Rules

Title is required

Due date must be a future date

Users cannot access or modify other users’ tasks

Proper error handling with meaningful responses

📡 API Endpoints
🔐 Authentication

POST /api/auth/register
POST /api/auth/login

📋 Tasks (Protected Routes)

POST /api/tasks
GET /api/tasks
GET /api/tasks/:id
PUT /api/tasks/:id
DELETE /api/tasks/:id

🔎 Pagination & Filtering

Pagination:

GET /api/tasks?page=1&limit=5

Filtering by status:

GET /api/tasks?status=completed

Both can be combined:

GET /api/tasks?page=1&limit=5&status=pending

📄 Example Request

Create Task

POST /api/tasks

Request Body:

{
  "title": "Finish project",
  "description": "Complete internship task",
  "dueDate": "2026-03-01T10:00:00Z"
}

Response:

{
  "success": true,
  "data": {
    "id": 1,
    "title": "Finish project",
    "description": "Complete internship task",
    "status": "pending",
    "dueDate": "2026-03-01T10:00:00.000Z",
    "createdAt": "2026-02-22T10:00:00.000Z"
  }
}

🗄 Database Design

One-to-Many Relationship:

One User → Many Tasks

Implemented using Prisma ORM with PostgreSQL.

📁 Project Structure
src/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── middleware/
 ├── config/
 ├── prisma/

The project follows clean architecture principles:

Controllers handle HTTP logic

Services handle business logic

Routes define API endpoints

Middleware handles authentication

Prisma manages database access

⚙ Installation & Setup

1️.Clone Repository
git clone https://github.com/YOUR_USERNAME/task-management-api.git
cd task-management-api
npm install

2️.Setup Environment Variables

Create a .env file in the root directory:

DATABASE_URL=postgresql://postgres:password@localhost:5432/taskdb
JWT_SECRET=your_secret_key
PORT=5000

3️.Run Prisma Migration
npx prisma migrate dev --name init

4️.Start Server

Development mode:

npm run dev

Production mode:

npm start

Server runs on:

http://localhost:5000

Swagger available at:

http://localhost:5000/api-docs

📦 Submission Details

GitHub Repository: https://github.com/IcGiveup/task-management-api

Live Deployment: https://task-management-api-twna.onrender.com

API Documentation: Swagger UI included

Database: PostgreSQL (Render)

ORM: Prisma

🏁 Conclusion

This project demonstrates:

Backend fundamentals

REST API design

JWT authentication

Database relationships

Clean architecture

Validation & business rules

Pagination and filtering

Deployment to production