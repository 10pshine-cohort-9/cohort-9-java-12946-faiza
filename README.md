# Contact Management System

A full-stack **Contact Management System** built using **Java Spring Boot** and **React.js**. The application allows users to securely register, log in, and manage their contacts through a responsive dashboard.

## Project Overview

The Contact Management System provides a centralized platform for managing personal and professional contacts.

Users can:

* Register using email or phone number
* Log in securely
* Change their password
* Add new contacts
* View contacts in a paginated list
* Search and filter contacts
* Update contact information
* Delete contacts with confirmation
* View contact details
* Import contacts from CSV
* View contact analytics
* Log out securely

The application follows a RESTful backend architecture with a React-based frontend.

---

## Technology Stack

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Hibernate
* Spring Security
* JWT Authentication
* JUnit
* Mockito
* SLF4J
* Logback
* Maven
* SQL Server

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router
* Chart.js
* React Chart.js 2

### Development & Quality Tools

* Git
* GitHub
* SonarQube
* VS Code
* SQL Server Management Studio

---

## Key Features

### 1. User Authentication & Authorization

* User registration using email or phone number
* Secure login functionality
* JWT-based authentication
* Password encryption using BCrypt
* Protected application routes
* Logout functionality
* Change password functionality

### 2. Contact Management

Users can manage their contacts through a dashboard.

Each contact can contain:

* First Name
* Last Name
* Title
* Email
* Phone Number
* Additional contact information

Supported operations:

* Create contact
* View contact
* Update contact
* Delete contact
* Search contacts
* Filter contacts
* Paginate contacts

### 3. CSV Import

The application supports importing contacts from a CSV file.

The import functionality includes:

* CSV file parsing
* Input validation
* Error handling
* Adding imported contacts to the logged-in user's contact list

### 4. Analytics Dashboard

The dashboard provides contact-related analytics, including:

* Total contacts
* Contact growth
* Monthly contact activity
* Recent contact activity
* Contact completeness
* Contact status visualization

Charts are implemented using **Chart.js**.

### 5. Application Logging

Application events and errors are logged using:

* SLF4J
* Logback

Important application activities and exceptions are logged for debugging and monitoring.

### 6. Exception Handling

The backend implements centralized exception handling to provide meaningful error responses and prevent application crashes.

### 7. Unit Testing

Unit tests are implemented using:

* JUnit
* Mockito

Critical controllers and services are tested to verify application behavior.

### 8. SonarQube Integration

SonarQube is used for:

* Static code analysis
* Code quality monitoring
* Identifying potential bugs
* Identifying code smells
* Monitoring test coverage

The project has been analyzed using SonarQube and the configured quality gate has been validated.

---

# Application Screens

## Login & Registration

The authentication section provides:

* Login form
* Registration form
* Email/phone authentication
* Password validation
* Authentication error handling
* Redirect to the dashboard after successful authentication

## Contact Management Dashboard

The dashboard provides:

* Paginated contact listing
* Search and filtering
* Create contact functionality
* Update contact functionality
* Delete confirmation
* Contact details
* CSV import
* Analytics

## User Profile

The profile section provides:

* User information
* Change password
* Logout

---

# Application Flow

```text
Registration
     ↓
Login
     ↓
JWT Authentication
     ↓
Dashboard
     ↓
Contact Management
 ┌──────┼────────┬────────┐
 ↓      ↓        ↓        ↓
Create  Search  Update   Delete
     ↓
   Analytics
```

---

# Project Structure

```text
Contact-Management-System/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/backend/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/
│   │   │   │   ├── repository/
│   │   │   │   ├── security/
│   │   │   │   └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# Backend API

The backend exposes REST APIs for authentication and contact management.

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

## Contacts

```text
GET    /api/contacts
GET    /api/contacts/{id}
POST   /api/contacts
PUT    /api/contacts/{id}
DELETE /api/contacts/{id}
```

## Analytics

```text
GET /api/analytics
```

All protected APIs require a valid JWT authentication token.

---

# Database

The application uses **Microsoft SQL Server** with **Spring Data JPA/Hibernate**.

Main entities include:

```text
User
  │
  └── Contact
```

Each contact belongs to a specific authenticated user, ensuring users can access and manage only their own contacts.

---

# Security

The application implements:

* JWT authentication
* BCrypt password hashing
* Stateless session management
* Protected REST endpoints
* Authorization checks for user-owned contacts
* CORS configuration
* Global exception handling

Sensitive authentication information is not exposed in application responses or logs.

---

# Running the Application

## Prerequisites

Make sure the following are installed:

* Java 21
* Maven
* Node.js
* npm
* SQL Server
* SQL Server Management Studio

---

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Configure the SQL Server database connection in:

```text
src/main/resources/application.properties
```

Then run:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

---

## Frontend Setup

Open another terminal and navigate to:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at the URL shown by Vite in the terminal.

---

# Testing

Run backend tests using:

```bash
mvn test
```

The project uses JUnit and Mockito for automated testing.

---

# Code Quality

SonarQube is used to analyze the project for:

* Bugs
* Vulnerabilities
* Code smells
* Code coverage
* Maintainability issues

---

# Git Workflow

The project uses Git and GitHub for version control.

Feature development follows a branch-based workflow:

```text
main
 │
 └── feature/*
       │
       └── Pull Request
```

Changes are reviewed through GitHub Pull Requests before merging.

---

# Future Improvements

Potential future enhancements include:

* Contact export
* Advanced filtering
* Profile picture support
* Email verification
* Forgot password functionality
* More detailed analytics
* Deployment to a cloud platform

---

# Conclusion

The Contact Management System provides a secure and user-friendly platform for managing contacts. It combines a **Spring Boot REST API**, **SQL Server database**, **JWT-based security**, and a **React.js frontend** to provide complete contact management functionality.

The project also incorporates **logging, exception handling, unit testing, SonarQube analysis, and Git-based version control** to improve reliability, maintainability, and code quality.
