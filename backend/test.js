// Simple test file to verify Vercel deployment
export default function handler(req, res) {
  res.status(200).json({ 
    message: "Test endpoint working!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
} 