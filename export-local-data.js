// Script to export your local MongoDB data
// Run this to backup your local data before switching to Atlas

import { MongoClient } from 'mongodb';

const localUri = "mongodb://127.0.0.1:27017/finmanager";

async function exportData() {
  try {
    console.log('Connecting to local MongoDB...');
    const client = new MongoClient(localUri);
    await client.connect();
    
    const db = client.db('finmanager');
    
    // Export users
    const users = await db.collection('users').find({}).toArray();
    console.log(`Found ${users.length} users`);
    
    // Export transactions
    const transactions = await db.collection('transactions').find({}).toArray();
    console.log(`Found ${transactions.length} transactions`);
    
    // Save to files
    const fs = require('fs');
    fs.writeFileSync('users-backup.json', JSON.stringify(users, null, 2));
    fs.writeFileSync('transactions-backup.json', JSON.stringify(transactions, null, 2));
    
    console.log('✅ Data exported to users-backup.json and transactions-backup.json');
    console.log('📝 You can import this data to MongoDB Atlas later if needed');
    
    await client.close();
  } catch (error) {
    console.error('❌ Export failed:', error);
  }
}

exportData(); 