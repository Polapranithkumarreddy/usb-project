export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Missing credentials' }), {
        status: 400,
      });
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    });
  }
}
