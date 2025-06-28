# Deployment Guide - Financial Manager App

This guide will help you deploy your Financial Manager application live on GitHub with both frontend and backend.

## Prerequisites

1. **GitHub Account** - You need a GitHub account
2. **MongoDB Atlas** - Free cloud database (recommended)
3. **Vercel Account** - For backend deployment
4. **Render Account** - For frontend deployment (alternative to GitHub Pages)

## Step 1: Set Up MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user with password
5. Get your connection string
6. Add your IP address to the whitelist (or use 0.0.0.0/0 for all IPs)

**Connection string format:**
```
mongodb+srv://username:password@cluster.mongodb.net/finmanager?retryWrites=true&w=majority
```

## Step 2: Deploy Backend to Vercel

### 2.1 Prepare Your Repository
1. Push all your code to GitHub
2. Make sure your repository is public (for free Vercel deployment)

### 2.2 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Node.js
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

### 2.3 Set Environment Variables in Vercel
Before deploying, add these environment variables:

1. **JWT_SECRET**: Create a strong secret (e.g., `your-super-secret-jwt-key-2024`)
2. **MONGODB_URI**: Your MongoDB Atlas connection string
3. **NODE_ENV**: `production`

### 2.4 Deploy
Click "Deploy" and wait for completion.

### 2.5 Get Your Backend URL
After deployment, Vercel will give you a URL like:
`https://your-project-name.vercel.app`

## Step 3: Deploy Frontend to Render

### 3.1 Deploy to Render
1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `financial-manager-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/build`

### 3.2 Set Environment Variable
Add this environment variable:
- **Key**: `REACT_APP_API_URL`
- **Value**: Your Vercel backend URL (from Step 2.5)

### 3.3 Deploy
Click "Create Static Site" and wait for deployment.

## Step 4: Alternative - Deploy Frontend to GitHub Pages

### 4.1 Set Up GitHub Pages
1. Go to your GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages`
5. Folder: `/ (root)`
6. Click Save

### 4.2 Set Repository Secrets
1. Go to Settings → Secrets and variables → Actions
2. Add new repository secret:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: Your Vercel backend URL

### 4.3 Enable GitHub Actions
The `.github/workflows/deploy.yml` file will automatically deploy your frontend when you push to main branch.

## Step 5: Test Your Deployment

1. **Test Backend**: Visit your Vercel URL
   - Should show: `{"message": "Financial Manager API is running!"}`

2. **Test Frontend**: Visit your Render/GitHub Pages URL
   - Should load the React app
   - Try to register/login
   - Try to add a transaction

## Step 6: Troubleshooting

### CORS Errors
- Backend CORS is configured to allow all origins (`*`)
- If you still get CORS errors, check that your frontend is using the correct backend URL

### Database Connection Issues
- Make sure your MongoDB Atlas connection string is correct
- Check that your IP is whitelisted in MongoDB Atlas
- Verify the database user has proper permissions

### Frontend Not Loading
- Check that the `REACT_APP_API_URL` environment variable is set correctly
- Verify the build completed successfully
- Check browser console for errors

### Authentication Issues
- Make sure JWT_SECRET is set in Vercel environment variables
- Check that the token is being sent in Authorization header

## Environment Variables Summary

### Backend (Vercel)
```
JWT_SECRET=your-super-secret-jwt-key-2024
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/finmanager?retryWrites=true&w=majority
NODE_ENV=production
```

### Frontend (Render/GitHub Pages)
```
REACT_APP_API_URL=https://your-backend-url.vercel.app
```

## URLs After Deployment

- **Backend API**: `https://your-project-name.vercel.app`
- **Frontend (Render)**: `https://your-app-name.onrender.com`
- **Frontend (GitHub Pages)**: `https://yourusername.github.io/your-repo-name`

## Security Notes

1. **JWT_SECRET**: Use a strong, random string
2. **MongoDB**: Use MongoDB Atlas with proper authentication
3. **CORS**: Currently allows all origins - consider restricting in production
4. **Environment Variables**: Never commit sensitive data to GitHub

## Next Steps

1. Set up a custom domain (optional)
2. Configure proper CORS origins for production
3. Set up monitoring and logging
4. Implement rate limiting
5. Add SSL certificates (usually automatic with Vercel/Render) 