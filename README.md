# 🏛️ SajhaManch

> A digital public square for Nepal — where citizens express opinions, participate in discussions, vote on issues, and reach consensus in a transparent way.

SajhaManch focuses on **dialogue + participation + shared decision-making**, unlike traditional voting systems.

---

## 🌱 Vision

To create a modern civic-tech platform that empowers Nepalis to:

- 💬 Discuss public issues openly
- 🗣️ Share feedback without fear
- ✅ Vote responsibly
- 🤝 Form collective consensus through participation

---

## 🚀 Backend Features (Implemented)

### 🔐 Authentication & Authorization

| Feature                                  | Status |
| ---------------------------------------- | ------ |
| User registration with email & mobile    | ✅     |
| Secure login with JWT tokens             | ✅     |
| Password hashing with bcrypt             | ✅     |
| Role-based access control (ADMIN / USER) | ✅     |
| Profile management (view & update)       | ✅     |
| Email verification templates             | ✅     |

### 🗳️ Polls Management

| Feature                                    | Status |
| ------------------------------------------ | ------ |
| Create polls with title & description      | ✅     |
| Multiple poll options per poll             | ✅     |
| Scheduled polls (start & end dates)        | ✅     |
| Auto-activation/deactivation via cron jobs | ✅     |
| Active/Inactive poll filtering             | ✅     |
| Top polls endpoint                         | ✅     |
| Trending polls endpoint                    | ✅     |
| Pagination & query filtering               | ✅     |
| Admin-only poll creation/update/delete     | ✅     |

### ✅ Voting System

| Feature                                   | Status |
| ----------------------------------------- | ------ |
| Cast vote on poll options                 | ✅     |
| Single vote per user per poll enforcement | ✅     |
| Vote update capability                    | ✅     |
| Vote deletion                             | ✅     |
| Poll results with vote counts             | ✅     |
| Check if user has voted on a poll         | ✅     |

### 💬 Feedback System

| Feature                          | Status |
| -------------------------------- | ------ |
| Submit feedback on polls         | ✅     |
| Anonymous or identified feedback | ✅     |
| Rate limiting (4 feedbacks/hour) | ✅     |
| CRUD operations on feedbacks     | ✅     |

### ⚡ Real-time Features (WebSocket)

| Feature                            | Status |
| ---------------------------------- | ------ |
| Live vote count updates            | ✅     |
| Real-time trending polls broadcast | ✅     |
| Online users count tracking        | ✅     |
| Socket.io integration              | ✅     |

### 👥 User Management

| Feature                        | Status |
| ------------------------------ | ------ |
| User CRUD operations           | ✅     |
| User roles (ADMIN/USER)        | ✅     |
| User profile with vote history | ✅     |

### 🔧 Backend Infrastructure

| Feature                                 | Status |
| --------------------------------------- | ------ |
| Prisma ORM with PostgreSQL              | ✅     |
| Database migrations                     | ✅     |
| Request throttling                      | ✅     |
| Scheduled tasks (cron jobs)             | ✅     |
| Email service (Nodemailer + Handlebars) | ✅     |
| Input validation (class-validator)      | ✅     |
| Guards for route protection             | ✅     |

---

## 🎨 Frontend Features (Planned)

### 🏠 Landing & Public Pages

| Feature                             | Status     |
| ----------------------------------- | ---------- |
| Hero section with platform overview | 📋 Planned |
| Active polls showcase               | 📋 Planned |
| Trending polls widget               | 📋 Planned |
| About & Vision page                 | 📋 Planned |

### 🔐 Authentication Pages

| Feature                               | Status     |
| ------------------------------------- | ---------- |
| Login page with form validation       | 📋 Planned |
| Registration page with mobile & email | 📋 Planned |
| Password reset flow                   | 📋 Planned |
| Email verification page               | 📋 Planned |

### 🗳️ Polls Interface

| Feature                             | Status     |
| ----------------------------------- | ---------- |
| Browse all active polls             | 📋 Planned |
| Poll detail page with options       | 📋 Planned |
| Real-time vote count display        | 📋 Planned |
| Vote submission with confirmation   | 📋 Planned |
| Poll results visualization (charts) | 📋 Planned |
| Filter & search polls               | 📋 Planned |

### 💬 Feedback Interface

| Feature                     | Status     |
| --------------------------- | ---------- |
| Feedback form on poll pages | 📋 Planned |
| Anonymous toggle option     | 📋 Planned |
| View feedbacks thread       | 📋 Planned |

### 👤 User Dashboard

| Feature              | Status     |
| -------------------- | ---------- |
| Profile management   | 📋 Planned |
| My votes history     | 📋 Planned |
| My feedbacks history | 📋 Planned |

### 🛠️ Admin Dashboard

