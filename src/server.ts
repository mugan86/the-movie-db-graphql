import expressPlayGround from 'graphql-playground-middleware-express';
// Añadir los imports
import { LANGUAGES } from './config/constants';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import express, { Application } from 'express';
import { GraphQLSchema } from 'graphql';
import { createServer, Server } from 'http';

import environments from './config/environments';
import { dataSources } from './data';

class GraphQLServer {
  private app!: Application;
  private httpServer!: Server;
  private readonly DEFAULT_PORT = (process.env.PORT) ? +process.env.PORT: 3025;
  private schema!: GraphQLSchema;
  private defaultLanguage = process.env.DEFAULT_LANGUAGE || LANGUAGES.ENGLISH;
  constructor(schema: GraphQLSchema) {
    if (schema === undefined) {
      throw new Error(
        'Necesitamos un schema de GraphQL para trabajar con APIs GraphQL'
      );
    }
    this.schema = schema;
    if (process.env.NODE_ENV !== 'production') {
      const envs = environments;
      console.log(envs);
    }
    this.init();
  }

  private init() {
    this.configExpress();
    this.configApolloServerExpress();
    // this.configRoutes();
  }

  private configExpress() {
    this.app = express();

    this.app.use(compression());

    this.httpServer = createServer(this.app);
  }

  private async configApolloServerExpress() {
    
   
    const apolloServer = new ApolloServer({
      schema: this.schema,
      introspection: true,
      dataSources: () => ({
        // Aquí vamos a añadir las fuentes de los datos que usaremos
        // para coger la información de la API TheMovieDB
        people: new dataSources.People(this.defaultLanguage),
        genre: new dataSources.Genre(this.defaultLanguage),
        discover: new dataSources.Discover(this.defaultLanguage),
        certification: new dataSources.Certification(),
        changes: new dataSources.Change()
      }),
    });

    apolloServer.applyMiddleware({ app: this.app, cors: true });

    this.app.use(
      "/",
      expressPlayGround({
        endpoint: "/graphql",
      })
    );

  }

  listen(callback: (port: number) => void): void {
    this.httpServer.listen(+this.DEFAULT_PORT, () => {
      callback(+this.DEFAULT_PORT);
    });
  }
}

export default GraphQLServer;
