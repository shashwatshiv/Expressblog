# ExpressLog - Full-Stack Blogging Platform

A modern, full-stack blogging platform built with React, TypeScript, and Hono.js. ExpressLog allows users to create, read, update, and manage blog posts with user authentication and a responsive design.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT tokens
- **Blog Management**: Create, read, update, and delete blog posts
- **User Profiles**: Personal user dashboard and profile management
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Protected Routes**: Secure access to user-specific features
- **Real-time Updates**: Dynamic content loading and state management

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **Headless UI** - Accessible UI components

### Backend

- **Hono.js** - Fast, lightweight web framework
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Relational database
- **JWT** - JSON Web Tokens for authentication
- **Cloudflare Workers** - Serverless deployment

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **pnpm** - Fast, disk space efficient package manager
- **TypeScript** - Static type checking

## 📁 Project Structure

```
expresslog/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   └── routes/         # Route configurations
│   └── public/             # Static assets
├── backend/                 # Hono.js API server
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   ├── middlewares/    # Custom middleware
│   │   └── prismaFunction.ts
│   └── prisma/             # Database schema and migrations
└── common/                  # Shared types and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager
- PostgreSQL database
- Cloudflare account (for deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd expresslog
   ```

2. **Install dependencies**

   ```bash
   # Install frontend dependencies
   cd frontend
   pnpm install

   # Install backend dependencies
   cd ../backend
   pnpm install

   # Install common package dependencies
   cd ../common
   pnpm install
   ```

3. **Set up environment variables**

   Create `.env` file in the backend directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/expresslog"
   JWT_SECRET="your-secret-key"
   ```

4. **Set up the database**

   ```bash
   cd backend
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development servers**

   **Backend:**

   ```bash
   cd backend
   pnpm dev
   ```

   **Frontend:**

   ```bash
   cd frontend
   pnpm dev
   ```

## 📖 API Endpoints

### Authentication

- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login
- `POST /api/v1/verify-token` - Token verification

### Blog Management

- `GET /api/v1/blog/bulk` - Get all blogs
- `POST /api/v1/blog` - Create new blog (protected)
- `PUT /api/v1/blog` - Update blog (protected)
- `GET /api/v1/blog/:id` - Get specific blog
- `DELETE /api/v1/blog/:id` - Delete blog (protected)

## 🗄️ Database Schema

### User Model

```prisma
model User {
  id       Int     @id @default(autoincrement())
  email    String  @unique
  name     String?
  password String
  blog     Blog[]
}
```

### Blog Model

```prisma
model Blog {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## 🚀 Deployment

### Frontend (Netlify)

The frontend is configured for deployment on Netlify with the following settings:

- Build command: `pnpm run build`
- Publish directory: `dist`
- Base directory: `frontend`

### Backend (Cloudflare Workers)

The backend is deployed using Cloudflare Workers:

```bash
cd backend
pnpm deploy
```

## 🔧 Development

### Available Scripts

**Frontend:**

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

**Backend:**

- `pnpm dev` - Start development server
- `pnpm deploy` - Deploy to Cloudflare Workers
- `pnpm cf-typegen` - Generate Cloudflare types

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shashwat Shiv** - [GitHub](https://github.com/shashwatshiv)

---

⭐ If you found this project helpful, please give it a star!
