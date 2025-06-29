# 💰 Personal Finance Manager

A full-stack financial management application built with React frontend and Node.js backend, deployed live on Vercel and Render.

## 🌐 Live Application

**🔗 Frontend**: [https://project-beige-ten-92.vercel.app](https://project-beige-ten-92.vercel.app)

**🔗 Backend API**: [https://personal-finance-manger.onrender.com](https://personal-finance-manger.onrender.com)

## ✨ Features

- **🔐 User Authentication** - Secure registration and login with JWT
- **💰 Transaction Management** - Add, edit, delete, and view transactions
- **📊 Analytics Dashboard** - Visual charts and financial insights
- **📅 Date Filtering** - Filter by week, month, year, or custom dates
- **🏷️ Category Management** - Organize transactions by categories
- **📱 Responsive Design** - Works on desktop, tablet, and mobile
- **🌙 Dark Theme** - Modern dark UI with particle effects

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Material-UI** - Beautiful UI components
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React DatePicker** - Date selection
- **React Particles** - Animated background

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database with Mongoose
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment
- **Frontend**: Vercel (React optimization)
- **Backend**: Render (Node.js hosting)
- **Database**: MongoDB Atlas (Cloud database)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/project.git
   cd project
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp env.example .env
   # Update .env with your MongoDB URI and JWT secret
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   # Update src/utils/ApiRequest.js with your backend URL
   npm start
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:4000

## 📱 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Dashboard+View)

### Transaction Management
![Transactions](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Transaction+Management)

### Analytics
![Analytics](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Analytics+Dashboard)

## 🔧 Environment Variables

### Backend (.env)
```env
JWT_SECRET=your-super-secret-jwt-key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/finmanager
NODE_ENV=development
PORT=4000
```

### Frontend
```env
REACT_APP_API_URL=http://localhost:4000
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Transactions
- `POST /api/v1/addTransaction` - Add new transaction
- `POST /api/v1/getTransaction` - Get transactions with filters
- `PUT /api/v1/updateTransaction/:id` - Update transaction
- `POST /api/v1/deleteTransaction/:id` - Delete transaction

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set root directory to `frontend`
3. Set build command: `npm run build`
4. Set output directory: `build`
5. Add environment variable: `REACT_APP_API_URL`

### Backend (Render)
1. Create new Web Service on Render
2. Connect GitHub repository
3. Set root directory to `backend`
4. Set build command: `npm install`
5. Set start command: `npm run prod`
6. Add environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Jyothi Gujula**
- GitHub: [@Jyothi-gujula](https://github.com/Jyothi-gujula)

## 🙏 Acknowledgments

- React team for the amazing framework
- Material-UI for beautiful components
- MongoDB Atlas for cloud database
- Vercel and Render for hosting

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

⭐ **Star this repository if you found it helpful!** 
