// Test script to verify your deployment
// Run this after deployment to check if everything is working

const testBackend = async (backendUrl) => {
  try {
    console.log('Testing backend...');
    const response = await fetch(backendUrl);
    const data = await response.json();
    console.log('✅ Backend is working:', data);
    return true;
  } catch (error) {
    console.log('❌ Backend error:', error.message);
    return false;
  }
};

const testCORS = async (backendUrl) => {
  try {
    console.log('Testing CORS...');
    const response = await fetch(`${backendUrl}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@test.com',
        password: 'test123'
      })
    });
    console.log('✅ CORS is working (got response):', response.status);
    return true;
  } catch (error) {
    console.log('❌ CORS error:', error.message);
    return false;
  }
};

// Usage:
// Replace with your actual backend URL
const backendUrl = 'https://your-backend-url.vercel.app';

console.log('🚀 Testing Financial Manager Deployment...\n');

testBackend(backendUrl).then(() => {
  testCORS(backendUrl);
});

console.log('\n📝 Instructions:');
console.log('1. Replace the backendUrl with your actual Vercel URL');
console.log('2. Run: node test-deployment.js');
console.log('3. Check the console output for any errors'); 