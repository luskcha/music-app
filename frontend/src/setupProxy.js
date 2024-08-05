const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth', // Define el prefijo de las rutas que serán proxied
    createProxyMiddleware({
      target: 'http://localhost:5000', // Dirección del servidor backend
      changeOrigin: true, // Cambia el origen de la solicitud a la URL objetivo
    })
  );

  app.use(
    '/albums', // Otro prefijo de rutas a proxiar
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  // Agrega otros proxys según sea necesario
};
