import { FastifyInstance } from 'fastify';
import ICSGenerator from '@velto-tools/ics-file';

export const icsRoutes = async (fastify: FastifyInstance) => {
  fastify.get(
    '/generate',
    {
      schema: {
        description: 'Generate and download an ICS file',
        tags: ['ics'],
        querystring: {
          type: 'object',
          required: ['startDate', 'endDate', 'summary'],
          properties: {
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' },
            summary: { type: 'string', minLength: 1 },
            description: { type: 'string' },
            location: { type: 'string' },
            filename: {
              type: 'string',
              default: 'event.ics',
            },
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              content: { type: 'string' },
              headers: { type: 'object' },
            },
            description: 'ICS file content',
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const { startDate, endDate, summary, description, location, filename } =
          request.query as {
            startDate: string;
            endDate: string;
            summary: string;
            description: string;
            location: string;
            filename: string;
          };

        console.log('Query parameters:', request.query);

        const icsGenerator = new ICSGenerator();
        const result = await icsGenerator.downloadICSFile(
          {
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            summary,
            description,
            location,
          },
          { filename }
        );

        if (result.error) {
          throw new Error(result.message);
        }
        return reply.status(200).headers(result.headers).send(result.content);
      } catch (error) {
        request.log.error(error);
        return reply.status(400).send({
          error: 'ICS Generation Error',
          message:
            error instanceof Error ? error.message : 'Unknown error occurred',
        });
      }
    }
  );
};
