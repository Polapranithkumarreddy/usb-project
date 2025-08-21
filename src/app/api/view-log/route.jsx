
 import clientPromise from '@/lib/mongodb';


export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('usb-project');
    const collection = db.collection('view_logs');

    const logs = await collection.find({}).toArray();

    return new Response(JSON.stringify(logs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Error fetching view logs:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
