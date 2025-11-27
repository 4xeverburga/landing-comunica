export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/waitlist') {
      if (request.method === 'OPTIONS') {
        return buildCorsResponse();
      }

      if (request.method === 'POST') {
        return handleWaitlistSubmission(request, env);
      }

      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    return env.ASSETS.fetch(request);
  }
};

function buildCorsResponse() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

async function handleWaitlistSubmission(request, env) {
  let payload;
  try {
    payload = await request.json();
  } catch (err) {
    return jsonResponse({ error: 'Solicitud inválida' }, 400);
  }

  const email = (payload?.email || '').trim().toLowerCase();
  const metadata = {
    cycle: payload?.cycle || null,
    source: payload?.source || 'landing',
    userAgent: request.headers.get('user-agent') || null,
    timestamp: new Date().toISOString()
  };

  if (!isValidEmail(email)) {
    return jsonResponse({ error: 'Correo inválido' }, 422);
  }

  const key = `waitlist:${email}:${Date.now()}`;
  await env.WAITLIST_KV.put(key, JSON.stringify({ email, ...metadata }));

  return jsonResponse({ ok: true });
}

function isValidEmail(email) {
  if (!email) return false;
  return /.+@.+\..+/.test(email);
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...corsHeaders()
    }
  });
}

function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST,OPTIONS',
    'access-control-allow-headers': 'content-type'
  };
}
