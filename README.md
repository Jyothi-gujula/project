# Financial Manager Application

A full-stack financial management application built with React frontend and Node.js backend.

## Features

- User authentication and authorization
- Transaction management
- Financial analytics and reporting
- Responsive design with Material-UI

## Tech Stack

### Frontend
- React 18
- Material-UI
- React Router
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing

## Project Structure

```
project/
├── frontend/          # React application
├── backend/           # Node.js/Express API
└── README.md
```

## Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```
   JWT_SECRET=your_jwt_secret_here
   MONGODB_URI=mongodb://127.0.0.1:27017/finmanager
   PORT=4000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Deployment

### Frontend Deployment (GitHub Pages)
1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to GitHub Pages using GitHub Actions (see `.github/workflows/deploy.yml`)

### Backend Deployment (Render/Railway)
1. Create account on [Render](https://render.com) or [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables
4. Deploy the backend service

## Environment Variables

### Backend (.env)
```
JWT_SECRET=your_jwt_secret_here
MONGODB_URI=your_mongodb_connection_string
PORT=4000
NODE_ENV=production
```

### Frontend
Update API base URL in `src/utils/ApiRequest.js` to point to your deployed backend.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC 
