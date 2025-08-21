import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  
});

async function getViewLogs() {
  try {
    // Connect to the client
    await client.connect();
    console.log('✅ Connected to MongoDB');

    // Select the database and collection
    const db = client.db('usb-project');
    const collection = db.collection('view_logs');

    // Fetch all documents
    const logs = await collection.find({}).toArray();
    console.log('📄 View Logs:', logs);

    return logs;
  } catch (err) {
    console.error('❌ Error fetching view logs:', err);
  } finally {
    // Always close the client
    await client.close();
    console.log('🔒 MongoDB connection closed');
  }
}

// Run the function
getViewLogs();
