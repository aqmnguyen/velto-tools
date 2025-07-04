import { FastifyInstance } from 'fastify';
import VCardGenerator from '@velto-tools/vcard-file';

export const vcardRoutes = async (fastify: FastifyInstance) => {
  fastify.get(
    '/generate',
    {
      schema: {
        description: 'Generate and download an VCard file',
        tags: ['vcard'],
        querystring: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', minLength: 1 },
            address: { type: 'string', minLength: 1 },
            email: { type: 'string', minLength: 1 },
            company: { type: 'string', minLength: 1 },
            fax: { type: 'string', minLength: 1 },
            tel: { type: 'string', minLength: 1 },
            jtitle: { type: 'string', minLength: 1 },
            wurl: { type: 'string', minLength: 1 },
            summary: { type: 'string', minLength: 1 },
            description: { type: 'string' },
            location: { type: 'string' },
            filename: {
              type: 'string',
              default: 'contact.vcf',
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
        const {
          name,
          address,
          email,
          company,
          fax,
          tel,
          jtitle,
          wurl,
          purl,
          photo,
          note,
          filename,
        } = request.query as {
          name: string;
          address: string;
          email: string;
          company: string;
          fax: string;
          tel: string;
          jtitle: string;
          wurl: string;
          purl: string;
          photo: string;
          note: string;
          filename: string;
        };

        const vcardGenerator = new VCardGenerator();
        const result = await vcardGenerator.downloadVCardFile(
          {
            name: name || '',
            address: address || '',
            email: email || '',
            company: company || '',
            fax: fax || '',
            tel: tel || '',
            jtitle: jtitle || '',
            wurl: wurl || '',
            purl: purl || '',
            photo: photo || '',
            note: note || '',
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
