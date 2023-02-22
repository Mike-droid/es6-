const http = require('http');

const options = {
  hostname: 'pokeapi.co',
  port: 80,
  path: '/api/v2/pokemon/25',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();

