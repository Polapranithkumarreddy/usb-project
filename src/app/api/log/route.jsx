 import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json(); // Parse incoming JSON body

    // Validate incoming data (optional but recommended)
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db('usb-project');
    const collection = db.collection('view_logs');

    const result = await collection.insertOne(body); // Insert data

    return new Response(JSON.stringify({ insertedId: result.insertedId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Error inserting view log:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
