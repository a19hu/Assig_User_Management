# User Management Application

A modern React application for user management, built with TypeScript and Tailwind CSS. This application demonstrates authentication, user listing, and CRUD operations using the ReqRes API.

## Features

- 🔐 User Authentication
- 👥 User Management (List, Edit, Delete)
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast Development with Vite
- 🔍 Type Safety with TypeScript
- 🚦 Protected Routes
- 🔔 Toast Notifications

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd user-management-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components
├── context/          # React Context providers
├── pages/            # Page components
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Authentication

The application uses the ReqRes API for authentication. Use the following credentials to log in:

- Email: eve.holt@reqres.in
- Password: cityslicka

## API Integration

This application integrates with the ReqRes API (https://reqres.in/) for:
- User authentication
- User management (CRUD operations)
- Pagination

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- React Hot Toast
- Lucide React (Icons)
- Vite (Build Tool)

## Development Considerations

1. **Authentication**
   - Token-based authentication
   - Protected routes
   - Persistent login state

2. **State Management**
   - React Context for global state
   - Local state for component-specific data

3. **Error Handling**
   - Toast notifications for user feedback
   - Graceful error handling for API calls
   - Loading states for better UX

4. **Responsive Design**
   - Mobile-first approach
   - Responsive tables and forms
   - Consistent spacing and typography

## License

MIT