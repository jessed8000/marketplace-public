export function onRequest(context) {
  var request = context.request;
  var env = context.env;
  var url = new URL(request.url);

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Handle OAuth callback
  if (url.pathname === '/oauth' && request.method === 'POST') {
    return request.json().then(function(body) {
      var code = body.code;

      if (!code) {
        return new Response('Missing authorization code', { status: 400 });
      }

      // Exchange code for access token
      return fetch('https://github.com/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code: code,
        }),
      })
      .then(function(tokenResponse) {
        return tokenResponse.json();
      })
      .then(function(tokenData) {
        if (tokenData.error) {
          return new Response(JSON.stringify(tokenData), { 
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        // Return success response
        return new Response(JSON.stringify({
          token: tokenData.access_token,
          provider: 'github',
        }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      })
      .catch(function(error) {
        return new Response(JSON.stringify({ error: 'OAuth exchange failed' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      });
    });
  }

  return new Response('Not found', { status: 404 });
}