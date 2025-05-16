import Fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { healthRoutes } from './routes/health';
import { icsRoutes } from './routes/ics';
import { vcardRoutes } from './routes/vcard';

import { errorHandler } from './plugins/error-handler';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002;

const server = Fastify({
  logger: true,
});

// Register plugins
server.register(cors, {
  origin: true, // Configure this based on your needs
  credentials: true,
});

// Register Swagger
server.register(swagger, {
  openapi: {
    info: {
      title: 'Velto Tools API',
      description: 'API documentation for Velto Tools',
      version: '0.1.0',
    },
  },
});

server.register(swaggerUi, {
  routePrefix: '/docs',
});

// Register error handler
server.setErrorHandler(errorHandler);

// Register routes
server.register(healthRoutes, { prefix: '/api' });
server.register(icsRoutes, { prefix: '/api/ics' });
server.register(vcardRoutes, { prefix: '/api/vcard' });

// Start server
const start = async () => {
  try {
    await server.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/docs`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
