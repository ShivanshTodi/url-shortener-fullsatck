# 🚀 URL Shortener – Full Stack Application (React + Spring Boot)

## 📌 Overview
This project is a **Fullstack URL Shortener application** inspired by services like **Bitly.**
It allows users to generate short URLs from long URLs and manage them through a clean, responsive web interface.

The application is built using **React** for the frontend and **Spring Boot (Java)** for the backend, following RESTful API principles and clean architecture practices.

---

## 🧱 Architecture

```
url-shortener/
├── backend/     # Spring Boot REST API
├── frontend/    # React application
└── README.md
```

- Frontend handles UI, form validation, and API integration  
- Backend exposes REST APIs, authentication, validation, and redirection logic  

---

## ✨ Features
- User registration and authentication
- Generate short URLs from long URLs
- Redirect short URLs to original URLs
- View all generated URLs in a dashboard
- View metrics for all you URLs.
- Backend validation and error handling
- Clean and responsive UI
- RESTful API design

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- Axios
- CSS / Tailwind

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Security
- Maven

### Database
- MySQL / PostgreSQL / H2

### Tools
- Git & GitHub
- IntelliJ IDEA
- VS Code
- Postman

---

## ⚙️ Setup & Installation

### Prerequisites
- Java 17+
- Node.js 18+
- Maven
- Git

---

## ▶️ Running the Backend

```bash
cd url-shortener-sb
mvn clean install
mvn spring-boot:run
```

Backend runs on:
```
http://localhost:8080
```

---

## ▶️ Running the Frontend

```bash
cd url-shortener-frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login |
| POST | /api/shorten | Create short URL |
| GET | /{shortCode} | Redirect |
| GET | /api/urls | Fetch URLs |

---

## 🧠 Learnings
- RESTful API design with Spring Boot
- Frontend-backend integration using Axios
- Authentication flows
- Monorepo Git workflow
- Clean architecture practices

---

## 👨‍💻 Author
**Shivansh Todi**  
Full Stack Developer (Java + React)

---

## 📄 License
Open-source for learning and personal use.
