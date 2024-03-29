import GraphQLServer from './server';
import schema from './schema';
import chalk from 'chalk';

(async () => {
  const graphQLServer = new GraphQLServer(schema);

  graphQLServer.listen((port: number) => {
    console.log('==================SERVER API GRAPHQL====================');
    console.log(`STATUS: ${chalk.greenBright('ONLINE')}`);
    console.log(
      `MESSAGE: ${chalk.greenBright('API The Movie DB - CONNECT!!')}`
    );
    console.log(`🚀  GraphQL Server => @: http://localhost:${port}/graphql `);
  });
})();
