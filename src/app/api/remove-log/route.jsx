import clientPromise from '@/lib/mongodb';

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('usb-project');
    const collection = db.collection('view_logs');

    const result = await collection.deleteMany({}); // Deletes all documents

    return new Response(
      JSON.stringify({
        message: `${result.deletedCount} document(s) deleted`,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('❌ Error deleting all view logs:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
