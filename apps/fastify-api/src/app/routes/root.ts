import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Hello API' };
  });


  fastify.get('/ping', async function () {
    return { message: 'pong' };
  });
}
