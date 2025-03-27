# User Management Application

A modern React application for user management, built with Javascript and Tailwind CSS. This application demonstrates authentication, user listing,After 2 Mins Automatice logout and CRUD operations using the ReqRes API.

## Features

- 🔐 User Authentication & after 2 min session expire
- 👥 User Management (List, Edit, Delete)
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast Development
- 🔍 Type Safety with Javascript
- 🚦 Protected Routes
- 🔔 Toast Notifications

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/a19hu/Assig_User_Management.git
cd Assig_User_Management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

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
└── App.tsx         # Main application component
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