| Feature                        | Status     |
| ------------------------------ | ---------- |
| Create/Edit/Delete polls       | 📋 Planned |
| Manage poll options            | 📋 Planned |
| View all feedbacks             | 📋 Planned |
| User management                | 📋 Planned |
| Analytics & insights dashboard | 📋 Planned |
| Poll scheduling interface      | 📋 Planned |

### 📊 Data Visualization

| Feature                          | Status     |
| -------------------------------- | ---------- |
| Pie charts for vote distribution | 📋 Planned |
| Bar charts for comparisons       | 📋 Planned |
| Live vote count animations       | 📋 Planned |
| Trending polls leaderboard       | 📋 Planned |

### ⚡ Real-time UI Features

| Feature                     | Status     |
| --------------------------- | ---------- |
| Live online users counter   | 📋 Planned |
| Real-time vote updates      | 📋 Planned |
| Notification toasts         | 📋 Planned |
| Confetti on successful vote | 📋 Planned |

---

## 🛠️ Tech Stack

### Backend (Current)

| Technology            | Purpose                   |
| --------------------- | ------------------------- |
| **NestJS**            | Backend framework         |
| **TypeScript**        | Type-safe development     |
| **Prisma**            | ORM & database migrations |
| **PostgreSQL**        | Primary database          |
| **JWT**               | Authentication tokens     |
| **Socket.io**         | Real-time communication   |
| **Nodemailer**        | Email service             |
| **class-validator**   | Input validation          |
| **@nestjs/throttler** | Rate limiting             |
| **@nestjs/schedule**  | Cron jobs                 |

### Frontend (Planned)

| Technology              | Purpose                 |
| ----------------------- | ----------------------- |
| **Next.js / React**     | Frontend framework      |
| **TypeScript**          | Type-safe development   |
| **Tailwind CSS**        | Styling                 |
| **Socket.io-client**    | Real-time updates       |
| **Chart.js / Recharts** | Data visualization      |
| **React Query**         | Server state management |
| **Axios**               | HTTP client             |
| **Framer Motion**       | Animations              |

---

## 📁 Project Structure

```
sajhamanch/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma       # Database schema
│   │   ├── migrations/         # Database migrations
│   │   └── seed.ts             # Database seeding
│   ├── src/
│   │   ├── auth/               # Authentication module
│   │   ├── users/              # User management
│   │   ├── polls/              # Polls CRUD & WebSocket
│   │   ├── poll-options/       # Poll options management
│   │   ├── votes/              # Voting system
│   │   ├── feedbacks/          # Feedback system
│   │   ├── cron/               # Scheduled tasks
│   │   ├── guards/             # Auth & role guards
│   │   ├── helpers/            # Decorators & utilities
│   │   └── main.ts             # Application entry
│   ├── templates/              # Email templates
│   └── package.json
│
└── frontend/                   # (Planned)
    ├── src/
    │   ├── components/         # Reusable UI components
    │   ├── pages/              # Route pages
    │   ├── hooks/              # Custom React hooks
    │   ├── services/           # API service layer
    │   ├── store/              # State management
    │   └── utils/              # Helper functions
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
npx prisma migrate dev
npm run start:dev
```

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/sajhamanch
JWT_SECRET=your-secret-key
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASSWORD=your-password
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register new user |
| POST   | `/auth/login`    | User login        |
| GET    | `/auth/profile`  | Get user profile  |
| PATCH  | `/auth/profile`  | Update profile    |

### Polls

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/polls`          | Get all polls       |
| GET    | `/polls/:id`      | Get poll by ID      |
| POST   | `/polls`          | Create poll (Admin) |
| PATCH  | `/polls/:id`      | Update poll (Admin) |
| DELETE | `/polls/:id`      | Delete poll (Admin) |
| GET    | `/polls/top`      | Get top polls       |
| GET    | `/polls/trending` | Get trending polls  |

### Votes

| Method | Endpoint                      | Description      |
| ------ | ----------------------------- | ---------------- |
| POST   | `/votes`                      | Cast a vote      |
| GET    | `/votes`                      | Get user's votes |
| GET    | `/votes/:id`                  | Get vote by ID   |
| PATCH  | `/votes/:id`                  | Update vote      |
| DELETE | `/votes/:id`                  | Delete vote      |
| GET    | `/votes/poll/:pollId/results` | Get poll results |
| GET    | `/votes/poll/:pollId/check`   | Check if voted   |

### Feedbacks

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/feedbacks`     | Submit feedback    |
| GET    | `/feedbacks`     | Get all feedbacks  |
| GET    | `/feedbacks/:id` | Get feedback by ID |
| PATCH  | `/feedbacks/:id` | Update feedback    |
| DELETE | `/feedbacks/:id` | Delete feedback    |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

---

<p align="center">
  Made for Nepal 🇳🇵
</p>
