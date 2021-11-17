import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
// import express from 'express';
import './database';
import { resolvers } from './schemas/resolvers/index';
// import routes from './routes';
// import errorHandler from './middlewares/errorHandler';

async function main() {
  // const app = express();
  const schema = await buildSchema({ resolvers });
  const server = new ApolloServer({ schema });

  await server.listen(7000, () => {
    // eslint-disable-next-line no-console
    console.log('Server started on port 7000!');
  });
  // app.use(express.json());
  // app.use(routes);
  // app.use(errorHandler);

  //   app.listen(7000, () => {
  //   // eslint-disable-next-line no-console
  //   console.log('Server started on port 7000!');
  // });
}

main();
