//import { FastifyInstance } from 'fastify';
import { someFunction } from '@org/my-lib'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
/*   fastify.get('/', async function () {
    return { message: 'Hello API' };
  }); */

  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: 'Hello API: ' + someFunction() };
    }
  );



  fastify.get('/ping', async function () {
    return { message: 'pong' };
  });
}
