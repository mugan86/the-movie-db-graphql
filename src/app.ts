import Server from "./server";

import schema from "./schema";

new Server(schema).listen((port: number) =>
  console.log(`http://localhost:${port}/graphql`)
);
