# 📝 Task Management API

A RESTful Task Management API built with **Node.js, Express, Prisma, PostgreSQL, and JWT Authentication**.

This project was developed as part of a Backend Developer Internship technical evaluation.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt (Password Hashing)
- Swagger (API Documentation)

---

## 📌 Features

### 🔐 Authentication
- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt

### 📋 Task Management
Authenticated users can:
- Create a task
- Get all their tasks
- Get a single task
- Update a task
- Delete a task

### ✅ Business Rules
- Title is required
- Due date must be a future date
- Users cannot access or modify other users' tasks

### 📄 API Documentation
Swagger UI available at:
http://localhost:5000/api-docs

---

## 🗄️ Database Design

One-to-Many relationship:

- One User ➝ Many Tasks

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-management-api.git
cd task-management-api
npm install

*Setup Environment Variables

Create a .env file:

DATABASE_URL=postgresql://postgres:password@localhost:5432/taskdb
JWT_SECRET=your_secret_key
PORT=5000

*Run Prisma Migration

npx prisma migrate dev --name init

*Start Server

npm run dev

*Server runs on:

http://localhost:5000