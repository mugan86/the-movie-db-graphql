// Añadir los imports
import environments from "./config/environments";
import { LANGUAGES } from "./config/constants";
import { dataSources } from "./data";
import { createServer, Server as HTTPServer } from "http";
import cors from "cors";
import compression from "compression";
import express, { Application } from "express";
import { GraphQLSchema } from "graphql";
import { ApolloServer } from "apollo-server-express";
import expressPlayGround from "graphql-playground-middleware-express";
import depthLimit from "graphql-depth-limit";

class Server {
  private app!: Application;
  private httpServer!: HTTPServer;
  private schema!: GraphQLSchema;
  private readonly DEFAULT_PORT_SERVER = process.env.PORT || 3003;
  private server!: ApolloServer;
  defaultLanguage = process.env.DEFAULT_LANGUAGE || LANGUAGES.ENGLISH;
  constructor(schema: GraphQLSchema) {
    if (schema === undefined) {
      throw new Error("Need GraphQL Schema to work in API GraphQL");
    }
    this.schema = schema;
    this.initialize();
  }

  /**
   * Inicializar todas las configuraciones establecidas en el servidor
   */
  private initialize() {
    this.configExpress();
    this.initializeEnvironments();
    this.configApolloServer();
    this.configRoutes();
    this.createServer();
  }

  private configExpress() {
    this.app = express();

    this.app.use(cors());

    this.app.use(compression());
  }

  private initializeEnvironments() {
    // Inicializar variables de entorno
    if (process.env.NODE_ENV !== "production") {
      const envs = environments;
      console.log(envs);
    }
  }

  private async configApolloServer() {
    // Configurar el servidor apollo server
    this.server = new ApolloServer({
      schema: this.schema,
      introspection: true,
      playground: true,
      validationRules: [depthLimit(4)],
      dataSources: () => ({
        // Aquí vamos a añadir las fuentes de los datos que usaremos
        // para coger la información de la API TheMovieDB
        people: new dataSources.People(this.defaultLanguage),
        genre: new dataSources.Genre(this.defaultLanguage),
        discover: new dataSources.Discover(this.defaultLanguage),
        certification: new dataSources.Certification(),
      }),
    });

    this.server.applyMiddleware({ app: this.app });
  }

  private configRoutes() {
    this.app.use("/welcome", (_, res) => {
      res.send("Bienvenidos/as al control de Stock :)");
    });

    this.app.use(
      "/",
      expressPlayGround({
        endpoint: "/graphql",
      })
    );
  }

  private createServer() {
    this.httpServer = createServer(this.app);
    this.server.installSubscriptionHandlers(this.httpServer);
  }

  listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.DEFAULT_PORT_SERVER, () => {
      callback(+this.DEFAULT_PORT_SERVER);
    });
  }
}

export default Server;
