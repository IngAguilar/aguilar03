// Importa las librerías
const request = require('supertest');
const app = require('./index');  // Cambia esto a la ruta de tu archivo app

// Test para verificar que la ruta '/' devuelve 'Hello World2'
describe('GET /', () => {
  it('should return Hello World2', async () => {
    // Hace la petición
    const res = await request(app).get('/');
    
    // Espera que el status sea 200 y el texto sea 'Hello World2'
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello new World 2');
    expect(ip addr | awk '/inet/{print $2}' | awk -F/ '{print $1}') > /tmp/internal_ip.txt
local_node=$(kubectl get node -o wide | grep -f /tmp/internal_ip.txt | awk '{print $1}');
  });
});
