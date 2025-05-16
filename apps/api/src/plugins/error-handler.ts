import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export const errorHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.message ?? 'Internal Server Error';

  request.log.error(error);

  reply.status(statusCode).send({
    statusCode,
    error: error.name,
    message,
  });
};
