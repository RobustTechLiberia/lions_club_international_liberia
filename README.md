# Lion Club Liberia Platform

## Overview
The Lion Club Liberia Platform is a centralized web application designed to unify and manage all regional chapters of Lion Club Liberia, a continental chapter of the Lions Clubs International Foundation (LCIF).

The platform enables efficient member management, dues payment tracking, and administrative oversight through a modern web interface.

---

## Objectives
- Centralize operations across all regional chapters  
- Enable seamless dues payment and tracking  
- Improve transparency and accountability  
- Provide real-time insights via dashboards  

---

## Features

### Member Portal
- Secure authentication & authorization  
- Online dues payment  
- Payment history tracking  
- Profile management  

### Dashboard
- Real-time dues tracking  
- Financial summaries  
- Member activity monitoring  
- Chapter-level analytics  

---

## Tech Stack

### Frontend
- React
- Tailwind CSS

### Backend
- Express.js

### Database
- MongoDB (optional)
- MySQL (recommended for financial consistency)

---

## System Architecture

Client (React) → API (Express) → Database (MongoDB/MySQL)

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB or MySQL instance

---

### Local Development
```bash
npm run dev
```

---

### Production Build
```bash
npm run build
```

---

## Database Schema Design

### Core Entities
- Users  
- Roles  
- Regions  
- Chapters  
- Memberships  
- Dues  
- Member Dues  
- Payments  

---

### Relational Schema (MySQL)

#### Users
id, first_name, last_name, email, phone, password_hash, role_id

#### Roles
id, name, description

#### Regions
id, name

#### Chapters
id, name, region_id, address

#### Memberships
id, user_id, chapter_id, join_date, status

#### Dues
id, title, amount, due_date

#### Member Dues
id, membership_id, dues_id, status

#### Payments
id, member_due_id, amount_paid, method, reference, status, payment_date

---



## Security Considerations
- JWT-based authentication  
- Password hashing (bcrypt)  
- Input validation & sanitization  
- Protection against XSS, CSRF, SQL/NoSQL Injection  

---

## Deployment
- Use environment variables for sensitive data  
- Enable HTTPS  
- Use PM2 or similar process manager  
- Configure reverse proxy (e.g., Nginx)  

---

## Future Enhancements
- Mobile application  
- Automated payment reminders  
- Multi-currency support  
- Advanced analytics dashboard  
- Payment gateway integration  

---

## Contribution Guidelines
- Use feature-based branching (feature/*, fix/*)  
- Write clean, maintainable code  
- Submit pull requests with clear descriptions  
- Ensure proper testing before merge  

---

## License
Proprietary - Lion Club Liberia
