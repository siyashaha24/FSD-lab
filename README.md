# 🎓 Student Portfolio – MERN Stack (Experiment 6)

Full Stack Student Portfolio Application using the **MERN Stack** with complete **CRUD operations**.

> Built for: MIT World Peace University | Subject: Full Stack Development
> Student: Siya Shaha | Batch: 2023–2027

---

## 🏗 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js           |
| Backend    | Node.js + Express  |
| Database   | MongoDB            |
| HTTP Client| Axios              |

---

## 📁 Folder Structure

```
mern-stack/
├── backend/
│   ├── models/
│   │   └── Student.js         ← Mongoose Schema
│   ├── routes/
│   │   └── studentRoutes.js   ← CRUD API Routes
│   ├── server.js              ← Express Server
│   └── package.json
│
└── frontend/
    └── student-portfolio/
        ├── public/
        │   └── index.html
        ├── src/
        │   ├── components/
        │   │   ├── Portfolio.js      ← Siya's Portfolio Showcase
        │   │   ├── AddStudent.js     ← CREATE
        │   │   ├── ViewStudents.js   ← READ + DELETE
        │   │   └── EditStudent.js    ← UPDATE
        │   ├── App.js
        │   └── index.js
        └── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v16+): https://nodejs.org
- MongoDB Community: https://www.mongodb.com/try/download/community
- Git (optional): https://git-scm.com

---

### Step 1: Start MongoDB

**Windows:**
```
net start MongoDB
```
Or open **MongoDB Compass** → connect to `mongodb://localhost:27017`

**Mac/Linux:**
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

---

### Step 2: Set Up & Start Backend

```bash
# Navigate to backend folder
cd mern-stack/backend

# Install dependencies
npm install

# Start the server
node server.js
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:3000
```

> To auto-restart on file changes, use: `npx nodemon server.js`

---

### Step 3: Set Up & Start Frontend

Open a **new terminal window**:

```bash
# Navigate to frontend
cd mern-stack/frontend/student-portfolio

# Install dependencies
npm install

# Start React app
npm start
```

The app opens automatically at: **http://localhost:3001**

---

## 🔗 API Endpoints

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| POST   | `/student/add`         | Add new student       |
| GET    | `/student/view`        | Get all students      |
| GET    | `/student/view/:id`    | Get one student       |
| PUT    | `/student/update/:id`  | Update student        |
| DELETE | `/student/delete/:id`  | Delete student        |

---

## 🧪 Testing with curl

```bash
# Add a student
curl -X POST http://localhost:3000/student/add \
  -H "Content-Type: application/json" \
  -d '{"name":"Siya Shaha","email":"siya@mitwpu.edu.in","course":"B.Tech CSE","cgpa":"8.58"}'

# View all students
curl http://localhost:3000/student/view

# Delete (replace ID with actual MongoDB _id)
curl -X DELETE http://localhost:3000/student/delete/<id>
```

---

## 📸 Features

- **Portfolio Page** – Siya Shaha's complete portfolio from resume
- **Add Student** – Form with validation, all fields
- **View Students** – Card grid with search/filter
- **Edit Student** – Pre-filled form for updates
- **Delete Student** – Confirmation dialog before delete
- Responsive, dark-themed UI

---

## 📤 GitHub Submission

```bash
git init
git add .
git commit -m "MERN stack CRUD student portfolio"
git remote add origin https://github.com/YOUR_USERNAME/mern-student-portfolio
git push -u origin main
```

---

## 🎤 Viva Answers

**1. What is MERN stack?**
MERN is a JavaScript-based full stack: MongoDB (database), Express.js (backend framework), React (frontend library), Node.js (runtime environment).

**2. Difference between SQL and NoSQL?**
SQL uses structured tables with fixed schema; NoSQL uses flexible documents (like JSON). MongoDB is NoSQL – faster for unstructured/variable data.

**3. What is REST API?**
REST (Representational State Transfer) is an architectural style using HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.

**4. Role of Express.js?**
Express.js is a lightweight Node.js framework that simplifies routing, middleware handling, and building REST APIs.
